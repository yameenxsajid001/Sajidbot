module.exports.config = {
    name: "join",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "Deku",
    description: "Notify bots or people entering the group",
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event }) {
    const request = require("request");
    const { threadID } = event;

    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        return api.sendMessage(`𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆!\n\n𝗻𝗼𝘄 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗯𝗼𝘁\n\n𝗽𝗿𝗲𝗳𝗶𝘅: ${global.config.PREFIX}\n𝘂𝘀𝗲𝗿𝘀: ${global.data.allUserID.length}\n𝗴𝗿𝗼𝘂𝗽𝘀: ${global.data.allThreadID.length}\nplease use ${global.config.PREFIX}𝗿𝘂𝗹𝗲𝘀 for bot information\n\ndeveloper:Stay Here`, threadID, (e, info) => {
            setTimeout(() => {
                api.sendMessage({ sticker: 568554150208913 }, event.threadID);
            }, 100);
        });
    } else {
        try {
            const fs = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            var mentions = [], nameArray = [], memLength = [], i = 0;
            let addedParticipants1 = event.logMessageData.addedParticipants;

            for (let newParticipant of addedParticipants1) {
                let userID = newParticipant.userFbId;

                api.getUserInfo(parseInt(userID), (err, data) => {
                    if (err) return console.log(err);

                    var obj = Object.keys(data);
                    var tite = [
                        "https://i.imgur.com/oeyVcRU.jpg",
                        "https://i.imgur.com/qDG55dz.jpg",
                        "https://i.imgur.com/4GGnm3O.jpg",
                        "https://i.imgur.com/cak3TM4.jpg"
                    ];
                    var linkava = ["https://i.imgur.com/EsQBZY4.jpg"];
                    var userName = data[obj].name.replace("@", "");

                    if (userID !== api.getCurrentUserID()) {
                        nameArray.push(userName);
                        mentions.push({ tag: userName, id: userID, fromIndex: 0 });
                        memLength.push(participantIDs.length - i++);
                        memLength.sort((a, b) => a - b);

                        let msg = (typeof threadData.customJoin == "undefined") ?
                            "‿︵‿︵ʚ˚̣̣̣͙ɞ・❉・ ʚ˚̣̣̣͙ɞ‿︵‿︵\n      ❝𝗪𝗘𝗟𝗟𝗖𝗢𝗠𝗘❞\n ☆H𝐄𝐋𝐋𝐨𝐰 {uName} 🌹🌷 \nWelcome to {threadName} Group\n 𝐀𝐩 𝐢𝐬 𝐆𝐫𝐨𝐮𝐩 𝐊𝐞 {soThanhVien}𝐓𝐡 𝐌𝐞𝐦𝐛𝐞𝐫 𝐇ain 𝐄𝐧𝐣𝐨𝐲 😊"
                            : threadData.customJoin;

                        msg = msg
                            .replace(/\{uName}/g, nameArray.join(', '))
                            .replace(/\{type}/g, (memLength.length > 1) ? 'you' : 'Friend')
                            .replace(/\{soThanhVien}/g, memLength.join(', '))
                            .replace(/\{threadName}/g, threadName);

                        var random1 = [`https://api.popcat.xyz/welcomecard?background=${tite}&text1=${userName}&text2=Welcome+To+${threadName}&text3=You+Are+The ${participantIDs.length}th+Member&avatar=https://i.ibb.co/KjgXrL2S/aeeabb31ab793a3d2ab28d2b59561b3d.jpg`];
                        var randomm = random1[Math.floor(Math.random() * random1.length)];

                        let callback = function () {
                            return api.sendMessage({
                                body: msg,
                                attachment: fs.createReadStream(__dirname + `/cache/come.jpg`),
                                mentions
                            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/come.jpg`));
                        };

                        request(encodeURI(randomm)).pipe(fs.createWriteStream(__dirname + `/cache/come.jpg`)).on("close", callback);
                    }
                });
            }
        } catch (err) {
            return console.log("ERROR: " + err);
        }
    }
};