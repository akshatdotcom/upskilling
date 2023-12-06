import React, { useEffect, useState } from 'react'
import './LessonPlan.css'
import axios from 'axios'

function render(userInfoData) {
  const lessonIcons = {
    python: '🐍', // Use actual image or icon component
    statistics: '📊', // Use actual image or icon component
    learning: '👨‍🏫', // Use actual image or icon component
    ensemble: '🧩' // Use actual image or icon component
  };

  return (
    <div style={{ width: 1512, height: 882, position: 'relative', background: '#F8F8F8' }}>
      <div style={{ width: 439, height: 60, left: -19, top: 317.01, position: 'absolute', textAlign: 'center', color: '#CC5500', fontSize: 45, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>My Courses</div>
      <div style={{ width: 514, height: 72, left: -50, top: 224.01, position: 'absolute', textAlign: 'center', color: '#DE7C3D', fontSize: 40, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>Timeline</div>
      <div style={{ width: 514, height: 72, left: -50, top: 410.01, position: 'absolute', textAlign: 'center', color: '#DE7C3D', fontSize: 40, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>Profile</div>
      <div style={{ width: 500.04, height: 0, left: 421.06, top: 119, position: 'absolute', transform: 'rotate(90.57deg)', transformOrigin: '0 0', border: '2px rgba(204, 85, 0, 0.97) solid' }}></div>
      <div style={{ width: 924.11, height: 0, left: 1400, top: 248, position: 'absolute', transform: 'rotate(-179.82deg)', transformOrigin: '0 0', border: '2px rgba(204, 85, 0, 0.97) solid' }}></div>
      <div style={{ width: 279, height: 54, left: 496, top: 129.01, position: 'absolute', textAlign: 'center', color: '#CC5500', fontSize: 40, fontFamily: 'Ubuntu', fontWeight: '500', wordWrap: 'break-word' }}>My Courses</div>
      <div style={{ width: 494, height: 32, left: 526, top: 183.01, position: 'absolute', color: '#DE7C3D', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>Sports Analytics</div>
      <div style={{ width: 1512, height: 100, left: 0, top: 0, position: 'absolute', background: '#FFE3CF' }} />
      <div style={{ width: 310, height: 44, left: 140, top: 19, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>
        {userInfoData.firstName} {userInfoData.lastName}
      </div>
      <div style={{ width: 279, height: 19, left: 140, top: 52, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>
        {userInfoData.major}
      </div>
      <div style={{ width: 206, height: 50, left: 1261, top: 27, position: 'absolute', background: '#CC5500' }} />
      <div style={{ width: 180, height: 33, left: 1274, top: 40, right: 100, position: 'absolute', textAlign: 'center', color: '#FFFFFF', fontSize: 20, fontFamily: 'Ubuntu', fontWeight: '400', wordWrap: 'break-word' }}>Explore More!</div>
      <a href="https://www.coursera.org/learn/foundations-sports-analytics?specialization=sports-analytics"><div className='course-content1'>Lesson 1: Foundations of Sports Analytics</div></a>
      <a href='https://www.coursera.org/learn/machine-learning-sports-analytics?irclickid=0MJwkuRQOx[…]rtners&utm_source=impact&utm_campaign=259799&utm_content=b2c'><div className='course-content2'>Lesson 4: Intro to Machine Learning in Sports Analytics</div></a>
      <a href='https://www.coursera.org/learn/prediction-models-sports-data?specialization=sports-analytics'><div className='course-content3'>Lesson 2: Prediction Models with Sports Data</div></a>
      <a href='https://www.coursera.org/learn/wearable-technologies?specialization=sports-analytics'><div className='course-content4'>Lesson 3: Wearable Technologies and Sports Analytics</div></a>
      <span style={{ width: 57, height: 51, left: 497, top: 311, position: 'absolute', mixBlendMode: 'darken' }} className="course-icon">{lessonIcons.python} </span>
      <span style={{ width: 56, height: 50, left: 497, top: 382, position: 'absolute', mixBlendMode: 'darken' }} className="course-icon">{lessonIcons.statistics} </span>
      <span style={{ width: 56, height: 60, left: 497, top: 453, position: 'absolute', mixBlendMode: 'darken' }} className="course-icon">{lessonIcons.learning} </span>
      <span style={{ width: 61, height: 56, left: 495, top: 524, position: 'absolute', mixBlendMode: 'darken' }} className="course-icon">{lessonIcons.ensemble} </span>

    </div>

  );
}

function LessonPlan() {
  const [userInfoData, setUserInfoData] = useState({});

  const url = process.env.REACT_APP_GET_USER_INFO_URL;
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
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = () => {
    axios.post(url, body, { headers })
      .then((response) => {
        if (response.status === 200) {
          const userInfo = response.data.result.response;
          setUserInfoData(userInfo);
        } else {
          throw new Error("API Error: status code not 200");
        }
      }).catch((error) => {
        throw error;
      });
  }

  return render(userInfoData);
}

export default LessonPlan;