import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class Section extends Component {
  render() {
    return (
      <Panel collapsible expanded={true} header={this.props.heading} bsStyle="primary" id={this.props.id}>
        {this.props.children}
      </Panel>
    );
  }
}

Section.propTypes = {
  heading: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired
};
