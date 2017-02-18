import fetch from 'isomorphic-fetch';
import URL from 'url-parse';

import actionTypes from 'Actions/actionTypes';

const enums = {
  characterMappings: {
    checkmark: '&#x2713;',
    latini: '&#x1d5a8',
    uparrow: '&#x2b06;',
    xmark: '&#x2717;'
  },
  grades: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'],
  maxQueriesBeforeTimeout: 600,
  urls: {
    api: 'https://http-observatory.security.mozilla.org/api/v1/',
    methods: {
      POST: 'POST',
      GET: 'GET'
    }
  }
}

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
  return fetch(`${enums.urls.api}analyze?host=${host}`, {
    method: method,
  })
  .then(checkStatus)
  .then(parseJSON);
}

const hostChanged = (currentHost, method=enums.urls.methods.GET) => (dispatch) => {
  fetchFromApi(currentHost, method)
  .then((scan) => {
    console.log(`Retrieve/Invoke Assessment request for ${currentHost} succeeded with JSON response`, scan);
    
    /* catch any scanning errors like invalid hostname etc. */
    if (scan.error) {
      if (scan.error === 'recent-scan-not-found') {
        dispatch(hostChanged(currentHost, enums.urls.methods.POST));
      }

      // TODO Create and update an ERROR state for display to user
    } else {
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
