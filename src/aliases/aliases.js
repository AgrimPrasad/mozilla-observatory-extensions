import actionTypes from '../actions/actionTypes';
import URL from 'url-parse';

const updateHostInStore = (host) => {
	console.log('host in updateHostInStore ', host);
	return {
		type: actionTypes.UPDATE_HOST,
		host
	};
};

const selectHost = () => {
	return (dispatch, getState) => {
		browser.tabs.query({
			currentWindow: true, active: true
		}).then(
			(tabs) => {
				let host = new URL(tabs[0].url).hostname;
				console.log('host in tabs query promise resolve ', host);
				dispatch(updateHostInStore(host));
			}
		).catch(
			function(err) {
				console.log('browser tabs query reject promise (' + err + ') here.');
			}
		);
	}
};

export default {
	[actionTypes.SELECT_HOST]: selectHost,
	[actionTypes.UPDATE_HOST]: updateHostInStore
};