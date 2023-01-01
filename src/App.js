
import './App.css';
import Checkout from './components/Checkout/Checkout';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/Homepage/MainPage';
import Navbar from './components/Navbar/Navigation';
import PlaceOrder from './components/Orders/PlaceOrder';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route path='/'>
              <MainPage />
          </Route>
          <Route path='/display'>
              <DisplayContent />
          </Route>
          <Route path='/order'>
              <PlaceOrder />
          </Route>
          <Route path='/checkout'>
              <Checkout />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
