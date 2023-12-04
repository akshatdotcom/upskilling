import './App.css';
import Navbar from './components/Navbar/Navbar';
import CareerQuiz from './components/Quiz/CareerQuiz';
import DashboardPage from './components/DashboardPage/Dashboard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <DashboardPage />
    </div>
    
  );
}

export default App;
