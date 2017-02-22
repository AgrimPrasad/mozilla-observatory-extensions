import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, render } from 'enzyme';

import * as Utils from 'Utils';
import sampleScan from 'Tests/data/scan';

chai.use(chaiEnzyme());
const expect = chai.expect;

import Summary from 'Components/popup/Summary';

describe("<Summary />", function() {
  const defaultProps = {
    dispatch: () => {},

    // state
    scanData: {}

  };

  const mockHost = "google.com";
  const scanObj = {};
  scanObj[mockHost] = sampleScan;
  const mockState = {
    ...defaultProps,
    scanData: sampleScan
  };

  it('should render without blowing up', () => {
    const wrapper = shallow(<Summary {...defaultProps} />);
    expect(wrapper.length).to.eql(1);
  });

  it('should contain current grade if present', () => {
    const wrapper = render(<Summary {...defaultProps} />);
    expect(wrapper.find('#grade').text()).to.contain('');

    const grade = sampleScan['grade'];
    const expectedText = grade;
    const mockWrapper = render(<Summary {...mockState} />);

    expect(mockWrapper.find('#grade').text()).to.contain(expectedText);
  });

  it('should contain current Scan ID if present', () => {
    const wrapper = render(<Summary {...defaultProps} />);
    expect(wrapper.find('#scan-id').text()).to.contain('');

    const scanId = sampleScan['scan_id'];
    const expectedText = `Scan ID #: ${scanId}`;
    const mockWrapper = render(<Summary {...mockState} />);

    expect(mockWrapper.find('#scan-id').text()).to.contain(expectedText);
  });

  it('should contain current Test Time if present', () => {
    const wrapper = render(<Summary {...defaultProps} />);
    expect(wrapper.find('#test-time').text()).to.contain('');

    const testTime = sampleScan['start_time'];
    const expectedText = `Test Time: ${Utils.toLocalTime(testTime)}`;
    const mockWrapper = render(<Summary {...mockState} />);

    expect(mockWrapper.find('#test-time').text()).to.contain(expectedText);
  });

  it('should contain current Test Duration if present', () => {
    const wrapper = render(<Summary {...defaultProps} />);
    expect(wrapper.find('#test-duration').text()).to.contain('');

    const startTime = sampleScan['start_time'];
    const endTime = sampleScan['end_time'];
    const expectedText = 'Test Duration: 2 seconds';
    const mockWrapper = render(<Summary {...mockState} />);

    expect(mockWrapper.find('#test-duration').text()).to.contain(expectedText);
  });

  it('should contain current Score if present', () => {
    const wrapper = render(<Summary {...defaultProps} />);
    expect(wrapper.find('#score').text()).to.contain('');

    const score = sampleScan['score'];
    const expectedText = `Score: ${score}`;
    const mockWrapper = render(<Summary {...mockState} />);

    expect(mockWrapper.find('#score').text()).to.contain(expectedText);
  });

  it('should contain current Tests Passed if present', () => {
    const wrapper = render(<Summary {...defaultProps} />);
    expect(wrapper.find('#tests-passed').text()).to.contain('');

    const testsPassed = sampleScan['tests_passed'];
    const expectedText = `Tests Passed: ${testsPassed}`;
    const mockWrapper = render(<Summary {...mockState} />);

    expect(mockWrapper.find('#tests-passed').text()).to.contain(expectedText);
  });
});