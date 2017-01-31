import React from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';

import App from './App';

const proxyStore = new Store({
  portName: 'appPort',
});

render(
  <Provider store={proxyStore}><App /></Provider>
  , document.getElementById('app'));
