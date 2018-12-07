import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-cont">
        <div className="NavBar-left">
          <div className="NavBar-name" style={{ color: this.props.colorName }}>
            Andrew Pungprakearti
          </div>
          <div
            className="NavBar-title"
            style={{ color: this.props.colorTitle }}
          >
            Full Stack Developer
          </div>
        </div>
        <div className="NavBar-right" style={{ color: this.props.colorName }}>
          <div className="NavBar-right-link">Resume</div>
          <div className="NavBar-right-link">Github</div>
          <div className="NavBar-right-link">Contact</div>
        </div>
      </div>
    );
  }
}
