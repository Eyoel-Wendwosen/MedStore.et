import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Product from 'components/Products/Product.component';
import Service from 'components/Services/Service.component';
import AboutUs from 'views/Aboutus.view';
import ContactUs from './components/ContactUs';
import NavBar from 'components/Navbars/Navbar.component';
import Footer from 'components/Footers/SimpleFooter.component';
import Home from 'views/Home.view';

import './App.css';


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/contact-us"
            component={ContactUs} />
          <Route
            path="/product"
            component={Product} />
          <Route
            path="/service"
            component={Service} />
          <Route
            path="/about-us"
            component={AboutUs} />
          <Route
            path="/"
            component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
