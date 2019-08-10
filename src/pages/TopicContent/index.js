import React, { Component } from 'react';
import './index.scss';
import {Divider, Tag, Tags} from 'antd';
import ReplyLists from '../../component/ReplyLists';
import { transferHTML, tabs,timeStampToTimeAgo } from "../../utils/tool";
import data from  '../../assets/mock-data/content';

class TopicContent extends Component {
  state = {
    topic: data.data
  };
  // getContentInfo() {
  //   this.setState({
  //     topic: data.data,
  //   });
  // };
  //
  //
  // componentDidMount() {
  //   console.log(data.data.replies[0]);
  //   this.getContentInfo();
  // }

  render() {
    const { topic } = this.state;
    console.log('RENDER',this.state);
    return (
      <div className="topic-content">
        <div className="left">
          <div className="title">
            <h1>{topic.title}</h1>
            <div className="content-info">
              发布于&nbsp;&nbsp;{timeStampToTimeAgo(topic.create_at)}&nbsp;•&nbsp;作者:&nbsp;{topic.author.loginname}&nbsp;•&nbsp;{topic.visit_count}次浏览&nbsp;•&nbsp;来自:&nbsp;<Tag color={tabs[topic.tab] && tabs[topic.tab].color} >
              {tabs[topic.tab] && tabs[topic.tab].name}
            </Tag>
            </div>
          </div>
          <Divider />
          <div dangerouslySetInnerHTML={transferHTML(topic.content)}/>
          <ReplyLists replys={topic.replies} />
        </div>
        <div className="right">

        </div>
      </div>
    )
  }
}

export default TopicContent;