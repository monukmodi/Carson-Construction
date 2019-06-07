import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './Navbar.css';
import TopLogo from '../../../Images/Carson Constructions logo.png';
// import NavbarAbove from '../NavbarAbove/NavbarAbove'

export default class TopNavbar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-top py-0">
            <Navbar.Brand href="#home"><img className="top-img-navbar dis-nvr-mb" src={TopLogo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto font-weight-bold text-uppercase">
                <Nav.Link className="text-white" href="/">Home</Nav.Link>
                <Nav.Link className="text-white" href="/about">About Us</Nav.Link>
                <Nav.Link className="text-white" href="/services">Services</Nav.Link>
                <Nav.Link className="text-white" href="/gallery">Gallery</Nav.Link>
                <Nav.Link className="text-white" href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="">
                <Nav.Link className="social-icon" href="/"><i className="fas fa-search"></i></Nav.Link>
                <Nav.Link className="social-icon" href="/"><i className="fab fa-twitter"></i></Nav.Link>
                <Nav.Link className="social-icon" href="/"><i className="fab fa-facebook-f"></i></Nav.Link>
                <Nav.Link className="social-icon" href="/"><i className="fab fa-instagram"></i></Nav.Link>
                <Nav.Link className="social-icon" href="/"><i className="fab fa-youtube"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
