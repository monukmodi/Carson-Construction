import React, { Component } from 'react'
import './ServicesSectionTwo.css'
// import { Modal } from 'react-bootstrap'
import Service1 from '../../../Images/kitchen reno.jpg';
import Service2 from '../../../Images/bathroom reno.jpg';
import Service3 from '../../../Images/basement ser.jpg';
import Service4 from '../../../Images/flooring ser.jpg';
import Service5 from '../../../Images/painting services.jpg';
import Service6 from '../../../Images/WCHomeRW5a2.png';

export default class SectionTwo extends Component {
	state = {
		services: [
			{ id: 1, customClass:"col-md-6 col-sm-12 d-flex justify-content-end", stylerow:"row-reverse", srviceurl: '/servicesingle/resilientrubber', title: "RESILIENT RUBBER SURFACING", desc: "It is non-slip durable, can be installed in a day, available in a wide variety of colors and patterns.  This ensures a slip-free environment for people in pools, patios, driveways, walkways, playgrounds, garage, basements and gym floors. It is available in a wide variety of colors and patterns to chose from. The colors and patterns can be customized and it is safe, slip-resistant prevents weed growth and growth of molds and dews.", button: "VIEW DETAIL", image: Service6 },
			{ id: 2, customClass:"col-md-6 col-sm-12 d-flex", stylerow:"", srviceurl: '/servicesingle/kitchen',title: "KITCHEN RENOVATION", desc: "We offer unique kitchen renovation services according to your requirements. Remodeling kitchen requires excellent craftsmanship rendering the kitchen visually stunning and aesthetic in appearance. In today’s modern world the kitchen is sleek, compact, with finest designs and cabinets that beautify the place which is easy to clean and efficient with sophisticated appliances. Transforming the kitchen as it is a hub of activity makes it efficient. Kitchen renovation services we offer are a combination of modern trends and innovation that renders it easy to clean.", button: "VIEW DETAIL", image: Service1 },
			{ id: 3, customClass:"col-md-6 col-sm-12 d-flex justify-content-end", stylerow:"row-reverse", srviceurl: '/servicesingle/bathroom',title: "BATHROOM RENOVATION", desc: "Remodeling bathrooms with the use of new designs and patterns matching the decor has a soothing effect and space is utilized effectively. Combining renovations with current designs by using impeccable bathroom accessories such as custom showers, steam rooms, tubs to floating varieties, marble sinks, brass- fixtures. It includes a network of suppliers and distributors with quality materials making it opulent while rendering it spacious. We have choices relating to the themes that can be chosen as a decor utilizing the space creatively. A wonderful stand-alone bathroom can be an excellent feature for the master ensuite.", button: "VIEW DETAIL", image: Service2 },
			{ id: 4, customClass:"col-md-6 col-sm-12 d-flex", stylerow:"", srviceurl: '/servicesingle/basement',title: "BASEMENT Renovation", desc: "The property requires remodeling if it is daunted by molds, termites that inhabit the dampened surface. It hampers the wall with powdery surfaces dirtying it. Our basement services include priming the walls followed by painting it to provide a smooth finish that is visually appealing matching your decors. The installation services and insulation services provide support in adverse weather conditions.  A team of builders, designers, who plan and execute installing everything from basic fixtures to an elegant customized tub and cabinetry. It protects the property from water seeping in during winter. The winter can leave the home cluttered leading to powdery surfaces with the molds and termites clinging on to the moisture. We pitch in during such instances providing long-lasting satisfaction in decluttering the entire basement.", button: "VIEW DETAIL", image: Service3 },
			{ id: 5, customClass:"col-md-6 col-sm-12 d-flex justify-content-end", stylerow:"row-reverse", srviceurl: '/servicesingle/flooring',title: "FLOORING SERVICE", desc: "The flooring services are done reviving the old worn out surfaces rendering it magnificent. This makes the entire floor appealing with a wide variety of carpet tiles and other materials enriching the dead spaces rendering it magnificent. The floors can be installed in a state of art facility with excellent craftsmanship. Laminated wooden flooring is meticulously installed and is spill proof.", button: "VIEW DETAIL", image: Service4 },
			{ id: 6, customClass:"col-md-6 col-sm-12 d-flex", stylerow:"", srviceurl: '/servicesingle/painting', title: "PAINTING SERVICE", desc: "These services are inclusive of eco-friendly paints with low drying time protecting the home from extreme climatic conditions. The merchandised tools with excellent craftsmanship and palette of varying shades of colour in contrast to the furniture and the lights make the walls elegant in appearance. The wallpapers are varied and can be applied to match the interiors rendering the home magnificent. The paints are free from any chemicals that may affect the health of an individual.", button: "VIEW DETAIL", image: Service5 }
		],
		show: false
	}
	handleClose = () => {
		this.setState({ show: false });
	}
	handleShow = () => {
		this.setState({ show: true });
	}
	render() {
		return (
			<div>
				<div className="container">
					{this.state.services.map(ser => {
						return (
							<div className="row py-5" style={{flexDirection:ser.stylerow}} data-aos="fade-up">
								<div className={ser.customClass}>
									<div className="hovereffect">
										<img src={ser.image} className="modifiedimage" onClick={this.handleShow} />
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<h4 className="header">{ser.title}</h4>
									<p className="paragraph text-justify">{ser.desc}</p>
									<a href={ser.srviceurl}><p className="modified">{ser.button}</p></a>
								</div>
							</div>
						)
					})}
				</div>
				{/* <Modal show={this.state.show} className="modalclass" onHide={this.handleClose} centered>
					<Modal.Header closeButton>
					</Modal.Header>
					<img src={Service1} />
				</Modal> */}
			</div>
		)
	}
}