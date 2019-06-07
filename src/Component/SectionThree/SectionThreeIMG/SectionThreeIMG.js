import React, { Component } from 'react';
import Construction3 from '../../../Images/Construction3.png';
import './SectionThreeIMG.css';
import Sectionthreecollapse from '../SectionThreeCollapse/SectionThreeCollapse';
import Sectionthreecollapseheading from '../SectionThreeCollapseHeading/SectionThreeCollapseHeading';

export default class SectionThreeIMG extends Component {
  render() {
    return (
      <div style={{position:"relative"}}>
      <div className="container-fluid img-secthree">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img className="img-sty-secthree"  data-aos="fade-right" src={Construction3}/>
            </div>
            <div className="col-md-6 col-sm-12">
                <Sectionthreecollapseheading/>
                <Sectionthreecollapse/>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
