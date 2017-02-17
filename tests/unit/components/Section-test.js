import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme';
import { Panel } from 'react-bootstrap';

chai.use(chaiEnzyme());
const expect = chai.expect;

import Section from 'Components/popup/Section';

describe("<Section />", function() {
  const defaultProps = {
    heading: "DummyHeading",
  };

  it('should render without blowing up', () => {
    const wrapper = shallow(<Section {...defaultProps} />);
    expect(wrapper.length).to.eql(1);
  });

  it('should have an expanded Panel with header', () => {
    const wrapper = shallow(<Section {...defaultProps} />);
    expect(wrapper.find(Panel).length)
    		.to.eql(1);
    expect(wrapper.find(Panel))
    		.to.have.prop("collapsible");
    expect(wrapper.find(Panel))
    		.to.have.prop("expanded", true);
    expect(wrapper.find(Panel))
    		.to.have.prop("header", defaultProps.heading);
    expect(wrapper.find(Panel))
    		.to.have.prop("bsStyle", "primary");
  });
});
