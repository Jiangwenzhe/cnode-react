import { message } from "antd";
import axios from 'axios';

// 实现ajax接口的拦截

const error = (errorMessage) => {
  message.error(`${errorMessage}`, 1);
};

// 创建一个axios对象
const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
});

// 发送请求拦截器
http.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    error('发送请求错误!');
    return Promise.reject(err);
  }
);

// 接受请求拦截器
http.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {
    error(`返回请求错误`);
    return Promise.reject(err);
  }
);

export default http;
