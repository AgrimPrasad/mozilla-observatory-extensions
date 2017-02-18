import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, render } from 'enzyme';

import * as Utils from 'Utils/utils';
import sampleScan from 'Tests/data/scan';

chai.use(chaiEnzyme());
const expect = chai.expect;

import ConnectedApp from 'Components/popup/App';
import Heading from 'Components/popup/Heading';
import Section from 'Components/popup/Section';

const App = ConnectedApp.WrappedComponent;

describe("<App />", function() {
  const defaultProps = {
    dispatch: () => {},
    
    // actionCreators
  	popupOpened: () => {},

  	// state
  	currentHost: "",
    scanForHost: {},

  };

  const mockHost = "google.com";
  const scanObj = {};
  scanObj[mockHost] = sampleScan;
  const mockState = {
    ...defaultProps,
    currentHost: mockHost,
    scanForHost: scanObj
  };

  it('should render without blowing up', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.length).to.eql(1);
  });

  it('should have 1 <Heading />', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find(Heading).length)
        .to.eql(1);
  });

  it('should have 2 <Section />s', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find(Section).length)
        .to.eql(2);
  });

  it('should have a Scan Summary <Section />', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    const scanSummSection = wrapper.find(Section).find("#scan-summary");
    expect(scanSummSection.length).to.eql(1);
    expect(scanSummSection).to.have.prop("heading", "Scan Summary");
  });

  it('should have a Test Scores <Section />', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    const testScoresSection = wrapper.find(Section).find("#test-scores");
    expect(testScoresSection.length).to.eql(1);
    expect(testScoresSection).to.have.prop("heading", "Test Scores");
  });

  it('should contain current host if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('h2').text()).to.contain('Loading...');

    const hostText = `${mockHost}`;
    const mockWrapper = render(<App {...mockState} />);
    expect(mockWrapper.find("#scan-summary").find('h2').text()).to.contain(hostText);
  });

  it('should contain current grade if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('#grade').text()).to.contain('Loading...');

    const grade = sampleScan['grade'];
    const scanIdText = `Grade: ${grade}`;
    const mockWrapper = render(<App {...mockState} />);

    expect(mockWrapper.find("#scan-summary").find('#grade').text()).to.contain(scanIdText);
  });

  it('should contain current Scan ID if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('#scan-id').text()).to.contain('Loading...');

    const scanId = sampleScan['scan_id'];
    const scanIdText = `Scan ID #: ${scanId}`;
    const mockWrapper = render(<App {...mockState} />);

    expect(mockWrapper.find("#scan-summary").find('#scan-id').text()).to.contain(scanIdText);
  });

  it('should contain current Test Time if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('#test-time').text()).to.contain('Loading...');

    const testTime = sampleScan['start_time'];
    const scanIdText = `Test Time: ${Utils.toLocalTime(testTime)}`;
    const mockWrapper = render(<App {...mockState} />);

    expect(mockWrapper.find("#scan-summary").find('#test-time').text()).to.contain(scanIdText);
  });

  it('should contain current Test Duration if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('#test-duration').text()).to.contain('Loading...');

    const startTime = sampleScan['start_time'];
    const endTime = sampleScan['end_time'];
    const scanIdText = `Test Duration: ${Utils.calcDuration(startTime, endTime)}`;
    const mockWrapper = render(<App {...mockState} />);

    expect(mockWrapper.find("#scan-summary").find('#test-duration').text()).to.contain(scanIdText);
  });

  // it('should contain current Score if present', () => {
  //   const wrapper = render(<App {...defaultProps} />);
  //   expect(wrapper.find("#scan-summary").find('#testDuration').text()).to.contain('Loading...');

  //   const startTime = sampleScan['start_time'];
  //   const endTime = sampleScan['end_time'];
  //   const scanIdText = `Test Duration: ${Utils.calcDuration(startTime, endTime)}`;
  //   const mockWrapper = render(<App {...mockState} />);

  //   expect(mockWrapper.find("#scan-summary").find('#testDuration').text()).to.contain(scanIdText);
  // });

  // it('should contain current Tests Passed if present', () => {
  //   const wrapper = render(<App {...defaultProps} />);
  //   expect(wrapper.find("#scan-summary").find('#testDuration').text()).to.contain('Loading...');

  //   const startTime = sampleScan['start_time'];
  //   const endTime = sampleScan['end_time'];
  //   const scanIdText = `Test Duration: ${Utils.calcDuration(startTime, endTime)}`;
  //   const mockWrapper = render(<App {...mockState} />);

  //   expect(mockWrapper.find("#scan-summary").find('#testDuration').text()).to.contain(scanIdText);
  // });

});
