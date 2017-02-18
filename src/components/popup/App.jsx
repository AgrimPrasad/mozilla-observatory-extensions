import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Heading from './Heading';
import Section from './Section';
import * as actionCreators from 'Actions/actionCreators';

class App extends Component {
  componentDidMount() {
    this.props.popupOpened();
  }

  render() {
    const currentHost = this.props.currentHost;
    const scanForHost = this.props.scanForHost || {};
    return (
      <div>
        <Heading />
        <Section heading="Scan Summary" id="scan-summary">
          <h2>
              Current Host: {currentHost || 'Loading...'}
          </h2>
          <h3>
              Scan Result: {currentHost in scanForHost ? scanForHost[currentHost].scan_id : 'Loading...'}
          </h3>
        </Section>
        <Section heading="Test Scores" id="test-scores">
          <h2>
              (Dummy)Current Host: {currentHost}
          </h2>
          <h3>
              (Dummy)Scan Result: {currentHost in scanForHost ? scanForHost[currentHost].scan_id : 'Loading...'}
          </h3>
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
