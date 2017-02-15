import actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
	switch(action.type) {
		case actionTypes.UPDATE_SCANS:
			// const scanObj = {[action.payload.host] : [action.payload.scan]};
			// console.log('scanObj: ', scanObj);
			// const scanForHost = {...state.scanForHost, scanObj} || {};
			// console.log('scanForHost: ', scanForHost);
			// console.log('...state', ...state);
			// const nextState = {...state, { scanForHost : scanForHost }};
			const scanForHost = state.scanForHost || {};
			const scanForCurrHost = {
				[action.payload.host] : action.payload.scan
			};
			const newScanForHost = Object.assign(
				{},
				scanForHost,
				scanForCurrHost
			);
			const newState = {
				...state,
				...newScanForHost
			}
			return newState;
		default:
			return state;
	}
};