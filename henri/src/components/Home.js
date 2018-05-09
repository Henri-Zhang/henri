import React, { Component } from 'react';
import './../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">
              <i class="icon-logo1"></i>
              <i class="icon-logo5"></i>
            </a>
          </div>
          <div class="collapse navbar-collapse hide">
            <ul class="nav navbar-nav navbar-right">
              <li><a class="btn btn-one" href="/login/">Sign In</a></li>
              <li><a class="btn btn-two" href="/management-software/">JOIN TOPVET</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Home;
