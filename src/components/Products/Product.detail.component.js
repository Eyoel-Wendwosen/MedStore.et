import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    UncontrolledCarousel
} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';



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
                <div>
                    <section>
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
                                <hr className="mt-0" />
                                <Row className="mt-3">
                                    <Col>
                                        <h5 className="text-gray">Brand: </h5>
                                        <h4>
                                            {this.state.product.sold_by.name}
                                            <span class="material-icons ml-5">location_on</span>
                                            <span className=" ml-2 font-weight-lighter">{this.state.product.sold_by.location}</span>
                                        </h4>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Button
                                        className="btn-icon btn-1 ml-1 "
                                        color="info"
                                        type="button"
                                        outline
                                    >
                                        <span className="btn-inner--text">Request More Information</span>
                                        <span className="btn-inner--icon mr-1">
                                            <i className="ni ni-bag-17" />
                                        </span>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="mt-0 mb-0" />
                        <Row className="product-info pl-lg-9 p-4">
                            <Col className="order-2 product-characterstics bg-grey p-2 rounded shadow mr-5">
                                <h4 className="">Specification</h4>
                                <hr className="mt-0" />
                                {this.state.product.caracterstics.length !== 0 && (
                                    this.state.product.caracterstics.map(char => (
                                        <Row className="ml-2">
                                            <Col sm="4">
                                                <small className="text-capitalize  font-weight-bold">
                                                    {char.name}:
                                            </small>
                                            </Col>
                                            <Col sm="8">
                                                <p>
                                                    {char.value}
                                                </p>
                                            </Col>
                                        </Row>
                                    ))
                                )}
                            </Col>
                            <Col className="order-1 product-description bg-grey p-2 rounded shadow mr-5" >
                                <h4>Description</h4>
                                <hr className="mt-0" />
                                <p className="ml-3">
                                    {this.state.product.description}
                                </p>

                            </Col>
                            <Col className="order-3 product-catalogue bg-grey p-2 rounded shadow mr-5">
                                <h4>Catalogue</h4>
                                <hr className="mt-0" />


                            </Col>
                        </Row>
                        <div>
                            <h3 className="pl-4">
                                Similar Products
                            </h3>
                            <hr className="mt-0" />
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default ProductDetail;