import React, { Component } from 'react'
import '../Service/service.css'
import Serviceone from '../../Images/services-single.jpg';
import ServiceTwo from '../../Images/services-single-1.jpg';

export default class Service extends Component {
  state = {
    data: [
      { title: "Kitchen renovation services" },
      { title: "Bathroom renovation services" },
      { title: "Basement renovation services" },
      { title: "Flooring renovation services" },
      { title: "Painting renovation services" },
      { title: "Resilient rubber resurfacing" }

    ]
  }

  render() {
    return (

      <div className="container">
        <div className="row">

          {this.state.data.map(description => {
            return (
              <div className="col-md-2 col-sm-6 col-6 p-0  customborder">
                <div className="sideborder">
                  <p className="text-center m-0">{description.title}</p>
                </div>
              </div>

            )
          })}
        </div>


        <div className="container">
          <img className="service-img" src={Serviceone}></img>
        </div>
        <div className="container pt-3">
          <h2 >Custom Design</h2>
          <p className="pt-3">World flooring offers a team of true professional floor installers serving the world and community. Our craftsmen floor installation experts will help transform the look and atmosphere of your home or office to make it really stand out. We understand that the right floor creates a foundation for the whole interior and we strive to create genuine hardwood flooring masterpieces, anything from hardwood flooring to engineered and laminate. Depending on your specific needs, budget and installation area, our expert flooring consultants will help you choose the type of flooring and installation technique that will best suite your space</p>
          <p> We take special care to keep your home clean and safe during the flooring installation process. We cover sensitive areas with plastic, and sanding tools are equipped with an automatic dust collection system. We also take every precaution to create an Eco-friendly work environment, by using non-toxic odorless, staining and lacquering materials.</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img className="service-img" src={ServiceTwo}></img>
            </div>
            <div className="col-md-7">
              <p className="mar-lef">We take special care to keep your home clean and safe during the flooring installation process. We cover sensitive areas with plastic, and sanding tools are equipped with an automatic dust collection system. We also take every precaution to create an Eco-friendly work environment, by using non-toxic odorless, staining and lacquering materials. We take special care to keep your home clean and safe during the We take special care to keep your home clean and safe.</p>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <h2 >Floor Design</h2>
          <p>We take special care to keep your home clean and safe during the flooring installation process. We cover sensitive areas with plastic, and sanding tools are equipped.</p>
        </div>
      </div>

    )
  }
}
