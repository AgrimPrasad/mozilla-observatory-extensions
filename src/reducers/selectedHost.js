import * as actionTypes from '../actions/actionTypes';

const initialState = 'yahoo.com';

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_HOST:
			return action.host;
		default:
			return state;
	}
}