import actionTypes from '../actions/actionTypes';

console.log('in scans reducer: ', actionTypes);

const initialState = {};

export default (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.INVOKE_ASSESSMENT:
			return state;
		default:
			return state;
	}
};