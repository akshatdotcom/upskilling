import React, { Component } from 'react'
import { QuizResultsData } from './QuizResultsData'
import './QuizResults.css'
import broadcasting from './images/broadcasting.png'

class QuizResults extends Component {

    render() {
        return (
            <div>
                <ul className="quiz-results">
                    {QuizResultsData.map((item) => {
                        return (
                            <li key={item.careerName} className="quiz-result-container">
                                <div className="quiz-result-box">
                                    <div className="quiz-result-rank">{item.rank}</div>
                                    <img className="quiz-result-image" src={broadcasting} alt={item.careerName} />
                                    {/* <div className="quiz-result-image">
                                    </div> */}
                                    <div className="quiz-result-text">
                                        <div className="quiz-result-text-element career-name">
                                            {item.careerName}
                                        </div>
                                        <div className="quiz-result-text-element annual-salary">
                                            <div>{"Annual Salary: "}</div>
                                            <div>{item.annualSalary}</div>
                                        </div>
                                        <div className="quiz-result-text-element educatio-required">
                                            <div>Education Required: </div>
                                            <div>{item.educationRequired}</div>
                                        </div>
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
}

export default QuizResults