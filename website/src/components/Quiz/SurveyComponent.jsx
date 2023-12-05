import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./json";
import axios from "axios";

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add(async (sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        const url = process.env.REACT_APP_UPLOAD_QUIZ_DATA_URL;
        const userId = process.env.REACT_APP_USER_ID;
        const headers = {
            "Content-Type": "application/json",
        };
        const body = {
            data: {
                userId: userId,
                quizData: sender.data
            }
        };
        await axios.post(url, body, {headers}).then((response) => {
            console.log(response);

            // Call backend endpoint that processes quiz results
            // Wait for it to finish and return (hopefully 200)
            // If 200, then redirect to results page

            // Also make a loading animation while processing results


            // Inside the ChatGPT backend endpoint:
            // 1. Using the given user id, get the user's quiz data from firestore
            // 2. Using the quiz data, generate a conversation array
            // 3. Call the OpenAI API with the conversation array
            // 4. Get the response from the OpenAI API
            // 5. Store the results in firestore in recommendations
            // 6. Return with a 200 to frontend

            if (response.status === 200) {
            }
        });
        document.location.href = '/results'
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;