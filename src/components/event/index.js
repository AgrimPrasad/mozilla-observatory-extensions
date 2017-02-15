import { createStore, applyMiddleware } from 'redux';
import { alias, wrapStore } from 'react-chrome-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from 'Reducers';
import actionTypes from 'Actions/actionTypes';
import aliases from 'Aliases/aliases';

const loggerMiddleware = createLogger();
const preloadedState = {};
const enhancer = applyMiddleware(
	alias(aliases),
	thunkMiddleware,
	loggerMiddleware
);
const store = createStore(rootReducer, 
	preloadedState,
	enhancer);

wrapStore(store, {
  portName: 'appPort'
});