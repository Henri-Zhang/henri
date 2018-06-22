import React, { Component } from 'react'
import Tool from './../engine/Tool'
import './../styles/City.scss'

class City extends Component {
  componentDidMount() {
    this.refs.city.style.backgroundColor = Tool.getRandomColor()
  }

  render() {
    return (
      <div className="col-md-6 city" id={this.props.name} ref="city">
        <div className="image-background">
          <img src={this.props.imgSrc} alt={this.props.name} />
        </div>
        <div className="fill-up hover-in">
          <h1 className="city-name">{this.props.name}</h1>
        </div>
        <a className="fill-up city-link" rel="noopener noreferrer" href={this.props.link} target="_blank">{this.props.name}</a>
      </div>
    )
  }
}

export default City