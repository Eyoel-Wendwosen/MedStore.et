import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <header >
                    <Row>
                        <Col lg="7">
                            <span>
                                <h1 className="display-3">We Provide Consultancy, Tender &amp; Marketplace Services.</h1>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="header-description" xl="10" >
                            <span>
                                <p className=" lead ">
                                    <span className="font-weight-bold">MedStore.et</span> is an Ethiopian Medical Equipment market place/Webstore where you find a multiple-choice for your clinical needs and any medical purposes. All the thigs you find at <span className="font-weight-bold">MedStore.et</span> are dully authorized,  registered, and certified at eFDA for sales, and can be used for any clinical practices.
                                </p>
                            </span>
                        </Col>
                        <Col>
                            <span></span>
                        </Col>
                    </Row>
                </header>
            </Container>
        );
    }
}

export default Headline;

