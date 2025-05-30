exports.config = {
  name: 'imgur2',
  version: '0.0.1',
  hasPermission: 0,
  credits: 'Nam cuto',
  description: 'upload photo/video to imgur.com',
  commandCategory: 'Công Cụ',
  usages: '[reply photo/video]',
  cooldowns: 3
};

exports.run = async (o) => {
  const send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);

  let result = [];
  for (let url of (o.event.messageReply?.attachments || o.args)) {
    try {
      const response = await require('axios').get('https://caochungdat.me/docs/imgur?' + (url.url || url));
      result.push(response.data);
    } catch (error) {}
  }

  send(JSON.stringify(result, 0, 4));
};