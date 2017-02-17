import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { App } from 'Components/popup/App';
import { Heading } from 'Components/popup/Heading';
import { Section } from 'Components/popup/Section';

describe("Popup Components Unit Tests", function() {
	
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
