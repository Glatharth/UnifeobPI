import React from 'react';

import { isAuthenticated } from './services/auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Admin from './layouts/Admin/Admin';
import Login from './layouts/Login/Login';
import Chat from './layouts/Chat/Chat';

// function isAuthenticated(){
//   return false;
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
        <PrivateRoute exact path="/" component={Admin}/>
        <PrivateRoute path="/admin" component={Admin}/>
        <Route  path="/chat" component={Chat}/>
        <Route  path="/Login" component={Login}/>
      </Switch>
  </BrowserRouter>
  );
}

export default Routes;
