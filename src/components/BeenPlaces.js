import React, { Component } from 'react'
import City from './City'
import Footer from './Footer'
import TopButton from './TopButton'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import _ from 'lodash'
import _beenPlaces from './../data/beenPlaces.json'
import styles from './../styles/BeenPlaces.scss'

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
        <div className={classNames('container', styles['cities-containter'])}>
          <div className="row">
            <div className="col-12">
              <h1 className={classNames('text-center', styles.title)}>The places I've been to</h1>
            </div>
          </div>
          {
            _.chunk(_beenPlaces, 2).map((array, index) => (
              <div key={index} className="row">
                {
                  array.map(item => (
                    <City key={item.name} name={item.name} imgSrc={item.img} link={item.link} />
                  ))
                }
              </div>
            ))
          }
        </div>
        <Footer />
        <TopButton />
      </div>
    )
  }
}

export default CSSModules(BeenPlaces, styles)