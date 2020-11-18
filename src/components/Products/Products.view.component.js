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
        axios.get(`http://localhost:8080/api/v1/product/category/${this.props.category.name}`)
            .then(res => {
                let products = res.data.data;
                this.setState({ products });
                console.log(products);
            });
    }

    renderProducts(onProductSelect, onAddToCompare) {
        let products = this.state.products;
        let productRender = products.map(product => (
            <Col
                style={{
                    "display": "flex",
                    "display": "-webkit-flex",
                    "flex-wrap": "wrap"
                }}
                key={product}
                className="mt-4" xl="2" lg="5" md="4" sm="6" >
                <Card
                    className="card-lift shadow border-3">
                    <CardImg
                        className="p-1"
                        alt="..."
                        // height="100vh"
                        src={"http://localhost:8080/avatars/upload_8af0e2a852d67f4ccc9637e2d7898df4.png"}
                    />
                    <CardBody
                        onClick={() => onProductSelect(product)}
                        className="py-1 px-3">
                        <CardTitle
                            tag="h4"
                            className="ml-1 my-0 mt-2 bg-grey">
                            {product.name}
                        </CardTitle>
                        <p className="font-weight-lighter text-dark">
                            {/* {product.description} */}
                        </p>
                        <p>
                            {product.brand}.
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