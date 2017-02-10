import actionTypes from '../actions/actionTypes';

export default (state = 'dummyHostFromReducer', action) => {
	switch (action.type) {
		case actionTypes.UPDATE_HOST:
			return action.payload;
		default:
			return state;
	}
}
