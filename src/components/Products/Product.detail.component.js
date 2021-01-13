import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    Input,
    UncontrolledCarousel
} from 'reactstrap';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';



class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const product = this.props.product;
        axios.get(`http://localhost:8080/api/v1/product/${product._id}`)
            .then(res => {
                res.data.data.photo_urls.map(photo => `http://localhost:8080/api/v1/`.concat(photo));
                this.setState({
                    product: res.data.data
                });
            });
    }

    render() {
        const product = this.props.product;
        console.log("Investigatin product in render method");
        console.log(product);
        return (
            <>
                <div>
                    <section>
                        <Row className="product-detail pl-lg-9 p-4 pt-5 mt-5 mb-3 bg-grey">
                            <Col lg="4" className="mb-lg-auto">
                                <div className="rounded shadow-lg overflow-hidden ">
                                    {/* <UncontrolledCarousel autoPlay={false} controls={true} indicators={true} items={product ? product.photo_urls : ""} /> */}
                                </div>
                            </Col>
                            <Col className="ml-4" lg="6" >
                                <Row>
                                    <h1 >
                                        {product ? product.name : ""}
                                    </h1>
                                </Row>
                                <Row>
                                    <span class="material-icons mt-1">local_offer</span>
                                    {
                                        product ? (
                                            product.tags.map(tag => (
                                                <span className="pl-1">{tag} </span>
                                            ))
                                        ) : ""}
                                    <Col>
                                        <Rating name="read-only" value={product ? product.rating[0] : ""} readOnly />
                                    </Col>
                                </Row>
                                <hr className="mt-0" />
                                <Row className="mt-3">
                                    <Col>
                                        <h5 className="text-gray">Brand: </h5>
                                        <h4>
                                            {product ? product.brand : ""}
                                            <span class="material-icons ml-5">location_on</span>
                                            <span className=" ml-2 font-weight-lighter">{product ? product.country : ""}</span>
                                        </h4>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg="7">
                                        <Button
                                            className="btn-icon btn-1 ml-1 "
                                            color="info"
                                            type="button"
                                            outline
                                        >
                                            <span className="btn-inner--text">Request Information</span>
                                            <span className="btn-inner--icon mr-1">
                                                <i className="ni ni-bag-17" />
                                            </span>
                                        </Button>
                                        <br />
                                        <br />
                                        <Input style={{ display: "inline", width: "30%" }} type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                        </Input>
                                    </Col>
                                    <Col lg="5">
                                        <h6>
                                            Need Help in choosing? Contact our equipment experts.
                                        </h6>
                                        <p><span className="material-icons">phone</span>  0912345678</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="mt-0 mb-0" />
                        <Row className="product-info pl-lg-9 p-4">
                            <Col className="order-2 product-characterstics bg-grey p-2 rounded shadow mr-5">
                                <h4 className="">Specification</h4>
                                <hr className="mt-0" />
                                {product ? (
                                    product.characteristics.map(char => (
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
                                ) : ""}
                            </Col>
                            <Col className="order-1 product-description bg-grey p-2 rounded shadow mr-5" >
                                <h4>Description</h4>
                                <hr className="mt-0" />
                                <p className="ml-3">
                                    {product ? product.description : ""}
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