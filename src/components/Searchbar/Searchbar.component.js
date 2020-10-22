import React, { Component } from 'react';
import { Container, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Search"
                        type="text"
                        onFocus={e => this.setState({ searchFocused: true })}
                        onBlur={e => this.setState({ searchFocused: false })}
                    />
                </InputGroup>
            </Container>
        );
    }
}

export default SearchBar;
