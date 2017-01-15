/**
 * Header section
 * Teaser
 * Menu
 */

import React, { Component } from 'react';
import Teaser from './header/teaser.react.jsx';
import Menu from './header/menu.react.jsx';

module.exports = class Header extends Component {
  render() {
    return (
      <header>
        <Teaser />
        <Menu />
      </header>
    );
  }
};
