import React, { Component } from 'react'
import './../styles/Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title">Make firends with me</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <img className="portrait rounded-circle" src="https://henri.oss-cn-hangzhou.aliyuncs.com/portrait.jpg" alt="Henri" />
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
                    <img className="icon" src={require('./../asserts/icons/Footer/email.svg')} alt="email" />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://github.com/LikedBlack" target="_blank">
                    <img className="icon" src={require('./../asserts/icons/Footer/github.svg')} alt="github" />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.zhihu.com/people/zhang-heng-78-10/activities" target="_blank">
                    <img className="icon" src={require('./../asserts/icons/Footer/zhihu.svg')} alt="zhihu" />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank" data-toggle="popover">
                    <div className="popover bs-popover-top">
                      <div className="arrow"></div>
                      <img alt="Wechat QR code" src={require("./../asserts/images/wechat_QRcode.jpg")} />
                    </div>
                    <img className="icon" src={require('./../asserts/icons/Footer/wechat.svg')} alt="wechat" />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://user.qzone.qq.com/371595867" target="_blank">
                    <img className="icon" src={require('./../asserts/icons/Footer/qzone.svg')} alt="qzone" />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://weibo.com/5214776283/profile"  target="_blank">
                    <img className="icon" src={require('./../asserts/icons/Footer/weibo.svg')} alt="weibo" />
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
    )
  }
}

export default Footer