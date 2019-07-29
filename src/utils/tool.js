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

export const timeStampToDaysAgo = (timestamp) => {
  return moment(timestamp, "YYYY-MM-DD").startOf('day').fromNow().replace('days ago', '天前');
};
