import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardImgOverlay,
    UncontrolledCollapse
} from 'reactstrap';
import { Link } from "react-router-dom";

class ProductsView extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            categories: [
                {
                    name: "PRIMARY CARE",
                    numberOfProducts: 10,
                    sub_category: [
                        {
                            name: "CARDIOLOGY",
                            numberOfProducts: 10,
                        },
                        {
                            name: "NEUROLOGY",
                            numberOfProducts: 10,
                        }
                    ],
                    isDropDownOpen: true
                },
                {
                    name: "CARDIOLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "NEUROLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "ORTHOPEDIC SURGERY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "OPHTHALMOLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "OTORHINOLARYNGOLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "UROLOGY, OBSTETRICS AND GYNECOLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "ONCOLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "GASTROENTEROLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "PODIATRY, DERMATOLOGY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "SURGERY UNIT",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "MEDICAL TECHNICAL FACILITIES",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "MEDICAL IMAGING",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "LABORATORY",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "DENTAL",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "FURNITURE, LOGISTICS",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "REHABILITATION",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "WELLNESS",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "MEDICAL CONSUMABLES",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "ACCESSORIES AND SPARE-PARTS",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
                {
                    name: "USED PRODUCTS",
                    numberOfProducts: 10,
                    sub_category: [],
                    isDropDownOpen: false
                },
            ],
            numOfProducts: 20,
            overlayVisible: false
        });
    }

    renderProducts(numOfProducts) {
        let products = [...Array(numOfProducts).keys()];
        let productRender = products.map(product => (
            <Col key={product} className="mt-4" xl="2" lg="3" md="4" sm="6">
                <Card className="card-lift card-img-overlay shadow border-3">
                    <Link to="/product/detail">
                        <CardImg
                            alt="..."
                            height="200px"
                            src={require("assets/img/theme/landing.jpg")}
                        />
                        <CardImgOverlay>
                        </CardImgOverlay>
                        <CardTitle className="ml-1 mt-4 bg-grey">
                            <h4>
                                Product {product}
                            </h4>
                        </CardTitle>
                        <CardBody>
                            <p>
                                Small Proudct {product} description goes up here.
                             </p>
                        </CardBody>
                    </Link>
                </Card>
            </Col>

        ));
        return productRender;
    }


    render() {
        return (
            <section>
                <Row >
                    <Col className='bg-grey shadow mt-4 mr-3 pl-0 pr-0' sm='2' md='2' lg="2">
                        <h3 className="display-4 text-dark p-3">
                            Categories
                                </h3>
                        <ul className="list-group">
                            {this.state.categories.map(category => (
                                <li key={category.name} id={`Category_${category.name.split(" ")[0]}`} className="list-group-item">
                                    <span>
                                        {category.name}
                                    </span>
                                    {category.sub_category.length !== 0 && (
                                        <span class="material-icons ml-lg-auto">
                                            expand_more
                                        </span>
                                    )}
                                    {category.sub_category.length !== 0 &&
                                        (
                                            <UncontrolledCollapse toggler={`#Category_${category.name.split(" ")[0]}`}>
                                                <ul className="list-group">
                                                    {category.sub_category.map(sub_cat => (
                                                        <li  key={sub_cat.name} className="list-group-item">
                                                            <span className="text-decoration-none">{sub_cat.name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </UncontrolledCollapse>
                                        )
                                    }
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <Row>
                            {this.renderProducts(15)}
                        </Row>
                    </Col>
                </Row>
                <hr className="" />
                <h3 className="pl-4">
                    Similar Products
                        </h3>
                <Row>
                    {this.renderProducts(10)}
                </Row>
            </section>
        );
    }
}

export default ProductsView;