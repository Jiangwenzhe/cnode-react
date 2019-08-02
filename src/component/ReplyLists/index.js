import React from 'react';
import {Comment, Icon, Tooltip, Avatar, Skeleton, List} from 'antd';
import './index.scss';
import { transferHTML , timeStampToTimeAgo } from '../../utils/tool';

const ReplyLists = ({ replys, status }) => {
  if (replys.length === 0 || status) {
    return (
      <Skeleton active />
    )
  }
  return (
    <List
      header={<div className="reply-header">{replys.length} 回复</div>}
      itemLayout="horizontal"
      dataSource={replys}
      renderItem={item => (
          <Comment
            className="comment"
            author={item.author.loginname}
            avatar={
              <Avatar
                src={item.author.avatar_url}
                alt={item.author.loginname}
              />
            }
            datetime={
              <Tooltip>
                {timeStampToTimeAgo(item.create_at)}
              </Tooltip>
            }
            content={
              <div className="content">
                <div dangerouslySetInnerHTML={transferHTML(item.content)}/>
                {item.ups.length === 0 ? (<span />): (
                  <span className="likes">
                  <Tooltip title="Like">
                    <Icon
                      type="like"
                      theme={'outlined'}
                    />
                  </Tooltip>
                  <span style={{ paddingLeft: 4, cursor: 'auto' }}>{item.ups.length}</span>
                </span>)
                }
              </div>
            }/>
      )}
    />
  )
};

export default ReplyLists;
