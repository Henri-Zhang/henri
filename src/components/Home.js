import React, { Component } from 'react'
import axios from 'axios'
// eslint-disable-next-line
import Visitors from './../engine/Visitors'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import Footer from './../components/Footer'
import TopButton from './../components/TopButton'
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
        <Footer />
        <TopButton />
      </div>
    )
  }

}

export default Home
