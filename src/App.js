
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Services from './views/Service.view';
import NavBar from './components/Navbars/Navbar.component';
import SimpleFooter from './components/Footers/SimpleFooter.component';
import Team from './views/Team.view';

function App() {

  return (
    <>
      <NavBar  className=""/>
      <div className="App">
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
                          <span className="font-weight-bold">MedStore.et</span> is an Ethiopian Medical Equipment market place/Webstore where you find a multiple-choice for your clinical needs and any medical purposes. All the thigs you find at <span className="font-weight-bold">MedStore.et</span> are dully authorized,  registered, and certified at eFDA for sales, and can be used for any clinical practices.
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
          </div>
        </main>

        {/* <Index /> */}
      </div>
      <SimpleFooter />
    </>
  );
}

export default App;
