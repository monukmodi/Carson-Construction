import React, { Component } from 'react';
import Slider from "react-slick";
import './Test.css';
import nvest from '../../../Images/nvest.png';
import TestimonialPeople from '../Testimonial/Testmonial';

export default class Test extends Component {
    state={
        imagedata:[{image:nvest},{image:nvest},{image:nvest},{image:nvest},{image:nvest},{image:nvest}
        ,{image:nvest},{image:nvest},{image:nvest},{image:nvest},{image:nvest},{image:nvest}]
    }
    render() {
        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
        };

        return (
            <div className="parentTest" >
                <div className="container py-4">
                {/* <Slider {...settings} className="pt-5">
                    {this.state.imagedata.map(idd => {
                        return(
                            <div>
                                <img style={{width:"10rem"}} src={idd.image} alt=""/>
                            </div>
                        )
                    })}
                
                </Slider> */}
                    <h5 className="text-muted pt-4 text-center">CLIENT</h5>
                    <h3 className="text-center text-white pt-2">TESTIMONIAL</h3>
                </div>
                <TestimonialPeople />
            </div>
        )
    }
}
