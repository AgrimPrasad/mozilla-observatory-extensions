import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

class App extends Component {
  componentDidMount() {
    this.props.popupOpened();
  }

  onChange() {
    this.props.currentHostChanged();
  }

  render() {
    return (
        <div>
          <h2 onChange = {this.onChange.bind(this)}>
            Current Host: {this.props.currentHost}
          </h2>
        </div>
      );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,

  // actionCreators
  popupOpened: React.PropTypes.string.isRequired,

  // state
  currentHost: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentHost: state.currentHost
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
