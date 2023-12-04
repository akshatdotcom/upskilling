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
                       <div style={{width: 1512, height: 882, position: 'relative', background: '#F8F8F8'}}>
  <div style={{width: 439, height: 60, left: -19, top: 317.01, position: 'absolute', textAlign: 'center', color: '#CC5500', fontSize: 45, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>My Courses</div>
  <div style={{width: 514, height: 72, left: -50, top: 224.01, position: 'absolute', textAlign: 'center', color: '#DE7C3D', fontSize: 40, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Timeline</div>
  <div style={{width: 514, height: 72, left: -50, top: 410.01, position: 'absolute', textAlign: 'center', color: '#DE7C3D', fontSize: 40, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Profile</div>
  <div style={{width: 500.04, height: 0, left: 421.06, top: 119, position: 'absolute', transform: 'rotate(90.57deg)', transformOrigin: '0 0', border: '2px rgba(204, 85, 0, 0.97) solid'}}></div>
  <div style={{width: 924.11, height: 0, left: 1400, top: 248, position: 'absolute', transform: 'rotate(-179.82deg)', transformOrigin: '0 0', border: '2px rgba(204, 85, 0, 0.97) solid'}}></div>
  <div style={{width: 279, height: 54, left: 496, top: 129.01, position: 'absolute', textAlign: 'center', color: '#CC5500', fontSize: 40, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word'}}>My Courses</div>
  <div style={{width: 494, height: 32, left: 526, top: 183.01, position: 'absolute', color: '#DE7C3D', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Sports Analytics</div>
  <div style={{width: 1512, height: 100, left: 0, top: 0, position: 'absolute', background: '#FFE3CF'}} />
  <div style={{width: 310, height: 44, left: 194, top: 20, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>AJ</div>
  <div style={{width: 279, height: 19, left: 193, top: 60, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Junior Economics</div>
  <div style={{width: 206, height: 50, left: 1261, top: 35, position: 'absolute', background: '#CC5500'}} />
  <div style={{width: 180, height: 33, left: 1274, top: 47, position: 'absolute', textAlign: 'center', color: '#FFFFFF', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Explore More!</div>
  <div style={{width: 493, height: 35, left: 585, top: 311, position: 'absolute', color: '#CC5500', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Lesson 1: Python Foundations</div>
  <div style={{width: 463, height: 35, left: 589, top: 524, position: 'absolute', color: '#CC5500', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Lesson 4: Ensemble Techniques</div>
  <div style={{width: 393, height: 35, left: 585, top: 382, position: 'absolute', color: '#CC5500', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Lesson 2: Business Statistics</div>
  <div style={{width: 435, height: 35, left: 585, top: 453, position: 'absolute', color: '#CC5500', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word'}}>Lesson 3: Supervised Learning</div>
  <span style={{width: 57, height: 51, left: 497, top: 311, position: 'absolute', mixBlendMode: 'darken'}} className="course-icon">{lessonIcons.python} </span>
  <span style={{width: 56, height: 50, left: 497, top: 382, position: 'absolute', mixBlendMode: 'darken'}} className="course-icon">{lessonIcons.statistics} </span>
  <span style={{width: 56, height: 60, left: 497, top: 453, position: 'absolute', mixBlendMode: 'darken'}} className="course-icon">{lessonIcons.learning} </span>
  <span style={{width: 61, height: 56, left: 495, top: 524, position: 'absolute', mixBlendMode: 'darken'}} className="course-icon">{lessonIcons.ensemble} </span>

    </div>

          );
    }
}


export default LessonPlan;
