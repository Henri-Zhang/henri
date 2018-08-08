import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from './../styles/EducationalBackground.scss'

class EducationalBackground extends Component {
  constructor(props) {
    super(props)

    this.show = this.show.bind(this)
  }

  show() {
    let nodes = this.dom.querySelectorAll(`p:not(.${styles.major})`)
    let majorLeft = this.dom.querySelector(`p.${styles.major} :first-child`)
    let majorRight = this.dom.querySelector(`p.${styles.major} :last-child`)
    let title = this.dom.querySelector('h2')
    nodes.forEach(node => {
      node.classList.add(styles.bounceInUp)
    })
    majorLeft.classList.add(styles.slideInLeft)
    majorRight.classList.add(styles.slideInRight)
    title.classList.add(styles.zoomIn)
  }

  hide() {
    let nodes = this.dom.querySelectorAll(`p:not(.${styles.major})`)
    let majorLeft = this.dom.querySelector(`p.${styles.major} :first-child`)
    let majorRight = this.dom.querySelector(`p.${styles.major} :last-child`)
    let title = this.dom.querySelector('h2')
    nodes.forEach(node => {
      node.classList.remove(styles.bounceInUp)
    })
    majorLeft.classList.remove(styles.slideInLeft)
    majorRight.classList.remove(styles.slideInRight)
    title.classList.remove(styles.zoomIn)
  }

  render() {
    return (
      <div className={classNames(this.props.className, styles['educational-background'])} ref={dom => this.dom = dom}>
        <h2 className={classNames(styles['text-shadow'], 'text-center')}>{this.props.title}</h2>
        <p className={classNames(styles['text-shadow'], styles.major)}>
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

export default CSSModules(EducationalBackground, styles)