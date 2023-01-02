
import './App.css';
import Checkout from './components/Checkout/Checkout';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/Homepage/MainPage';
import Navbar from './components/Navbar/Navigation';
import PlaceOrder from './components/Orders/PlaceOrder';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          
          <Route path='/display' element={<DisplayContent />} />
  
          <Route path='/order/:id' element={<PlaceOrder />}/>
      
          <Route path='/checkout' element={<Checkout />} />

          <Route path='' element={<MainPage />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
