import actionTypes from '../actions/actionTypes';
import URL from 'url-parse';

const selectHost = () => {
	// debugger;
	console.log('In selectHost() alias');
	// let host = 'alias Host';
	// chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
	// 	host = new URL(tabs[0].url).hostname;
 //    });

 //    const action = {
	// 	type: actionTypes.SELECT_HOST,
	// 	host
	// };
	// return action;

	return (dispatch, getState) => {
		let host = 'alias Host';
		let tabQueryPromise = new Promise(function(resolve, reject) {
			chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
				host = new URL(tabs[0].url).hostname;
				resolve (host);
		    });
		});

		tabQueryPromise.then(
			(val) => {
				return {
					type: actionTypes.SELECT_HOST,
					host: val
				}
			}
		)
		.catch(
			function(reason) {
				console.log('chrome tabs query reject promise ('+reason+') here.');
			}
		);
	}
};

export default {
	[actionTypes.SELECT_HOST]: selectHost
};