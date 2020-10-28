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
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    title: '2. Refine your Search',
                    icon: "filter_alt",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    title: '3. Select a Product',
                    icon: "search",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    title: '4. Connect with us',
                    icon: "link",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    title: '5. Buy',
                    icon: "shopping_cart",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
            ]
        };
    }
    render() {
        return (

            <Container >
                <div className="content-center pt-5">
                    <h1 className="">How Does MedStore.et Work?</h1>
                </div>
                {this.state.content.length !== 0 && (
                    this.state.content.map((c, index) => (
                        <Row className="pt-5">
                            <Col className={`content-center pr-md-5 order-md-${index % 2 ? 2 : 1}`} md="6">
                                <span class=" text-teal icon-l material-icons-outlined">
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
        );
    }
}

export default HowItWorks;

