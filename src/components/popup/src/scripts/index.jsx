import React from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';

import App from './components/app/App';

const proxyStore = new Store({
  portName: 'example',
});

render(
  <Provider store={proxyStore}><App /></Provider>
  , document.getElementById('app'));
