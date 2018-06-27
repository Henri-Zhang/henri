import React, { Component } from 'react'
import City from './City'
import Footer from './Footer'
import TopButton from './TopButton'
import './../styles/BeenPlaces.scss'

class BeenPlaces extends Component {

  scrollToAnchor = (anchor) => {
    let element = document.getElementById(anchor)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  render() {
    return (
      <div>
        <div className="container cities-containter">
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
            <City name="金华" imgSrc={require("./../asserts/images/jinhua.jpeg")} link="https://baike.baidu.com/item/%E9%87%91%E5%8D%8E/559971?fr=aladdin" />
            <City name="苏州" imgSrc={require("./../asserts/images/suzhou.jpeg")} link="https://baike.baidu.com/item/苏州/122945" />
          </div>
          <div className="row">
            <City name="厦门" imgSrc={require("./../asserts/images/xiamen.jpeg")} link="https://baike.baidu.com/item/%E5%8E%A6%E9%97%A8" />
            <City name="嘉兴" imgSrc={require("./../asserts/images/jiaxing.jpeg")} link="https://baike.baidu.com/item/%E5%98%89%E5%85%B4/29733" />
          </div>
          <div className="row">
            <City name="无锡" imgSrc={require("./../asserts/images/wuxi.jpeg")} link="https://baike.baidu.com/item/%E6%97%A0%E9%94%A1/135983" />
            <City name="马鞍山" imgSrc={require("./../asserts/images/maanshan.jpeg")} link="https://baike.baidu.com/item/%E9%A9%AC%E9%9E%8D%E5%B1%B1/13144" />
          </div>
          <div className="row">
            <City name="温州" imgSrc={require("./../asserts/images/wenzhou.jpeg")} link="https://baike.baidu.com/item/%E6%B8%A9%E5%B7%9E" />
            <City name="兰州" imgSrc={require("./../asserts/images/lanzhou.jpeg")} link="https://baike.baidu.com/item/%E5%85%B0%E5%B7%9E/170826" />
          </div>
          <div className="row">
            <City name="舟山" imgSrc={require("./../asserts/images/zhoushan.jpeg")} link="https://baike.baidu.com/item/%E8%88%9F%E5%B1%B1" />
            <City name="芜湖" imgSrc={require("./../asserts/images/wuhu.jpeg")} link="https://baike.baidu.com/item/%E8%8A%9C%E6%B9%96/222481" />
          </div>
          <div className="row">
            <City name="南通" imgSrc={require("./../asserts/images/nantong.jpeg")} link="https://baike.baidu.com/item/%E5%8D%97%E9%80%9A/106072" />
            <City name="杭州" imgSrc={require("./../asserts/images/hangzhou.jpeg")} link="https://baike.baidu.com/item/%E6%9D%AD%E5%B7%9E/147639" />
          </div>
          <div className="row">
            <City name="合肥" imgSrc={require("./../asserts/images/hefei.jpeg")} link="https://baike.baidu.com/item/%E5%90%88%E8%82%A5/210419?fr=aladdin" />
            <City name="日照" imgSrc={require("./../asserts/images/rizhao.jpeg")} link="https://baike.baidu.com/item/%E6%97%A5%E7%85%A7/25195" />
          </div>
          <div className="row">
            <City name="黄山" imgSrc={require("./../asserts/images/huangshan.jpeg")} link="https://baike.baidu.com/item/黄山/4111776" />
            <City name="南京" imgSrc={require("./../asserts/images/nanjing.jpeg")} link="https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC/23952" />
          </div>
          <div className="row">
            <City name="连云港" imgSrc={require("./../asserts/images/lianyungang.jpeg")} link="https://baike.baidu.com/item/%E8%BF%9E%E4%BA%91%E6%B8%AF/177420" />
            <City name="湖州" imgSrc={require("./../asserts/images/huzhou.jpeg")} link="https://baike.baidu.com/item/%E6%B9%96%E5%B7%9E/209713" />
          </div>
          <div className="row">
            <City name="武汉" imgSrc={require("./../asserts/images/wuhan.jpeg")} link="https://baike.baidu.com/item/%E6%AD%A6%E6%B1%89/106764" />
            <City name="青岛" imgSrc={require("./../asserts/images/qingdao.jpeg")} link="https://baike.baidu.com/item/%E9%9D%92%E5%B2%9B/60244?fr=aladdin" />
          </div>
          <div className="row">
            <City name="扬州" imgSrc={require("./../asserts/images/yangzhou.jpeg")} link="https://baike.baidu.com/item/%E6%89%AC%E5%B7%9E/6255" />
          </div>
        </div>
        <Footer />
        <TopButton />
      </div>
    )
  }
}

export default BeenPlaces