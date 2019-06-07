import React, { Component } from 'react'
import Sectiontopslider from '../Component/SectionTopSlider/SectionTopSlider';
// import SectionThree from '../Component/SectionThree/SectionThreeIMG/SectionThreeIMG';
import SectionTwo from '../Component/SectionTwo/SectionTwo';
import Counter from '../Component/NumberCounter/Header';
import Testimonial from '../Component/TESTIMONIALS/Test/Test';
import RecentWork from '../Component/Gallery/Gallery'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Sectiontopslider/>
        <SectionTwo/>
        {/* <SectionThree/> */}
        <RecentWork/>
        <Testimonial/>
        <div style={{height:"200px"}}></div>
        <Counter/>
      </div>
    )
  }
}
