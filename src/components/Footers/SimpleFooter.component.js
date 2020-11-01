import { ListItem } from "@material-ui/core";
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer" style={{"background-color": "#172b4d"}}>
          <Container>
            <Row className=" row-grid  ">
              <Col lg="">
                <Nav className=" nav-footer flex-column justify-content-center">
                  <NavItem>
                    <NavLink
                      href="/" className="py-1"><span className="text-white" >Home  </span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/product" className="py-1"><span className="text-white" >Products  </span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/service" className="py-1"><span className="text-white" >Services  </span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/about-us" className="py-1"><span className="text-white" >AboutUs  </span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/contact-us" className="py-1"><span className="text-white" >Contact Us </span></NavLink>
                  </NavItem>
                </Nav>
                <ListGroup className="bg-grey">

                </ListGroup>
              </Col>
              <Col className='' lg="">
                <h5 className="text-white">Contact us</h5>
                <h6 className="mb-100 text-white font-weight-lighter">+251-912-345678</h6>
                <h6 className="mb-100 text-white font-weight-lighter"><a href="mailto: info@medstore.et">info@medstore.et</a></h6>
              </Col>
              <Col className="text-lg-center" lg="">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="linkedin"
                  href="https://linkedin.com/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Connect with us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="telegram"
                  href="https://t.me//"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-telegram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Join us
                </UncontrolledTooltip>
              </Col>
              
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  <a href="/" target="_blank">MedStore.et</a> © {new Date().getFullYear()}{" "}
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem
                  // to="/"
                  >
                    <NavLink
                      href="/"
                      target="_blank"
                    >
                      MedStore.et
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/about-us"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
