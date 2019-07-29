import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Loading = ({ status }) => {
  return (
    <Spin indicator={antIcon} spinning={status}/>
  )
};

export default Loading;