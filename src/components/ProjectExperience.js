import React, { Component } from 'react'
import './../styles/ProjectExperience.scss'

class ProjectExperience extends Component {

  show() {
  }

  hide() {
  }

  render() {
    return (
      <div className={this.props.className + ' container-fluid ProjectExperience'}>
        <div className="row">
          <h2 className="text-shadow">{this.props.title}</h2>
        </div>
        <div className="row projects">
          <div className="col-md-3 project">
            <div className="paper">111111</div>
          </div>
          <div className="col-md-3 project">
            <div className="paper">22222</div>
          </div>
          <div className="col-md-3 project">
            <div className="paper">33333</div>
          </div>
          <div className="col-md-3 project">
            <div className="paper">44444</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectExperience