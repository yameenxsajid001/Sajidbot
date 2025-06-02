module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100012191281263") {
    var aid = ["100012191281263"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗔𝘄𝘄 𝗨𝗵 𝗠𝗲𝗻𝗧𝗶𝗼𝗻 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 🙈"];
      api.setMessageReaction("🙈", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}