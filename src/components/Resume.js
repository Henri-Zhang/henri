import React, { Component } from 'react'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'
import { Link } from "react-router-dom"
import intl from 'react-intl-universal'
import './../styles/Resume.scss'

const locales = {
  'en': require('./../i18n/Resume/en.json'),
  'zh': require('./../i18n/Resume/zh.json')
}

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
}

class Resumee extends Component {
  slidesColor = [
    '#ff5f45',
    '#0798ec',
    '#fc6c7c',
    '#fec401'
  ]

  constructor(props) {
    super(props)

    this.state = {
      currentLocale: intl.determineLocale({urlLocaleKey: "lang"}).substr(0, 2),
      active: {
        Fullpage: 0,
        horizontalSlider: 0
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

  onSlideChangeEnd(name, props, state, newState) {
    console.log(name)
    console.log(props)
    console.log(state)
    console.log(newState)
    this.updateLangToggle(newState.activeSlide)
  }

  render() {
    const fullPageOptions = {
      // for mouse/wheel events
      // represents the level of force required to generate a slide change on non-mobile, 10 is default
      scrollSensitivity: 7,

      // for touchStart/touchEnd/mobile scrolling
      // represents the level of force required to generate a slide change on mobile, 10 is default
      touchSensitivity: 7,
      scrollSpeed: 500,
      hideScrollBars: true,
      enableArrowKeys: true
    }

    const horizontalSliderProps = {
      name: 'horizontalSlider', // name is required
      infinite: true, // enable infinite scrolling
    };

    const horizontalSlides = [
      <Slide> Slide 2.1 </Slide>,
      <Slide> Slide 2.2 </Slide>
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const slides = [
      <Slide style={{backgroundColor: this.slidesColor[0]}}> Slide 1 </Slide>,
      <HorizontalSlider {...horizontalSliderProps} style={{backgroundColor: this.slidesColor[1]}}></HorizontalSlider>,
      <Slide style={{backgroundColor: this.slidesColor[2]}}> Slide 3 </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[3]}}> Slide 4 </Slide>
    ];
    fullPageOptions.slides = slides;

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
      </div>
    )
  }
}

export default Resumee
