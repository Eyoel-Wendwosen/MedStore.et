import React from 'react';
import classnames from "classnames";
import GoogleMapReact from 'google-map-react';
import { Button, Container, Row, Col, Card, CardBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultProps: {
                center: {
                    lat: 9.010005,
                    lng: 38.787900
                },
                zoom: 15
            }
        };
    }

    render() {
        return (
            <>
                <div >
                    <section className="product-content section-contact-us">
                        <Container>
                            <h1>Contact Us</h1>
                            <hr className="mt-0" />
                            <Row>
                                <Col>
                                    <h5>Email:</h5> <h6> <a href="mailto: info@medstore.et">info@medstore.et</a></h6>
                                    <h5>Phone:</h5> <h6> <a href="#">+251912345678</a></h6>
                                    <h5>Address:</h5> <h6> Haya-Hulet ABC Bld, <div>Addis Ababa Ethiopia</div></h6>
                                </Col>
                                <Col>
                                    <div style={{ height: '40vh', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: `AIzaSyAHx7rvLxXuW1jEZXIno6g4OpmH7A-MzRU` }}
                                            defaultCenter={this.state.defaultProps.center}
                                            defaultZoom={this.state.defaultProps.zoom}
                                        >
                                            <div
                                                lat={9.010005}
                                                lng={38.787500}
                                            >
                                                <span class="material-icons text-warning ml-lg-auto">
                                                    location_on
                                                </span>
                                            </div>
                                        </GoogleMapReact>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-6 ">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Want to know more about us?</h4>
                                            <p className="mt-0">
                                                Write something for us ...
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
                                                        placeholder="Your name"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
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
                                                        placeholder="Email address"
                                                        type="email"
                                                        onFocus={e => this.setState({ emailFocused: true })}
                                                        onBlur={e => this.setState({ emailFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="Type a message..."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    Send Message
                    </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </>
        );
    }
};

export default ContactUs;