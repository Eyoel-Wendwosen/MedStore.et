import React from "react";
import {
    Container,
    Row,
    Col,
    CardImg
} from 'reactstrap';

import Navbar from 'components/Navbars/Navbar.component';
import SimpleFotter from 'components/Footers/SimpleFooter.component';
import ContactUs from 'components/ContactUs';

class ECommerceService extends React.Component {
    render() {
        return (
            <>
                <Navbar className="" />
                <main>
                    <section className=" pb-7 position-relative bg-gradient-lighter">
                        <Container >
                            <Row className="pt-8 row-grid align-items-center">
                                <Col lg="6">
                                    <CardImg
                                        className="card-img"
                                        src={require("../assets/img/theme/img-2-1200x1000.jpg")}
                                        alt="..." />
                                </Col>
                                <Col lg="6">
                                    <h4 className="display-2">Buy and Sell Medical Equipment</h4>
                                    <p>
                                        At MedStore.et you find eFDA Registered medical equipment for sale   in Ethiopia both in stock and as per order  also you can sell and buy used medical equipment with plenty of choices based on equipment condition.
                                    </p>
                                    <ul>
                                        <li>Various Type,Brand and price ,giving you the luxury of choice.</li>
                                        <li>Save energy and time searching for the right product as per requirement.</li>
                                        <li>Short delivery time.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <ContactUs />
                <SimpleFotter />
            </>
        );
    }
}
export default ECommerceService;