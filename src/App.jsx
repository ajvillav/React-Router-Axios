import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Users from "./Components/Users";
import User from "./Components/User";

function App() {
  return (
    <Router>
      <Link to="/">users</Link>

      <Switch>
        <Route exact path="/">
          <Users></Users>
        </Route>
        <Route path="/users/:id">
          <User></User>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
