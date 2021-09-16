import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BMI from './pages/BMI';
import CalculateBMI from './pages/CalculateBMI';


function App() {
  return (
    <Router>      
        <ul>
          <li>
            <Link to="/">Calculate BMI</Link>
          </li>
          <li>
            <Link to="/pages/BMI">What is the BMI?</Link>
          </li>
        </ul>
        <hr />
        <Switch>
        <Route exact path="/">
            <CalculateBMI />
        </Route>
          <Route path="/pages/BMI">
            <BMI/>
          </Route>          
        </Switch>
    </Router>
  );
}

export default App;
