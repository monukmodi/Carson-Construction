import React, { Component } from 'react';
import './Gallery.css';
import RW1 from '../../Images/WCHomeRW1.jpg';
import RW2 from '../../Images/WCHomeRW2.jpg';
import RW3 from '../../Images/WCHomeRW3.jpg';
import RW4 from '../../Images/BasementRenovation.png';
import RW5 from '../../Images/WCHomeRW5a2.png';
import RW6 from '../../Images/WCHomeRW6a.jpg';
 
export default class Gallery extends Component {
    state={
        images:[{image:RW1,name:'Bathroom',project:'Renovation',urlimg:'/servicesingle/bathroom'},
                {image:RW2,name:'Home',project:'Renovation',urlimg:'/servicesingle/'},
                {image:RW3,name:'Kitchen',project:'Renovation',urlimg:'/servicesingle/kitchen'},
                {image:RW4,name:'Basement',project:'Renovation',urlimg:'/servicesingle/basement'},
                {image:RW5,name:'Rubber',project:'Surfacing',urlimg:'/servicesingle/resilientrubber'},
                {image:RW6,name:'Painting',project:'Renovation',urlimg:'/servicesingle/painting'}    
                ]
    }
    render() {
        return (
            <div className="container py-5">

            <div className="row">
                <div className="col-md-12">
                    <div className="gallerySecWrapper">
                        <p>GALLERY</p>
                        <h4>RECENT WORK</h4>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                {this.state.images.map(item =>{
                    return(
                    <div className="col-4 mt-3 tttt hovereffect" >
   
                    <a href={item.urlimg}>
                        <img className="gImage" style={{width:"100%"}} src={item.image} alt=""/>
                        <div className="middle">
                            <div className="text">
                                <h3>{item.name}</h3>
                                <h3>{item.project}</h3>
                               {/* <div>
                                    <i className="fas fa-link btnlink "></i>
                                    <i className="fas fa-search-plus btnlink "></i>
                               </div> */}
                            
                            </div>
                        </div>
                        </a>
                    </div>
                    
                    )
                })}
                </div>
                
            </div>
        )
    }
}
