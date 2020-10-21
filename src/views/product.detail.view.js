import React, { Component } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    CardImg,
    CardTitle,
    CardText,
    CardImgOverlay,
    UncontrolledCarousel
} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Link } from "react-router-dom";

import Navbar from 'components/Navbars/Navbar';
import SimpleFooter from 'components/Footers/SimpleFooter';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: "Blood Pressure Scanner",
                sold_by: {
                    name: "WAGGA",
                    location: "Germany"
                },
                rating: 5,
                img_urls: [
                    {
                        src: require("assets/img/theme/img-1-1200x1000.jpg"),
                        altText: "",
                        caption: "",
                        header: ""
                    },
                    {
                        src: require("assets/img/theme/img-2-1200x1000.jpg"),
                        altText: "",
                        caption: "",
                        header: ""
                    },
                    {
                        src: require("assets/img/theme/img-1-1200x1000.jpg"),
                        altText: "",
                        caption: "",
                        header: ""
                    },
                    {
                        src: require("assets/img/theme/img-2-1200x1000.jpg"),
                        altText: "",
                        caption: "",
                        header: ""
                    }
                ],
                tags: ["eye", "oct", "ophtalmology"],
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                caracterstics: [
                    {
                        name: "battery life",
                        value: "5 hrs"
                    },
                    {
                        name: "battery life",
                        value: "5 hrs"
                    }
                ]
            }
        };
    }
    render() {
        return (
            <>
                <Navbar />
                <div>
                    {/* <Container> */}
                    <Row className="product-detail pl-lg-9 p-4 pt-5 mt-5 mb-3 bg-grey">
                        <Col lg="4" className="mb-lg-auto">
                            <div className="rounded shadow-lg overflow-hidden ">
                                <UncontrolledCarousel autoPlay={false} controls={true} indicators={true} items={this.state.product.img_urls} />
                            </div>
                        </Col>
                        <Col className="ml-4" lg="6" >
                            <Row>
                                <h1 >
                                    {this.state.product.name}
                                </h1>
                            </Row>
                            <Row>
                                <span class="material-icons mt-1">local_offer</span>
                                {
                                    this.state.product.tags.length !== 0 && (
                                        this.state.product.tags.map(tag => (
                                            <span className="pl-1">{tag} </span>
                                        ))
                                    )}
                                <Col>
                                    <Rating name="read-only" value={this.state.product.rating} readOnly />
                                </Col>
                            </Row>
                            <br />
                            <Row className="mt-3">
                                <Col>
                                    <h5 className="text-gray">Sold By: </h5>
                                    <h4>
                                        {this.state.product.sold_by.name}
                                        <span class="material-icons ml-5">location_on</span>
                                        <span className=" ml-2 font-weight-lighter">{this.state.product.sold_by.location}</span>
                                    </h4>
                                </Col>
                            </Row>
                            <br />
                            <Row>

                            </Row>
                        </Col>
                    </Row>
                    <Row className="product-info pl-lg-9 p-4">
                        <Col className="product-characterstics bg-grey p-2 rounded shadow mr-5">
                            <h4 className="bg-gradient-cyan text-white">Characterstics</h4>
                        </Col>
                        <Col className="product-description bg-grey p-2 rounded shadow mr-5" >
                            <h4>Description</h4>

                            <p>
                                {this.state.product.description}
                            </p>

                        </Col>
                        <Col className="product-catalogue bg-grey p-2 rounded shadow mr-5">
                            <h4>Catalogue</h4>

                        </Col>
                        <Col className="product-catalogue bg-grey p-2 rounded shadow mr-5">
                            <h4>Catalogue</h4>

                        </Col>

                    </Row>
                    {/* </Container> */}
                </div>
                <SimpleFooter />
            </>
        );
    }
}

export default ProductDetail;