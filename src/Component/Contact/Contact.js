import React, { Component } from 'react'
import ContactSectionOne from './SectionOne/SectionOne';
import ContactSectionTwo from './SectionTwo/SectionTwo';
import ContactSectionThree from './SectionThree/SectionThree';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ContactSectionOne/>
        <ContactSectionTwo/>
        <ContactSectionThree/>
      </div>
    )
  }
}
