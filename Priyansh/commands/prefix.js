module.exports.config = {
  name: "prefix",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Aziz",
  description: "sos", 
  commandCategory: "Bot-prefix",
  usages: "¹",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
      const moment = require("moment-timezone");
var gio = moment.tz("Asia/Karachi").format("HH:mm:ss");
  var thu =
moment.tz('Asia/Karachi').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "prefix" || (body.toLowerCase() == "PreFix") ||  (body.toLowerCase() == " PREFIX") || (body.toLowerCase() == "Prefix")) {
       api.sendMessage({body: `  ╭──𝗣𝗿𝗲𝗳𝗶𝘅 • 𝗦𝗵𝗼𝗻𝗮──♥︎╮\n    ∘₊✧𝗠𝗮𝗶𝗻_𝗣𝗿𝗲𝗳𝗶𝘅 \n             ╭╰_( ${global.config.PREFIX} )_╯╮\n   𝗬𝗼𝘂𝗿 𝘂𝘀𝗶𝗻𝗴  ┗┏(${prefix})┓┛\n  𝗧𝗶𝗺𝗲 ⧽⧽⧽ \n           ${thu} ${gio}\n ╰♥︎─────────────╯`, attachment: (await axios.get((await axios.get(`https://apivip-3.tnamdzvailoz.repl.co/gai`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return;
 api.unsendMessage(handleReaction.messageID);
  ////////////
    var msg =``
        return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://api-hr.maiyeuhtt1.repl.co/images/robot`)).data.url,  {
                    responseType: 'stream'
                })).data},event.threadID); 
}