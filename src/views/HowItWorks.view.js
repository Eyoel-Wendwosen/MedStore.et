import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                {
                    title: '1. Search through our Category',
                    icon: "search",
                    description: "Search the product needed among the large pool of medical equipment."
                },
                {
                    title: '2. Refine your Search',
                    icon: "filter_alt",
                    description: "Take a look at the detail specifications, product catalogue and feature of listed equipment and filter out your equipment upon your requirement."
                },
                {
                    title: '3. Select a Product',
                    icon: "offline_pin",
                    description: "Compare and Select a product of your desiered choice."
                },
                {
                    title: '4. Connect with us',
                    icon: "link",
                    description: "After you get what you were looking for, request a quotation,contact or make an appointment."
                },
                {
                    title: '5. Buy',
                    icon: "shopping_cart",
                    description: "Acquire the medical equipment by making payment."
                },
            ]
        };
    }
    render() {
        return (

            <div className="position-relative">
                <section className="section section-hero bg-gradient-teal section-shaped">
                    {/* <div className="shape shape-style-1 ">
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
                            </div> */}

                    <div className="content-center pt-2 text-white">
                        <Container>
                            <h1 className="text-white">How Does MedStore.et Work?</h1>
                            <p className="px-8">{this.state.content[0].description}</p>
                        </Container>
                    </div>
                    <div className="separator separator-bottom separator-skew">
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
                                style={{ fill: '#f4f5f7' }}
                            />
                        </svg>
                    </div>
                </section>
                <Container >
                    {this.state.content.length !== 0 && (
                        this.state.content.map((c, index) => (
                            <Row className="pt-5">
                                <Col className={`content-center pr-md-5 order-md-${index % 2 ? 2 : 1}`} md="6">
                                    <span className=" text-teal icon-l material-icons-outlined">
                                        {c.icon}
                                    </span>
                                </Col>
                                <Col className={`order-md-${index % 2 ? 1 : 2}`}>
                                    <h2 className="content-center text-uppercase"><span>{c.title}</span></h2>
                                    <p>{c.description}</p>
                                </Col>
                            </Row>
                        ))
                    )}
                </Container>
            // </div>
        );
    }
}

export default HowItWorks;

