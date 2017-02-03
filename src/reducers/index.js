import { combineReducers } from 'redux';

import options from './options';
import results from './results';
import scans from './scans';
import selectedHost from './selectedHost';

export default combineReducers({
  options, results, scans, selectedHost
});
