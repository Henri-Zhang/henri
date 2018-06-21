import React, { Component } from 'react'
import axios from 'axios'
import Visitors from './../engine/Visitors'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import emailIcon from './../asserts/icons/email.svg'
import githubIcon from './../asserts/icons/github.svg'
import qzoneIcon from './../asserts/icons/qzone.svg'
import wechatIcon from './../asserts/icons/wechat.svg'
import weiboIcon from './../asserts/icons/weibo.svg'
import zhihuIcon from './../asserts/icons/zhihu.svg'
import './../styles/Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {scrolled : false}
    this.navbarScroll = this.navbarScroll.bind(this)
  }

  componentWillMount() {
    axios.get('https://ipapi.co/json').then(response => {
      // Visitors.addVisitor(response.data)
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarScroll)
    this.refs.carousel_ul.childNodes.forEach(item => {
      item.addEventListener('click', this.carouselChange)
    })
  }

  navbarScroll = (event) => {
    let distance = document.documentElement.scrollTop
    let topButton = document.getElementById('top')
    if (distance > 200 && !this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }))

      if (topButton) {
        topButton.classList.add('fade-in')
        topButton.classList.remove('fade-out')
      }
    } else if (distance <= 200 && this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }))

      if (topButton) {
        topButton.classList.add('fade-out')
        topButton.classList.remove('fade-in')
      }
    }
  }

  backToTop = (event) => {
    let timer = setInterval(() => {
      let currentScrollTop = document.documentElement.scrollTop
      let distance = Math.ceil(currentScrollTop / 10)
      document.documentElement.scrollTop = currentScrollTop - distance

      if (document.documentElement.scrollTop <= 0) {
        clearInterval(timer)
      }
    }, 20)
  }

  carouselPrev = event => {
    let fisrtChild = this.refs.carousel_ul.children[0]
    this.refs.carousel_ul.appendChild(fisrtChild)
  }

  carouselNext = event => {
    let fisrtChild = this.refs.carousel_ul.children[0]
    let lastChild = this.refs.carousel_ul.children[this.refs.carousel_ul.children.length - 1]
    this.refs.carousel_ul.insertBefore(lastChild, fisrtChild)
  }

  carouselChange = event => {
    let index
    this.refs.carousel_ul.childNodes.forEach((item, i) => {
      if (event.target.parentNode === item) {
        index = i
      }
    })

    while (index !== 3) {
      if (index < 3) {
        this.carouselNext()
        index++
      } else {
        this.carouselPrev()
        index--
      }
    }
  }

  render() {
    return (
      <div>
        <nav className={this.state.scrolled ? "navbar navbar-default fixed-top scrolled" : "navbar navbar-default fixed-top"} onScroll={this.navbarScroll}>
          <a className="brand" href="/" target="_blank">
            <img src={require("./../asserts/images/logo.png")} alt="henri.ren" />
            <span>
              <strong>henri</strong>.ren
            </span>
          </a>
          <h1 className="nav navbar-nav navbar-right">Welcome to my site</h1>
        </nav>
        <div className="home-main">
          <div className="background">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 item">
                  <h1>Nice to meet you</h1>
                  <h2>And my name is Henri</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies-interests">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title">My hobbies and interests</div>
              </div>
            </div>
            <div className="row carousel">
              <a className="slide-arrow prev" onClick={this.carouselPrev}>
                <FontAwesome name="arrow-left" />
              </a>
              <ul className="items-container" ref="carousel_ul">
                <li className="item">
                  <img src={require("./../asserts/images/jog.png")} alt="jog" />
                  <div className="name">Jog</div>
                </li>
                <li className="item">
                  <img src={require("./../asserts/images/delicacy.png")} alt="delicacy" />
                  <div className="name">Delicacy</div>
                </li>
                <li className="item">
                  <img src={require("./../asserts/images/travel.png")} alt="travel" />
                  <div className="name">Travel</div>
                </li>
                <li className="item">
                  <img src={require("./../asserts/images/movie.png")} alt="movie" />
                  <div className="name">Movie</div>
                </li>
                <li className="item">
                  <img src={require("./../asserts/images/swim.png")} alt="swim" />
                  <div className="name">Swim</div>
                </li>
                <li className="item">
                  <img src={require("./../asserts/images/music.png")} alt="music" />
                  <div className="name">Music</div>
                </li>
                <li className="item">
                  <img src={require("./../asserts/images/cycling.png")} alt="cycling" />
                  <div className="name">Cycling</div>
                </li>
              </ul>
              <a className="slide-arrow next" onClick={this.carouselNext}>
                <FontAwesome name="arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="learn-more">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title">Wanna know more about me?</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="tip">Click here</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ul>
                  <li>
                    <Link to="/been-places">The places I've been to</Link>
                  </li>
                  <li>
                    <Link to="/running-story">My running story</Link>
                  </li>
                  <li style={{"display":"none"}}>
                    <Link to="/resume">My resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title">Make firends with me</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex justify-content-center">
                <img className="portrait rounded-circle" src={require("./../asserts/images/portrait.jpg")} alt="Henri" />
                <div className="brief-introduction">
                  <p>Screen name: 漫长。</p>
                  <p>Age: 23</p>
                  <p>Region: Shanghai</p>
                </div>
              </div>
              <div className="col-lg-8 d-flex">
                <ul className="personal-links">
                  <li>
                    <a rel="noopener noreferrer" href="mailto:henrizhang@henri.ren">
                      <img className="icon" src={emailIcon} alt="email" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://github.com/LikedBlack" target="_blank">
                      <img className="icon" src={githubIcon} alt="github" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://www.zhihu.com/people/zhang-heng-78-10/activities" target="_blank">
                      <img className="icon" src={zhihuIcon} alt="zhihu" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" target="_blank" data-toggle="popover">
                      <div className="popover bs-popover-top">
                        <div className="arrow"></div>
                        <img alt="Wechat QR code" src={require("./../asserts/images/wechat_QRcode.jpg")} />
                      </div>
                      <img className="icon" src={wechatIcon} alt="wechat" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://user.qzone.qq.com/371595867" target="_blank">
                      <img className="icon" src={qzoneIcon} alt="qzone" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://weibo.com/5214776283/profile"  target="_blank">
                      <img className="icon" src={weiboIcon} alt="weibo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright">
                  <span>© 2018 henri.ren All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="top" className="top rounded-circle" onClick={this.backToTop}>
          <FontAwesome name="chevron-up" />
          <span>TOP</span>
        </div>
      </div>
    )
  }

}

export default Home
