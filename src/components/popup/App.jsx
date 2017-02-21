import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

import Heading from './Heading';
import Section from './Section';
import Summary from './Summary';
import * as actionCreators from 'Actions/actionCreators';
import * as utils from 'Utils';

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
          <ProgressBar id="scan-progress" active label="Loading" striped now={100} />
        }
        {dataReady &&
          <Grid>
            <Row className="show-grid">
              <Col xs={11} className="h4" id="host">
                {currentHost}
              </Col>
            </Row>
            <Section heading="Scan Summary" id="scan-summary">
              <Summary scanData={scanData} />
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
