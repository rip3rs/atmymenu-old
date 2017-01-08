/**
 * The main entry point
 */

import React, { Component } from 'react';
import Header from './header.react.jsx';

module.exports = class App extends Component {
  render() {
    return (
      <main>
        <Header />
      </main>
    );
  }
};
