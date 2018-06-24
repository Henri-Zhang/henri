import React, { Component } from 'react'
import {ScrollToTopOnMount, SectionsContainer, Section, Header} from 'react-fullpage'
import { Link } from "react-router-dom"
import intl from 'react-intl-universal'
import './../styles/Resume.scss'

const locales = {
  'en-US': require('./../i18n/Resume/en-US.json'),
  'zh-CN': require('./../i18n/Resume/zh-CN.json'),
  'en': require('./../i18n/Resume/en-US.json'),
  'zh': require('./../i18n/Resume/zh-CN.json')
}

class Resume extends Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
    console.log(this.props.match)
    intl.init({
      currentLocale: intl.determineLocale({urlLocaleKey: "lang"}),
      locales
    })
  }

  change() {
    window.location.search = `?lang=${this.refs.lang_selector.value}`;
  }

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
      <div className="resume-container">
        <ScrollToTopOnMount />
        <Header>
          <select className="lang-select" onChange={this.change} ref="lang_selector">
            <option value>None</option>
            <option value="en-US">English</option>
            <option value="zh-CN">中文</option>
          </select>
          <ul className="menu">
            <li>
              <a href={require('./../asserts/documents/resume.pdf')} target="_blank">{intl.get('pdf-version').defaultMessage('PDF Versionn')}</a>
            </li>
            <li>
              <Link to="/">{intl.get('homepage').defaultMessage('Homepagee')}</Link>
            </li>
          </ul>
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
