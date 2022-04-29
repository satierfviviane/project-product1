import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/main" component={ Main }/>
          </Switch>
        </Router>
      </div>
    )
  }
}