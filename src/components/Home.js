import React, { Component } from 'react';
import './../styles/Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {scrolled : false}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState(prevState => ({
      scrolled: !prevState.scrolled
    }));
  }

  render() {
    return (
      <nav className={this.state.scrolled ? "navbar navbar-default navbar-fixed-top scrolled" : "navbar navbar-default navbar-fixed-top"} onClick={this.handleClick}>
        <h1>Welcome to Lanchow.</h1>
      </nav>
    );
  }
  
}

export default Home;
