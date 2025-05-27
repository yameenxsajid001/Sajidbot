module.exports.config = {
  name: "sendnoti",
    version: "beta",
    hasPermssion: 2,
    credits: "",
    description: "",
    usePrefix: true,
    commandCategory: "ADMIN",
    usages: "sendnoti",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs": "",
        "moment-timezone": ""
    }
};

module.exports.languages = {
    "vi": {
        "sendSuccess": "===THÔNG BÁO===\nĐã sendnoti tới %1 nhóm!",
        "sendFail": "===THÔNG BÁO===\nKhông thể sendnoti chỉ tới %1 nhóm!"
    },
    "en": {
        "sendSuccess": "Send message to %1 thread!",
        "sendFail": "[!] Can't send message to %1 thread"
    }
}

const requiredPath = __dirname + "/cache/";
module.exports.onLoad = async ({ }) => {
    const fs = global.nodemodule["fs"];
    if (!fs.existsSync(requiredPath)) fs.mkdirSync(requiredPath, { recursive: true });
}

const permission = ["100000856538718"];

module.exports.handleReply = async ({ api, event, Users, handleReply }) => {
    const { senderID, messageID, threadID, body } = event;

    const moment = global.nodemodule["moment-timezone"];

    let senderName = await Users.getNameUser(senderID),
        gio = moment.tz("Asia/Karachi").format("hh:mm:s"),
        msg = {
            body: `『𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 𝐑𝐄𝐏𝐋𝐘 』\n\n『⏰』 𝐓𝐈𝐌𝐄: ${gio}\n━━━━━━━━━━━━━━━━━━ \n『🧸』 𝐔𝐒𝐄𝐑: ${senderName}\n━━━━━━━━━━━━━━━━━━\n『⚔️』 𝐁𝐎𝐗: ${global.data.threadInfo.get(threadID)?.threadName || "Name does not exist"}\n━━━━━━━━━━━━━━━━━━\n『💬』 𝐌𝐄𝐒𝐒𝐀𝐆𝐄: \n ${body}\n━━━━━━━━━━━━━━━━━━\n『📢』 𝐑𝐄𝐏𝐋𝐘 => 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐁𝐎𝐗\n━━━━━━━━━━━━━━━━━━\n`
        }

    if (handleReply.from == 'user') {
        msg.body = `『𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 𝐑𝐄𝐏𝐋𝐘』\n\n『⏰』『𝐓𝐈𝐌𝐄』: ${gio}\n━━━━━━━━━━━━━━━━━━\n『🧸』『𝐀𝐝𝐦𝐢𝐧』: ${senderName}\n━━━━━━━━━━━━━━━━━━\n『⚔️』 『𝐁𝐎𝐗』: ${global.data.threadInfo.get(threadID)?.threadName || "Name does not exist"}\n━━━━━━━━━━━━━━━━━━\n『💬』 𝐌𝐄𝐒𝐒𝐀𝐆𝐄:\n ` + body + `\n━━━━━━━━━━━━━━━━━━\n『📢』 𝐑𝐄𝐏𝐋𝐘 => 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐁𝐎𝐗\n━━━━━━━━━━━━━━━━━━\n`;
    }
  
    msg.mentions = [{
        tag: senderName,
        id: senderID
    }]

    const callback = () => {
        api.sendMessage(msg, handleReply.threadID, (err, info) => {
            if (err) console.log(err);
            else {
                const handleReplyObject = {
                    name: this.config.name,
                    from: 'user',
                    messageID: info.messageID,
                    authorMessageID: messageID,
                    threadID: threadID,
                    author: senderID
                }

                if (handleReply.from == 'user') {
                    handleReplyObject.from = 'admin';
                }
                global.client.handleReply.push(handleReplyObject);
            }
        }, handleReply.authorMessageID);
    }


    if (event.attachments[0]?.url) {
        const request = global.nodemodule["request"];
        const fs = global.nodemodule["fs"];

        let response = await request.get(event.attachments[0].url),
            pathname = response.uri.pathname,
            ext = event.attachments[0].type == 'audio' ? 'm4a' : pathname.substring(pathname.lastIndexOf(".") + 1),
            path = requiredPath + `snoti_${Date.now()}.${ext}`;

        response
            .pipe(fs.createWriteStream(path))
            .on("close", () => {
                msg.attachment = fs.createReadStream(path);
                callback();
            })
    } else callback();
}

module.exports.run = async ({ api, event, args, getText, Users }) => {
    const permission = ["100000856538718"]; if (!permission.includes(event.senderID)) return api.sendMessage("You are NoT Amir Chee.!!!!! 🥵", event.threadID, event.messageID); 
    const moment = global.nodemodule["moment-timezone"];

    let allThread = global.data.allThreadID || [],
        count = 1,
        cantSend = [],
        adminName = await Users.getNameUser(event.senderID),
        gio = moment.tz("Asia/Karachi").format("hh:mm:s"),
        msg = {
            body: `『 ☆✦𝗔𝗗𝗠𝗜𝗡 𝗠𝗦𝗚✦☆ 』\n\n『⏰』 𝐓𝐈𝐌𝐄: ${gio}\n『🧸』 𝐀𝐃𝐌𝐈𝐍: \n       ${adminName}\n━━━━━━━━━━━━━━━━━━\n『💬』 𝐌𝐄𝐒𝐒𝐀𝐆𝐄:\n  ` + args.join(` `) + `\n━━━━━━━━━━━━━━━━━━\n『📢』 𝐑𝐄𝐏𝐋𝐘 => 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐀𝐃𝐌𝐈𝐍\n`,
            mentions: [{
                tag: adminName,
                id: event.senderID
            }]
        },
        hasAttach = false;


    const fs = global.nodemodule["fs"];
    let path;

    const callback = () => {
        let promises = []

        for (const idThread of allThread) {
            if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
            else {
                promises.push(new Promise(resolve => setTimeout(() => {
                    api.sendMessage(msg, idThread, (error, info) => {
                        if (error) cantSend.push(idThread);
                        else {
                            global.client.handleReply.push({
                                name: this.config.name,
                                from: 'admin',
                                messageID: info.messageID,
                                authorMessageID: event.messageID,
                                threadID: event.threadID,
                                author: event.senderID
                            })
                            count++;
                        }
                        resolve();
                    });
                }, 500)))
            }
        }

        Promise.all(promises).then(() => {
            if (hasAttach) fs.unlinkSync(path);
            return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);
        })
    }

    if (event.type == "message_reply" && event.messageReply.attachments[0]) {
        const request = global.nodemodule["request"];
        // const fs = require('fs')
        // const axios = require('axios')
        let response = await request.get(event.messageReply.attachments[0].url),
            pathname = response.uri.pathname,
            ext = event.messageReply.attachments[0].type == 'audio' ? 'm4a' : pathname.substring(pathname.lastIndexOf(".") + 1),
            path = requiredPath + `snoti_${Date.now()}.${ext}`;

        // var abc = event.messageReply.attachments[0].url;
        // let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

        response
            .pipe(fs.createWriteStream(path))
            .on("close", () => {
                msg.attachment = fs.createReadStream(path);
                hasAttach = true;
                callback()
            })
    } else callback()
  }