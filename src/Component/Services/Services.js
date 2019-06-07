import React, { Component } from 'react';
import ServicesSectionOne from './SectionOne/SectionOne';
import ServicesSectionTwo from './SectionTwo/SectionTwo';

export default class Services extends Component {
  render() {
    return (
      <div>
        <ServicesSectionOne/>
        <ServicesSectionTwo/>
      </div>
    )
  }
}
