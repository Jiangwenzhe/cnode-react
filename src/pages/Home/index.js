import React, { Component } from 'react';
import { Tabs, Pagination } from 'antd';
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
    isLoading: false,
  };

  getTopicsInfo() {
    const { page, limit, tab, store } = this.state;
    this.setState({
      isLoading: true,
    });
    getTopics({
      page: page,
      limit: limit,
      tab: tab
    }).then(response => {
      this.setState({
        topicInfo: response.data,
        isLoading: false
      });
      store[tab] = {
        page: page,
        data: response.data,
      }
    });
  };

  handleTabChange = tab => {
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

  handlePageChange = page => {
    console.log(page);
    this.setState({
      page: page
    }, () => {
      this.getTopicsInfo();
    });
  };

  componentDidMount() {
    this.getTopicsInfo();
  }

  render() {
    const { topicInfo, page, limit, isLoading } = this.state;
    return (
      <div className="home">
        {/*<Loading status={true}/>*/}
        <div>
          <Tabs defaultActiveKey="all" onChange={this.handleTabChange}>
            <TabPane tab="全部" key="all">
              <TopicLists topicInfo={topicInfo} status={isLoading}/>
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
          { //page-1 > 0  &&
            <Pagination current={page} size="small" number={limit} total={3000} onChange={this.handlePageChange}/>
          }
        </div>
      </div>
    )
  }
}

export default Home;