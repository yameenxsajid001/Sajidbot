module.exports.config = {
  name: "fbuid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JORDAN",
  description: "fb",
  commandCategory: "admin",
  usages: "[tag]/[reply]",
  cooldowns: 5
}
module.exports.run = async function({ api, event, args}) {
  const { messageReply, senderID, threadID, messageID, type, mentions} = event;
  if (type == "message_reply") {
      uid = messageReply.senderID
    } else if (args.join().indexOf('@') !== -1) {
        var uid = Object.keys(mentions)[0]
    }  else {
        var uid = senderID
  } 
  let data = await api.getUserInfo(uid),
       { profileUrl } = data[uid];
  return api.sendMessage(`${profileUrl}`, threadID, messageID)
}