import React, { Component } from 'react'
import City from './../components/City'
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
          <City name="蚌埠" imgSrc={require("./../asserts/images/bengbu.jpeg")} link="https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0/193105?fr=aladdin" />
          <City name="上海" imgSrc={require("./../asserts/images/shanghai.jpeg")} link="https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7/114606" />
        </div>
        <div className="row">
          <City name="金华" imgSrc={require("./../asserts/images/bengbu.jpeg")} link="https://baike.baidu.com/item/%E8%9A%8C%E5%9F%A0/193105?fr=aladdin" />
          <City name="苏州" imgSrc={require("./../asserts/images/shanghai.jpeg")} link="https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7/114606" />
        </div>
      </div>
    )
  }
}

export default BeenPlaces