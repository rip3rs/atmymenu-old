/**
 * Header section
 * Teaser
 * Menu
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Teaser from './header/teaser.react';
import Menu from './header/menu.react';

module.exports = class Header extends React.Component {
    render() {
        return(
            <header>
                <Teaser />
                <Menu />
            </header>
        );
    }
}
