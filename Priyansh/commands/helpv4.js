module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Name module]",
	cooldowns: 1,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 20
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
		"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "Anyone",
        "adminGroup": "Admin of group",
        "adminBot": "Admin of bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
const fs = require("fs");
const axios = require("axios");
	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10;
    let i = 0;
    let msg = "\n";
    
    for (var [name, value] of (commands)) {
      name += `  ${value.config.usages}`;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `╰┈➤${++i} ❯${prefix}${item}\n\n`;
    
    const randomText = [ "JORDAN 🖤",];
   /* var data = ["https://i.imgur.com/XetbfAe.jpg", "https://i.imgur.com/4dwdpG9.jpg", "https://i.imgur.com/9My3K5w.jpg", "https://i.imgur.com/vK67ofl.jpg", "https://i.imgur.com/fGwlsFL.jpg"];
let link = data[Math.floor(Math.random() * data.length)];
let path = __dirname + `/cache/help.png`;
  let image = (
    await axios.get(link, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(path, Buffer.from(image, "utf-8"));*/
    const text = `╰┈➤𝐓𝐨𝐭𝐚𝐥 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ${arrayInfo.length}\nUse ${prefix}help <number of pages>`;
    return api.sendMessage(`╭────CMD────╮\n\n𝐏𝐚𝐠𝐞 ${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}` + "\n" + msg + "\n" + text, threadID, messageID);
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};