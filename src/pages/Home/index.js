import React, { Component } from 'react';
import { Tabs } from 'antd';
import './home.scss';
import { getTopics } from "../../utils/api";
import TopicLists from "../../component/TopicLists";

const { TabPane } = Tabs;

class Home extends Component {
  state = {
    page: 1,
    limit: 30,
    topicInfo: [],
    tab: 'all',
    store: {},
  };

  getTopicsInfo() {
    const { page, limit, tab, store } = this.state;
    getTopics({
      page: page,
      limit: limit,
      tab: tab
    }).then(response => {
      this.setState({
        topicInfo: response.data,
        page: page + 1
      });
      store[tab] = {
        page: page,
        data: response.data,
      }
    });
  };

  handleTabChange = tab => {
    console.log(tab);
    const { store } = this.state;
    if (!store[tab]) {
      this.setState(
        {
          tab,
          page: 1,
          topicInfo: []
        },
        () => {
          this.getTopicsInfo();
        }
      );
      return;
    }
    this.setState({
      tab,
      page: store[tab].page,
      topicInfo: store[tab].data
    })
  };

  componentDidMount() {
    this.getTopicsInfo();
  }

  render() {
    const { topicInfo } = this.state;
    return (
      <div className="home">
        {/*<Loading status={true}/>*/}
        <div>
          <Tabs defaultActiveKey="all" onChange={this.handleTabChange}>
            <TabPane tab="全部" key="all">
              <TopicLists topicInfo={topicInfo}/>
            </TabPane>
            <TabPane tab="精华" key="good">
              <TopicLists topicInfo={topicInfo}/>
            </TabPane>
            <TabPane tab="分享" key="share">
              <TopicLists topicInfo={topicInfo}/>
            </TabPane>
            <TabPane tab="问答" key="ask">
              <TopicLists topicInfo={topicInfo}/>
            </TabPane>
            <TabPane tab="招聘" key="job">
              <TopicLists topicInfo={topicInfo}/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Home;