import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from './../styles/ProjectExperience.scss'

class ProjectExperience extends Component {

  show() {}
  hide() {}

  render() {
    return (
      <div className={classNames(this.props.className, 'container-fluid', styles['project-experience'])}>
        <div className="row">
          <h2 className={styles['text-shadow']}>{this.props.title}</h2>
          <h5 className={styles['text-shadow']}>群硕软件开发(上海)有限公司 <span>2016.7 - 至今</span></h5>
        </div>
        <div className={classNames('row', styles.projects)}>
          <div className={classNames('col-md-3', styles.project)}>
            <div className={styles.paper}>
              <h6>
                <a href="https://henri.ren" target="_blank" rel="noopener noreferrer">个人网站</a>
              </h6>
              <div className={styles.intro}>
                <a className="badge badge-secondary" href="https://github.com/Henri-Zhang/henri" target="_blank" rel="noopener noreferrer">Github地址</a>
                <p>个人练手项目。应用React，JavaScript ES6，SASS等框架或技术。响应式设计，配有后端服务。</p>
              </div>
            </div>
          </div>
          <div className={classNames('col-md-3', styles.project)}>
            <div className={styles.paper}>
              <h6>
                <a href="https://www.hsf.net/" target="_blank" rel="noopener noreferrer">Hispanic Scholarship Fund</a>
              </h6>
              <div className={styles.intro}>
                <p>2016.8-2017.10        后端开发</p>
                <p>美国一个基金会官方网站。Java Web系统，主要负责后端业务处理，数据库交互。</p>
              </div>
            </div>
          </div>
          <div className={classNames('col-md-3', styles.project)}>
            <div className={styles.paper}>
              <h6>
                电视盒子后台管理应用
              </h6>
              <div className={styles.intro}>
                <p>2017.10-2018.2        前端开发</p>
                <p>采用Vue构建的前后端分离单页应用。主要负责页面制作，并组件化。调用后端API获取数据并展示在前端页面。</p>
              </div>
            </div>
          </div>
          <div className={classNames('col-md-3', styles.project)}>
            <div className={styles.paper}>
              <h6>
                <a href="http://lawcloud.wpengine.com/" target="_blank" rel="noopener noreferrer">LawCloud</a>
              </h6>
              <div className={styles.intro}>
                <p>2018.2-至今            前端开发</p>
                <p>一个在线编写法律文书的网站。负责根据设计文档，做出页面，并划分模块。使用WordPress框架，jQuery，HTML，CSS编写。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(ProjectExperience, styles)