import React, { Component } from "react";
import CSSModules from "react-css-modules";
import moment from "moment";
import numeral from "numeral";
import classNames from "classnames";
import styles from "./../styles/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={styles.title}>Make firends with me</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <img
                className={classNames(styles.portrait, "rounded-circle")}
                src="https://henri.oss-cn-hangzhou.aliyuncs.com/portrait.jpg"
                alt="Henri"
              />
              <div className={styles["brief-introduction"]}>
                <p>Screen name: 薄暮。</p>
                <p>
                  Age:{" "}
                  {numeral(
                    moment.duration(moment() - moment("1994-07-18")).asYears()
                  ).format("0.000")}
                </p>
                <p>Region: Shanghai</p>
              </div>
            </div>
            <div className="col-lg-8 d-flex">
              <ul className={styles["personal-links"]}>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="mailto:henrizhang@henri.ren"
                  >
                    <img
                      className={styles.icon}
                      src={require("./../asserts/icons/Footer/email.svg")}
                      alt="email"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/Henri-Zhang"
                    target="_blank"
                  >
                    <img
                      className={styles.icon}
                      src={require("./../asserts/icons/Footer/github.svg")}
                      alt="github"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.zhihu.com/people/zhang-heng-78-10/activities"
                    target="_blank"
                  >
                    <img
                      className={styles.icon}
                      src={require("./../asserts/icons/Footer/zhihu.svg")}
                      alt="zhihu"
                    />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank">
                    <div className={classNames("popover", styles.popover)}>
                      <div className={classNames("arrow", styles.arrow)} />
                      <img
                        alt="Wechat QR code"
                        src={require("./../asserts/images/wechat_QRcode.jpg")}
                      />
                    </div>
                    <img
                      className={styles.icon}
                      src={require("./../asserts/icons/Footer/wechat.svg")}
                      alt="wechat"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://user.qzone.qq.com/371595867"
                    target="_blank"
                  >
                    <img
                      className={styles.icon}
                      src={require("./../asserts/icons/Footer/qzone.svg")}
                      alt="qzone"
                    />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://weibo.com/5214776283/profile"
                    target="_blank"
                  >
                    <img
                      className={styles.icon}
                      src={require("./../asserts/icons/Footer/weibo.svg")}
                      alt="weibo"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className={styles.copyright}>
                <span>© 2018 henri.ren All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default CSSModules(Footer, styles);
