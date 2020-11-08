import React, { Component } from 'react';
import {
    Col,
    Container,
    Collapse,
    Row,
    UncontrolledCollapse
} from 'reactstrap';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            categories: []
        };
    }

    componentDidMount() {
        // let { categories } = this.props;
        // this.setState((state, props) => ({
        //     categories: props.categories
        // }));
    }

    renderCategories(categories, onCategorySelect) {
        return (
            <ul className="list-group">
                {categories.map((category) => (
                    <li
                        key={category.name} id={`Category_${category.name.split(" ")[0]}`}
                        className="list-group-item">
                        {category.sub_categories.length !== 0 ?
                            <span>
                                {category.name}
                            </span> :
                            <span
                                onClick={() => onCategorySelect(category)}>
                                {category.name}
                            </span>
                        }
                        {category.sub_categories.length !== 0 && (
                            <span class="material-icons ml-lg-auto">
                                expand_more
                            </span>
                        )}
                        {category.sub_categories.length !== 0 &&
                            (
                                <UncontrolledCollapse toggler={`#Category_${category.name.split(" ")[0]}`}>
                                    <ul className="list-group">
                                        {category.sub_categories.map(sub_cat => (
                                            <li onClick={() => onCategorySelect(sub_cat)} key={sub_cat.name} className="list-group-item">
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
        );
    }

    collapseCategoriesView() {
        this.setState(prevState => {
            return { isOpen: !prevState.isOpen };
        });
    }

    render() {
        const { categories, onCategorySelect } = this.props;
        let col_1, col_2;
        if (categories.length !== 0) {
            let cent = Math.ceil(categories.length / 2);
            col_1 = categories.slice(0, cent);
            col_2 = categories.slice(cent);
        }


        return (
            <>
                <div>
                    <h3 onClick={() => this.collapseCategoriesView()} className="display-4 d-inline text-dark p-3">
                        Categories
                    </h3>
                    <span onClick={() => this.collapseCategoriesView()} className="display-4 pt-1 material-icons"> more_vert</span>
                    <Collapse isOpen={this.state.isOpen} toggler="collapseCategories" >
                        <Row className='bg-grey shadow mt-4 pb-2'>
                            {col_1 && (
                                <Col lg="6" md="6" sm="6" className="pl-0">
                                    {this.renderCategories(col_1, onCategorySelect)}
                                </Col>
                            )}
                            {col_2 && (
                                <Col lg="6" md="6" sm="6" className="pr-0">
                                    {this.renderCategories(col_2, onCategorySelect)}
                                </Col>
                            )}

                        </Row>
                    </Collapse>
                </div>
            </>
        );
    }
}

export default Categories;