import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardLink
} from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

class ProductsView extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            products: [],
            numOfProducts: 20,
            overlayVisible: false
        });
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/v1/product/category/${this.props.category._id}`)
            .then(res => {
                let products = res.data.data;
                this.setState({ products });
            });
    }

    renderProducts(onProductSelect, onAddToCompare) {
        let products = this.state.products;
        let productRender = products.map(product => (
            <Col
                key={product}
                className="mt-4" xl="2" lg="5" md="4" sm="6">
                <Card
                    className="card-lift shadow border-3">
                    <CardImg
                        className="p-1"
                        alt="..."
                        height="100vh"
                        src={require("assets/img/theme/landing.jpg")}
                    />
                    <CardBody
                        onClick={() => onProductSelect(product)}
                        className="py-1 px-3">
                        <CardTitle
                            tag="h4"
                            className="ml-1 my-0 mt-2 bg-grey">
                            Product {product.name}
                        </CardTitle>
                        <p className="font-weight-lighter text-dark">
                            Small Proudct {product.description} description goes up here.
                             </p>
                        <p>
                            Brand of Product {product.name}.
                        </p>
                    </CardBody>
                    <CardBody className="content-center">
                        <CardLink
                            style={{ cursor: "pointer" }}
                            onClick={() => { onAddToCompare(product); }}>
                            <span className="material-icons">compare_arrows</span>
                        </CardLink>
                    </CardBody>
                    {/* <CardLink href="">
                                <span className="material-icons text-red">favorite_outline</span>
                            </CardLink> */}
                </Card>
            </Col >

        ));
        return productRender;
    }


    render() {
        const { onProductSelect, onAddToCompare } = this.props;
        return (
            <section>
                {/* <Row >
                    <Col> */}
                <Row>
                    {this.renderProducts(onProductSelect, onAddToCompare)}
                </Row>
                {/* </Col>
                </Row> */}
                <hr className="" />
                {/* <h3 className="pl-4">
                    Similar Products
                </h3>
                <Row>
                    {this.renderProducts(10)}
                </Row> */}
            </section>
        );
    }
}

export default ProductsView;