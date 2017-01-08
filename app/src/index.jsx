import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './view/app.react.jsx';

render((
  <Router history={hashHistory} className="routTest--container">
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root--container'));
