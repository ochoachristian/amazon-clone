
import './App.css';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/Homepage/MainPage';
import Navbar from './components/Navbar/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MainPage /> */}
      <DisplayContent />
    </div>
  );
}

export default App;
