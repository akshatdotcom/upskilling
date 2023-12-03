import React, { Component } from 'react';
import './Homepage.css';
import student from "./student.png";
import footballer from "./football_player.png";
import runner from "./runner.png";
import { QuizButton } from './QuizButton/QuizButton';


class Homepage extends Component {
    render() {
        return (
            <div className="homepage-screen">
            <h1 className="homepage-title">
                Discover Your New Future
                <img className="runner-icon" src={runner} alt="Runner"/>
            </h1>
            <main className="homepage-header">
                <p> Explore possible career paths within athletics <br></br>using your acheived education.
                </p>
            </main>
            <div>
            <img className="student-icon" src={student} alt="Student"/>
            </div>
            <div>
            <QuizButton>Take the Quiz</QuizButton>
            </div>
            <div>
            <img className="footballer-icon" src={footballer} alt="Footballer"/>
            </div>
            </div>
        )
    }
    
}

export default Homepage