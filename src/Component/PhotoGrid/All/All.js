import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
import './All.css';
import image1 from '../../../Images/Interior1.jpg';
import image2 from '../../../Images/Interior2.jpg';
import image3 from '../../../Images/Interior3.jpg';
export default class All extends Component {
    
        
     
    
      handleClose = () => {
        this.setState({ show: false });
      }
    
      handleShow = (image) => {
        this.setState({ show: true,image:image });
      }
    state={
        alldata:[{image:image1,name:'House'},
                 {image:image2,name:'Interior'},
                 {image:image3,name:'Resturant'},
                 {image:image1,name:'House'},
                 {image:image2,name:'Interior'},
                 {image:image3,name:'Resturant'}
                ]
                ,
                show: false,
                image:""
    }

    render() {
        return (
            <div className="container">
           
            <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
              <img src={this.state.image} style={{width:"100%"}} alt=""/>
          </Modal.Body>
          
        </Modal>
  

            <div className="row m-0">
                {this.state.alldata.map(data=>{
                    return(
                            <div   className="col-md-4 p-1 gridimage" onClick={this.handleShow.bind(this,data.image)}>
                                <img  style={{width:"100%"}} className="image"  src={data.image} alt=""/>
                                <div className="middle">
                                    <div className="text"><h1>{data.name}</h1></div>
                                </div>
                            </div>
                    )
                })}
                </div>
                
              
            </div>
        )
    }
}
