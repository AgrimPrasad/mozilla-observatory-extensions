import * as actionTypes from '../../../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.INVOKE_ASSESSMENT:
			return state;
		default:
			return state;
	}
};