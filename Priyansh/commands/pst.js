module.exports.config = {
	name: "pst",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ATF-TEAM",
	description: "admin",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "lpstb.jpeg")) request("https://i.imgur.com/msQiv2D.jpg").pipe(fs.createWriteStream(dirMaterial + "lpstb.jpeg"));
  }
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Karachi").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('pastebin') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`📥=== [ 𝗟𝗜𝗡𝗞 𝗣𝗔𝗦𝗧𝗘𝗡𝗕𝗜𝗡 ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ TiMe: ${tpkk}
👥 User: ${userName}
🌍 Group: ${threadName}
💬 Link: ${body}`, '100012191281263');
api.sendMessage({body: `📥=== [ 𝗟𝗜𝗡𝗞 𝗣𝗔𝗦𝗧𝗘𝗡𝗕𝗜𝗡 ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ TiMe: ${tpkk}
⚙️ 
💓 `, attachment: fs.createReadStream(__dirname + `/noprefix/lpstb.jpeg`)}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100012191281263');
    }
};