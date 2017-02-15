import actionTypes from './actionTypes';

export function popupOpened() {
  return {
    type: actionTypes.POPUP_OPEN,
  };
}

export function invokeAssessment(host) {
  return {
    type: actionTypes.INVOKE_ASSESSMENT,
    host,
  };
}

export function retrieveAssessment(host) {
  return {
    type: actionTypes.RETRIEVE_ASSESSMENT,
    host,
  };
}

export function retrieveResults(scanId) {
  return {
    type: actionTypes.RETRIEVE_RESULTS,
    scanId,
  };
}

export function retrieveOptions(options) {
  return {
    type: actionTypes.RETRIEVE_OPTIONS,
    options,
  };
}

export function updateOptions(options) {
  return {
    type: actionTypes.UPDATE_OPTIONS,
    options,
  };
}
