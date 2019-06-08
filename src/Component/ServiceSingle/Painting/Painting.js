import React, { Component } from 'react'
import Serviceone from '../../../Images/Painting.png';
import ServiceTwo from '../../../Images/Painting 1.png';
import '../ServiceSingle.css'
import ServiceSingle from '../ServiceSingle'

export default class Painting extends Component {
    render() {
        return (
            <div>
                <ServiceSingle selected="painting"/>
                <div className="pb-5 my-4">



                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                        <h2 >Painting Service </h2>
                    <p className="pt-3"> 
                    We at Carson Construction & Contracting use eco -friendly paints which are free from any harsh chemicals that may affect the health of an individual. Repaint your home to add colours to your life. Our paints take low drying time protecting the home from extreme climatic conditions. Our vast wallpaper collections which can be applied to match the interiors making your home look magnificent. The merchandised tools with excellent craftsmanship and palette of varying shades of colour in contrast to the furniture and the lights make the walls elegant in appearance.
                        </p>
                        </div>
                        <div className="col-md-5">
                            <img className="service-img" src={Serviceone}></img>
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                    <img className="service-img" src={Serviceone}></img>
                </div>
                <div className="container pt-3">
                </div> */}


                
                <div className="container">
                    <div style={{marginTop:"35px"}} className="row">
                        <div className="col-md-5">
                            <img className="service-img" src={ServiceTwo}></img>
                        </div>
                        <div className="col-md-7">
                            <p className="mar-lef">
                            The paints are free of chemicals that can influence an individual's health. We provide excellent services related to paints with waterproofing textures. We provide a variety of paints available in numerous colours and patterns, that have a soothing effect on the eyes and are visually appealing.  With our recent, trendy colour palette collections, add colours to your lives. For every mood and every occasion, we'll assist you paint your house

                                </p>
                            </div>
                    </div>
                </div>
                {/* <div className="container pt-5">
                    <h2 >Floor Design</h2>
                    <p>We take special care to keep your home clean and safe during the flooring installation process. We cover sensitive areas with plastic, and sanding tools are equipped.</p>
                </div> */}
                </div>
            </div>
        )
    }
}
