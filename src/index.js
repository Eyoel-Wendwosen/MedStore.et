import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
import App from './App';
import ECommerceService from './views/eCommerceService';
import * as serviceWorker from './serviceWorker';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <App {...props} />} />
      <Route
        path="/eCommerceService" 
        exact 
        render={props => <ECommerceService {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
