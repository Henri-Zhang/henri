import React, { Component } from 'react'
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage'
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
    this.initLangToggle = this.initLangToggle.bind(this)
  }

  componentDidMount() {
    this.initLangToggle()
  }

  changeLanguage(event) {
    let liNode = event.target
    while (liNode.nodeName !== 'LI') {
      liNode = liNode.parentNode
    }
    window.location.search = `?lang=${liNode.getAttribute('data-value')}`
  }

  initLangToggle() {
    let currentLocale = this.state.currentLocale
    this.refs.langToggle.childNodes.forEach(item => {
      let value = item.getAttribute('data-value')
      if (currentLocale === value) {
        item.classList.add('active')
      } else {
        item.classList.add('inactive')
      }
    })

    this.updateLangToggle().call()
  }

  updateLangToggle() {
    return () => {
      console.log("xxxxxx")
    }
  }

  render() {
    let options = {
      className: 'section-container',
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      sectionsColor:        ['black', 'black', 'black', 'black'],
      activeClass:          'active',
      activeSection:        0,
      scrollBar:            false,
      navigation:           true,
      slidesNavPosition:   'left',
      scrollingSpeed:       300,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      keyboardScrolling:    true,
      navigationTooltips:   ['One', 'Two', 'Three', 'Four'],
      showActiveTooltip:    true,
      arrowNavigation:      true,
      scrollCallback:       this.updateLangToggle(),
    }

    return (
      <div className="resume-container">
        <ScrollToTopOnMount />
        <nav className="navbar navbar-default fixed-top">
          <ul className="lang-toggle" ref="langToggle">
            <li data-value="en" onClick={this.changeLanguage}>
              <img className="flag" src={require('./../asserts/icons/Britain_flag.svg')} alt="English" />
              <span>English</span>
            </li>
            <li data-value="zh" onClick={this.changeLanguage}>
              <img className="flag" src={require('./../asserts/icons/China_flag.svg')} alt="中文" />
              <span>中文</span>
            </li>
          </ul>
          <ul>
            <li>
              <a href={require('./../asserts/documents/resume.pdf')} target="_blank">{intl.get('pdf-version').defaultMessage('PDF Version')}</a>
            </li>
            <li>
              <Link to="/">{intl.get('homepage').defaultMessage('Homepage')}</Link>
            </li>
          </ul>
        </nav>
        <SectionsContainer {...options}>
          <Section color="#ff5f45" verticalAlign="true" >Page 1</Section>
          <Section color="#0798ec">Page 2</Section>
          <Section color="#fc6c7c">Page 3</Section>
          <Section color="#fec401">Page 4</Section>
        </SectionsContainer>
      </div>
    )
  }
}

export default Resume
