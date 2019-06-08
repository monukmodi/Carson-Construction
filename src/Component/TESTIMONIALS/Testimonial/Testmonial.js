import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from '../../../Images/user.png';
import image2 from '../../../Images/user2.png'
import './Testmonial.css'
export default class Testmonial extends Component {
    state={
        items:[{image:image1,name:'Louse Wayne',number:'99',description:'Thank you so much for the beautiful renovations. Your business was highly recommended to me by a friend and you met all my expectations."'},
               {image:image2,name:'Carol Paul',number:'99',description:'The works quality was outstanding and any queries were rapidly resolved. The site was left clean and ready to move on the promised date and within the budget set.'},
               {image:image2,name:'Juliet Wilson ',number:'99',description:'Thanks, Carson Constructions again for all your great work. We are really happy with the result. The place looks fabulous!”.'},
               {image:image2,name:'Janet Rob',number:'99',description:'Their team is well experienced and theyve been selected smartly. Their assistance and professionalism are the best weve seen.'}
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
