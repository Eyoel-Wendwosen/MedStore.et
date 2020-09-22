import React from 'react';

import { Container, Row, Col, Button } from 'reactstrap';

class Team extends React.Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <h4 className=" m-5 title display-3">
                        Meet the amazing Team
                    </h4>
                    <p>
                        We are a team of highly motivated young individuals with a vision to transform Ethiopias' medical equipment supply chain system. Our team consistis of individual from both thechnical background and business accumen as well.
                    </p>
                    
                </Row>
                <Row >
                    <Col className="mt-5 mb-5" lg="4" md="4">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/Cherinet.jpg")}
                                style={{ width: "300px" }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">Cherinet Mekuanint</span>
                                    <small className="h6 text-muted">Co-founder &amp; CEO</small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook" />
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5 mb-5" lg="4" md="4">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/Dina.jpg")}
                                style={{ width: "300px" }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">Dinaol Feye</span>
                                    <small className="h6 text-muted">Co-founder &amp; Business Development</small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook" />
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5 mb-5" lg="4" md="4">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/Cherinet.jpg")}
                                style={{ width: "300px" }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">Cherinet Mekuanint</span>
                                    <small className="h6 text-muted">Co-founder &amp; CEO</small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook" />
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Team;