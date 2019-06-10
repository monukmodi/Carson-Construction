import React, { Component } from 'react'
import Serviceone from '../../../Images/Basement.png';
import ServiceTwo from '../../../Images/Basement 1.png';
import '../ServiceSingle.css';
import ServiceSingle from '../ServiceSingle';

export default class Basement extends Component {
    render() {
        return (
            <div>
                <ServiceSingle selected="basement"/>
                <div className="pb-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            {/* <p className="mar-lef">Transform your basement into anything you wish for from regular basement to the entertainment area, home office, recreation room, kids play area or a gym area. Renovation allows an owner to create a beautiful place with minimum investments. Also, a finished basement increases the resale value of your home. You should hire a professional to do the job as it requires planning, and execution to ensure the renovation is complete in the most cost-effective way. Basement renovation includes the change in lightings, fixing a window, proper insulation, plumbing and adding furniture and decor which will make your basement look no less than a living hall. </p>
                            <p className="mar-lef">Our team of builders, designers who will plan and execute installing everything from basic fixtures to an elegant customized tub and cabinetry. </p> */}
                            <h2 >Basement Service</h2>
                    <p className="pt-3">The basement services which we provide are immaculate with quality furnishings preventing further damage to your property. The methods comply with the standards thus rendering your property free from molds, and termites, daunting the home evading moisture.</p>
                    <p> For basements spray foam technology is applicable for preventing moisture from seeping in that evades the formation of molds. A vapor barrier can be effective in deflecting moisture.</p>
                
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
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <img className="service-img" src={ServiceTwo}></img>
                        </div>
                        <div className="col-md-7">
                            <p className="mar-lef">Transform your basement into anything you wish for from regular basement to the entertainment area, home office, recreation room, kids play area or a gym area. Renovation allows an owner to create a beautiful place with minimum investments. Also, a finished basement increases the resale value of your home. You should hire a professional to do the job as it requires planning, and execution to ensure the renovation is complete in the most cost-effective way. Basement renovation includes the change in lightings, fixing a window, proper insulation, plumbing and adding furniture and decor which will make your basement look no less than a living hall. </p>
                            <p className="mar-lef">Our team of builders, designers who will plan and execute installing everything from basic fixtures to an elegant customized tub and cabinetry. </p>
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
