import React, { Component } from 'react';
import SectionIcon from './SectionIcon';
import './Home.css';
import NavBar from './NavBar';
import imgLipslut from './img_lipslut.jpg';
import imgLilTanks from './img_liltanks.gif';
import imgAboutMe from './headshot_in_my_favorite_shirt-hey_why_are_you_reading_this-also_dont_be_alarmed_if_i_interview_in_this_shirt-tis_my_favorite_shirt-hence_the_file_name.jpg';

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
          <div className="Home-section-icons-cont">
            <div className="Home-top-row">
              <SectionIcon
                title="About Me"
                color={this.colors.orange}
                image={imgAboutMe}
              />
              <SectionIcon
                title="Lil Tanks"
                color={this.colors.red}
                image={imgLilTanks}
              />
            </div>
            <SectionIcon
              title="Lipslut"
              color={this.colors.blue}
              image={imgLipslut}
            />
            <SectionIcon title="Jobly" color={this.colors.yellow} />
            <SectionIcon title="Algorithms" color={this.colors.purple} />
            <SectionIcon title="Resume" color={this.colors.white} />
            <SectionIcon title="Contact" color={this.colors.green} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
