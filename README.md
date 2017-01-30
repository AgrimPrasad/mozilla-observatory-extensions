# mozilla-observatory-extensions
Browser extensions to analyze website security using the [Mozilla HTTP Observatory API](https://observatory.mozilla.org)

## Project Goals
1. Browser extension which performs the following actions:
  * **Extension Settings page**: `hidden` setting to "true" will hide a scan from public results returned by getRecentScans. `rescan` setting to "true" forces a rescan of a site (Note: a site can not be scanned at a frequency greater than every three minutes)
  * **Retrieve assessment**: Used to retrieve the results of an existing, ongoing, or completed scan. Use if `rescan` is unchecked.
  * **Invoke assessment**: Used to invoke a new scan of the website loaded in the current tab. Use if `rescan` is checked or if `rescan` is unchecked, but **Retrieve assessment** returns an Error.
  * **Retrieve test results**: Get the scan test results by using the scan_id number from the scan object returned by either **Retrieve assessment** or **Invoke assessment**

## Architecture Design
* Initial version is a Chrome Extension. Plan to use [react-chrome-redux](https://github.com/tshaddix/react-chrome-redux) A set of utilities for building Redux applications in Google Chrome extensions

## File Layout
* Inspired from [react-chrome-redux-examples](https://github.com/tshaddix/react-chrome-redux-examples) and [Faster-Browsing](https://github.com/sjb7/Faster-Browsing)

## Testing
* [sinon-chrome](https://github.com/acvetkov/sinon-chrome): Unit testing using sinon, mocha and chai

## Tasks to do
- [x] Learn Chrome extensions: https://developer.chrome.com/extensions and create a basic chrome extension. : **30 Jan 2017**
- [ ] Transform the basic chrome extension from previous step into a React + Redux app as per [react-chrome-redux](https://github.com/tshaddix/react-chrome-redux) : **31 Jan 2017**
- [ ] Study the [Mozilla HTTP Observatory API Documentation](https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md) and create the file structure and internal API to be used for the App. : **4 Feb 2017**
- [ ] Style the React app using css styling from the [HTTP Observatory website](https://github.com/mozilla/http-observatory-website/tree/master/css) : **4 Feb 2017**
- [ ] Implement the file structure and internal API from Step 3 in React + Redux : **5 Feb 2017**
- [ ] Implement unit tests for the app using [sinon-chrome](https://github.com/acvetkov/sinon-chrome) : **9 Feb 2017**
- [ ] Publish to the [Chrome Web Store](https://developer.chrome.com/webstore/get_started_simple) : **9 Feb 2017**
