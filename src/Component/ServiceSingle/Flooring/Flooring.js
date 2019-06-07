import React, { Component } from 'react'
import Serviceone from '../../../Images/Roofing.png';
import ServiceTwo from '../../../Images/Roofing 1.png';
import '../ServiceSingle.css';
import ServiceSingle from '../ServiceSingle';

export default class Flooring extends Component {
    render() {
        return (
            <div>
                <ServiceSingle selected="flooring"/>
                <div className="pb-5 my-4">





                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-7">
                        <h2 >Custom Design</h2>
                    <p className="pt-3">Our flooring services are of top quality with long-lasting and easy installation procedures.  Choose your type of floor from real wood flooring, laminate, vinyl plank, and luxury carpets among other things.
                        Whether you’re decorating or renovating your kitchen, bathroom or living space, we have a different range of flooring and tiling to meet your every requirement for every room. Redoing your flooring leaves you with a very finished and polished look.</p>
                    <p>Choose from hundreds of styles and textures we offer, considering stain and odor-resistant options. The flooring services are done reviving the old worn out surfaces rendering it magnificent. </p>
                
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
                    <div className="row">
                        <div className="col-md-5">
                            <img className="service-img" src={ServiceTwo}></img>
                        </div>
                        <div className="col-md-7">
                            <p className="mar-lef">We at Carson Construction & Contracting maintain excellent customer relations by building each home effectively through persistent efforts and consistent approach. Laminated wooden flooring is meticulously installed and is spill proof. Products ranging from real wood, laminate, vinyl, and luxury carpets among other things. Our products will be tailor-made according to your preference be it considering your pets or babies.</p>
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
