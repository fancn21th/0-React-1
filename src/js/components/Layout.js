import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor(){
        super();
        // state is for internal value only affect something inside of the component
        this.state = {
            name: 'alex'
        };
    }

    render() {
        setTimeout(()=>{
            this.setState({name: 'fancn'});
        }, 2000);
        return (
            <div>
                <Header/>
                {this.state.name}
                <Footer/>
            </div>
        );
    }
}