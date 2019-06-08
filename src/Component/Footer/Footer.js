import React, { Component } from 'react';
import './Footer.css';
import Logo from '../../Images/Carson Constructions logo.png';
import Footerimg1 from '../../Images/WCHomeRW1.jpg';
import Footerimg2 from '../../Images/WCHomeRW2.jpg';
import Footerimg3 from '../../Images/WCHomeRW3.jpg';
import Footerimg4 from '../../Images/WCHomeRW4.jpg';
import Footerimg5 from '../../Images/WCHomeRW5.jpg';
import Footerimg6 from '../../Images/WCHomeRW6.jpg';
// import Footerback from '../../Images/constr_Footer.jpg';

export default class Footer extends Component {
    state={
        footitem:[
            {id:'1',faicon:'far fa-map mr-4',listname:'Street number 5, Town, Country'},
            {id:'2',faicon:'fa fa-phone mr-4',listname:'032 267 899 442'},
            {id:'3',faicon:'far fa-envelope mr-4',listname:'company@name.com'},
            {id:'3',faicon:'far fa-clock mr-4',listname:'Mon.-Fri.: 10-20, Sun.: 12-16'}
        ],
        footitemsecond:[
            {id:'1',footimg:Footerimg1},
            {id:'2',footimg:Footerimg2},
            {id:'3',footimg:Footerimg3},
            {id:'4',footimg:Footerimg4},
            {id:'5',footimg:Footerimg5},
            {id:'6',footimg:Footerimg6},
        ]
    }
  render() {
    return (
        <div className="footer-bg-img">    
        <div className="container">
            <div className="row text-white">
                <div className="col-md-4 col-sm-12">
                    <img className="footer-logo" src={Logo}/>
                    <p> Carson Constructions & Contracting offers high-efficiency and cost-effective quality services. 
                        We offer services pertaining to renovating kitchen, Basement, Bathroom, Living Space, roofing, etc.
                    </p>
                    <p>
                        <a className="social-media"><i className="fab fa-twitter"></i></a>
                        <a className="social-media"><i className="fab fa-facebook-f"></i></a>
                        <a className="social-media"><i className="fab fa-instagram"></i></a>
                        <a className="social-media"><i className="fab fa-youtube"></i></a>
                    </p>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h2>CONTACT US</h2>
                    {this.state.footitem.map(detail =>{
                        return(
                            <div><i className={detail.faicon}></i>
                            {detail.listname}
                            </div>
                        )
                    })}
                </div>
                <div className="col-md-4 col-sm-12">
                    <h2>LATEST PROJECTS</h2>
                    {this.state.footitemsecond.map(imgdetail =>{
                        return(
                    <a href="/gallery"><img className="foot-img-grid p-1" src={imgdetail.footimg}/></a>
                    )
                })}
                </div>
            </div>
        </div>
        </div>
    )
  }
}