import fetch from 'isomorphic-fetch';
import URL from 'url-parse';

import actionTypes from '../actions/actionTypes';

const updateHost = host => ({
  type: actionTypes.UPDATE_HOST,
  payload: host,
});

const updateScan = (host, scan) => ({
  type: actionTypes.UPDATE_SCANS,
  payload: {
    host,
    scan,
  },
});

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const hostChanged = currentHost => (dispatch) => {
  fetch(`https://http-observatory.security.mozilla.org/api/v1/analyze?host=${currentHost}`, {
    method: 'POST',
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((scan) => {
    console.log(`Invoke Assessment request for ${currentHost} succeeded with JSON response`, scan);
    dispatch(updateScan(currentHost, scan));
  })
  .catch((err) => {
    console.log(`Invoke Assessment request failed with error: ${err}`);
  });
};

const popupOpened = () => (dispatch) => {
  browser.tabs.query({
    currentWindow: true, active: true,
  })
  .then((tabs) => {
    const host = new URL(tabs[0].url).hostname;
    console.log('host in tabs query promise resolution: ', host);
    dispatch(updateHost(host));
    dispatch(hostChanged(host));
  })
  .catch((err) => {
    console.log(`browser tabs query reject promise (${err}) here.`);
  });
};

export default {
  [actionTypes.POPUP_OPEN]: popupOpened,
};
