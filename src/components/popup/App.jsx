import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

import Heading from './Heading';
import Section from './Section';
import * as actionCreators from 'Actions/actionCreators';
import * as Utils from 'Utils/utils';

class App extends Component {
  componentDidMount() {
    this.props.popupOpened();
  }

  isDataReady(scanData) {
    return Object.keys(scanData).length > 0 
            && scanData.constructor === Object
            && scanData.state === 'FINISHED';
  }

  render() {
    const currentHost = this.props.currentHost;
    const scanForHost = this.props.scanForHost || {};
    const scanData = scanForHost[currentHost] || {};
    const dataReady = this.isDataReady(scanData);

    return (
      <div>
        <Heading />
        {!dataReady &&
          <ProgressBar id="scan-progress" active label="Loading" striped="true" now={100} />
        }
        {dataReady &&
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8} className="h3" id="host">
                {currentHost}
              </Col>
            </Row>
            <Section heading="Scan Summary" id="scan-summary">
              <div id="grade">
                <span className='h5'>Grade: </span>
                {scanData.grade} {scanData.hidden ? '(unlisted)' : ''}
              </div>
              <div id="scan-id">
                <span className='h5'>Scan ID {'#'}: </span>
                {scanData.scan_id}
              </div>
              <div id="test-time">
                <span className='h5'>Test Time: </span>
                {Utils.toLocalTime(scanData.start_time)}
              </div>
              <div id="test-duration">
                <span className='h5'>Test Duration: </span>
                {Utils.calcDuration(scanData.start_time, scanData.end_time) + ' seconds'}
              </div>
              <div id="score">
                <span className='h5'>Score: </span>
                {scanData.score  + '/100'}
              </div>
              <div id="tests-passed">
                <span className='h5'>Tests Passed: </span>
                {scanData.tests_passed + '/' + scanData.tests_quantity}
              </div>
            </Section>
            <Section heading="Test Scores" id="test-scores">
              <h3>
                  (Dummy){currentHost}
              </h3>
              
                  (Dummy)Scan Result: {currentHost in scanForHost ? scanForHost[currentHost].scan_id : 'Loading...'}
              
            </Section>
          </Grid>
        }
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
