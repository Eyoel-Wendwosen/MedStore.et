import React, { Component } from 'react';
import {
    Container,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Input,
    Button
} from "reactstrap";
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            result: [],
            dropdownOpen: false
        };
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
        this.handelClick = this.handelClick.bind(this);
    }

    toggleDropDown() {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));

    };

    updateQuery(term) {
        this.setState((prevState) => ({
            query: term,
        }));
        if (this.state.query === "") {
            this.setState({
                result: []
            });
        }
        axios.get(`http://localhost:8080/api/v1/product/search/${this.state.query}`)
            .then(res => {
                this.setState({
                    result: res.data.data,
                });
            });
    }

    handelClick() {
        this.setState({
            result: []
        });
    }

    render() {
        return (
            <Container className="search-bar px-0">
                <div>
                    <InputGroup className="border-teal mb-0">
                        <Input
                            placeholder="Search among our wide range of products"
                            type="text"
                            value={this.state.query}
                            onChange={e => this.updateQuery(e.target.value)}
                            onFocus={e => this.setState({ searchFocused: true })}
                            onBlur={e => this.setState({ searchFocused: false })}
                        />
                        <InputGroupAddon addonType="append">
                            <Button >Search</Button>
                        </InputGroupAddon>

                        {/* <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>
                            Button Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </InputGroupButtonDropdown> */}
                    </InputGroup>
                    <ul className="search-result border-0 list-group mt-0">
                        {this.state.result.length !== 0 && (
                            this.state.result.map(
                                res => (
                                    <li onClick={this.handelClick} className="list-group-item py-0" >{res.name}</li>)
                            )
                        )}
                    </ul>
                </div>
            </Container>
        );
    }
}

export default SearchBar;
