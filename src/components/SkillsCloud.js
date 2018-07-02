import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import './../styles/SkillsCloud.scss'

const data = [
  { value: "jQuery", count: 25, group: 'front' },
  { value: "MongoDB", count: 18, group: 'front' },
  { value: "JavaScript", count: 38, group: 'other' },
  { value: "React", count: 30, group: 'front' },
  { value: "Nodejs", count: 28, group: 'other' },
  { value: "Express.js", count: 25, group: 'front' },
  { value: "HTML5", count: 33, group: 'front' },
  { value: "CSS3", count: 20, group: 'other' },
  { value: "Webpack", count: 22, group: 'front' },
  { value: "Babel.js", count: 7, group: 'other' },
  { value: "ECMAScript", count: 25, group: 'front' },
  { value: "Jest", count: 15, group: 'front' },
  { value: "Mocha", count: 17, group: 'front' },
  { value: "React Native", count: 27, group: 'other' },
  { value: "Angular.js", count: 30, group: 'front' },
  { value: "TypeScript", count: 15, group: 'other' },
  { value: "Flow", count: 30, group: 'other' },
  { value: "NPM", count: 11, group: 'front' },
];

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size, color) => (
  <span key={tag.value}
        className="tag"
        group={tag.group}
        style={{
          animationDelay: `${Math.random() * 2}s`,
          fontSize: `${size}em`,
          border: `2px solid ${color}`,
          borderRadius: '10px',
          margin: '5px',
          padding: '3px',
          display: 'inline-block',
          color: 'white',
          cursor: 'default'
        }}>{tag.value}</span>
)

class SkillsCloud extends Component {
  constructor(props) {
    super(props)

    this.test = this.test.bind(this)
  }

  test() {
    let tags = document.getElementsByClassName('tag')
    for (const tag of tags) {
      let group = tag.getAttribute('group')
      if ("front" === group) {
        tag.classList.add('bright')
      } else if ("other" === group) {
        tag.classList.add('dark')
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.test}>xxx</button>
        <TagCloud className="skills-cloud" tags={data} minSize={1.2} maxSize={2} renderer={customRenderer} />
      </div>
    )
  }
}

export default SkillsCloud