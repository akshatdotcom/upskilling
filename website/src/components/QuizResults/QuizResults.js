import React, { useState, useEffect } from 'react'
import { QuizResultsData } from './QuizResultsData'
import './QuizResults.css'
import broadcasting from './images/broadcasting.png'
import { Link } from 'react-router-dom'
import axios from "axios";

function render(recommendationsData) {    
    return (
        <div>
            <ul className="quiz-results">
                {recommendationsData.map((item) => {
                    return (
                        <li key={item.rank} className="quiz-result-container">
                            <div className="quiz-result-box">
                                <div className="quiz-result-rank">{item.rank}</div>
                                <img className="quiz-result-image" src={broadcasting} alt={item.name} />
                                {/* <div className="quiz-result-image">
                                </div> */}
                                <div className="quiz-result-text">
                                    <div className="quiz-result-text-element career-name">
                                        {item.name}
                                    </div>
                                    <div className="quiz-result-text-element annual-salary">
                                        <div>Annual Salary: </div>
                                        <div>{item.avgSalary}</div>
                                    </div>
                                    <div className="quiz-result-text-element educatio-required">
                                        <div>Education Required: </div>
                                        <div>{item.minEduRequired}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                                    <button className='quiz-results-button' style={{marginTop: 13}}>
                                        <Link to='/lesson-plan' style={{textDecoration: 'none', color: 'white'}}>
                                        View Curriculum
                                        </Link>                                                     
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className="bottom-bar">
                <button className="quiz-results-button">Explore More</button>
            </div>
        </div>
    )
}

function QuizResults() {
    const [recommendationsData, setRecommendationsData] = useState(QuizResultsData);

    const url = process.env.REACT_APP_GET_RECOMMENDATIONS_URL;
    const userId = process.env.REACT_APP_USER_ID;
    const headers = {
        "Content-Type": "application/json",
    };
    const body = {
        data: {
            userId: userId,
        }
    };

    useEffect(() => {
        getRecommendations();
    }, []);

    const getRecommendations = () => {
        axios.post(url, body, {headers})
             .then((response) => {
            if (response.status === 200) {
                const recommendations = response.data.result.response.data.pathways;
                setRecommendationsData(recommendations);
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    return render(recommendationsData);
}

export default QuizResults;