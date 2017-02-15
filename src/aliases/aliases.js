import fetch from 'isomorphic-fetch';
import actionTypes from '../actions/actionTypes';
import URL from 'url-parse';

const updateHost = (host) => {
	return {
		type: actionTypes.UPDATE_HOST,
		payload: host
	};
};

const updateScan = (host, scan) => {
	return {
		type: actionTypes.UPDATE_SCANS,
		payload: {
			host : host,
			scan : scan
		}
	}
}

const popupOpened = () => {
	return (dispatch) => {
		browser.tabs.query({
			currentWindow: true, active: true
		}).then(
			(tabs) => {
				let host = new URL(tabs[0].url).hostname;
				console.log('host in tabs query promise resolution: ', host);
				dispatch(updateHost(host));
				dispatch(hostChanged(host));
			}
		).catch(
			function(err) {
				console.log('browser tabs query reject promise (' + err + ') here.');
			}
		);
	}
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

const hostChanged = (currentHost) => {
	return (dispatch) => {
		// let currentHost = getState().currentHost;
		fetch('https://http-observatory.security.mozilla.org/api/v1/analyze?host=' + currentHost, {
			method: 'POST'
		})
		.then(checkStatus)
		.then(parseJSON)
		.then(
			(scan) => {
				console.log('Invoke Assessment request for ' + currentHost + ' succeeded with JSON response', scan);
				dispatch(updateScan(currentHost, scan));
			}
		).catch(
			function(err) {
				console.log('Invoke Assessment request failed with error: ' + err);
			}
		);
	}
}

export default {
	[actionTypes.POPUP_OPEN]: popupOpened
};