import React, { Component } from 'react'
import Serviceone from '../../../Images/services-single.jpg';
import ServiceTwo from '../../../Images/Rubber.png';
import '../ServiceSingle.css'
import ServiceSingle from '../ServiceSingle'

export default class ResilientRubber extends Component {
    render() {
        return (
            <div>
                <ServiceSingle selected="rubber"/>
                <div className="pb-5 my-4">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-7">
                        <h2 >Custom Design</h2>
                    <p className="pt-3">Applying Resilient Rubber Resurfacing ensures a slip-free environment which prevents weed growth and growth of molds and dews. Resilient Rubber Resurfacing can be used in pools, patios, driveways, walkways, playgrounds, garage, basements and gym floors. Accidents cannot be avoided but injuries can be avoided by placing a Resilient Rubber Resurfacing at the right place. We use the advanced quality rubber and binder to create a product that is attractive and long-lasting. Thickness’s of the Rubber Resurfacing can be modified to meet varying fall heights and colours can be used depending on the location.</p>
                    <p>It is available in a wide variety of colours and patterns to chose from. The colours and patterns can be customized and it is safe, and it can be installed in a day. Our main Moto is customer satisfaction and happy customers are our inspiration.</p>
                
                        </div>
                        <div className="col-md-5">
                            <img className="service-img" src={ServiceTwo}></img>
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
                            <p className="mar-lef">Our team of experts will finish the installation in a day depending on the area of installation. Installation is done meeting the customer requirements with upcoming trends as well as the designs that are trendy.</p>
                            <p className="mar-lef">It is durable, non-slip, available in a broad range of colors and patterns.  Because of its security characteristics and low maintenance, resilient rubber surfacing is one of the most preferred options in contemporary times.</p>
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
