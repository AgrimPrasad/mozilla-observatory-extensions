import actionTypes from '../actions/actionTypes';

console.log('in selectedHost reducer: ', actionTypes);

const initialState = 'yahoo.com';

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_HOST:
			return action.host;
		default:
			return state;
	}
}