import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import CareerQuiz from './components/Quiz/CareerQuiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizResults from './components/QuizResults/QuizResults';
import LessonPlan from './components/LessonPlan/LessonPlan';

function App() {
  return (
    <Router>
      <div>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        </style>
        <Navbar />
        
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/quiz' element={<CareerQuiz />} />
          <Route path='/results' element={<QuizResults />} />
          <Route path='/lesson-plan' element={<LessonPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

