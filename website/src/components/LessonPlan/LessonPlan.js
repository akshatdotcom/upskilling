import React, { Component } from 'react'
import { QuizResultsData } from '../QuizResults/QuizResultsData'
import './LessonPlan.css'
// import broadcasting from './images/broadcasting.png'
import { CareerQuiz } from '../Quiz/CareerQuiz'
import { Link } from 'react-router-dom'

class LessonPlan extends Component {

    render() {
        // return (
        //     <div>
                // <div className="lesson-plan-box">
                //     AJ Jha
                //     <br></br>
                //     <div className='lesson-plan-box-subtitle'>
                //         Economics Major
                //     </div>
                //     <div className="button-container">
                //         <button className="quiz-results-button">Explore More</button>
                //     </div>
                // </div>
        //         {/* <View style={styles.verticLine}></View> */}
        //     </div>
        // )
        const lessonIcons = {
            python: '🐍', // Use actual image or icon component
            statistics: '📊', // Use actual image or icon component
            learning: '👨‍🏫', // Use actual image or icon component
            ensemble: '🧩' // Use actual image or icon component
          };
        
          return (
            <div className="lesson-plan-box">
                        AJ Jha
                    <br></br>
                    <div className='lesson-plan-box-subtitle'>
                        Economics Major
                    </div>
                    <div className="button-container">
                        <button className="quiz-results-button">Explore More</button>
                    </div>
            <div className="dashboard-container">
              <aside className="sidebar">
                <div className="vertical-line"></div> {/* Vertical line */}
                <nav className="navigation">
                  <ul className="nav-list">
                    <li>Courses</li>
                    <li>My Account</li>
                    <li>Progress</li>
                    <li>Profile</li>
                  </ul>
                </nav>
              </aside>
              <main className="course-content">
                <header className="course-header">
                  <h1>My Courses</h1>
                  <h2>Sports Analytics</h2>
                  <div className="horizontal-line"></div> {/* Horizontal line */}
                </header>
                <div className="course-list">
                  <div className="course-item">
                    <span className="course-icon">{lessonIcons.python}</span>
                    <span>Lesson 1: Python Foundations</span>
                  </div>
                  <div className="course-item">
                    <span className="course-icon">{lessonIcons.statistics}</span>
                    <span>Lesson 2: Business Statistics</span>
                  </div>
                  <div className="course-item">
                    <span className="course-icon">{lessonIcons.learning}</span>
                    <span>Lesson 3: Supervised Learning</span>
                  </div>
                  <div className="course-item">
                    <span className="course-icon">{lessonIcons.ensemble}</span>
                    <span>Lesson 4: Ensemble Techniques</span>
                  </div>
                </div>
              </main>
            </div>
            </div>
          );
    }
}


export default LessonPlan;
