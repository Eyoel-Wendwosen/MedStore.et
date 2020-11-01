import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ServiceDetail from 'components/Services/Service.detail.component';


class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { match } = this.props;
        return (
            <>
                <div className="product-content">
                    <Route
                        path={`${match.url}`}
                        component={ServiceDetail} />
                </div>
            </>
        );
    }
}

export default Service;