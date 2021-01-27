import React, { Component, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Alert, Button } from 'reactstrap';
import axios from 'axios';

import ProductsView from 'components/Products/Products.view.component';
import ProductCompare from 'components/Products/Products.compare.component';
import ProductDetail from 'components/Products/Product.detail.component';
import SearchBar from 'components/Searchbar/Searchbar.component';
import Categories from 'components/Categories/Categories.component';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            selectedCategory: {},
            productsToCompare: [],
            selectedProduct: {},
            categories: [],
        };
        this.selectCategory = this.selectCategory.bind(this);
        this.selectProduct = this.selectProduct.bind(this);
        this.addProductToCompare = this.addProductToCompare.bind(this);
        this.CompareProductFooter = this.CompareProductFooter.bind(this);
    }

    // componentDidMount() {
    //     // get all list of categories
    //     axios.get(`http://localhost:8080/api/v1/category`)
    //         .then(res => {
    //             console.log("categories from api")
    //             console.log(res.data.data)
    //             this.setState({
    //                 categories: res.data.data
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    //     // get all list of subCategories
    //     axios.get(`http://localhost:8080/api/v1/subCategory`)
    // }

    async componentDidMount(){
        try {
            let categories = (await axios.get(`http://localhost:8080/api/v1/category`)).data.data
            let subCategories = (await axios.get(`http://localhost:8080/api/v1/subCategory`)).data.data
            // adding new an array of subcategories for each categories
            categories.forEach(category=>{
                category.subCategories = subCategories.filter(subCategory=>subCategory.category==category._id)
            })
            // saving the new fetched categories to the state of the componenet
            this.setState({
                categories
            })
        } catch (error) {
            
        }
    }

    selectCategory(category) {
        this.setState({ selectedCategory: category });
    }

    selectProduct(product) {
        this.setState({ selectedProduct: product });
    }

    addProductToCompare(product) {
        this.setState((previousState) => ({
            productsToCompare: previousState.productsToCompare.concat([product])
        }));
    }

    productAddedForCompareAlert() {
        const [visible, setVisible] = useState(true);

        const onDismiss = () => setVisible(false);

        return (
            <Alert color="info" isOpen={visible} toggle={onDismiss}>
                I am an alert and I can be dismissed!
            </Alert>
        );
    }

    CompareProductFooter() {
        return (
            <div className="content-center pt-4" style={{ display: "absolute", top: 0, right: 0 }}>
                <p>Compare {this.state.productsToCompare.length} / 10 products.</p><Link to={`${this.props.match.path}/compare`}><Button outline className="btn-outline-info">Compare</Button></Link>
            </div>
        );
    }

    render() {
        return (
            <>
                <div
                    className="product-content">
                    {/* <h1>
                        Products
                    </h1>
                    <Link
                        to={`${this.props.match.path}/view`}>
                        <span>
                            Products
                        </span>
                    </Link>
                    <br />
                    <Link
                        to={`${this.props.match.path}/categories`}>
                        <span>
                            Categories
                        </span>
                    </Link>
                    <br />
                    <Link
                        to={`${this.props.match.path}/compare`}>
                        <span>
                            Compare
                        </span>
                    </Link> */}
                    {/* <ProductsView /> */}
                    <hr />
                    {/* <Categories categories={this.state.categories} /> */}
                    <SearchBar />
                    <Switch>
                        <Route
                            path={`${this.props.match.url}/`}
                            exact
                            render={({ props, history }) =>
                                <Categories
                                    categories={this.state.categories}
                                    onCategorySelect={(category) => {
                                        this.selectCategory(category);
                                        history.push(`${this.props.match.path}/view`);
                                    }} {...props} />
                            } />
                        <Route
                            path={`${this.props.match.url}/view`}
                            render={({ props, history }) =>
                                <ProductsView
                                    category={this.state.selectedCategory}
                                    onAddToCompare={(product) => {
                                        this.addProductToCompare(product);
                                        // this.productAddedForCompareAlert();
                                    }}
                                    onProductSelect={(product) => {
                                        this.selectProduct(product);
                                        history.push(`${this.props.match.path}/detail`);
                                    }} {...props} />}
                        />
                        <Route
                            path={`${this.props.match.url}/detail`}
                            render={(props) => <ProductDetail
                                product={this.state.selectedProduct} {...props} />}
                        />
                        <Route
                            path={`${this.props.match.url}/compare`}
                            render={(props) => <ProductCompare
                                products={this.state.productsToCompare}
                            />}
                        />
                    </Switch>
                    <this.CompareProductFooter />
                    <br />
                </div>
            </>
        );
    }
}

export default Product;