// File: autoleave.js (inside events folder)
const fs = require("fs");
const path = __dirname + "/../commands/autoleave-config.json";

module.exports.config = {
    name: "autoleave",
    eventType: ["log:subscribe"],
    version: "1.0.0",
    credits: "Amir"
};

module.exports.run = async function({ api, event }) {
    if (!fs.existsSync(path)) return;
    const config = JSON.parse(fs.readFileSync(path));
    if (!config.status) return;

    const { threadID, logMessageData } = event;
    const botID = api.getCurrentUserID();

    const addedMembers = logMessageData.addedParticipants.map(u => u.userFbId);
    if (addedMembers.includes(botID)) {
        api.sendMessage("👋 AutoLeave is ON. Leaving this group...", threadID, () => {
            api.removeUserFromGroup(botID, threadID);
        });
    }
};