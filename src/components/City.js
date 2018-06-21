import React, { Component } from 'react'

class City extends Component {
  render() {
    return (
      <div className="col-md-6 city">
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