import "./App.css";
import React from "react";
import TopMenu from "./TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import { Container } from "reactstrap";
function App() {
  const baseApiUrl = `https://jsonplaceholder.typicode.com`;

  return (
    <div className="app">
      <Router>
        <TopMenu></TopMenu>
        <Container>
          <Switch>
            <Route path="/">
              <Posts baseApiUrl={baseApiUrl} />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
