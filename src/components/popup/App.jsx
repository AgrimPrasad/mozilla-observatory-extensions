import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

class App extends Component {
  componentDidMount() {
    this.props.selectHost('rediff.com');
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