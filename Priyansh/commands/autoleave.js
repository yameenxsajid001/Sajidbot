// File: autoleave.js
const fs = require("fs");
const path = __dirname + "/autoleave-config.json";

module.exports.config = {
    name: "autoleave",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Amir",
    description: "Toggle auto leave from new groups",
    commandCategory: "System",
    usages: "[on/off]",
    cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;
    let config = { status: false };

    // Load existing config if exists
    if (fs.existsSync(path)) config = JSON.parse(fs.readFileSync(path));

    if (!["on", "off"].includes(args[0])) {
        return api.sendMessage("🛠 Usage:\nautoleave on\nautoleave off", threadID, messageID);
    }

    config.status = args[0] === "on";
    fs.writeFileSync(path, JSON.stringify(config, null, 2));

    return api.sendMessage(`✅ AutoLeave has been turned ${config.status ? "ON" : "OFF"}`, threadID, messageID);
};