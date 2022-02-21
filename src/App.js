import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Loading from './Loading';
import Game from "./Game";
import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/">
          <Loading />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
