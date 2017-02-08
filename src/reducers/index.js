import { combineReducers } from 'redux';

import options from './options';
import results from './results';
import scans from './scans';
import currentHost from './updateHost';

export default combineReducers({
  options, results, scans, currentHost
});
