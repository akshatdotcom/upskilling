import React from 'react'
import { Link } from 'react-router-dom'
import './QuizButton.css'

const QUIZSTYLES = [
    'quiz-btn--primary',
    'quiz-btn--outline'
]

export const QuizButton = ({
    children,
    type,
    onClick,
    buttonStyle
}) => {
    const checkButtonStyle = QUIZSTYLES.includes(buttonStyle) ? buttonStyle : QUIZSTYLES[0]

    return (
        <Link to ="/quiz">
            <button className={`quiz-btn ${checkButtonStyle}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>    
        </Link>
    )
}