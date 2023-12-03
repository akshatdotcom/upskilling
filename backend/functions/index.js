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

exports.getOpenAIResponse = onCall(async (req) => {
  try {
    const conversation = req.data.conversation;

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
    };

    const response = await axios.post(url, body, {headers});

    if (response.status === 200) {
      return {response: response.data.choices[0].message.content};
    } else {
      throw new functions.https.HttpsError("internal", "Request failed.");
    }
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
