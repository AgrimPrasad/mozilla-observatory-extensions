import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Heading from './Heading';
import Section from './Section';
import * as actionCreators from 'Actions/actionCreators';
import * as Utils from 'Utils/utils';

class App extends Component {
  componentDidMount() {
    this.props.popupOpened();
  }

  dataReady(data) {
    return typeof data != 'undefined' && data != null && data != NaN;
  }

  render() {
    const currentHost = this.props.currentHost;
    const scanForHost = this.props.scanForHost || {};
    const scanData = scanForHost[currentHost] || {};

    return (
      <div>
        <Heading />
        <Section heading="Scan Summary" id="scan-summary">
          <h3 id="host">
              {currentHost || 'Loading...'}
          </h3>
          <p id="grade">
              Grade: {scanData.grade || 'Loading...'} {scanData.hidden ? '(unlisted)' : ''}
          </p>
          <p id="scan-id">
              Scan ID {'#'}: {scanData.scan_id || 'Loading...'}
          </p>
          <p id="test-time">
              Test Time: {this.dataReady(scanData.start_time) ? Utils.toLocalTime(scanData.start_time) : 'Loading...'}
          </p>
          <p id="test-duration">
              Test Duration: {this.dataReady(scanData.end_time) ? 
                              Utils.calcDuration(scanData.start_time, scanData.end_time) + ' seconds' 
                              : 'Loading...'}
          </p>
          <p id="score">
              Score: {this.dataReady(scanData.score) ? scanData.score  + '/100' : 'Loading...'}
          </p>
          <p id="tests-passed">
              Tests Passed: {this.dataReady(scanData.tests_passed) ? 
                              scanData.tests_passed + '/' + scanData.tests_quantity : 'Loading...'}
          </p>
        </Section>
        <Section heading="Test Scores" id="test-scores">
          <h2>
              (Dummy){currentHost}
          </h2>
          <p>
              (Dummy)Scan Result: {currentHost in scanForHost ? scanForHost[currentHost].scan_id : 'Loading...'}
          </p>
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  // actionCreators
  popupOpened: React.PropTypes.func.isRequired,

  // state
  currentHost: React.PropTypes.string.isRequired,
  scanForHost: React.PropTypes.shape({
    end_time: React.PropTypes.string,
    grade: React.PropTypes.string,
    hidden: React.PropTypes.boolean,
    likelihood_indicator: React.PropTypes.string,
    response_headers: React.PropTypes.object,
    scan_id: React.PropTypes.number,
    score: React.PropTypes.number,
    start_time: React.PropTypes.string,
    state: React.PropTypes.string,
    tests_failed: React.PropTypes.number,
    tests_passed: React.PropTypes.number,
    tests_quantity: React.PropTypes.number,
  }),
};

App.defaultProps = {
  scanForHost: {},
};

const mapStateToProps = state => ({
  currentHost: state.currentHost,
  scanForHost: state.scanForHost,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
