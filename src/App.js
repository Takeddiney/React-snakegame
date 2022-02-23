import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Loading from './Loading';
import Game from "./Game";
import './App.css';
import { Component } from "react";

class App extends Component {
render() {
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
}
export default App;
