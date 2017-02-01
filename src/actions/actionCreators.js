import * as actionTypes from './actionTypes';

export function invokeAssessment(scans) {
	return {
		type: actionTypes.INVOKE_ASSESSMENT,
		scans
	}
}

export function retrieveAssessment(scans) {
	return {
		type: actionTypes.RETRIEVE_ASSESSMENT,
		scans
	}
}

export function retrieveResults(results) {
	return {
		type: actionTypes.RETRIEVE_RESULTS,
		results
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
