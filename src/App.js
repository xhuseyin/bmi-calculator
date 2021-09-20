import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BMI from './pages/BMI';
import CalculateBMI from './pages/CalculateBMI'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;    
  `}
`;

const Container = styled.div`
  text-align: center;
`



function App() {
  return (
    <Router>    
      <Container>
            <Link to="/"><Button>Calculate BMI</Button></Link>          
            <Link to="/pages/BMI"><Button>What is the BMI?</Button></Link>         
        <hr />
        <Switch>
        <Route exact path="/">
            <CalculateBMI />
        </Route>
          <Route path="/pages/BMI">
            <BMI/>
          </Route>          
        </Switch>
        </Container>
    </Router>
  );
}

export default App;
