module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.4",
        credits: "Mirai Team",
        description: "Thông báo bot hoặc người vào nhóm",
        dependencies: {
                "fs-extra": ""
        }
};

module.exports.run = async function({ api, event, Users }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                return api.sendMessage(`❒❒ BOT CONNECTED ❒❒\n=====================\n\n┏━━━━ 🖤 ━━━━┓
   ✦❥⋆⃝Yameen ✦ 
┗━━━    🖤 ━━━━┛\n\n=====================\n➪ BOT: ${global.config.BOTNAME}\n➪ Prefix: ${global.config.PREFIX}\n➪ Users: ${global.data.allUserID.length}\n➪ Groups: ${global.data.allThreadID.length}\n=====================\n[]---------------------------------------[]\n\nUse '${global.config.PREFIX}Help' T0o View The Commands That Available\n[]---------------------------------------[]`, threadID);
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);

                                if (!global.data.allUserID.includes(id)) {
                                        await Users.createData(id, { name: userName, data: {} });
                                        global.data.userName.set(id, userName);
                                        global.data.allUserID.push(id);
                                }
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "Welcome {name}.\nto the  {threadName}.\n{type} Welcome 🤗 {soThanhVien} Members  🥳" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
}