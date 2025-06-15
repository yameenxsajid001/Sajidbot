module.exports.config = {
    name: "groupnotify",
    eventType: ["log:thread-admins", "log:thread-call", "log:thread-image", "log:thread-name", "log:thread-icon", "log:user-nickname"],
    version: "1.0.0",
    credits: "YourName",
    description: "Notifies group about all changes",
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    const { threadID, logMessageType, logMessageData, author } = event;
    
    try {
        let msg = "";
        const threadInfo = await api.getThreadInfo(threadID);
        const threadName = threadInfo.threadName;
        
        // Get user name who made the change
        let adminName = "Someone";
        if (author) {
            const userInfo = await api.getUserInfo(author);
            adminName = userInfo[author].name;
        }
        
        switch(logMessageType) {
            case "log:thread-admins":
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    const addedAdmin = logMessageData.TARGET_ID;
                    const userInfo = await api.getUserInfo(addedAdmin);
                    const adminAddedName = userInfo[addedAdmin].name;
                    msg = `📢 𝗔𝗱𝗺𝗶𝗻 𝗨𝗽𝗱𝗮𝘁𝗲\n\n${adminName} has promoted ${adminAddedName} to admin!`;
                } else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    const removedAdmin = logMessageData.TARGET_ID;
                    const userInfo = await api.getUserInfo(removedAdmin);
                    const adminRemovedName = userInfo[removedAdmin].name;
                    msg = `📢 𝗔𝗱𝗺𝗶𝗻 𝗨𝗽𝗱𝗮𝘁𝗲\n\n${adminName} has demoted ${adminRemovedName} from admin!`;
                }
                break;
                
            case "log:thread-call":
                if (logMessageData.event == "group_call_started") {
                    msg = `📞 𝗖𝗮𝗹𝗹 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻\n\n${adminName} has started a group call!`;
                } else if (logMessageData.event == "group_call_ended") {
                    const callDuration = logMessageData.call_duration;
                    const minutes = Math.floor(callDuration / 60);
                    const seconds = callDuration % 60;
                    msg = `📞 𝗖𝗮𝗹𝗹 𝗘𝗻𝗱𝗲𝗱\n\nGroup call ended after ${minutes}m ${seconds}s`;
                }
                break;
                
            case "log:thread-image":
                msg = `🖼️ 𝗚𝗿𝗼𝘂𝗽 𝗜𝗺𝗮𝗴𝗲 𝗖𝗵𝗮𝗻𝗴𝗲𝗱\n\n${adminName} has updated the group's profile picture!`;
                break;
                
            case "log:thread-name":
                const oldName = logMessageData.name;
                const newName = threadName;
                msg = `Group Name Updated\n\n${adminName} has renamed the group from "${oldName}" to "${newName}"`;
                break;
                
            case "log:thread-icon":
                msg = `😊 𝗚𝗿𝗼𝘂𝗽 𝗘𝗺𝗼𝗷𝗶 𝗖𝗵𝗮𝗻𝗴𝗲𝗱\n\n${adminName} has updated the group emoji to ${logMessageData.thread_icon}`;
                break;
                
            case "log:user-nickname":
                const targetID = logMessageData.participant_id;
                const userInfo = await api.getUserInfo(targetID);
                const userName = userInfo[targetID].name;
                const oldNickname = logMessageData.nickname || "no nickname";
                const newNickname = logMessageData.nickname || "no nickname";
                msg = `🏷️ 𝗡𝗶𝗰𝗸𝗻𝗮𝗺𝗲 𝗨𝗽𝗱𝗮𝘁𝗲\n\n${adminName} Ne ${userName}'Ka nickname Change Kia  "${oldNickname} Naya Naam kese Laga 😊"`;
                break;
        }
        
        if (msg) {
            api.sendMessage(msg, threadID);
        }
        
    } catch (err) {
        console.error("Error in groupnotify:", err);
    }
};