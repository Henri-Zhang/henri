import React, { Component } from 'react';
import './../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <i className="icon-logo1"></i>
              <i className="icon-logo5"></i>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a className="btn btn-one" href="/login/">Sign In</a></li>
              <li><a className="btn btn-two" href="/management-software/">JOIN TOPVET</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Home;
