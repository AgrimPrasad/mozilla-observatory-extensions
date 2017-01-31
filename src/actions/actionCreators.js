import * as actionTypes from './actionTypes';

export function addCount(count) {
	return {
		type: actionTypes.ADD_COUNT,
		count
	}
}