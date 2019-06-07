import React, { Component } from 'react';
import './SectionTwo.css'
import Icon1 from '../../Images/Bathsectwo1.png'
import Icon2 from '../../Images/Bathsectwo2.png'
import Icon3 from '../../Images/Bathsectwo3.png'

export default class SectionTwo extends Component {
    state = {
        constructionsection: [
            { id: 1, part1: Icon1, heading: "Home Renovation", part2: "Where you stay and how you keep your area reflects the person you are. Upgrade your home from boring to a lively ambiance with our home renovation ideas." },
            { id: 2, part1: Icon2, heading: "Rubber Resurfacing", part2: "Resilient Rubber Surfacing is one of the most preferred choices in modern times due to its safety features and low maintenance." },
            { id: 3, part1: Icon3, heading: "Painting Basement", part2: "Regular painting keeps your home attractive and acts as a defense against harsh weather and water clogging. Add colours to your life with our latest, trendy collections." },
        ]
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 firstcol">
                            <p className="firstsecsmallheading">INTRODUCTION</p>
                            <h2 className="firstsecheading">CLEAN DESIGN</h2>
                            <p className="firstsectext">We have unique designs and patterns with high-quality decor for impressive interiors. We help in planning the house design requiring renovation or renovation.</p>
                            {/* <a href="#" style={{ listStyleType: "none", textDecoration: "none" }}><p className="readmorebutton" >READ MORE</p></a> */}
                        </div>
                        {this.state.constructionsection.map(cs => {
                            return (
                                <div className="col-md-3 col-sm-12 customcol">
                                    <img src={cs.part1} className="textpadding" />
                                    <h5 className="sectionalheading">{cs.heading}</h5>
                                    <p className="">{cs.part2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}