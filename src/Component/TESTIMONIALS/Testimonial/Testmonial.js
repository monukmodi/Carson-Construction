import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from '../../../Images/user.png';
import image2 from '../../../Images/user2.png'
import './Testmonial.css'
export default class Testmonial extends Component {
    state={
        items:[{image:image1,name:'Bazooka Elizabet',number:'99',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
               {image:image2,name:'Elizabet Bazooka',number:'99',description:'Fall in love with your bathroom will be distracted by the readable content of a page when looking at its layout.'}
                ]
    }
    render() {
        return (
            <div className="container">
                <div className="parentHome" data-aos="fade-up">               
                    {/* <h5 className="text-muted pt-4 text-center">CLIENT</h5>
                    <h3 style={{textAlign:"center"}}>TESTIMONIAL</h3> */}
                    {/*  */}
                    <Carousel className="text-center" style={{marginTop:"20px"}} indicators={false} interval={null} slide={false}>
                        {this.state.items.map(item =>{
                            return(
                                <Carousel.Item>
                                    <img className="pt-5" style={{width:"10%"}} src={item.image} alt=""/>  
                                    <p style={{paddingTop:"22px"}}>{item.description}</p>
                                    <h3 style={{paddingTop:"8px"}}>{item.name}</h3>
                                    <h3 className="pb-4">-{item.number}</h3>
                                 </Carousel.Item>     
                            )
                        })}
                    </Carousel>
                    {/*  */}
                    </div>
            </div>
           
        )
    }
}
