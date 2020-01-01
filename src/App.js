import React from "react";
import { BroswerRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dasboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
