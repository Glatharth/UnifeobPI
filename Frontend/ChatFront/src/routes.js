import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Chat from './pages/Chat';

// function isAuthenticated(){
//   return true;
// }

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location} }}/>
      )
    )}/>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Chat}/>
        <PrivateRoute path="/chat" component={Chat}/>
        <Route  path="/chat" component={Chat}/>
        <Route  path="/login" component={Login}/>
      </Switch>
  </BrowserRouter>
  );
}

export default Routes;