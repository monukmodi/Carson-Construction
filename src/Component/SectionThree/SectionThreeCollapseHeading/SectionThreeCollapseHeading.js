import React, { Component } from 'react';
import Sectionicon from '../../../Images/ABhqf.png'

export default class SectionThreeCollapseHeading extends Component {
  render() {
    return (
      <div className="py-4">
        <div>
            <img src={Sectionicon}/>
        </div>
        <div>
            <span>ABOUT US</span>
            <h1>KEY POINTS ABOUT COMPANY</h1>
            <p className="pt-2">Constructing the future, renovating the past.</p>
        </div>
      </div>
    )
  }
}
