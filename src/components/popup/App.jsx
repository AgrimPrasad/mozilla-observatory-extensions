import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';


class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.addCount(this.props.count);
    }, 1000);
  }

  render() {
    return (
      <h1>
          Click Count: {this.props.count}
      </h1>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

App.propTypes = {
  count: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
