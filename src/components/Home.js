import React, { Component } from 'react'
// eslint-disable-next-line
import axios from 'axios'
// eslint-disable-next-line
import Visitors from './../engine/Visitors'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import Footer from './Footer'
import TopButton from './TopButton'
import './../styles/Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {scrolled : false}
    this.navbarScroll = this.navbarScroll.bind(this)
  }

  componentWillMount() {
    // axios.get('https://ipapi.co/json').then(response => {
    //   Visitors.addVisitor(response.data)
    // })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarScroll)
    this.refs.carouselUl.childNodes.forEach(item => {
      item.addEventListener('click', this.carouselChange)
    })
  }

  navbarScroll = (event) => {
    let distance = document.documentElement.scrollTop
    if (distance > 200 && !this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }))
    } else if (distance <= 200 && this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }))
    }
  }

  carouselPrev = event => {
    let fisrtChild = this.refs.carouselUl.children[0]
    this.refs.carouselUl.appendChild(fisrtChild)
  }

  carouselNext = event => {
    let fisrtChild = this.refs.carouselUl.children[0]
    let lastChild = this.refs.carouselUl.children[this.refs.carouselUl.children.length - 1]
    this.refs.carouselUl.insertBefore(lastChild, fisrtChild)
  }

  carouselChange = event => {
    let index
    this.refs.carouselUl.childNodes.forEach((item, i) => {
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
          <h1 className="nav navbar-nav">Welcome to my site</h1>
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
              <ul className="items-container" ref="carouselUl">
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/jog.png?Expires=1531961318&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=%2B%2FZ5RvPzPfab76mUPpRjftMyWoM%3D" alt="jog" />
                  <div className="name">Jog</div>
                </li>
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/delicacy.png?Expires=1531961356&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=OLWJ9I7KycmE9jYMzKKYC%2FqCC8M%3D" alt="delicacy" />
                  <div className="name">Delicacy</div>
                </li>
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/travel.png?Expires=1531961378&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=oEr%2FWCLO4odJcotcT%2FA0ZY%2FLubo%3D" alt="travel" />
                  <div className="name">Travel</div>
                </li>
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/movie.png?Expires=1531961396&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=DL%2Fzyrdly2%2Bq%2BsPNjjafUA10ewE%3D" alt="movie" />
                  <div className="name">Movie</div>
                </li>
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/swim.png?Expires=1531961414&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=XYuh1%2BgvYQJj2A3DiZJc%2Bow7cHQ%3D" alt="swim" />
                  <div className="name">Swim</div>
                </li>
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/music.png?Expires=1531961436&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=Zmz0CHentdG4hRiWBQxPF%2BNoL9c%3D" alt="music" />
                  <div className="name">Music</div>
                </li>
                <li className="item">
                  <img src="https://henri.oss-cn-hangzhou.aliyuncs.com/cycling.png?Expires=1531961454&OSSAccessKeyId=TMP.AQE8oRS3Njrt3UiZcLMG0WyxKkn1JazaDpqocTeT2uQQpJpn00k8EQ46ASWeADAtAhQgM-wzvAGy3PWFZuknZIZ8JIfG8wIVAOQ_pRQWvovXl7lTnbO9ZJb12VwC&Signature=54twHxEnz8EJAZNu0hLGBrxwtK8%3D" alt="cycling" />
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
                  <li>
                    <Link to="/resume">My resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <TopButton />
      </div>
    )
  }

}

export default Home
