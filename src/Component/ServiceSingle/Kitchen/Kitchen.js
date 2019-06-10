import React, { Component } from 'react'
import Serviceone from '../../../Images/Kitchen.png';
import ServiceTwo from '../../../Images/Kitchen 1.png';
import '../ServiceSingle.css';
import ServiceSingle from '../ServiceSingle';


export default class Kitchen extends Component {
    render() {
        // console.log(this.props.activeStyle)
        return (
            <div>
                <ServiceSingle selected="kitchen"/>
                <div className="pb-5 my-5">




                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-7">
                        <h2 >Kitchen Renovation</h2>
                    <p className="pt-3">
                    Our leading professional will help in renovating your dream Kitchen to reality with eye-catching themes and décor. Our cabinets and the lighting are sophisticated with the advent of innovative technology that glorifies the place making it impressive. 
                    Remodeling Kitchen requires excellent craftsmanship and skilled work. Our experience in the field and our excellent customer relations makes us the right choice. 
                    We have extensive selection kitchen materials which include wood kitchens, country kitchens, glossy kitchens or classic kitchens with a variety of colour.
    
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
                    <div  className="row mt-5">
                        <div className="col-md-5">
                            <img className="service-img" src={ServiceTwo}></img>
                        </div>
                        <div className="col-md-7">
                            <p className="mar-lef">
                            The floor plan can be according to your taste depending on the size and shape of the Kitchen. It can be L-kitchen, a U-kitchen or a G-kitchen. We have a wide range of cabinets that define the place which is easy to clean and maintain. The sleek interiors are alluring beautifying the activity hub of the home. The spaces are designed considering recent trends, designs by organizing furniture, and other accessories.  The materials are crafted for perfection with innovation in design meeting customer requirements. Our latest kitchen equipment reflects your modern lifestyle and class. Enjoy our 
                                If you are looking for something reverberant and vibrant Kitchen, fill the form and our team will get back to you. 
                                A kitchen island is the latest interesting concept that adds workspace in the kitchen which can also be used as a dining area. Select from a wide range of collections be it a kitchen appliance, modern accessories, fancy storage, cabinet, and drawer hardware, undercabinet lighting.

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
