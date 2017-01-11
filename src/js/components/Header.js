import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                Hi, I am header
                <Title/>
            </header>
        );
    }
}