import React, { Component } from 'react'
import Serviceone from '../../../Images/Bathroom.png';
import ServiceTwo from '../../../Images/Bathroom Renovation 1.png';
import '../ServiceSingle.css'
import ServiceSingle from '../ServiceSingle'

export default class Bathroom extends Component {
    render() {
        return (
            <div>
                <ServiceSingle selected="bathroom"/>
                <div className="pb-5 my-5">

                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-7">
                        <h2 >Bathroom Service</h2>
                    <p className="pt-3">Our experts will help you renovate your bathroom within the mentioned time frame. Be it a fitting or accessories we will look after everything. The bathroom decors are stunning and in alignment with the customer’s requirement. We help you finish your dream bathroom and take care of the whole thing from plumbing, lighting, and construction to decor. We have a long list of happy customers who can vouch for us.</p>
                    <p>The showers in contrast to the wall and bathtub and the walls change the outlook of the place rendering it pleasant. A wonderful stand-alone bathroom can be an excellent feature for the master ensuite. We have expertise in crafting the best bathrooms with a wide range of choices in the selection of accessories.</p>
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
                    <div  className="row mt-5">
                        <div className="col-md-5">
                            <img className="service-img" src={ServiceTwo}></img>
                        </div>
                        <div className="col-md-7">
                            <p className="mar-lef">Carson construction & contracting provides abundant choices relating to design, material, colours, and other bathroom accessories. Our design along with the architecture help in reinventing your bathrooms which are unique and useful apart from being visually attractive. Replace your old lighting and accessories with elegant showers, Jacuzzi and bathtub to trendy and attractive doors and installing showers. We offer extensive services for the bathroom with innovative designs and creativity that looks splendid yet functional. </p>
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
