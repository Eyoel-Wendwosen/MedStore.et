import React from 'react';
import { Button, Container, Row, Col, Card, CardBody, Badge, CardImg } from 'reactstrap';
import Navbar from 'components/Navbars/Navbar';
import SimpleFooter from 'components/Footers/SimpleFooter';

class Product extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Row>
                        <h1>
                            Working!!
                        </h1>
                    </Row>
                </Container>
                <SimpleFooter />

            </>
        );
    }
}

export default Product;