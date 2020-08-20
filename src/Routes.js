import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Chat from './pages/Chat';
import Login from './pages/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/chat" component={Chat}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
