import React, { Component } from 'react'
import {ScrollToTopOnMount, SectionsContainer, Section, Header} from 'react-fullpage'
import { Link } from "react-router-dom"
import intl from 'react-intl-universal'
import './../styles/Resume.scss'

const locales = {
  'en': require('./../i18n/Resume/en.json'),
  'zh': require('./../i18n/Resume/zh.json')
}

class Resume extends Component {
  constructor(props) {
    super(props)

    this.state = {currentLocale: intl.determineLocale({urlLocaleKey: "lang"}).substr(0, 2)}
    intl.init({
      currentLocale: this.state.currentLocale,
      locales
    })

    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage() {
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
          <select className="lang-select" onChange={this.changeLanguage} defaultValue={this.state.currentLocale} ref="lang_selector">
            <option value="en">English</option>
            <option value="zh">中文</option>
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
