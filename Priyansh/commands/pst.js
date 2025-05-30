module.exports.config = {
	name: "api",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Jordanofficial",
	description: "Detect api",
	commandCategory: "Utilities",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "api1.mp4")) request("https://i.imgur.com/UlQAn7T.mp4").pipe(fs.createWriteStream(dirMaterial + "api1.mp4"));
  }
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/karachi").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('api') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`📥=== [ DETECT API ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ At: ${tpkk}
👥 User: ${userName}
🌍 Group: ${threadName}
🌸 Just sent a message containing a pastebin link
💬 Content contains links: (${body}`, '100012191281263);
api.sendMessage({body: `📥=== [ DETECT API ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ At: ${tpkk}
⚙️ The bot has  detected the group that has an api sender
💓 Real Mark sent the api to admin`, attachment: fs.createReadStream(__dirname + `/noprefix/api1.mp4`)}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100012191281263);
    }
};