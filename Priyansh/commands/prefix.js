const fs = require("fs");
module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Jordan",
    description: "",
    commandCategory: "Help Zone",
    usages: "prefix",
    cooldowns: 1,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    var senderName = "";
    api.getUserInfo(senderID, (err, result) => {
        if (err) {
            console.error(err);
            senderName = "";
        } else {
            senderName = result[senderID].name;
        }
        if (
            event.body.indexOf("prefis") == 0 ||
            event.body.indexOf("Prefix") == 0 ||
            event.body.indexOf("PREFIX") == 0 ||
            event.body.indexOf("prefi") == 0
        ) {
            // Send text message with prefix information
            api.sendMessage(
                {
                    body: `𝗛𝗲𝘆 😋 𝗜 𝗔𝗺 𝗔𝗹𝗶𝘃𝗲 🖤💜\n\n┤◦➛My Prefix - [ ${global.config.PREFIX} ]\n┤◦➛${global.config.PREFIX}help -> See All Commands\n┤◦➛${global.config.PREFIX}called [ Message ] -> Report    T0o Admin for any Problem\n\n┤◦➛𝗡𝗼𝘄 𝗘𝗻𝗷𝗼𝘆 𝗧𝗵𝗲 𝗕𝗢𝗧 - 💜`,
                    attachment: fs.createReadStream(
                        __dirname + `/noprefix/prefix.gif`
                    ),
                },
                threadID,
                messageID
            );

            // Send voice message with additional information
            const voiceFile = fs.readFileSync(
                __dirname + "/noprefix/prefix.gif"
            );
            api.sendMessage(
                {
                    attachment: voiceFile,
                    type: "audio",
                    body: "Hey, listen to my prefix information!",
                },
                threadID,
                () => {}
            );

            api.setMessageReaction("🟣", event.messageID, (err) => {}, true);
        }
    });
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};