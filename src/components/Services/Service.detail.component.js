import React from "react";
import {
    Container,
    Row,
    Col,
    CardImg,
    Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

import ContactUs from 'components/ContactUs';

class ECommerceService extends React.Component {
    render() {
        return (
            <>
                <main>
                    <section className=" pb-7 position-relative bg-gradient-lighter">
                        <Container >
                            <Row className="pt-8 row-grid align-items-center">
                                <Col lg="6">
                                    <CardImg
                                        className="card-img"
                                        src={require('../../assets/img/theme/CT2.jpg')}
                                        alt="..." />
                                </Col>
                                <Col lg="6">
                                    <CardImg
                                        className="card-img"
                                        src={require('../../assets/img/theme/CT2.jpg')}
                                        alt="..." />
                                </Col>
                            </Row>
                            <Row className="pt-8 row-grid align-items-center">
                                <Col lg="6">
                                    <h4 className="display-2">Buy New Medical Equipment</h4>
                                    <p>
                                        At MedStore.et you find eFDA Registered medical equipment for sale   in Ethiopia both in stock and as per order  also you can sell and buy used medical equipment with plenty of choices based on equipment condition.
                                    </p>
                                    <ul>
                                        <li>Various Type,Brand and price ,giving you the luxury of choice.</li>
                                        <li>Save energy and time searching for the right product as per requirement.</li>
                                        <li>Short delivery time.</li>
                                    </ul>
                                    <Link to='/product'><Button>Explore Products </Button></Link>
                                </Col>
                                <Col lg="6">
                                    <h4 className="display-2">Buy and Sell Used Medical Equipment</h4>
                                    <p>
                                        At MedStore.et you find eFDA Registered medical equipment for sale   in Ethiopia both in stock and as per order  also you can sell and buy used medical equipment with plenty of choices based on equipment condition.
                                    </p>
                                    <ul>
                                        <li>Various Type,Brand and price ,giving you the luxury of choice.</li>
                                        <li>Save energy and time searching for the right product as per requirement.</li>
                                        <li>Short delivery time.</li>
                                    </ul>
                                    <Link to='/product'><Button>Link to used Products </Button></Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <ContactUs />
            </>
        );
    }
}
export default ECommerceService;