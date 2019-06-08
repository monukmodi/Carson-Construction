import React, { Component } from 'react';
import './PhotoGrid.css';
import All from './All/All';
import CoffeeShop from './COFFEESHOP/Coffeeshop';
import House from './House/House';
import Interior from './INTERIOR/Interior';
import Restaurant from './RESTAURANT/Restaurant';
import GalleryTop from './GalleryTop/GalleryTop'

export default class PhotoGrid extends Component {
    state = {
        all: true,
        coffee: false,
        house: false,
        interior: false,
        restaurant: false,
        rubber: false,
    }
    allTab = () => {
        this.setState({
            all: true,
            coffee: false,
            house: false,
            interior: false,
            restaurant: false,
            rubber: false,
        })
    }
    coffeeTab = () => {
        this.setState({
            all: false,
            coffee: true,
            house: false,
            interior: false,
            restaurant: false,
            rubber: false,
        })
    }
    houseTab = () => {
        this.setState({
            house: true,
            interior: false,
            restaurant: false,
            all: false,
            coffee: false,
            rubber: false,
        })
    }
    interiorTab = () => {
        this.setState({
            interior: true,
            restaurant: false,
            all: false,
            coffee: false,
            house: false,
            rubber: false,
        })
    }
    restaurantTab = () => {
        this.setState({
            restaurant: true,
            all: false,
            coffee: false,
            house: false,
            interior: false,
            rubber: false,
        })
    }
    resilientrubberTab = () => {
        this.setState({
            interior: false,
            restaurant: false,
            all: false,
            coffee: false,
            house: false,
            rubber: true,
        })
    }
    render() {
        return (
            <div className="" >
                <GalleryTop/>
                <div className="row m-0 p-2 projectGridTabDesign text-center">
                    <div className="col-md-2" onClick={this.allTab} >
                        <h6 className={this.state.all? "tab" : "tabcur"} >KITCHEN RENOVATION</h6>
                    </div>
                    <div className="col-md-2" onClick={this.coffeeTab}>
                        <h6 className={this.state.coffee? "tab" : "tabcur"}>BATHROOM RENOVATION</h6>
                    </div>
                    <div className="col-md-2" onClick={this.houseTab} >
                        <h6 className={this.state.house? "tab" : "tabcur"}>BASEMENT SERVICE</h6>
                    </div>
                    <div className="col-md-2" onClick={this.interiorTab}>
                        <h6 className={this.state.interior? "tab" : "tabcur"}>FLOORING SERVICE</h6>
                    </div>
                    <div className="col-md-2" onClick={this.restaurantTab}>
                        <h6 className={this.state.restaurant? "tab" : "tabcur"}>PAINTING SERVICE</h6>
                    </div>
                    <div className="col-md-2" onClick={this.restaurantTab}>
                        <h6 className={this.state.restaurant? "tab" : "tabcur"}>RESILIENT RUBBER SURFACING</h6>
                    </div>
                </div>

                <div>
                    {this.state.all ? <All /> : ""}
                    {this.state.coffee ? <CoffeeShop /> : ""}
                    {this.state.house ? <House /> : ""}
                    {this.state.interior ? <Interior /> : ""}
                    {this.state.restaurant ? <Restaurant /> : ""}

                </div>

            </div>
        )
    }
}
