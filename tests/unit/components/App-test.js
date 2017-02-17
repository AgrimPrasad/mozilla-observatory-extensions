import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme';

chai.use(chaiEnzyme());
const expect = chai.expect;

import ConnectedApp from 'Components/popup/App';

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
