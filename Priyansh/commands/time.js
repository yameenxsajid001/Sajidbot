module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Secret",
  description: "( ????? ???? & ???? )",
  commandCategory: "Time and Date",
  usages: "( Exact time )",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const moment = require("moment-timezone");
  var supremo = moment.tz('Asia/Karachi').format('hh:mm:ss');
  var draven = moment.tz('Asia/Manila').format('D/MM/YYYY');
  var kiel = moment.tz('Asia/Manila').format('dddd');
  if (kiel == 'Sunday') kiel = 'Sunday'
  if (kiel == 'Monday') kiel = 'Monday'
  if (kiel == 'Tuesday') kiel = 'Tuesday'
  if (kiel == 'Wednesday') kiel = 'Wednesday'
  if (kiel == "Thursday") kiel = 'Thursday'
  if (kiel == 'Friday') kiel = 'Friday'
  if (kiel == 'Saturday') kiel = 'Saturday'
  let name = await Users.getNameUser(event.senderID);
  return api.sendMessage(`?©¤©¤©¤©¤©¤ ?¡º ???? ¡»? ©¤©¤©¤©¤©¤?\n?????¡¸©z${name}©{¡¹\n??? ??????? ???? : ${supremo} \n??? : ${draven} (${kiel})\n?©¤©¤©¤©¤©¤ ?¡º ???? ¡»? ©¤©¤©¤©¤©¤?`, event.threadID, event.messageID)
}

    