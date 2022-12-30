
import './App.css';
import Checkout from './components/Checkout/Checkout';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/Homepage/MainPage';
import Navbar from './components/Navbar/Navigation';
import PlaceOrder from './components/Orders/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MainPage /> */}
      {/* <DisplayContent /> */}
      {/* <PlaceOrder /> */}
      <Checkout />
    </div>
  );
}

export default App;
