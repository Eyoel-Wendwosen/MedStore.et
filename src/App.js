import React from 'react';

import './App.css';
import Services from 'views/Service.view';
import Team from 'views/Team.view';
import Headline from 'views/Headline.view';
import HowItWorks from 'views/HowItWorks.view';
import NavBar from 'components/Navbars/Navbar.component';
import SimpleFooter from 'components/Footers/SimpleFooter.component';

function App() {

  return (
    <>
      <NavBar className="" />
      <div className="App">
        <main>
          <div className="position-relative">
            <section className="app-header">
              <Headline />
            </section>
            <section name="ser">
              <Services className="services" />
            </section>
            <section className=" bg-grey">
              <HowItWorks  />
            </section>
            <section className="mb-5 ">
              <Team />
            </section>
          </div>
        </main>
      </div>
      <SimpleFooter />
    </>
  );
}

export default App;
