import React, { Component } from 'react'
// import Kitchen from './Kitchen/Kitchen';
// import Bathroom from './Bathroom/Bathroom';
// import Basement from './Basement/Basement';
// import Flooring from './Flooring/Flooring';
// import Painting from './Painting/Painting';
// import Resilient from './ResilientRubber/ResilientRubber';
import {withRouter,NavLink} from 'react-router-dom';
import ServiceSingleTop from './ServiceSingleTop/ServiceSingleTop'

class ServiceSingle extends Component {


    kitchenTab = () =>{
        this.props.history.push('/servicesingle/kitchen')
    }
    bathroomTab = () =>{
        this.props.history.push('/servicesingle/bathroom')
    }
    basementTab = () =>{
        this.props.history.push('/servicesingle/basement')
    }
    flooringTab = () =>{
        this.props.history.push('/servicesingle/flooring')
    }
    paintingTab = () =>{
        this.props.history.push('/servicesingle/painting')
    }
    resilientTab = () =>{
        this.props.history.push('/servicesingle/resilientrubber')
    }
   
  render() {
    return (
      <div>
        <ServiceSingleTop/>
        <div style={{backgroundColor:"#0d1f47"}} className="container-fluid">
        <div  className="row " >
            <div className={this.props.selected == "kitchen" ? "selected col-md-2 navi-tog" : "col-md-2 navi-tog kkk"}>
                <div>
                  <p className="my-2 font-weight-bold "  onClick={this.kitchenTab}>Kitchen renovation services</p>
                </div>
            </div>
            <div className={this.props.selected == "bathroom" ? "selected col-md-2 navi-tog" : "col-md-2 navi-tog kkk"}>
                <div>
                  <p className="my-2 font-weight-bold "  onClick={this.bathroomTab}>Bathroom renovation services</p>
                </div>
            </div>
            <div className={this.props.selected == "basement" ? "selected col-md-2 navi-tog" : "col-md-2 navi-tog kkk"}>
                <div>
                  <p className="my-2 font-weight-bold " onClick={this.basementTab}>Basement renovation services</p>
                </div>
            </div>
            <div className={this.props.selected == "flooring" ? "selected col-md-2 navi-tog" : "col-md-2 navi-tog kkk"}>
                <div>
                  <p className="my-2 font-weight-bold " onClick={this.flooringTab}>Flooring renovation services</p>
                </div>
            </div>
            <div className={this.props.selected == "painting" ? "selected col-md-2 navi-tog" : "col-md-2 navi-tog kkk"}>
                <div>
                  <p className="my-2 font-weight-bold " onClick={this.paintingTab}>Painting renovation services</p>
                </div>
            </div>
            <div className={this.props.selected == "rubber" ? "selected col-md-2 navi-tog" : "col-md-2 navi-tog kkk"}>
                <div>
                  <p className="my-2 font-weight-bold" onClick={this.resilientTab}>Resilient rubber surfacing</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ServiceSingle)