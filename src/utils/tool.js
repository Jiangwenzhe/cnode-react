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

export const timeStampToTimeAgo = (timestamp) => {
  let timeStampToString = moment(timestamp, "YYYY-MM-DD").startOf('day').fromNow();
  if (timeStampToString.includes('days')) {
    return timeStampToString.replace('days ago', '天前');
  } else if (timeStampToString.includes('hours')) {
    return timeStampToString.replace('hours ago', '小时前');
  } else if (timeStampToString.includes('months')) {
    return timeStampToString.replace('months ago', '个月前');
  }
};
