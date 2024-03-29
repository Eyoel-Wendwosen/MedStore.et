import React, { Component } from 'react';

import Services from 'views/Service.view';
import Headline from 'views/Headline.view';
import HowItWorks from 'views/HowItWorks.view';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App home-content">
                <main>
                    <div className="position-relative">
                        <section className="app-header">
                            <Headline />
                        </section>
                        <section className=" bg-grey">
                            <HowItWorks />
                        </section>
                        <section name="ser">
                            <Services className="services" />
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;

