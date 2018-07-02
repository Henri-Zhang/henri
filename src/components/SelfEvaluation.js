import React, { Component } from 'react'
import './../styles/SelfEvaluation.scss'

class SelfEvaluation extends Component {
  timer = null

  show() {
    let text = this.refs.text
    let string = this.props.content
    let sub = ''
    this.timer = setInterval(() => {
      if (sub.length >= string.length) {
        clearInterval(this.timer)
      }
      text.innerHTML = string.substr(0, sub.length + 1)
      sub = text.innerHTML
    }, 100)
  }

  hide() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }

    this.refs.text.innerHTML = ''
  }

  render() {
    return (
      <div className={this.props.className + ' SelfEvaluation'}>
        <h1>{this.props.title}</h1>
        <p className="blink" ref="text"></p>
      </div>
    )
  }
}

export default SelfEvaluation