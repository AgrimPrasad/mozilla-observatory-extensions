import React, { Component } from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

import * as utils from 'Utils';

export default class ScanSummary extends Component {
  render() {
    const {grade, scan_id, start_time, end_time, score, tests_passed, tests_quantity} = this.props.scanData;
    if (typeof(grade) === 'undefined') {
      return (<Grid></Grid>);
    } else {
        return (
        <Grid>
            <Row id="grade">
              <Col xs={4} className={`grade-container grade-${grade.charAt(0).toLowerCase()}`} id="scan-grade-container">
                  <span className="grade-letter" id="scan-grade-letter">{grade.charAt(0)}</span>
                  <sup className="grade-letter-modifier" id="scan-grade-modifier">{grade.charAt(1) || ''}</sup>
              </Col>
            </Row>
            <Row id="scan-id">
              <span className='h5'>Scan ID {'#'}: </span>
              {scan_id}
            </Row>
            <Row id="test-time">
              <span className='h5'>Test Time: </span>
              {utils.toLocalTime(start_time)}
            </Row>
            <Row id="test-duration">
              <span className='h5'>Test Duration: </span>
              {utils.calcDuration(start_time, end_time) + ' seconds'}
            </Row>
            <Row id="score">
              <span className='h5'>Score: </span>
              <ProgressBar className={`now-${score}`} bsStyle={utils.scoreStyleMap(score)}
                          label={`${score}/100`} now={score} />
            </Row>
            <Row id="tests-passed">
              <span className='h5'>Tests Passed: </span>
              <ProgressBar bsStyle={utils.passedTestsStyleMap(tests_passed)}
                          label={`${tests_passed}/${tests_quantity}`} now={100*tests_passed/tests_quantity} />
            </Row>
        </Grid>
      );
    }
  }
}
