import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
          title: 'Welcome'
        };
    }

    render() {
        const title = 'hello from Layout';

        return (
            <div>
                <Header title={this.state.title} />
                <Header title={'other title'} />
                <Footer/>
            </div>
        );
    }
}