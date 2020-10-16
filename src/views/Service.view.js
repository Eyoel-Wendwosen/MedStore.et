import React from 'react';

import { Button, Container, Row, Col, Card, CardBody, Badge, CardImg } from 'reactstrap';

class Services extends React.Component {
    render() {
        return (
            <>
                <main ref="main">
                    <div className="position-relative">
                        <section className="section section-hero section-shaped">
                            <div className="shape shape-style-1 shape-default">
                                <span className="span-150" />
                                <span className="span-50" />
                                <span className="span-50" />
                                <span className="span-75" />
                                <span className="span-100" />
                                <span className="span-75" />
                                <span className="span-50" />
                                <span className="span-100" />
                                <span className="span-50" />
                                <span className="span-100" />
                            </div>

                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row className="services-header">
                                        <Col lg="8">
                                            <span>
                                                <h2 className="display-3 text-white">We provide various kind of Services just for you ...</h2>
                                                <p xl="12" className="text-white">
                                                    <span className="font-weight-bold">MedStore.et</span> is a place where you can buy and sell medical equipment (brand new and used),  get technical support for your defective medical equipment, get a consultation to buy and manage medical equipment lifetime. In addition, <span className="font-weight-bold">MedStore.et</span> is your early home to get breaking notification service for medical tender through subscription.
                                                </p>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <span>
                                            <p>

                                            </p>
                                        </span>
                                    </Row>
                                    <Row>
                                        <span></span>
                                    </Row>
                                </div>
                            </Container>
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        <section className="section section-lg pt-lg-0 mt--150 ">
                            <Container>
                                <Row className="justify-content-center services-card">
                                    <Col lg="12">
                                        <Row className="row-grid">
                                            <Col lg="4">
                                                <Card className="card-lift--hover shadow border-0">
                                                    <CardBody className="py-5">
                                                        <div className=" rounded-circle mb-4">
                                                            <img src={require("assets/img/ill/Dashboard.png")} alt="Smartphone icon" />
                                                        </div>
                                                        <h4 className="text-uppercase text-center bold">
                                                            Technical Support
                                                        </h4>
                                                        <p className="description mt-3">
                                                            <span className="font-weight-bold">MedStore.et</span> is home to experienced biomedical engineers where you can get technical support for your entire medical facility
                                                        </p>
                                                        <div>
                                                            <Badge color="primary" pill className="mr-1">
                                                                inspect
                                                            </Badge>
                                                            <Badge color="primary" pill className="mr-1">
                                                                Repair
                                                            </Badge>
                                                            <Badge color="primary" pill className="mr-1">
                                                                Renovate
                                                            </Badge>
                                                        </div>
                                                        <Button
                                                            className="mt-4"
                                                            color="primary"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Learn more
                                                        </Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col lg="4">
                                                <Card className="card-lift--hover shadow border-0">
                                                    <CardBody className="py-5">
                                                        <div className=" rounded-circle mb-4">
                                                            <img src={require("assets/img/ill/smartphone.png")} alt="Smartphone icon" />
                                                        </div>
                                                        <h4 className="text-uppercase text-center bold">
                                                            Consultancy
                                                        </h4>
                                                        <p className="description mt-3">
                                                            <span className="font-weight-bold">MedStore.et</span> supports and advises you while you make a medical equipment purchase, and advice on managing medical equipment on health facilities.
                                                        </p>
                                                        <div>
                                                            <Badge color="info" pill className="mr-1">
                                                                Consult
                                                            </Badge>
                                                            <Badge color="info" pill className="mr-1">
                                                                Support
                                                            </Badge>
                                                            <Badge color="info" pill className="mr-1">
                                                                market
                                                            </Badge>
                                                        </div>
                                                        <Button
                                                            className="mt-4"
                                                            color="info"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Learn more
                                                        </Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col lg="4">
                                                <Card className="card-lift--hover shadow border-0">
                                                    <CardBody className="py-5">
                                                        <div className=" rounded-circle mb-4">
                                                            <img src={require("assets/img/ill/Compare.png")} alt="Smartphone icon" />
                                                        </div>
                                                        <h4 className="text-uppercase text-center bold">
                                                            Tender
                                                        </h4>
                                                        <p className="description mt-3">
                                                            At <span className="font-weight-bold">MedStore.et</span> searching for tender is easy, you can find floating tender, biding tenders, and hot deals through our <span className="font-weight-bold">MedStore.et</span> premium subscription.
                                                        </p>
                                                        <div>
                                                            <Badge color="success" pill className="mr-1">
                                                                deal
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                tender
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                service
                                                            </Badge>
                                                        </div>
                                                        <Button
                                                            className="mt-4"
                                                            color="success"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Learn more
                                                        </Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className="section bg-secondary">
                            <Container>
                                <Row className="row-grid align-items-center">
                                    <Col md="6" lg="6">
                                        <Card className="bg-default shadow border-0">
                                            <CardImg
                                                alt="..."
                                                className="img-fluid floating"
                                                src={require("assets/img/theme/Maintenance.jpg")}
                                                top
                                            />

                                        </Card>
                                    </Col>
                                    <Col lg="6" md="6">
                                        <h3 >
                                            Technical Support
                                            </h3>
                                        <p>
                                        <span className="font-weight-bold">MedStore.et</span> is home to experienced biomedical engineers where you can get technical support for your entire medical facility or down to specific medical equipment. With quality maintenance service at its core <span className="font-weight-bold">MedStore.et</span> provides reliable spare parts supply.
                                            </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-settings-gear-65" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Carefully crafted effort
                            </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-html5" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">Top industry experts</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-satisfied" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Super friendly support team
                            </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className="bg-gradient-teal">
                            <Container>
                                <Row className="pt-5 ">
                                    <Col className="order-md-2" md="6">
                                        <img
                                            alt="..."
                                            className="img-fluid floating"
                                            src={require("assets/img/theme/promo-1.png")}
                                        />
                                    </Col>
                                    <Col className="order-md-1" md="6">
                                        <div className="pr-md-5">
                                            <div className="icon icon-xg icon-shape-white icon-shape shadow rounded-circle mb-5">
                                                <i className="ni ni-notification-70 icon-c"/>
                                            </div>
                                            <h3 className="text-white">Tenders notification</h3>
                                            <p className="text-white">
                                                MedStore.et is again a place where you can get early notification on any Medical Tender in Ethiopia through subscription.
                    </p>
                                            <ul className="list-unstyled mt-5 te">
                                                <li className="py-2 te">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-bullet-list-67" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-white">
                                                                Carefully curated content
                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-notification-70" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-white">Timely notification</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-white">
                                                                Super friendly support team
                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="separator separator-bottom separator-skew zindex-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 75"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="0 0 0 75 2560 75"
                                    />
                                </svg>
                            </div>
                        </section>


                    </div>
                </main>
            </>
        );
    }
}

export default Services;
