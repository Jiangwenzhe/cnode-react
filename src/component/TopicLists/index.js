import React from 'react';
import { List, Avatar, Skeleton, Tag} from 'antd';
import { tabs, timeStampToDaysAgo } from '../../utils/tool';
import './index.scss';

const TopicLists = ({ topicInfo }) => {
  if (!topicInfo) {
   return (
     <Skeleton active />
   )
  }
  console.log(topicInfo[0]);
  return (
   <div>
     <List
       itemLayout="horizontal"
       dataSource={topicInfo}
       renderItem={item => (
         <List.Item className="list">
           <Avatar className="avatar" size={40} src={item.author.avatar_url}/>
           <span className="reply_count">
             <em>{item.reply_count}</em>/
             <em>{item.visit_count}</em>
           </span>
           <Tag color={tabs[item.tab] && tabs[item.tab].color} >
             {tabs[item.tab] && tabs[item.tab].name}
           </Tag>
           <span className="title">
             {item.title}
           </span>
           <span className="time">
             {timeStampToDaysAgo(item.last_reply_at)}
           </span>
         </List.Item>
       )}
     />
   </div>
  )
};

export default TopicLists;


