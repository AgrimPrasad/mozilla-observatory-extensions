import { combineReducers } from 'redux';

import options from './options';
import results from './results';
import scanForHost from './scans';
import currentHost from './host';

export default combineReducers({
  options, results, scanForHost, currentHost
});
