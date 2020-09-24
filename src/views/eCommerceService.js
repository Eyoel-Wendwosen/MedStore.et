import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap';

import Navbar from 'components/Navbars/Navbar';
import SimpleFotter from 'components/Footers/SimpleFooter';
import ContactUs from 'components/ContactUs';

class ECommerceService extends React.Component {
    render() {
        return (
            <>
                <Navbar className="" />
                <main>
                    <section className=" position-relative bg-gradient-lighter">
                        <Container >
                            <Row className="pt-8 row-grid align-items-center">
                                <Col lg="6">
                                    <CardImg
                                        className="card-img"
                                        src={require("../assets/img/theme/img-2-1200x1000.jpg")}
                                        alt="..." />
                                </Col>
                                <Col lg="6">
                                    <h4 className="display-2">Template Here </h4>
                                </Col>
                            </Row>
                        </Container>
                        <ContactUs />
                    </section>
                </main>
                <SimpleFotter />
            </>
        );
    }
}
export default ECommerceService;