import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import ProductsView from 'components/Products/Products.view.component';
import ProductCompare from 'components/Products/Products.compare.component';
import ProductDetail from 'components/Products/Product.detail.component';
import SearchBar from 'components/Searchbar/Searchbar.component';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="product-content">
                    <h1>
                        Products
                    </h1>
                    <SearchBar />
                    <Link to={`${this.props.match.path}/view`}>
                        <span>
                            Products
                        </span>
                    </Link>
                    <br />
                    <Link to={`${this.props.match.path}/compare`}>
                        <span>
                            Compare
                        </span>
                    </Link>
                    {/* <ProductsView /> */}
                    <hr />
                    <Switch>
                        <Route
                            path={`${this.props.match.url}/view`}
                            render={(props) => <ProductsView {...props} />}
                        />
                        <Route
                            path={`${this.props.match.url}/detail`}
                            render={(props) => <ProductDetail {...props} />}
                        />
                        <Route
                            path={`${this.props.match.url}/compare`}
                            component={ProductCompare}
                        />
                    </Switch>
                </div>
            </>
        );
    }
}

export default Product;