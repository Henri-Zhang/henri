import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'
import './../styles/TopButton.scss'

class TopButton extends Component {
  constructor(props) {
    super(props)
    this.state = {scrolled : false}
    this.navbarScroll = this.navbarScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.navbarScroll, 200))
  }

  navbarScroll = () => {
    let distance = document.documentElement.scrollTop
    let topButton = this.refs.topButton
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

  render() {
    return (
      <div id="top" className="top rounded-circle" onClick={this.backToTop} ref="topButton">
        <FontAwesome name="chevron-up" />
        <span>TOP</span>
      </div>
    )
  }
}

export default TopButton
