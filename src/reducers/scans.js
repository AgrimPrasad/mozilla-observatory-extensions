import actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
	switch(action.type) {
		case actionTypes.UPDATE_SCANS:
			let payload = action.payload;
			let scanForHost = {...state.scanForHost, payload} || {};
			let nextState = {...state, ...scanForHost};
			return state;
		default:
			return state;
	}
};