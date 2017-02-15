import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

class App extends Component {
  componentDidMount() {
    this.props.popupOpened();
  }

  render() {
    const scanForHost = 'scanForHost' in this.props ? this.props.scanForHost : {};
    const currentHost = this.props.currentHost;
    return (
        <div>
          <h2>
            Current Host: {currentHost}
          </h2>
          <h3>
            Scan Result: {currentHost in scanForHost ? scanForHost[currentHost]['scan_id'] : 'Loading...'}
          </h3>
        </div>
      );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,

  // actionCreators
  popupOpened: React.PropTypes.func.isRequired,

  // state
  currentHost: React.PropTypes.string.isRequired,
  scanForHost: React.PropTypes.object
};

const mapStateToProps = state => ({
  currentHost: state.currentHost,
  scanForHost: state.scanForHost
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
