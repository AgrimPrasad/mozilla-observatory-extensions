import fetch from 'isomorphic-fetch';

import actionTypes from './actionTypes';

console.log('in actionCreators: ', actionTypes);

export function selectHost(host) {
    const action = {
		type: actionTypes.SELECT_HOST,
		host
	};
	return action;
}

export function invokeAssessment(host) {
	return {
		type: actionTypes.INVOKE_ASSESSMENT,
		host
	};
}

export function retrieveAssessment(host) {
	return {
		type: actionTypes.RETRIEVE_ASSESSMENT,
		host
	};
}

export function retrieveResults(scan_id) {
	return {
		type: actionTypes.RETRIEVE_RESULTS,
		scan_id
	};
}

export function retrieveOptions(options) {
	return {
		type: actionTypes.RETRIEVE_OPTIONS,
		options
	};
}

export function updateOptions(options) {
	return {
		type: actionTypes.UPDATE_OPTIONS,
		options
	};
}
