import React, { Component } from 'react'
import image1 from '../../../Images/Interior1.jpg';
export default class Interior extends Component {
    state={
        interdata:[{image:image1,name:'House'},
                 {image:image1,name:'Interior'},
                 {image:image1,name:'Resturant'},
                 
                ]
    }
    render() {
        return (
           <div className="container">
            <div className="row m-0">
                {this.state.interdata.map(data=>{
                    return(
                        
                            <div   className="col-md-4 p-1 gridimage">
                                <img  style={{width:"100%"}}  src={data.image} alt=""/>
                                {/* <div className="middle">
                                    <div className="text"><h1>{data.name}</h1></div>
                                </div>
                                 */}
                                
                                
                            </div>
                            
                           

                       
                    )
                })}
                </div>
                
              
            </div>
        )
    }
}
