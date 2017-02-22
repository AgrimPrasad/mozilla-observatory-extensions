import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, render } from 'enzyme';

import * as Utils from 'Utils';
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

  it('should have 0 <Section />s when Loading', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find(Section).length)
        .to.eql(0);
  });

  it('should have 2 <Section />s after Loading', () => {
    const wrapper = shallow(<App {...mockState} />);
    expect(wrapper.find(Section).length)
        .to.eql(2);
  });

  it('should have a Scan Summary <Section /> after Loading', () => {
    const wrapper = shallow(<App {...mockState} />);
    const scanSummSection = wrapper.find(Section).find("#scan-summary");
    expect(scanSummSection.length).to.eql(1);
    expect(scanSummSection).to.have.prop("heading", "Scan Summary");
  });

  it('should have a Test Scores <Section /> after Loading', () => {
    const wrapper = shallow(<App {...mockState} />);
    const testScoresSection = wrapper.find(Section).find("#test-scores");
    expect(testScoresSection.length).to.eql(1);
    expect(testScoresSection).to.have.prop("heading", "Test Scores");
  });

  it('should contain current host if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find('#host').text()).to.contain('');

    const hostText = `${mockHost}`;
    const mockWrapper = render(<App {...mockState} />);
    expect(mockWrapper.find('#host').text()).to.contain(hostText);
  });

});
