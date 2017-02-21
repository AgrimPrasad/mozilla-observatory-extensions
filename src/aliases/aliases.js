import fetch from 'isomorphic-fetch';
import URL from 'url-parse';

import actionTypes from 'Actions/actionTypes';
import * as constants from 'Constants';

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

function queryTabs() {
  return browser.tabs.query({
    currentWindow: true, active: true,
  });
}

function fetchFromApi(host, method) {
  return fetch(`${constants.urls.api}analyze?host=${host}`, {
    method: method,
  })
  .then(checkStatus)
  .then(parseJSON);
}

const hostChanged = (currentHost, method=constants.urls.methods.GET) => (dispatch) => {
  fetchFromApi(currentHost, method)
  .then((scan) => {
    console.log(`Retrieve/Invoke Assessment request for ${currentHost} succeeded with JSON response`, scan);
    
    /* catch any scanning errors like invalid hostname etc. */
    if (scan.error) {
      if (scan.error === 'recent-scan-not-found') {
        dispatch(hostChanged(currentHost, constants.urls.methods.POST));
      }

      // TODO Create and update an ERROR state for display to user
    }
    else if (scan.state != 'FINISHED') {
      setTimeout(dispatch(hostChanged(currentHost, constants.urls.methods.GET))
        , 1000);
    }
    else {
      dispatch(updateScan(currentHost, scan));
    }
  })
  .catch((err) => {
    console.log(`Retrieve Assessment request failed with error: ${err}`);
    // TODO Create and update an ERROR state for display to user
  });
};

const popupOpened = () => (dispatch) => {
  queryTabs()
  .then((tabs) => {
    const host = new URL(tabs[0].url).hostname;
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
