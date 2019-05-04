import React, { Component } from "react";
import CSSModules from "react-css-modules";
import classNames from "classnames";
import styles from "./../styles/SelfEvaluation.scss";

class SelfEvaluation extends Component {
  timer = null;

  show() {
    let text = this.refs.text;
    let string = this.props.content;
    let sub = "";
    this.timer = setInterval(() => {
      if (sub.length >= string.length) {
        clearInterval(this.timer);
      }
      text.innerHTML = string.substr(0, sub.length + 1);
      sub = text.innerHTML;
    }, 100);
  }

  hide() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.refs.text.innerHTML = "";
  }

  render() {
    return (
      <div
        className={classNames(this.props.className, styles["self-evaluation"])}
      >
        <h1 className={styles["text-shadow"]}>{this.props.title}</h1>
        <p className={styles.blink} ref="text" />
      </div>
    );
  }
}

export default CSSModules(SelfEvaluation, styles);
