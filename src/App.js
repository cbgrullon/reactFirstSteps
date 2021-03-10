import "./App.css";
import React from "react";
import TopMenu from "./TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import { Container } from "reactstrap";
import Users from "./Users";
function App() {
  const baseApiUrl = `https://jsonplaceholder.typicode.com`;

  return (
    <div className="app">
      <Router>
        <TopMenu></TopMenu>
        <Container>
          <div class="p-3"></div>
          <Switch>
            <Route exact path="/">
              <Posts baseApiUrl={baseApiUrl} />
            </Route>
            <Route path="/posts">
              <Posts baseApiUrl={baseApiUrl} />
            </Route>
            <Route path="/users">
              <Users baseApiUrl={baseApiUrl} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
