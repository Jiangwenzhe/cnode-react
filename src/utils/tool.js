import moment from "moment";

export const tabs = {
  good: {
    name: '精华',
    color: 'magenta'
  },
  job: {
    name: '招聘',
    color: 'cyan'
  },
  ask: {
    name: '问答',
    color: 'green'
  },
  share: {
    name: '分享',
    color: 'blue'
  }
};

// 时间戳转距离现在的时间的函数
export const timeStampToTimeAgo = (timestamp) => {
  let timeStampToString = moment(timestamp, "YYYY-MM-DD").startOf('day').fromNow();
  if (timeStampToString.includes('day')) {
    return timeStampToString.replace('days ago', '天前');
  } else if (timeStampToString.includes('hour')) {
    return timeStampToString.replace('hours ago', '小时前');
  } else if (timeStampToString.includes('month')) {
    return timeStampToString.replace(/(months|month) ago/s, '个月前').replace('a', '1');
  }
};

// 将后台返回的 html 文件转化为纯文本的函数
export const htmlToString = (html) => {
  const reg = /<\/?.+?\/?>/g;
  return html.replace(reg, '');
};

// 编写react中的转化html函数，在组件中引入hmtl时可以保证安全性
export const transferHTML = html => {
  return {
    __html: html
  }
};

