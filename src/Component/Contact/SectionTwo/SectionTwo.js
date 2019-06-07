import React, { Component } from 'react'
import './SectionTwo.css'
export default class SectionTwo extends Component {
render() {
return (
<div>
<div className="container modifiedcont">
<div className="row modifiedrow">
<div className="col-md-5 modifiedcol">
<h1 className="head">CONTACT US</h1>
<p className="para">You can contact us by a call, a message or visit us From monday to friday. From 8 am - 6 pm</p>
<p><i className="fa fa-map-marker gap" aria-hidden="true"></i>TFC tower, 10 Grey St, New Castle, UK</p>
<p><i className="fa fa-phone gap" aria-hidden="true"></i>(0044) 185 658 3322 / 185 658 3366</p>
<p><i className="fa fa-fax gap" aria-hidden="true"></i>(0044) 185 658 3322 / 185 658 3366</p>
<p><i className="fa fa-envelope gap" aria-hidden="true"></i>tfcontractor@example.com</p>
<p><i className="fa fa-clock gap" aria-hidden="true"></i>Mon – Fri:  
8 am – 6 pm</p>
<p className="paragraphleft">Sat & Sun:  
Closed</p>
</div>
<div className="col-md-7 modifiedcol">
<h1 className="head">SEND US A MESSAGE</h1>
<p className="para">Send us your questions or feedbacks about our services or about your plan, our consultant will solve the trouble. We look forward to serving your ideas!</p>
<form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <input type="text" className="form-control" id="inputEmail4" placeholder="Name"/>
    </div>
    <div className="form-group col-md-6">
      <input type="email" className="form-control" id="inputPassword4" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="inputAddress" placeholder="Subject"/>
  </div>
  <div className="form-group">
    <input type="textarea" className="form-control modifiedtextarea" id="inputAddress2" placeholder="Message"/>
  </div>
  <button type="submit" className="btn btn-primary modifiedbutton">SEND</button>
</form>
</div>
</div>
</div>
</div>
)
}
}