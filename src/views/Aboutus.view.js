import React from 'react';
import classnames from "classnames";
import { Button, Container, Row, Col, Card, CardBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import Navbar from 'components/Navbars/Navbar.component';
import SimpleFooter from 'components/Footers/SimpleFooter.component';


class AboutUs extends React.Component {

    state = {
        Bullets: [
            "You can get wide range of brand New Medical Equipment. As well as you can buy and sell used medical equipment.",
            "You can get consultancy service on purchase of Medical Equipment. And it is place where one advised how to acquire the Medical equipment according to specific need.",
            "You can get a technical support for medical equipment which need service, including installation, maintenance, parts & accessories. ",
            "You can get Tender Notification service, Medical equipment tenders only."
        ]
    };

    render() {
        return (
            <>
                <Navbar />
                <Container className="product-content mb-5">
                    <Row className=''>
                        <div className='px-4'>
                            <h1 >
                                About Us !
                            </h1>
                            <p className=" col-9">
                                MedStore.et is a multiservice platform in Ethiopian Medical Equipment industry. Created by two young and energetic  Biomedical Engineers who saw the gap on the medical equipment supply chain, technical support and other Medical Equipment issues which finally inspired MedStore.et.
                            </p>
                            <hr className="my-1"/>
                            <h3>
                                MedStore.et is a place where
                            </h3>
                            <ul>
                                {this.state.Bullets.map(b => (
                                    <li>{b}</li>
                                ))}
                            </ul>
                            <hr className="my-5" />
                            <h1>
                                Our Vision
                            </h1>
                            <p>
                                To become nation leading service provider in Medical Equipment Industry. Delivering the service we provide in a safeguarded and friendly environment. We take pride in our work and are doing our level best to ensure that you receive the very best product and service possible.

                            </p>
                        </div>
                    </Row>
                </Container>
                <SimpleFooter />
            </>
        );
    }
}

export default AboutUs;