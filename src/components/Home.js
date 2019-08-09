import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Footer from './Footer';
import TopButton from './TopButton';
import _hobbies from './../data/hobbies.json';
import styles from './../styles/Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
    this.navbarScroll = this.navbarScroll.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttleNavbarScroll);
    this.refs.carouselUl.childNodes.forEach(item => {
      item.removeEventListener('click', this.carouselChange);
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttleNavbarScroll);
    this.refs.carouselUl.childNodes.forEach(item => {
      item.addEventListener('click', this.carouselChange);
    });
  }

  navbarScroll = () => {
    let distance = document.documentElement.scrollTop;
    if (distance > 200 && !this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }));
    } else if (distance <= 200 && this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }));
    }
  };

  throttleNavbarScroll = _.throttle(this.navbarScroll, 200);

  carouselPrev = () => {
    let fisrtChild = this.refs.carouselUl.children[0];
    this.refs.carouselUl.appendChild(fisrtChild);
  };

  carouselNext = () => {
    let fisrtChild = this.refs.carouselUl.children[0];
    let lastChild = this.refs.carouselUl.children[
      this.refs.carouselUl.children.length - 1
    ];
    this.refs.carouselUl.insertBefore(lastChild, fisrtChild);
  };

  carouselChange = event => {
    let index;
    this.refs.carouselUl.childNodes.forEach((item, i) => {
      if (event.target.parentNode === item) {
        index = i;
      }
    });

    while (index !== 3) {
      if (index < 3) {
        this.carouselNext();
        index++;
      } else {
        this.carouselPrev();
        index--;
      }
    }
  };

  render() {
    return (
      <div>
        <nav
          className={classNames(
            'navbar navbar-default fixed-top',
            styles.navbar,
            { [styles.scrolled]: this.state.scrolled }
          )}
        >
          <a className={styles.brand} href="/" target="_blank">
            <img
              src={require('./../asserts/images/logo.png')}
              alt="henri.ren"
            />
            <span>
              <strong>henri</strong>.ren
            </span>
          </a>
          <h1 className="nav navbar-nav">Welcome to my site</h1>
        </nav>
        <div className={styles['home-main']}>
          <div className={styles.background}>
            <div className="container">
              <div className="row">
                <div className={classNames('col-sm-12', styles.item)}>
                  <h1>Nice to meet you</h1>
                  <h2>And my name is Henri</h2>
                  <h2>测试文字</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['hobbies-interests']}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className={styles.title}>My hobbies and interests</div>
              </div>
            </div>
            <div className={classNames('row', styles.carousel)}>
              <a
                className={classNames(styles['slide-arrow'], styles.prev)}
                onClick={this.carouselPrev}
              >
                <FontAwesome name="arrow-left" />
              </a>
              <ul className={styles['items-container']} ref="carouselUl">
                {_hobbies.map(item => (
                  <li key={item.name} className={styles.item}>
                    <img src={item.img} alt={item.name} />
                    <div className={styles.name}>{item.name}</div>
                  </li>
                ))}
              </ul>
              <a
                className={classNames(styles['slide-arrow'], styles.next)}
                onClick={this.carouselNext}
              >
                <FontAwesome name="arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles['learn-more']}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className={styles.title}>Wanna know more about me?</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className={styles.tip}>Click here</div>
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
                  <li>
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
    );
  }
}

export default CSSModules(Home, styles);
