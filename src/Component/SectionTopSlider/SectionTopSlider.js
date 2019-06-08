import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './SectionTopSlider.css'
import Constructimg1 from '../../Images/WCHome1.jpg';
import Constructimg2 from '../../Images/b1.jpg';
import Constructimg3 from '../../Images/b1.jpg';
import Constructimg4 from '../../Images/WCHome4.jpg';

export default class Sectiontopslider extends Component {
    render() {
        return (
            <div>
                <section className="slidersection">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block img-slide-back item-image" src={Constructimg1} alt="First slide" data-aos="zoom-in"/>
                        <img className="d-block img-slide-above" src={Constructimg1}  alt="First slide"/>
                        <Carousel.Caption>
                            <span data-aos="fade-up" data-aos-delay="500">BUILD WITH CARSON CONSTRUCTION</span>
                            <h1 className="silde-heading text-uppercase" data-aos="fade-up" data-aos-delay="500">We strive to build<br/>what you dream</h1>
                            <button className="btn slide-bt" data-aos="fade-up" data-aos-delay="500">Learn More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block img-slide-back item-image" src={Constructimg4} alt="second slide" data-aos="zoom-in"/>
                        <img className="d-block img-slide-above" alt="Second slide"/>
                        <Carousel.Caption>
                            <span data-aos="fade-up" data-aos-delay="500">ARE YOU READY?</span>
                            <h1 className="silde-heading text-uppercase" data-aos="fade-up" data-aos-delay="500">An infrastructure that helps<br/>you enhance your business</h1>
                            <button className="btn slide-bt" data-aos="fade-up" data-aos-delay="500">Learn More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </section>
        </div>
        )
    }
}
