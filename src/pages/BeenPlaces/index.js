import React, { Component } from 'react';
import City from '@/components/City';
import Footer from '@/components/Footer';
import TopButton from '@/components/TopButton';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import _ from 'lodash';
import _beenPlaces from '@/datas/beenPlaces.json';
import styles from '@/styles/BeenPlaces.scss';

const shuffleBeenPlaces = _.shuffle(_beenPlaces);

class BeenPlaces extends Component {
  scrollToAnchor = anchor => {
    const element = document.getElementById(anchor);
    element && element.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <div>
        <div className={classNames('container', styles['cities-containter'])}>
          <div className="row">
            <div className="col-12">
              <h1 className={classNames('text-center', styles.title)}>
                The places I've been to
              </h1>
            </div>
          </div>
          {_.chunk(shuffleBeenPlaces, 2).map((array, index) => (
            <div key={index} className="row">
              {array.map(item => (
                <City
                  key={item.name}
                  name={item.name}
                  imgSrc={item.img}
                  link={item.link}
                />
              ))}
            </div>
          ))}
        </div>
        <Footer />
        <TopButton />
      </div>
    );
  }
}

export default CSSModules(BeenPlaces, styles);
