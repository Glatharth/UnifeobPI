import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// isAuthenticated
import { isAuthenticated } from "./services/auth";

// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

// Rota privada
// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            // eslint-disable-next-line react/prop-types
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <PrivateRoute exact path="/" component={Admin} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
