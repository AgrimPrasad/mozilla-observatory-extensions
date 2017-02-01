import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';

import rootReducer from './reducers';

const store = createStore(rootReducer, {});

wrapStore(store, {
  portName: 'appPort',
});
