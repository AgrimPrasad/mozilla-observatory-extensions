import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export class Section extends Component {
  render() {
    return (
      <Panel defaultExpanded header={this.props.heading} bsStyle="primary" id="scan-summary">
        {this.props.children}
      </Panel>
    );
  }
}

Section.propTypes = {
  heading: React.PropTypes.string.isRequired,
};

export default Section;
