import "./App.css";
import React from "react";
import TopMenu from "./TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Posts from "./Posts";
import { Container } from "reactstrap";
import Users from "./Users";
function App() {
  return (
    <div className="app">
      <Router>
        <TopMenu></TopMenu>
        <Container>
          <div class="p-3"></div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/posts"/>
            </Route>
            <Route path="/posts">
              <Posts/>
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
