import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import CareerQuiz from './components/Quiz/CareerQuiz';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CareerQuiz /> */}
      <Homepage />
    </div>
  );
}

export default App;
