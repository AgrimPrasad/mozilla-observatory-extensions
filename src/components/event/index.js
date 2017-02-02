import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../../reducers';

const loggerMiddleware = createLogger();

const preloadedState = {};
const enhancer = applyMiddleware(thunkMiddleware,loggerMiddleware);
const store = createStore(rootReducer, preloadedState, enhancer);

wrapStore(store, {
  portName: 'appPort'
});
