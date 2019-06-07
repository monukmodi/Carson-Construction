import React, { Component } from 'react';
import './NavbarAbove.css';
import TopLogo from '../../../Images/Carson Constructions logo.png'

export default class NavbarAbove extends Component {
      state = {
            topcontact:[
                {id:'1',conticon:'fas fa-phone top-cmh',conthead:'CALL US',contdt:'+123 456 789'},
                {id:'2',conticon:'far fa-envelope top-cmh',conthead:'E-MAIL',contdt:'info@mysite.com'},
                {id:'3',conticon:'far fa-clock top-cmh',conthead:'WORKING HOURS',contdt:'Mon-Fri:10AM-7PM'}
            ]
      }
    render() {
    return (
      <div style={{backgroundColor:"#f2f2f2"}}>
        <div className="navbar-above container dis-mb">
            <div className="">
                <img className="top-img-navbar" src={TopLogo}/>
            </div>
            <div>
                <div className="d-flex">
                    {this.state.topcontact.map(contacts=>{
                        return(
                        <div className="d-flex">
                            <div><i className={contacts.conticon}></i></div>
                            <div className="d-flex flex-column top-hd">
                                <span>{contacts.conthead}</span>
                                <span>{contacts.contdt}</span>
                            </div>
                        </div>                        
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    )
  }
}
