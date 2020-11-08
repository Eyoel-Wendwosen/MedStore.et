import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
    Button,
    Row
} from "reactstrap";
import { Route } from 'react-router-dom';

import ServiceDetail from 'components/Services/Service.detail.component';


class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    title: "Technical Support",
                    description: "MedStore.et is home to experienced biomedical engineers where you can get technical support for your entire medical facility",
                    bullets: [
                        "",
                        "",
                        ""
                    ],
                    img_src: "../../assets/img/theme/CT2.jpg",
                    link: ""
                },
                {
                    title: "Consultancy",
                    description: "MedStore.et supports and advises you while you make a medical equipment purchase, and advice on managing medical equipment on health facilities.",
                    bullets: [
                        "Customer focused",
                        "Towards Goal",
                        "Quality oriented",
                    ],
                    img_src: "../../assets/img/theme/CT2.jpg",
                    link: ""
                },
                {
                    title: "Tender",
                    description: "At MedStore.et searching for tender is easy, you can find floating tender, biding tenders, and hot deals through our MedStore.et premium subscription.",
                    bullets: [
                        "Early Notification",
                        "Detailed content",
                        "Medical equipment only",
                        "Email,SMS"
                    ],
                    img_src: "../../assets/img/theme/CT2.jpg",
                    link: ""
                },
                {
                    title: "E-commerce",
                    description: "Medstore.et is a place where you can find eFDA Registered medical equipment in Ethiopia both in stock and also a place where you can find used medical equipment.",
                    bullets: [
                        "Various Type,Brand and price ,giving you the luxury of choice",
                        "Save energy and time searching for the right product as per requirement",
                        "Short delivery time",
                    ],

                    img_src: "../../assets/img/theme/CT2.jpg",
                    link: ""
                }
            ],
            activeService: {}
        };
    }

    render() {
        const { match } = this.props;
        return (
            <>
                <div className="product-content">
                    <h1> Services</h1>
                    <hr className="mt-0" />
                    <Row>
                        {this.state.services.map(service => (
                            <Col lg={12 / this.state.services.length}>
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody className="pb-3">
                                        {/* <div className=" rounded-circle mb-4">
                                        <img src={require("assets/img/ill/Dashboard.png")} alt="Smartphone icon" />
                                    </div> */}
                                        <h4 className="text-uppercase text-center bold">{service.title}</h4>
                                        <p className="description mt-3"> {service.description} </p>
                                        <Button
                                            className="mt-4"
                                            color="primary"
                                            href=""
                                            onClick={() => { this.setState({ activeService: service }); }}
                                        >
                                            Learn more
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <hr />
                    <Route
                        path={`${match.url}`}
                        render={props => <ServiceDetail service={this.state.activeService} {...props} />} />
                </div>
            </>
        );
    }
}

export default Service;