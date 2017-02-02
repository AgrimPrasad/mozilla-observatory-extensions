import fetch from 'isomorphic-fetch';

import * as actionTypes from './actionTypes';

export function invokeAssessment(host) {
	return {
		type: actionTypes.INVOKE_ASSESSMENT,
		host
	}
}

export function retrieveAssessment(host) {
	return {
		type: actionTypes.RETRIEVE_ASSESSMENT,
		host
	}
}

export function retrieveResults(scan_id) {
	return {
		type: actionTypes.RETRIEVE_RESULTS,
		scan_id
	}
}

export function retrieveOptions(options) {
	return {
		type: actionTypes.RETRIEVE_OPTIONS,
		options
	}
}

export function updateOptions(options) {
	return {
		type: actionTypes.UPDATE_OPTIONS,
		options
	}
}

export function addCount(count) {
	return {
		type: actionTypes.ADD_COUNT,
		count
	}
}
