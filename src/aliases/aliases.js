import actionTypes from '../actions/actionTypes';
import URL from 'url-parse';

const updateHost = (host) => {
	return {
		type: actionTypes.UPDATE_HOST,
		host
	};
};

const popupOpened = () => {
	return (dispatch, getState) => {
		browser.tabs.query({
			currentWindow: true, active: true
		}).then(
			(tabs) => {
				let host = new URL(tabs[0].url).hostname;
				console.log('host in tabs query promise resolution: ', host);
				dispatch(updateHost(host));
			}
		).catch(
			function(err) {
				console.log('browser tabs query reject promise (' + err + ') here.');
			}
		);
	}
};

export default {
	[actionTypes.POPUP_OPEN]: popupOpened
};