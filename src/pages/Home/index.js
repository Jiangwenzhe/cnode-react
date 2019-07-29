import React, { Component } from 'react';
import { Tabs } from 'antd';
import './home.scss';
import mock_data from '../../assets/mock-data/home';

const { TabPane } = Tabs;

class Home extends Component {
  constructor() {
    super();
  }

  handleTabChange = tab => {
    console.log(tab);
  };

  render() {
    console.log(mock_data);
    return (
      <div className="home">
        <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
          <TabPane tab="全部" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="精华" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="分享" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="问答" key="4">
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab="招聘" key="5">
            Content of Tab Pane 5
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Home;