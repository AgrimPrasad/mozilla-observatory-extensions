import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch({
        type: 'ADD_COUNT',
      });
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
  count: state.count,
});

App.propTypes = {
  count: React.PropTypes.number,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
