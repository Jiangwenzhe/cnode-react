import http from './http';

/**
 * api文档： https://cnodejs.org/api
 */

// 获取 首页列表 数据
export const getTopics = param => {
  return http({
    url: '/topics',
    method: 'get',
    params: param
  });
};

// 获取 帖子 详情数据
export const getTopicById = id => {
  return http({
    url: `/topic/${id}`,
    method: 'get'
  });
};

// 获取 用户 详情数据
export const geyUserByName = userName => {
  return http({
    url: `/user/${userName}`,
    method: 'get'
  })
};
