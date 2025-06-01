module.exports.config = {
    name: "upt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "M Amir",
    description: "UpTime Bot",
    usePrefix: true,
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": "request"
    }
}

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies}) {
 var mention = Object.keys(event.mentions)[0];
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a(`↦𝗕𝗼𝗧 𝗶𝘀 𝗥𝘂𝗻𝗻𝗶𝗻𝗴 ${hours}𝗛𝗿𝘀:${minutes}𝗠𝗶𝗻𝘀:${seconds}𝗦𝗲𝗰𝘀`);
  

  }