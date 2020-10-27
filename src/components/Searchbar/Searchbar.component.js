import React, { Component } from 'react';
import {
    Container,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

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
            result: prevState.result.concat([term])
        }));
    }

    handelClick() {
        this.setState({
            result: []
        }); 
    }

    render() {
        return (
            <Container>
                <div>
                    <InputGroup className="mb-0">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="ni ni-zoom-split-in" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Search"
                            type="text"
                            value={this.state.query}
                            onChange={e => this.updateQuery(e.target.value)}
                            onFocus={e => this.setState({ searchFocused: true })}
                            onBlur={e => this.setState({ searchFocused: false })}
                        />
                        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
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
                        </InputGroupButtonDropdown>
                    </InputGroup>
                    <ul className="search-result list-group mt-0 w-100">
                        {this.state.result.length !== 0 && (
                            this.state.result.map(
                                res => (
                                    <li onClick={this.handelClick} className="list-group-item">{res}</li>)
                            )
                        )}
                    </ul>
                </div>
            </Container>
        );
    }
}

export default SearchBar;
