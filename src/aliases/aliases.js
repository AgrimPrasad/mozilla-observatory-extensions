import actionTypes from '../actions/actionTypes';
import URL from 'url-parse';

const selectHost = () => {
	debugger;
	console.log('In selectHost() alias');
	let host = 'alias Host';
	chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
		host = new URL(tabs[0].url).hostname;
    });

    const action = {
		type: actionTypes.SELECT_HOST,
		host
	};
	return action;
};

export default {
	[actionTypes.SELECT_HOST]: selectHost
};