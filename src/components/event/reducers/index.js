import { combineReducers } from 'redux';

import count from './count';
import options from './options';
import results from './results';
import scans from './scans';

export default combineReducers({
  count, options, results, scans
});
