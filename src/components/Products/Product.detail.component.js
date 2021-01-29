import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    Input,
    CardImg,
    Card,
    Form,
    Container,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    UncontrolledCarousel
} from 'reactstrap';
import classnames from "classnames";

import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import CONSTANTS from 'constants';
import SerializeForm from 'form-serialize';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: "Blood Pressure Scanner",
                brand: "WAGGA",
                country: "Germany",
                rating: 5,
                photo_urls: [
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
                characteristics: [
                    {
                        name: "battery life",
                        value: "5 hrs"
                    },
                    {
                        name: "battery life",
                        value: "5 hrs"
                    }
                ]
            },
            modal: false
        };
        this.handleRequestSubmit = this.handleRequestSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        // const product = this.props.product;
        // axios.get(`${LOCAL_BASE_URL}${API_URL}/product/${product._id}`)
        //     .then(res => {
        //         res.data.data.photo_urls.map(photo => `${LOCAL_BASE_URL}${API_URL}`.concat(photo));
        //         this.setState({
        //             product: res.data.data
        //         });
        //     });
    }

    handleRequestSubmit(e) {
        e.preventDefault();
        let formValues = SerializeForm(e.target, { hash: true });
        console.log(formValues);
        let request = {
            quantity: formValues.quantity
        }

    }

    render() {
        const product = this.props.product;

        return (
            <>
                <div>
                    <section>
                        <Row className="product-detail pl-lg-9 p-4 pt-5 mt-5 mb-3 bg-grey">
                            <Col lg="4" className="mb-lg-auto">
                                <div className="rounded shadow-lg overflow-hidden ">
                                    <UncontrolledCarousel autoPlay={false} controls={true} indicators={true} items={this.state.product ? this.state.product.photo_urls : ""} />
                                    <CardImg
                                        className="p-1"
                                        alt="Image not found"
                                    // height="100vh"
                                    // src={"http://localhost:8080/avatars/temini.jpg"}
                                    // src={`${LOCAL_BASE_URL}/${product.photo_urls[0]}`}
                                    />
                                </div>
                            </Col>
                            <Col className="ml-4" lg="6" >
                                <Row>
                                    <h1 >
                                        {product ? product.name : ""}
                                    </h1>
                                </Row>
                                <Row>
                                    <span className="material-icons mt-1">local_offer</span>
                                    {
                                        product ? (
                                            product.tags.map(tag => (
                                                <span className="pl-1">{tag} </span>
                                            ))
                                        ) : ""}
                                </Row>
                                <Col>
                                    <Rating name="read-only" value={product ? product.rating : ""} readOnly />
                                </Col>

                                <hr className="mt-0" />
                                <Row className="mt-3">
                                    <Col>
                                        <h5 className="text-gray">Brand: </h5>
                                        <h4>
                                            {product ? product.brand : ""}
                                            <span className="material-icons ml-5">location_on</span>
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
                                            onClick={this.toggleModal}
                                        >
                                            <span className="btn-inner--text">Request Information</span>
                                            <span className="btn-inner--icon mr-1">
                                                <i className="ni ni-bag-17" />
                                            </span>
                                        </Button>
                                        <br />
                                        <br />
                                    </Col>
                                    <Col lg="5">
                                        <h6>
                                            Need Help in choosing? Contact our equipment experts.
                                        </h6>
                                        <p><span className="material-icons">phone</span>  +251-919-38-1997</p>
                                        <p><span className="material-icons">phone</span>  +251-911-89-1367</p>
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
                    {/* <this.renderRequestForm /> */}
                    <Modal size="md" isOpen={this.state.modal} toggle={this.toggleModal} >
                        <Form onSubmit={(e) => { this.handleRequestSubmit(e); this.toggleModal(); }} >
                            <ModalBody className="p-0">

                                <Col lg="" className="p-0" >
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Want to know more about the {this.state.product.name}</h4>
                                            <p className="mt-0">
                                                Let us know your questions ...
                                        </p>
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Enter Your name"
                                                        type="text"
                                                        name="name"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.addressFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-pin-3" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Enter your address"
                                                        name="address"
                                                        onFocus={e => this.setState({ addressFocused: true })}
                                                        onBlur={e => this.setState({ addressFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <Row>
                                                <Col>
                                                    <FormGroup
                                                        className={classnames({
                                                            focused: this.state.emailFocused
                                                        })}
                                                    >
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-email-83" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Enter your email"
                                                                name="email"
                                                                onFocus={e => this.setState({ emailFocused: true })}
                                                                onBlur={e => this.setState({ emailFocused: false })}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                                <Col>
                                                    <FormGroup
                                                        className={classnames({
                                                            focused: this.state.phoneFocused
                                                        })}
                                                    >
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-mobile-button" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Enter your phone"
                                                                name="phone"
                                                                onFocus={e => this.setState({ phoneFocused: true })}
                                                                onBlur={e => this.setState({ phoneFocused: false })}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>

                                            </Row>

                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="message"
                                                    placeholder="Type a message (tell us more about your needs)..."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <h6>Quality</h6>
                                                <Input
                                                    type="number"
                                                    name="quantity"
                                                    id="exampleSelect"
                                                    placeholder="12"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="submit"
                                                >
                                                    Send Message
                                            </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </ModalBody>
                        </Form>

                    </Modal>
                </div>
            </>
        );
    }
}

export default ProductDetail;