import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.addCount(this.props.count);
    }, 1000);

    const currTabHost = 'rediff.com';

    this.props.selectHost(currTabHost);
  }

  render() {
    return (
      <div>
      <h1>
      Click Count: {this.props.count}
      </h1>
      <h2>
      Current Host: {this.props.selectedHost}
      </h2>
      </div>
      );
  }
}

App.propTypes = {
  count: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  selectedHost: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  count: state.count,
  selectedHost: state.selectedHost
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);