import React from 'react';
import { Container, Row, } from 'reactstrap';
import Team from 'views/Team.view';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bullets: [
                "You can get wide range of New as well as Used Medical Equipment. ",
                "You can make  appointment for consultancy on ",
                "You can get a technical support for medical equipment which need service, including installation, maintenance, parts & accessories.",
                "You can get early breaking Tender Notification service, Medical equipment tenders only.",
            ]
        };
    }

    render() {

        return (
            <>
                <div className="about-us">
                    <Container className=" content product-content mb-5">
                        <Row className=''>
                            <div className='px-4'>
                                <h1 >
                                    About Us !
                            </h1>
                                <p className=" col-12">
                                    MedStore Trading PLC is a Private limited Company  who stands to fill the gap  in Ethiopian Medical Equipment Industry by providing simple,efficient and targeted solutions on Sales,After Sales service and Utilization management of Medical Equipment. It is incorporated by two young and entrepreneurial Biomedical Engineers who are committed to leap the industry.
                            </p>

                                <hr className="my-3" />
                                <p>
                                    MedStore Trading PLC owns the platform “MedStore.et” which the company uses it as a tool to deliver .
                            </p>
                                <p>
                                    MedStore.et is Ethiopian Medical Equipment MultiService Platform where you find multiple choice of product and services for your Medical Needs.
                            </p>
                                <hr className="my-3" />
                                <h3>
                                    MedStore.et is a place where
                            </h3>
                                <ul>
                                    {this.state.Bullets.map(b => (
                                        <li>{b}</li>
                                    ))}
                                </ul>
                                <hr className="my-5" />
                                <h1>
                                    Our Vision
                            </h1>
                                <p>
                                    To become nation leading service provider in Medical Equipment Industry. Delivering the service we provide in a safeguarded and friendly environment. We take pride in our work and are doing our level best to ensure that you receive the very best product and service possible.

                            </p>
                            </div>
                            <section className="m-5 ">
                                <Team />
                            </section>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default AboutUs;