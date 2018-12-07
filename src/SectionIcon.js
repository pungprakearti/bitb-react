import React, { Component } from 'react';
import './SectionIcon.css';

export default class SectionIcon extends Component {
  render() {
    return (
      <div className={`SectionIcon-cont SectionsIcon-${this.props.title}`}>
        <div
          className="SectionIcon-outer-cont"
          style={{
            backgroundColor: this.props.color
          }}
        >
          {this.props.image ? (
            <img src={this.props.image} alt={this.props.image} />
          ) : (
            ''
          )}
          <div className="SectionIcon-inner-cont" />
        </div>
      </div>
    );
  }
}
