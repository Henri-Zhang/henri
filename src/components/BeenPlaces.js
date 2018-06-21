import React, { Component } from 'react'
import Tool from './../engine/Tool'
import './../styles/BeenPlaces.scss'

class BeenPlaces extends Component {
  componentDidMount() {
    let cityNodes = document.getElementsByClassName('city')
    for (let node of cityNodes) {
      node.style.backgroundColor = Tool.getRandomColor()
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center title">The places I've been to</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 city">
            <div className="image-background">
              <img src={require("./../asserts/images/bengbu.jpeg")} alt="蚌埠" />
            </div>
            <div className="fill-up hover-in">
              <h1 className="city-name">蚌埠</h1>
            </div>
            <a className="fill-up city-link" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0/193105?fr=aladdin" target="_blank">蚌埠</a>
          </div>
          <div className="col-md-6 city">
            <div className="image-background">
              <img src={require("./../asserts/images/shanghai.jpeg")} alt="上海" />
            </div>
            <div className="fill-up hover-in">
              <h1 className="city-name">上海</h1>
            </div>
            <a className="fill-up city-link" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7/114606" target="_blank">上海</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 city">
            <div className="image-background">
              <img src={require("./../asserts/images/bengbu.jpeg")} alt="金华" />
            </div>
            <div className="fill-up hover-in">
              <h1 className="city-name">金华</h1>
            </div>
            <a className="fill-up city-link" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0/193105?fr=aladdin" target="_blank">金华</a>
          </div>
          <div className="col-md-6 city">
            <div className="image-background">
              <img src={require("./../asserts/images/suzhou.jpeg")} alt="苏州" />
            </div>
            <div className="fill-up hover-in">
              <h1 className="city-name">苏州</h1>
            </div>
            <a className="fill-up city-link" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7/114606" target="_blank">苏州</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BeenPlaces