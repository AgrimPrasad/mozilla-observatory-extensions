import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Heading extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
              <a href="https://observatory.mozilla.org/">
                  <img id="observatory-wordmark" src="observatory-wordmark.svg" 
                      alt="Observatory by Mozilla"/>
              </a>
            </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Heading;