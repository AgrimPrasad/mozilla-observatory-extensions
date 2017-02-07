import actionTypes from '../actions/actionTypes';
import URL from 'url-parse';

const updateHostInStore = (host) => {
	return {
		type: actionTypes.UPDATE_HOST,
		host
	};
};

const selectHost = () => {
	console.log('In selectHost() alias');

	return (dispatch, getState) => {
		chrome.tabs.query({
			currentWindow: true, active: true
		}).then(
			(tabs) => {
				let host = new URL(tabs[0].url).hostname;
			}
		).catch(
			function(err) {
				console.log('chrome tabs query reject promise (' + err + ') here.');
			}
		);
		return null;
	}
};

export default {
	[actionTypes.SELECT_HOST]: selectHost,
	[actionTypes.UPDATE_HOST]: updateHostInStore
};