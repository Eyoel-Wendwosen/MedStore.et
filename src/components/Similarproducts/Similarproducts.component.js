import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

class SimilarProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <h3 className="pl-4">
                    Similar Products
                </h3>
            </Container>
        );
    }
}

export default SimilarProducts;