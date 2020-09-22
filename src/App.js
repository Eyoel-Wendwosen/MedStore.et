
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import './components/Navbars/DemoNavbar';
import Index from './views/Index';
import Services from './views/Services';
import DemoNavbar from './components/Navbars/DemoNavbar';
import SimpleFooter from './components/Footers/SimpleFooter';
import ContactUs from './views/ContactUs';
import Team from './views/Team';

function App() {

  return (
    <>
      <div className="App">
        {/* <div className="shape shape-style-1 shape-default">
        <span className="span-150" />
        <span className="span-50" />
        <span className="span-50" />
        <span className="span-75" />
        <span className="span-100" />
        <span className="span-75" />
        <span className="span-50" />
        <span className="span-100" />
        <span className="span-50" />
        <span className="span-100" />
      </div> */}
        <DemoNavbar />
        <main>
          <div className="position-relative">
            <section className="app-header">
              <Container>
                <header >
                  <Row>
                    <Col lg="7">
                      <span>
                        <h1 className="display-3">We Provide Consultancy, Tender &amp; Marketplace Services.</h1>
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="header-description" xl="10" >
                      <span>
                        <p className=" lead "> 
                          MedStore.et is an Ethiopian Medical Equipment market place/Webstore where you find a multiple-choice for your clinical needs and any medical purposes. All the thigs you find at Medstore.et are dully authorized,  registered, and certified at eFDA for sales, and can be used for any clinical practices.
              </p>
                      </span>
                    </Col>
                    <Col>
                      <span></span>
                    </Col>
                  </Row>
                </header>
              </Container>
            </section>
            <section name="ser">
              <Services className="services" />
            </section>
            <section className="mb-5 "> 
              <Team />
            </section>
            <section>
              <ContactUs />
            </section>
          </div>
        </main>
        <SimpleFooter />

        {/* <Index /> */}
      </div>
    </>
  );
}

export default App;
