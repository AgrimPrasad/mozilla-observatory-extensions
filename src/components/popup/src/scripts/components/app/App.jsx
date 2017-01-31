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
      <div>
        Click Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});

App.propTypes = {
  count: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
