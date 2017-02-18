import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, render } from 'enzyme';

import sample_scan from 'Tests/data/sample_scan';

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

  it('should have Scan Summary <Section />', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find(Section).find("#scan-summary").length)
        .to.eql(1);
  });

  it('should have Test Scores <Section />', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find(Section).find("#test-scores").length)
        .to.eql(1);
  });

  it('should have 2 <Section />s', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find(Section).length)
        .to.eql(2);
  });

  it('should contain current host if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('h2').text()).to.contain('Current Host: Loading...');

    const host = "google.com";
    const hostText = `Current Host: ${host}`;
    const props = {
      ...defaultProps,
      currentHost: host
    };

    const nextWrapper = render(<App {...props} />);
    expect(nextWrapper.find("#scan-summary").find('h2').text()).to.contain(hostText);
  });

  it('should contain current scan_id if present', () => {
    const wrapper = render(<App {...defaultProps} />);
    expect(wrapper.find("#scan-summary").find('h3').text()).to.contain('Scan Result: Loading...');
    
    const host = "google.com";
    const scanObj = {};
    scanObj[host] = sample_scan;
    const scanIdText = `Scan Result: ${sample_scan.scan_id}`;
    const props = {
      ...defaultProps,
      currentHost: host,
      scanForHost: scanObj
    };

    const nextWrapper = render(<App {...props} />);

    expect(nextWrapper.find("#scan-summary").find('h3').text()).to.contain(scanIdText);
  });

});
