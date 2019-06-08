import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
 state={
   data:[{heading:'WE ARE A ONE-STOP DESTINATION FOR ALL YOUR CONSTRUCTION AND RENOVATION NEEDS'},
  {para:'Carson Constructions & Contracting delivers the best quality services. We are pioneers in renovating home and making your dream into reality. Our company has a strong commitment to making a friendly environment by using the right products, and client safety is our first priority.'},
  {para:'We are specialized in offering renovation services for almost 20 years now. Our team consists of individuals with great craftsmanship and excellent workmanship who redefine homes. It is a state-of-art structure that offers customer satisfaction. We act on your ideas and shaping it to redefine your homes.'},
  {para:'We reach out to our customers quickly with an appropriate response and offer quality finishes. Our services are inclusive of bathroom renovation, fittings, roofing, basement, and floorings with a great deal of zeal appealing to the customers and the visitors.'}
  ]

 }
    render() {
        return (
          <div className="container Container_Padding_Main">
          <div className="row mx-0">
            
          <div className="col-md-6">
            {this.state.data.map(description=>{
              return(
                <>
                <div className="contect_contain">
                  <h2>{description.heading}</h2>
                  </div>
                  <div className="Paragraph_section">
                  <p className="para_first_letter ">{description.para}</p>
                  </div>
                  </>
                  
              )
            })}
            
           </div>
            <div className="col-md-6 Sub_Padding_progress">
              <div className="Progress_Main">
              <p className="par_bottom_style">Kitchen Renovation</p>
            <div class="progress Pro_style ">
          
              <div class="progress-bar Pro_bar_style" style={{maxWidth:"80%"}}  >
              
              </div>
            </div>
            </div>
            <div className="Progress_Main">
              <p className="par_bottom_style">Bathroom Renovation</p>
            <div class="progress Pro_style ">
              <div class="progress-bar Pro_bar_style "style={{maxWidth:"80%"}}  >
              
              </div>
            </div>
            </div>
            <div className="Progress_Main">
              <p className="par_bottom_style">Painting Services</p>
            <div class="progress Pro_style ">
              <div class="progress-bar Pro_bar_style"style={{maxWidth:"80%"}}  >
               </div>
            </div>
            </div>
            <div className="Progress_Main">
              <p className="par_bottom_style">Basement Services</p>
            <div class="progress Pro_style">
              <div class="progress-bar Pro_bar_style "style={{maxWidth:"80%"}}  >
         
              </div>
            </div>
            </div>
            <div className="Progress_Main">
              <p className="par_bottom_style">Flooring Services</p>
            <div class="progress Pro_style">
              <div class="progress-bar Pro_bar_style "style={{maxWidth:"80%"}}  >
           
              </div>
              </div>
            </div>
            <div className="Progress_Main">
              <p className="par_bottom_style">Resilient Rubber Surfacing</p>
            <div class="progress Pro_style ">
              <div class="progress-bar Pro_bar_style "style={{maxWidth:"80%"}}  >
              
              </div>
            </div>
          </div>
          </div>
         </div> 
         </div>
        )
    }
}
