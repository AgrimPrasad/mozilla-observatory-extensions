import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, render } from 'enzyme';

import sample_scan from 'Tests/data/scan';

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
  scanObj[mockHost] = sample_scan;
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
    expect(wrapper.find("#scan-summary").find('h2').text()).to.contain('Current Host: Loading...');

    const hostText = `Current Host: ${mockHost}`;
    const nextWrapper = render(<App {...mockState} />);
    expect(nextWrapper.find("#scan-summary").find('h2').text()).to.contain(hostText);
  });

  it('should contain current scan_id if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('h3').text()).to.contain('Scan Result: Loading...');

    const scanId = sample_scan['scan_id'];
    const scanIdText = `Scan Result: ${scanId}`;
    const nextWrapper = render(<App {...mockState} />);

    expect(nextWrapper.find("#scan-summary").find('h3').text()).to.contain(scanIdText);
  });

});
