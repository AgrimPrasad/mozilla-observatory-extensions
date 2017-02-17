import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme';

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

	  it('should have a Navbar.Brand img', () => {
	    const wrapper = shallow(<Heading />);
	    // TODO How to find the component with the correct hierarchy?
	    expect(wrapper.find('img'))
	    		.to.have.id('observatory-wordmark');
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
