import React from 'react';
import { Button, Container, Row, Col, Card, CardBody, Badge, InputGroup, InputGroupAddon, InputGroupText, Input, CardImg, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import { Link } from "react-router-dom";

import Navbar from 'components/Navbars/Navbar';
import SimpleFooter from 'components/Footers/SimpleFooter';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            numOfProducts: 20,
            overlayVisible: false
        });
    }

    // setOverlayVisible(product) {


    // }

    renderProducts(numOfProducts) {
        let products = [...Array(numOfProducts).keys()];
        let productRender = products.map(product => (
            <Col className=" mt-4" lg="3">
                <Card onFocus="" className="card-lift card-img-overlay shadow border-3">
                    <Link to="">
                        <CardImg
                            alt="..."
                            src={require("assets/img/theme/landing.jpg")}
                        />
                        <CardImgOverlay className={`${this.state.overlayVisible} `}>
                            {/* <CardTitle>
                                <p>
                                    Product {product}
                                </p>
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </CardText> */}
                        </CardImgOverlay>
                        <CardTitle className="ml-2 mt-2">
                            <p>
                                Product {product}
                            </p>
                        </CardTitle>
                    </Link>
                </Card>
            </Col>

        ));
        return productRender;
    }

    render() {

        return (
            <>
                <Navbar />
                <div className="product-content">

                    <Container>

                        <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-zoom-split-in" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Search"
                                type="text"
                                onFocus={e => this.setState({ searchFocused: true })}
                                onBlur={e => this.setState({ searchFocused: false })}
                            />
                        </InputGroup>
                    </Container>

                    <section>
                        <Row >
                            <Col className='bg-grey shadow mr-3 ml-3' lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <Link to="">
                                        <CardImg
                                            alt="..."
                                            src={require("assets/img/theme/landing.jpg")}
                                        />
                                        <CardBody>
                                            <p>
                                                Product Description here
                                                </p>
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>
                            <Col>
                                <Row>
                                    {this.renderProducts(36)}
                                </Row>
                                <Row>
                                    {/* <span> */}
                                        {this.renderProducts(5)}
                                    {/* </span> */}

                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <p>
                                Row 2 Col 1
                        </p>
                        </Row>
                    </section>
                </div>
                <SimpleFooter />

            </>
        );
    }
}

export default Product;