import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme';
import { Navbar } from 'react-bootstrap';


import ConnectedApp from 'Components/popup/App';
import Heading from 'Components/popup/Heading';
import Section from 'Components/popup/Section';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe("popup components", function() {
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

	});

	describe("<Heading />", function() {

	  it('should render without blowing up', () => {
	    const wrapper = shallow(<Heading />);
	    expect(wrapper.length).to.eql(1);
	  });

	  it('should have a Navbar', () => {
	    const wrapper = shallow(<Heading />);
	    expect(wrapper.find(Navbar).length)
	    		.to.eql(1);
	  });

	  it('should have a Navbar.Header', () => {
	    const wrapper = shallow(<Heading />);
	    expect(wrapper.find(Navbar.Header).length)
	    		.to.eql(1);
	  });

	  it('should have a Navbar.Brand', () => {
	    const wrapper = shallow(<Heading />);
	    expect(wrapper.find(Navbar.Brand).length)
	    		.to.eql(1);
	  });

	  it('should have a wordmark img + link', () => {
	    const wrapper = shallow(<Heading />);
	    expect(wrapper.find('a'))
	    		.to.have.attr('href', 'https://observatory.mozilla.org/');
	    expect(wrapper.find('a img'))
	    		.to.have.id('observatory-wordmark');
	    expect(wrapper.find('a img'))
	    		.to.have.attr('src', 'observatory-wordmark.svg');
	    expect(wrapper.find('a img'))
	    		.to.have.attr('alt', 'Observatory by Mozilla');
	  });

	});

	describe("<Section />", function() {
	  const defaultProps = {
	    heading: "DummyHeading",
	  };

	  it('should render without blowing up', () => {
	    const wrapper = shallow(<Section {...defaultProps} />);
	    expect(wrapper.length).to.eql(1);
	  });
	});
});
