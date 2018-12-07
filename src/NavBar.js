import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-cont">
        <div className="NavBar-name" style={{ color: this.props.colorName }}>
          Andrew Pungprakearti
        </div>
        <div className="NavBar-title" style={{ color: this.props.colorTitle }}>
          Full Stack Developer
        </div>
      </div>
    );
  }
}
