import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import CSSModules from "react-css-modules";
import styles from "./../styles/SkillsCloud.scss";

const data = [
  { value: "HTML", count: 25, group: "front" },
  { value: "MongoDB", count: 18, group: "other" },
  { value: "JavaScript", count: 38, group: "front" },
  { value: "React", count: 30, group: "front" },
  { value: "Nodejs", count: 28, group: "front" },
  { value: "Docker", count: 25, group: "other" },
  { value: "Bootstrap", count: 33, group: "front" },
  { value: "CSS", count: 20, group: "front" },
  { value: "Webpack", count: 22, group: "front" },
  { value: "jQuery", count: 11, group: "front" },
  { value: "响应式设计", count: 7, group: "thought" },
  { value: "Python", count: 25, group: "other" },
  { value: "PHP", count: 15, group: "other" },
  { value: "Web语义化", count: 30, group: "thought" },
  { value: "Vue", count: 17, group: "front" },
  { value: "Java", count: 27, group: "other" },
  { value: "RESTful", count: 30, group: "thought" },
  { value: "SASS", count: 11, group: "front" },
  { value: "表现与数据分离", count: 15, group: "thought" },
  { value: "Photoshop", count: 11, group: "front" }
];

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    className={styles.tag}
    group={tag.group}
    style={{
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size}em`,
      border: `2px solid ${color}`,
      borderRadius: "10px",
      margin: "5px",
      padding: "3px",
      display: "inline-block",
      color: "white",
      cursor: "default"
    }}
  >
    {tag.value}
  </span>
);

class SkillsCloud extends Component {
  timer;

  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.recover = this.recover.bind(this);
  }

  show(group, event) {
    let buttons = this.refs.buttons;
    buttons.childNodes.forEach(node => {
      if (node.nodeName === "BUTTON") {
        node.classList.remove("active");
      }
    });
    event.target.classList.add("active");

    let tags = document.getElementsByClassName(styles.tag);
    for (const tag of tags) {
      let tagGroup = tag.getAttribute("group");
      if (group === tagGroup) {
        tag.classList.remove(styles.dark);
        tag.classList.add(styles.bright);
      } else {
        tag.classList.remove(styles.bright);
        tag.classList.add(styles.dark);
      }
    }

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.recover();
    }, 3000);
  }

  recover() {
    let buttons = this.refs.buttons;
    buttons.childNodes.forEach(node => {
      if (node.nodeName === "BUTTON") {
        node.classList.remove(styles.active);
      }
    });

    let tags = document.getElementsByClassName(styles.tag);
    for (const tag of tags) {
      tag.classList.remove(styles.dark);
      tag.classList.remove(styles.bright);
    }
  }

  render() {
    return (
      <div className={styles["skills-cloud"]}>
        <div className={styles.buttons} ref="buttons">
          <button onClick={this.show.bind(this, "front")}>
            {this.props.frontEnd}
          </button>
          <div className={styles.or} />
          <button onClick={this.show.bind(this, "other")}>
            {this.props.other}
          </button>
          <div className={styles.or} />
          <button onClick={this.show.bind(this, "thought")}>
            {this.props.idea}
          </button>
        </div>
        <TagCloud
          tags={data}
          minSize={1.2}
          maxSize={2}
          renderer={customRenderer}
        />
      </div>
    );
  }
}

export default CSSModules(SkillsCloud, styles);
