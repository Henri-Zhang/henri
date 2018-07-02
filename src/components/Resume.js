import React, { Component } from 'react'
import { Fullpage, Slide } from 'fullpage-react'
import Raining from './Raining'
import SelfEvaluation from './SelfEvaluation'
import SkillsCloud from './SkillsCloud'
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
    '#e6727c',
    '#0798ec',
    '#fc6c7c',
    '#fec401',
    '#74d874'
  ]

  childComponents = [
    ['raining'],
    [],
    [],
    [],
    ['selfEvaluation']
  ]

  constructor(props) {
    super(props)

    let anchor = (parseInt(window.location.hash.replace("#", ""), 10) || 0) % 5

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
    this.hideSlide = this.hideSlide.bind(this)
    this.showSlide = this.showSlide.bind(this)
  }

  componentDidMount() {
    this.initLangToggle()
    this.updateAnchors(this.state.active.Fullpage)

    setTimeout(() => {
      this.showSlide(this.state.active.Fullpage)
    }, 0);
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

    this.hideSlide(newState.lastActive)
    this.showSlide(newState.activeSlide)
  }

  locate(event) {
    let index = parseInt(event.target.getAttribute('data-slideindex'), 10)
    changeFullpageSlide(index)
  }

  hideSlide(index) {
    this.childComponents[index].forEach(componentName => {
      let component = this.refs[componentName]
      if (component) {
        component.hide()
      }
    })
  }

  showSlide(index) {
    this.childComponents[index].forEach(componentName => {
      let component = this.refs[componentName]
      if (component) {
        component.show()
      }
    })
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
      <Slide style={{backgroundColor: this.slidesColor[0]}}>
        <Raining ref="raining" />
        <div className="container basic-info absoulte-center">
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-3 photo-container">
              <img className="photo" src={require("./../asserts/images/portrait.jpg")} alt={intl.get('photo').defaultMessage('photo')} />
            </div>
            <div className="col-md-3 names">
              <div>
                <h1 className="name">张  恒</h1>
                <h2 className="name">Henri Zhang</h2>
              </div>
            </div>
          </div>
          <div className="row infos">
            <div className="col-md-3">
              <img className="icon" src={require('./../asserts/icons/Resume/calendar.svg')} alt={intl.get('birthday').defaultMessage('birthday')}/>
              <span className="info">1994.07.18</span>
            </div>
            <div className="col-md-3">
              <img className="icon" src={require('./../asserts/icons/Resume/location.svg')} alt={intl.get('location').defaultMessage('location')}/>
              <span className="info">Shanghai</span>
            </div>
            <div className="col-md-3">
              <img className="icon" src={require('./../asserts/icons/Resume/phone.svg')} alt={intl.get('phone').defaultMessage('phone')}/>
              <span className="info">15755503230</span>
            </div>
            <div className="col-md-3">
              <a href="mailto:henrizhang@henri.ren">
                <img className="icon" src={require('./../asserts/icons/Resume/email.svg')} alt={intl.get('email').defaultMessage('email')}/>
                <span className="info">henrizhang@henri.ren</span>
              </a>
            </div>
          </div>
        </div>
      </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[1]}}>
        <video className="background-video" loop="loop" autoPlay muted="muted">
          <source src="http://cdn.moji.com/websrc/video/video2018summer.mp4" type="video/mp4" />
        </video>
        <div className="absoulte-center">
          <h2>安徽工业大学</h2>
        </div>
      </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[2]}}>
        <div className="absoulte-center">
          <h2>{intl.get('project-experience').defaultMessage('Project experience')}</h2>
        </div>
      </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[3]}}>
        <div className="absoulte-center professional-skills">
          <h1>{intl.get('professional-skills').defaultMessage('Professional Skills')}</h1>
          <SkillsCloud />
        </div>
      </Slide>,
      <Slide style={{backgroundColor: this.slidesColor[4]}}>
        <SelfEvaluation
          className="absoulte-center"
          title={intl.get('self-evaluation').defaultMessage('Self Evaluation')}
          ref="selfEvaluation"
          content="轻度前端成瘾者。一年前左右开始专心学习前端，平时喜欢搜寻简约漂亮的网页和酷炫狂拽的特效，并思考和尝试实现。遇到不了解的前端技术，能够主动积极去学习，甘之如饴。日后打算深耕前端领域，力求早日能够独当一面。"
        />
      </Slide>
    ]

    return (
      <div className="resume-container">
        <nav className="navbar navbar-default fixed-top">
          <ul className="lang-toggle" ref="langToggle">
            <li data-value="en" onClick={this.changeLanguage}>
              <img className="flag" src={require('./../asserts/icons/Resume/Britain_flag.svg')} alt="English" />
              <span>English</span>
            </li>
            <li data-value="zh" onClick={this.changeLanguage}>
              <img className="flag" src={require('./../asserts/icons/Resume/China_flag.svg')} alt="中文" />
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
            <span className="tip">{intl.get('basic-information').defaultMessage('Basic Information')}</span>
            <a href="#0" data-slideindex="0" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">{intl.get('educational-background').defaultMessage('Educational Background')}</span>
            <a href="#1" data-slideindex="1" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">{intl.get('project-experience').defaultMessage('Project experience')}</span>
            <a href="#2" data-slideindex="2" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">{intl.get('professional-skills').defaultMessage('Professional Skills')}</span>
            <a href="#3" data-slideindex="3" onClick={this.locate}> </a>
          </li>
          <li>
            <span className="tip">{intl.get('self-evaluation').defaultMessage('Self Evaluation')}</span>
            <a href="#4" data-slideindex="4" onClick={this.locate}> </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Resume
