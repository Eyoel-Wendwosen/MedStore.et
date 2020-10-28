import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
import App from './App';
import ECommerceService from './views/E-CommerceService.view';
import * as serviceWorker from './serviceWorker';
import ContactUs from './components/ContactUs';
import Product from 'views/Product.view';
import ProductDetail from 'views/ProductDetail.view';
import CompareProducts from 'components/Compareproducts/CompareProducts.component';
import AboutUs from 'views/AboutUs.view';

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
      <Route
        path="/contact-us"
        exact
        render={props => <ContactUs {...props} />} />
      <Route
        path="/product"
        exact
        render={props => <Product {...props} />} />
      <Route
        path="/product-detail"
        exact
        render={props => <ProductDetail {...props} />} />
      <Route
        path="/about-us"
        exact
        render={props => <AboutUs {...props} />} />
      <Route
        path="/compare-proudcts"
        exact
        render={props => <CompareProducts {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
