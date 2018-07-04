import React, { Component } from 'react'
import './../styles/EducationalBackground.scss'

class EducationalBackground extends Component {
  constructor(props) {
    super(props)

    this.show = this.show.bind(this)
  }

  show() {
    let nodes = this.dom.querySelectorAll('p:not(.major)')
    let majorLeft = this.dom.querySelector('p.major :first-child')
    let majorRight = this.dom.querySelector('p.major :last-child')
    nodes.forEach(node => {
      node.classList.add('bounceInUp')
    })
    majorLeft.classList.add('slideInLeft')
    majorRight.classList.add('slideInRight')
  }

  hide() {
    let nodes = this.dom.querySelectorAll('p:not(.major)')
    let majorLeft = this.dom.querySelector('p.major :first-child')
    let majorRight = this.dom.querySelector('p.major :last-child')
    nodes.forEach(node => {
      node.classList.remove('bounceInUp')
    })
    majorLeft.classList.remove('slideInLeft')
    majorRight.classList.remove('slideInRight')
  }

  render() {
    return (
      <div className={this.props.className + ' EducationalBackground'} ref={dom => this.dom = dom}>
        <h2 className="text-center text-shadow">{this.props.title}</h2>
        <p className="major text-shadow">
          <span>软件工程</span>
          <span>2013.9-2017.7</span>
        </p>
        <p>安徽工业大学： 普通全日制一本院校，省属重点院校</p>
        <p>获得奖项： 省级算法比赛京胜杯一等奖，蓝桥杯二等奖</p>
        <p>英语能力： CET - 4</p>
      </div>
    )
  }
}

export default EducationalBackground