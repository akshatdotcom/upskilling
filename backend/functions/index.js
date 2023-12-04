/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const {onCall} = require("firebase-functions/v2/https");

admin.initializeApp();

const apiKey = process.env.OPENAI_API_KEY;

/**
 * Processes quiz data for user id and creates recommendations.
 *
 * @param {*} userId
 * @return {void}.
 */
async function processQuizData(userId) {
  // Get the quiz data from firestore using user id
  const db = admin.firestore();
  const doc = await db.collection("quiz-data").doc(userId).get();
  const quizData = doc.data();
  // Generate conversation array from quiz data
  // Conversation with ChatGPT:
  const contextSentence = "This user is a college athlete who needs" +
                  " a backup plan for their career.";
  const majorSentence = `They are majoring in ${quizData.major}.`;

  const interestQuestion = "When asked about their interests, they said:";
  const interestsSentence = `${interestQuestion} ${quizData.interests}.`;

  const hobbiesQuestion = "When asked about their academic hobbies," +
                          " they said:";
  const hobbiesSentence = `${hobbiesQuestion} ${quizData.hobbies}.`;

  const socialQuestion = "On a scale of 1 (not social) to 5 (very social)," +
                          " they said:";
  const socialSentence = `${socialQuestion} ${quizData.social}.`;

  const timelineQuestion = "When asked how long do you want to spend" +
                            " learning(to be ready to apply to jobs)," +
                            " they said:";
  const timelineSentence = `${timelineQuestion} ${quizData.timeline}.`;

  const finalQuestion = "Recommend the user 3 career pathways. For each" +
                        " career, provide the career name," +
                        " the average salary, and education required.";
  const jsonRequired = "Give your response in well-formatted JSON. Here is" +
                        " the schema it should follow:";
  const jsonSchema = `{"pathways":[{"rank":"<number>","name":"<string>","
                      avgSalary":"<string>","minEduRequired":"<string>"}]}`;
  const restrictions = "Do not use newline characters, tab spaces," +
                        " or backslashes in your JSON output.";

  /*
    pathways: [
      {
        rank: <number>,
        name: <string>,
        avgSalary: <string>
        minEduRequired: <string>
      }
    ]
  */

  const finalSentence = contextSentence + " " + majorSentence + " " +
                        interestsSentence + " " + hobbiesSentence + " " +
                        socialSentence + " " + timelineSentence + " " +
                        finalQuestion + " " + jsonRequired + " " +
                        jsonSchema + " " + restrictions;


  // Call OpenAI API with conversation array
  // Store results in firestore in recommendations collection
  // Return with a 200 to frontend

  const systemRoleSentence = "You are an assistant for college athletes" +
                              " who need a backup plan for their career." +
                              " You will recommend them 3 career paths.";

  const conversation = [
    {role: "system", content: systemRoleSentence},
    {role: "user", content: finalSentence},
  ];

  if (!conversation) {
    throw new functions.https.HttpsError("invalid-arg", "API Error");
  }

  const url = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  };

  const body = {
    messages: conversation,
    model: "gpt-3.5-turbo",
    temperature: 0.3,
    // response_format: {
    //   "type": "json_object",
    // },
    max_tokens: 250,
  };

  const response = await axios.post(url, body, {headers});

  if (response.status === 200) {
    // Store the data now
    const db = admin.firestore();
    const json = JSON.parse(response.data.choices[0].message.content);
    await db.collection("recommendations").doc(userId).set(json);
    return {response: response.data.choices[0].message.content};
  } else {
    throw new functions.https.HttpsError("internal", "Request failed.");
  }
}

exports.processQuizData = onCall(async (req) => {
  try {
    // Get the user id from req data
    const userId = req.data.userId;
    return await processQuizData(userId);
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});

exports.getRecommendations = onCall(async (req) => {
  try {
    const userId = req.data.userId;
    const db = admin.firestore();
    const doc = await db.collection("recommendations").doc(userId).get();
    const recommendations = doc.data();
    return {response: recommendations};
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});

// Create function to upload user data to firestore
exports.uploadQuizData = onCall(async (req) => {
  try {
    const userId = req.data.userId;
    const quizData = req.data.quizData;

    if (!quizData) {
      throw new functions.https.HttpsError("invalid-arg", "API Error");
    }

    // Do more quiz data validation here before proceeding

    // Store quiz data in firestore
    const db = admin.firestore();
    await db.collection("quiz-data").doc(userId).set(quizData);

    // Call backend endpoint that processes quiz results
    // Wait for it to finish and return (hopefully 200)
    // If 200, then redirect to results page
    await processQuizData(userId);

    return {response: "Quiz data uploaded successfully."};
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
