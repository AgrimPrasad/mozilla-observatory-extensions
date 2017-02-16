import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from 'Components/popup/App';

describe("App Sanity", function() {
  const defaultProps = {
    dispatch: () => {},
    manifest: { components: [] },
  };

  it('should render without blowing up', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.length).to.eql(1);
  });
});
