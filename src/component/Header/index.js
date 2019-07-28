import React, { Component } from 'react';
import { Modal, Icon } from "antd";
import './header.scss';

class Header extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div className="header">
        <a className="logo" href="/">
          <img className="logo-img" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
        </a>
        <span className="about" onClick={this.showModal}><Icon type="info-circle" /></span>
        <Modal
          title="关于本项目"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>作者</p>
          <p>项目地址</p>
        </Modal>
      </div>
    )
  }
}

export default Header;

