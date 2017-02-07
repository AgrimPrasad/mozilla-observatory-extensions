import actionTypes from '../actions/actionTypes';

const initialState = 'dummyHostFromReducer';

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_HOST:
			return action.host;
		default:
			return state;
	}
}