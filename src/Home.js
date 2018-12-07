import React, { Component } from 'react';
import SectionIcon from './SectionIcon';
import './Home.css';
import NavBar from './NavBar';
import imgLipslut from './img_lipslut.jpg';
import imgLilTanks from './img_liltanks.gif';
import imgAboutMe from './headshot_in_my_favorite_shirt-hey_why_are_you_reading_this-also_dont_be_alarmed_if_i_interview_in_this_shirt-tis_my_favorite_shirt-hence_the_file_name.jpg';
import imgJobly from './img_jobly.gif';
import imgResume from './img_resume.png';
import imgContact from './img_contact.gif';
import imgAlgorithms from './img_algorithms.gif';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.colors = {
      red: '#F95F62',
      orange: '#FF9052',
      yellow: '#FFD185',
      green: '#13CE66',
      blue: '#00A6FF',
      purple: '#976DD0',
      white: '#F0E3E9'
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar colorName={this.colors.white} colorTitle={this.colors.blue} />
        <div className="Home-cont">
          <div className="Home-grid">
            <div id="aboutMe">
              <SectionIcon color={this.colors.orange} image={imgAboutMe} />
            </div>
            <div id="lilTanks">
              <SectionIcon color={this.colors.red} image={imgLilTanks} />
            </div>
            <div id="jobly">
              <SectionIcon color={this.colors.yellow} image={imgJobly} />
            </div>
            <div id="lipslut">
              <SectionIcon color={this.colors.blue} image={imgLipslut} />
            </div>
            <div id="algorithms">
              <SectionIcon color={this.colors.purple} image={imgAlgorithms} />
            </div>
            <div id="resume">
              <SectionIcon color={this.colors.green} image={imgResume} />
            </div>
            <div id="contact">
              <SectionIcon color={this.colors.white} image={imgContact} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
