import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme';
import { Navbar } from 'react-bootstrap';

chai.use(chaiEnzyme());
const expect = chai.expect;

import Heading from 'Components/popup/Heading';

describe("<Heading />", function() {

  it('should render without blowing up', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.length).to.eql(1);
  });

  it('should have a Navbar with header & brand', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.find(Navbar).length)
    		.to.eql(1);
    expect(wrapper.find(Navbar.Header).length)
    		.to.eql(1);
    expect(wrapper.find(Navbar.Brand).length)
    		.to.eql(1);
  });

  it('should have a wordmark img + link', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.find(Navbar.Brand).find('a'))
    		.to.have.prop('href', 'https://observatory.mozilla.org/');
    expect(wrapper.find(Navbar.Brand).find('a img'))
    		.to.have.id('observatory-wordmark');
    expect(wrapper.find(Navbar.Brand).find('a img'))
    		.to.have.attr('src', 'observatory-wordmark.svg');
    expect(wrapper.find(Navbar.Brand).find('a img'))
    		.to.have.attr('alt', 'Observatory by Mozilla');
  });

});