import React, { Component } from 'react';
import About from './About/About';
import AboutSection2 from './AboutSection2/AboutSection2';
import AboutTop from './AboutTop/AboutTop';
import SectionThree from '../SectionThree/SectionThreeIMG/SectionThreeIMG'

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <AboutTop/>
        <About/>
        <SectionThree/>
        <AboutSection2/>
      </div>
    )
  }
}