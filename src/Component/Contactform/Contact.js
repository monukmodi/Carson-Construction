import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Contact.css';
export default class extends Component {
  state = {
    data: [
      { Custom: 'contact_Float pt-2', Span_spacing: 'Span_spacing', Font_Awsome: 'fas fa-map-marker-alt Awsme_font', title: 'ADDRESS', parag: ' Street number 5, Town, CountryStreet number 5, Town, Country' },
      { Custom: 'contact_Float pt-2', Span_spacing: 'Span_spacing', Font_Awsome: 'fas fa-envelope Awsme_font', title: 'E-MAIL', parag: ' Wbrandname@company.com' },
      { Custom: 'contact_Float pt-2 ', Span_spacing: 'Span_spacing', Font_Awsome: 'fas fa-phone Awsme_font', title: 'TELEPHONE', parag: ' (+371) 512 566 921' },
      { Custom: 'contact_Float pt-2', Span_spacing: 'Span_spacing', Font_Awsome: 'far fa-clock Awsme_font', title: 'WORK HOURS', parag: ' Mon. - Frie. 11AM - 19PM' },
     
    ]
  }
  render() {
    return (
      <div className="Contect_section">
        <div className="container box_Container"  data-aos="fade-up">
          <div className="row mx-0 Main_contant_Top">
            <div className="col-lg-8  Cotant_Section_padding">
              <h1 className="pb-5 ">Send Us <span className="Cotant_span">A Message</span></h1>
              <Form>
                <Form.Group >
                  <Form.Label>Name <i className="far fa-check-circle far_color"></i></Form.Label>
                  <Form.Control type="text" placeholder="" required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email  <i className="far fa-check-circle far_color"></i></Form.Label>
                  <Form.Control type="email" placeholder="" required/>

                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message <i className="far fa-check-circle far_color"></i></Form.Label>
                  <Form.Control as="textarea" rows="5" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
            <div className="col-lg-4 Cotant_Section2_padding">
              <h1 className="pb-3">Our <span className="Cotant_span">Contacts</span></h1>

              {this.state.data.map(description => {
                return (
                  <>
                    <a className=""> 
                    <div className="pt-3 Space_Hover">
                      <div className={description.Custom}>
                        <span className={description.Span_spacing}><i className={description.Font_Awsome}></i></span>
                      </div>
                      <div className="Content_root">
                        <span className="font_size_Contect">{description.title}</span>
                        <p>{description.parag}</p>
                      </div>
                    </div>
                    </a>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>

    )
  }
}
