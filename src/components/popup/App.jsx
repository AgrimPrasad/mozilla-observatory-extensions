import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import URL from 'url-parse';

import * as actionCreators from '../../actions/actionCreators';

class App extends Component {
  componentDidMount() {
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        const hostname = new URL(tabs[0].url).hostname;
        this.props.selectHost(hostname);
    });
  }

  render() {
    return (
        <div>
          <h2>
            Current Host: {this.props.selectedHost}
          </h2>
        </div>
      );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  selectedHost: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  selectedHost: state.selectedHost
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);