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
            <div className="paper">
              <p>个人网站 <a>https://henri.ren</a></p>
              <p>个人练手项目。应用React，JavaScript ES6，SASS等框架或技术。响应式设计，配有后端服务。</p>
              <p>Github: https://github.com/LikedBlack/henri</p>
            </div>
          </div>
          <div className="col-md-3 project">
            <div className="paper">
              <p>群硕软件开发（上海）有限公司</p>
              <p>Hispanic scholarship fund <a>https://www.hsf.net/</a></p>
              <p>2016.8-2017.10        后端开发</p>
              <p>美国一个基金会官方网站。Java Web系统，主要负责后端业务处理，数据库交互。</p>
            </div>
          </div>
          <div className="col-md-3 project">
            <div className="paper">
              <p>电视盒子管理员后台管理应用</p>
              <p>2017.10-2018.2        前端开发</p>
              <p>采用Vue构建的前后端分离单页应用。主要负责页面制作，并组件化。调用后端API获取数据并展示在前端页面。</p>
            </div>
          </div>
          <div className="col-md-3 project">
            <div className="paper">
              <p>LawCloud <a>http://lawcloud.wpengine.com/</a></p>
              <p>2018.2-至今            前端开发</p>
              <p>一个在线编写法律文书的网站。负责根据设计文档，做出页面，并划分模块。使用WordPress框架，jQuery，HTML，CSS编写。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectExperience