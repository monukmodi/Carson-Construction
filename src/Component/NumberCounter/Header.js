import React, { Component } from 'react'
import './Header.css'
import CountTo from 'react-count-to';

export default class Header extends Component {
  render() {
    return (
      <div className="complete">
        <div className="container">
          <div className="heading">
            <p className="p1 mb-0">WORDPRESS THEME FOR</p>
            <p className="p2 mb-0">PREMIUM CONSTRUCTION BUSINESS</p>
          </div>
          <div className="row">
            <div className="col-sm b1">
              <p className="num1 mb-0">
                <CountTo to={412} speed={1500} />
              </p>
              {/* <CountTo to={1234} speed={1234} /> */}
              <p className="text1 mb-0">FINISHED PROJECTS</p>

            </div>
            <div className="col-sm b1">
              <p className="num1 mb-0"><CountTo to={122} speed={1500} /></p>
              <p className="text1 mb-0">ONGOING PROJECTS</p>
            </div>
            <div className="col-sm">
              <p className="num1 mb-0"><CountTo to={155} speed={1500} /></p>
              <p className="text1 mb-0">EMPLOYEES</p>
            </div>
          </div>
        </div>


      </div>

    )
  }
}
