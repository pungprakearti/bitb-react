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
// import PrintResume from './PrintResume';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };

    this.colors = {
      red: '#F95F62',
      orange: '#FF9052',
      yellow: '#FFD185',
      green: '#13CE66',
      blue: '#00A6FF',
      purple: '#976DD0',
      white: '#F0E3E9'
    };

    this.sections = [
      {
        id: 'aboutMe',
        color: this.colors.orange,
        image: imgAboutMe
      },
      {
        id: 'lilTanks',
        color: this.colors.red,
        image: imgLilTanks
      },
      {
        id: 'jobly',
        color: this.colors.yellow,
        image: imgJobly
      },
      {
        id: 'lipslut',
        color: this.colors.blue,
        image: imgLipslut
      },
      {
        id: 'algorithms',
        color: this.colors.purple,
        image: imgAlgorithms
      },
      {
        id: 'resume',
        color: this.colors.green,
        image: imgResume
      },
      {
        id: 'contact',
        colors: this.colors.white,
        image: imgContact
      }
    ];
    this.handleClick = this.handleClick.bind(this);
    this.removeFadeOut = this.removeFadeOut.bind(this);
  }

  handleClick() {
    this.setState(
      st => ({
        show: false
      }),
      console.log(this.state)
    );
    console.log('click');
  }

  removeFadeOut() {
    const homeCont = document.getElementsByClassName('Home-cont');
    homeCont.classList.remove('fadeOut');
    console.log('getting here');
  }

  render() {
    return (
      <React.Fragment>
        {/* <PrintResume /> */}
        <NavBar colorName={this.colors.white} colorTitle={this.colors.blue} />
        <div className="Home-cont">
          <div className="Home-grid">
            {this.sections.map(section => {
              return (
                <div id={section.id} onClick={this.handleClick}>
                  <SectionIcon color={section.color} image={section.image} />
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
