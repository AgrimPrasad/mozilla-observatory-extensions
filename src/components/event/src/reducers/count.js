const initialState = 0;

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_COUNT':
			let nextState = state + (action.payload || 1);
			return nextState < 0 ? 0 : nextState;
		default:
			return state;
	}
};
