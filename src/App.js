import React from 'react';
import TopNavbar from './Component/Navbar/NavbarMain/Navbar';
import Footer from './Component/Footer/Footer';
import NavbarAbove from './Component/Navbar/NavbarAbove/NavbarAbove';
import HomePage from './Home/Homepage';
import {Switch,Route} from 'react-router-dom';
import Service from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import ContactForm from './Component/Contactform/Contact';
import AboutUs from './Component/AboutUs/Aboutus';
import Gallery from './Component/PhotoGrid/PhotoGrid';
import Servicesingle from './Component/ServiceSingle/ServiceSingle';
import BathroomService from './Component/ServiceSingle/Bathroom/Bathroom';
import KitchenService from './Component/ServiceSingle/Kitchen/Kitchen';
import BasementService from './Component/ServiceSingle/Basement/Basement';
import FlooringService from './Component/ServiceSingle/Flooring/Flooring';
import PaintingService from './Component/ServiceSingle/Painting/Painting';
import ResilientrubberService from './Component/ServiceSingle/ResilientRubber/ResilientRubber';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
      <Navitem/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' exact component={AboutUs}/>
        <Route path='/services' exact component={Service}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/gallery' exact component={Gallery}/>
        <Route path='/servicesingle/kitchen' exact component={KitchenService}/>
        <Route path='/servicesingle/bathroom' exact component={BathroomService}/>
        <Route path='/servicesingle/basement' exact component={BasementService}/>
        <Route path='/servicesingle/flooring' exact component={FlooringService}/>
        <Route path='/servicesingle/painting' exact component={PaintingService}/>
        <Route path='/servicesingle/resilientrubber' exact component={ResilientrubberService}/>
      </Switch>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

const Navitem = () => {
  return (
    <span>
      <NavbarAbove/>
      <TopNavbar/>
    </span>
  )
}


export default App;
