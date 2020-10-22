import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header>
          <Navbar
            className="navbar-main navbar-transparent pr-5 pl-5"
            // style = {{backgroundColor: "#172b4d !important"}}
            expand="lg"
            id="navbar-main"
          >
            <NavbarBrand className="mr-lg-5 d-flex flex-row" to="/" tag={Link}>
              <img
                alt="..."
                src={require("../../assets/img/brand/Logo-w-moto-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={ "justify-content-end"}
              // onExiting={this.onExiting}
              // onExited={this.onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("../../assets/img/brand/Logo-w-moto.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none" />
                    <Link className="nav-link-inner--text" to="/">
                      <span className="h6 font-weight-normal text-white">Home</span>
                    </Link>
                  </DropdownToggle>

                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none" />
                    <Link className="nav-link-inner--text" to="/">
                      <span className="h6 font-weight-normal text-white">About Us</span>
                    </Link>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none" />
                    <Link to='/product' className="nav-link-inner--text">
                      <span className="h6 font-weight-normal  text-white">Products</span>
                    </Link>
                  </DropdownToggle>
                  {/* <DropdownMenu>
                    <DropdownItem to="/landing-page" tag={Link}>
                      Landing
                      </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      Profile
                      </DropdownItem>
                    <DropdownItem to="/login-page" tag={Link}>
                      Login
                      </DropdownItem>
                    <DropdownItem to="/register-page" tag={Link}>
                      Register
                      </DropdownItem>
                  </DropdownMenu> */}
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none" />
                    <Link to='/' className="nav-link-inner--text">
                      <span className="h6 font-weight-normal text-white">Services</span>
                    </Link>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-lg">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        href="/eCommerceService"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-cart" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Compare &amp; Buy
                            </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            A unique marketplace for Medical Equipments.
                            </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="#"
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-hat-3" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Consultancy
                            </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Consultancy for all your Medical Equipment needs.
                            </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="#"
                      >
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-books" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-warning mb-md-1">
                            Tender
                            </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Browse our uniquely curated tender accorss Ethiopia just for you.
                            </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav href="/contact-us">
                    <i className="ni ni-collection d-lg-none" />
                    <Link className="nav-link-inner--text" to="/contact-us">
                      <span className="h6 font-weight-normal nav-link-inner--text text-white">Contact Us</span>
                    </Link>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
