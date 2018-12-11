// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import AppWithStyle from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithStyle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
