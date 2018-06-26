import React, { Component } from 'react'
import { Fullpage, Slide } from 'fullpage-react'
import { Link } from "react-router-dom"
import intl from 'react-intl-universal'
import './../styles/Resume.scss'

const locales = {
  'en': require('./../i18n/Resume/en.json'),
  'zh': require('./../i18n/Resume/zh.json')
}

const { changeFullpageSlide } = Fullpage;

class Resume extends Component {
  slidesColor = [
    '#ff5f45',
    '#0798ec',
    '#fc6c7c',
    '#fec401'
  ]

  constructor(props) {
    super(props)

    let anchor = (parseInt(window.location.hash.replace("#", ""), 10) || 0) % 4

    this.state = {
      currentLocale: intl.determineLocale({urlLocaleKey: "lang"}).substr(0, 2),
      active: {
        Fullpage: anchor
      }
    }

    intl.init({
      currentLocale: this.state.currentLocale,
      locales
    })

    this.changeLanguage = this.changeLanguage.bind(this)
    this.initLangToggle = this.initLangToggle.bind(this)
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this)
  }

  componentDidMount() {
    this.initLangToggle()
    this.updateAnchors(this.state.active.Fullpage)
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

    this.updateLangToggle(this.state.active.Fullpage)
  }

  updateLangToggle(activeSlide) {
    let fontColor = this.slidesColor[activeSlide]

    this.refs.langToggle.childNodes.forEach(item => {
      if (item.className.match(new RegExp("(\\s|^)active(\\s|$)"))) {
        item.style.color = fontColor
      }
    })
  }

  updateAnchors(activeSlide) {
    let lis = this.refs.anchors.childNodes
    if (lis) {
      lis.forEach(li => {
        li.classList.remove('active')
      })
    }

    lis[activeSlide].classList.add('active')

    window.location.hash = activeSlide
  }

  onSlideChangeEnd(name, props, state, newState) {
    console.log(name)
    console.log(props)
    console.log(state)
    console.log(newState)
    this.updateLangToggle(newState.activeSlide)
    this.updateAnchors(newState.activeSlide)
  }

  locate(event) {
    changeFullpageSlide(parseInt(event.target.getAttribute('data-slideindex'), 10))
  }

  render() {
    const fullPageOptions = {
      scrollSensitivity: 2,
      touchSensitivity: 2,
      scrollSpeed: 300,
      activeSlide: this.state.active.Fullpage,
      resetSlides: true,
      hideScrollBars: true,
      enableArrowKeys: true
    }

    fullPageOptions.slides = [
      <Slide style={{backgroundColor: this.slidesColor[0]}}> Slide 1 </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[1]}}> Slide 2 </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[2]}}> Slide 3 </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[3]}}> Slide 4 </Slide>
    ]

    return (
      <div className="resume-container">
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
        <Fullpage {...fullPageOptions} onSlideChangeEnd={this.onSlideChangeEnd} />
        <ul className="anchors" ref="anchors">
          <li>
            <span className="tip">One</span>
            <a href="#0" data-slideindex="0" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">Two</span>
            <a href="#1" data-slideindex="1" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">Three</span>
            <a href="#2" data-slideindex="2" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">Four</span>
            <a href="#3" data-slideindex="3" onClick={this.locate}> </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Resume
