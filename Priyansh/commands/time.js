module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Secret",
  description: "( 𝙀𝙭𝙖𝙘𝙩 𝙩𝙞𝙢𝙚 & 𝙙𝙖𝙩𝙚 )",
  commandCategory: "Time",
  usages: "",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const moment = require("moment-timezone");
  var supremo = moment.tz('Asia/Karachi').format('HH:mm:ss');
  var draven = moment.tz('Asia/Karachi').format('D/MM/YYYY');
  var kiel = moment.tz('Asia/Karachi').format('dddd');
  if (kiel == 'Sunday') kiel = 'Sunday'
  if (kiel == 'Monday') kiel = 'Monday'
  if (kiel == 'Tuesday') kiel = 'Tuesday'
  if (kiel == 'Wednesday') kiel = 'Wednesday'
  if (kiel == "Thursday") kiel = 'Thursday'
  if (kiel == 'Friday') kiel = 'Friday'
  if (kiel == 'Saturday') kiel = 'Saturday'
  let name = await Users.getNameUser(event.senderID);
  return api.sendMessage(`〘───── •『 𝙏𝙞𝙈𝙚 』• ─────〙\n\n𝙃𝙚𝙡𝙡𝙤 「﹝${name}﹞」\n\n𝘾𝙪𝙧𝙧𝙚𝙣𝙩 𝙏𝙞𝙈𝙚 : ${supremo} \n\n𝘿𝙖𝙮 : ${draven} (${kiel})\n\n〘───── •『 𝙏𝙞𝙈𝙚 』• ─────〙`, event.threadID, event.messageID)
}

    
