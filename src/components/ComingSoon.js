import React, { Component } from 'react'
import axios from 'axios'

class ComingSoon extends Component {
  componentDidMount() {
    axios.get('http://ip-api.com/json/').then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <h1>Coming soon...</h1>
    )
  }
}

export default ComingSoon
