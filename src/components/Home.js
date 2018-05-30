import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import emailIcon from './../asserts/icons/email.svg';
import githubIcon from './../asserts/icons/github.svg';
import qzoneIcon from './../asserts/icons/qzone.svg';
import wechatIcon from './../asserts/icons/wechat.svg';
import weiboIcon from './../asserts/icons/weibo.svg';
import zhihuIcon from './../asserts/icons/zhihu.svg';
import './../styles/Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {scrolled : false}
    this.navbarScroll = this.navbarScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarScroll);
    this.refs.carousel_ul.childNodes.forEach(item => {
      item.addEventListener('click', this.carouselChange);
    });
  }

  navbarScroll = (event) => {
    let distance = document.documentElement.scrollTop;
    if (distance > 200 && !this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }));
    } else if (distance < 200 && this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }));
    }
  }

  backToTop = (event) => {
    let timer = setInterval(() => {
      let currentScrollTop = document.documentElement.scrollTop;
      let distance = Math.ceil(currentScrollTop / 10);
      document.documentElement.scrollTop = currentScrollTop - distance;

      if (document.documentElement.scrollTop <= 0) {
        clearInterval(timer);
      }
    }, 20);
  }

  carouselPrev = event => {
    let fisrtChild = this.refs.carousel_ul.children[0];
    this.refs.carousel_ul.appendChild(fisrtChild);
  }

  carouselNext = event => {
    let fisrtChild = this.refs.carousel_ul.children[0];
    let lastChild = this.refs.carousel_ul.children[this.refs.carousel_ul.children.length - 1];
    this.refs.carousel_ul.insertBefore(lastChild, fisrtChild);
  }

  carouselChange = event => {
    let index;
    this.refs.carousel_ul.childNodes.forEach((item, i) => {
      if (event.target.parentNode === item) {
        index = i;
      }
    })

    while (index !== 3) {
      if (index < 3) {
        this.carouselNext();
        index++;
      } else {
        this.carouselPrev();
        index--;
      }
    }
  }

  render() {
    return (
      <div>
        <nav className={this.state.scrolled ? "navbar navbar-default fixed-top scrolled" : "navbar navbar-default fixed-top"} onScroll={this.navbarScroll}>
          <a className="brand" href="/" target="_blank">
            <img alt="henri.ren" src={require("./../asserts/images/logo.png")} />
            <span>
              <strong>henri</strong>.ren
            </span>
          </a>
          <h1 className="nav navbar-nav navbar-right">Welcome to my site.</h1>
        </nav>
        <div className="home-main">
          <div className="background">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 item">
                  <h1>Nice to meet you.</h1>
                  <h2>And my name is Henri.</h2>
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
              <ul className="items-container" ref="carousel_ul">
                <li className="item">
                  <img alt="jog" src={require("./../asserts/images/jog.png")} />
                  <div className="name">Jog</div>
                </li>
                <li className="item">
                  <img alt="delicacy" src={require("./../asserts/images/delicacy.png")} />
                  <div className="name">Delicacy</div>
                </li>
                <li className="item">
                  <img alt="travel" src={require("./../asserts/images/travel.png")} />
                  <div className="name">Travel</div>
                </li>
                <li className="item">
                  <img alt="movie" src={require("./../asserts/images/movie.png")} />
                  <div className="name">Movie</div>
                </li>
                <li className="item">
                  <img alt="swim" src={require("./../asserts/images/swim.png")} />
                  <div className="name">Swim</div>
                </li>
                <li className="item">
                  <img alt="music" src={require("./../asserts/images/music.png")} />
                  <div className="name">Music</div>
                </li>
                <li className="item">
                  <img alt="cycling" src={require("./../asserts/images/cycling.png")} />
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
                    <a href="/places">The places I've been to</a>
                  </li>
                  <li>
                    <a href="/running-story">My running story</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title">Make firends with me</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 d-flex justify-content-center">
                <img alt="henri" className="portrait rounded-circle" src={require("./../asserts/images/portrait.jpg")} />
                <div className="brief-introduction">
                  <p>Screen name: 漫长。</p>
                  <p>Age: 23</p>
                  <p>Region: Shanghai</p>
                </div>
              </div>
              <div className="col-sm-8 d-flex">
                <ul className="personal-links">
                  <li>
                    <a rel="noopener noreferrer" href="mailto:371595867@qq.com" target="_blank">
                      <img className="icon" alt="email" src={emailIcon} />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://github.com/LikedBlack" target="_blank">
                      <img className="icon" alt="github" src={githubIcon} />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://www.zhihu.com/people/zhang-heng-78-10/activities" target="_blank">
                      <img className="icon" alt="zhihu" src={zhihuIcon} />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://user.qzone.qq.com/371595867" target="_blank">
                      <img className="icon" alt="qzone" src={qzoneIcon} />
                    </a>
                  </li>
                  <li>
                    <div className="popover bs-popover-top">
                      <div className="arrow"></div>
                      <img alt="Wechat QR code" src={require("./../asserts/images/wechat_QRcode.jpg")} />
                    </div>
                    <a rel="noopener noreferrer" target="_blank" data-toggle="popover">
                      <img className="icon" alt="wechat" src={wechatIcon} />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://weibo.com/5214776283/profile"  target="_blank">
                      <img className="icon" alt="weibo" src={weiboIcon} />
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
        <div id="top" className={this.state.scrolled ? "top rounded-circle fade-in" : "top rounded-circle fade-out"} onClick={this.backToTop}>
          <FontAwesome name="chevron-up" />
          <span>TOP</span>
        </div>
      </div>
    );
  }

}

export default Home;
