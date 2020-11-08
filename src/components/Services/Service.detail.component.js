import React from "react";
import {
    Container,
    Row,
    Col,
    CardImg,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


class ECommerceService extends React.Component {
    render() {
        const { service } = this.props;
        return (
            <>
                <main>
                    <section className=" pb-7 position-relative bg-gradient-lighter">
                        <Container >
                            <Row className="pt-8 row-grid align-items-center">
                                <Col lg="6">
                                    <CardImg
                                        className="card-img"
                                        src={require(('../../assets/img/theme/CT2.jpg'))}
                                        alt="..." />
                                </Col>
                                <Col className="pl-2" lg="6">
                                    <h4 className="display-2">{service.title}</h4>
                                    <p>{service.description}</p>
                                    {service.bullets && service.bullets.length !== 0 && (
                                        <ul>
                                            {service.bullets.map(bullet => (
                                                <li>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {service.title === "E-commerce" &&
                                        <Link to='/product'><Button>Explore Products </Button></Link>
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </>
        );
    }
}
export default ECommerceService;