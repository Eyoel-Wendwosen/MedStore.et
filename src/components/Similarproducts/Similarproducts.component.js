import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    UncontrolledCarousel
} from 'reactstrap';

class SimilarProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h3 className="pl-4">
                Similar Products
            </h3>
        );
    }
}

export default SimilarProducts;