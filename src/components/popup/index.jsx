import React from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';

import App from './App';

const proxyStore = new Store({
  portName: 'appPort',
});

const unsubscribe = proxyStore.subscribe(() => {
  unsubscribe(); // make sure to only fire once
  render(
    <Provider store={proxyStore}>
      <App />
    </Provider>
    , document.getElementById('app'));
});
