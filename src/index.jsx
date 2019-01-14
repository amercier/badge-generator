// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import AppWithStyle from './app';
import * as serviceWorker from './serviceWorker';

const root = document.querySelector('#root');
if (root !== null) {
  ReactDOM.render(<AppWithStyle />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
