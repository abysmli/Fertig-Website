import React, { Component } from 'react';
import logo from './logo.svg';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "assets/scss/material-kit-react.css?v=1.1.0";
import indexRoutes from "routes/index.jsx";
var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={hist}>
              <Switch>
                  {indexRoutes.map((prop, key) => {
                      return <Route path={prop.path} key={key} component={prop.component} />;
                  })}
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
