import React, { Component } from 'react'
import {ScrollToTopOnMount, SectionsContainer, Section, Header, Footer} from 'react-fullpage'

class Resume extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    }

    return (
      <div>
        <ScrollToTopOnMount />
        <Header>
          <h1>Skiing....</h1>
        </Header>
        <SectionsContainer {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    )
  }
}

export default Resume
