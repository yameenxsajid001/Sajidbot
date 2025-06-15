module.exports.config = {
    name: "sim",
    version: "4.3.8",
    hasPermssion: 2,
    credits: "Amir",
    description: "Chat with Teach Base Sim",
    commandCategory: "Chat same sim",
    usages: "[on/off/message]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
};

const axios = require("axios");

async function simsimi(inputText) {
    const encodedQuery = encodeURIComponent(inputText);
    const apiUrl = `https://sim-teach-api.vercel.app/api/sim?query=${encodedQuery}`;

    try {
        const res = await axios.get(apiUrl);
        const { status, response } = res.data;
        if (status === "success") {
            return { error: false, data: response };
        } else {
            return { error: true, data: "❌ API Error: No valid response." };
        }
    } catch (err) {
        return { error: true, data: "❌ Failed to connect to API." };
    }
}

module.exports.onLoad = async function () {
    if (typeof global.manhG === "undefined") global.manhG = {};
    if (typeof global.manhG.simsimi === "undefined") global.manhG.simsimi = new Map();
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body } = event;
    const reply = (msg) => api.sendMessage(msg, threadID, messageID);

    if (global.manhG.simsimi.has(threadID)) {
        if (senderID == api.getCurrentUserID() || !body || messageID == global.manhG.simsimi.get(threadID)) return;
        const { error, data } = await simsimi(body);
        return error ? null : reply(data);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const reply = (msg) => api.sendMessage(msg, threadID, messageID);

    if (args.length === 0) return reply("[ 𝐒𝐈𝐌 ] - You haven't entered a message yet.");

    switch (args[0].toLowerCase()) {
        case "on":
            if (global.manhG.simsimi.has(threadID)) return reply("[ 𝐒𝐈𝐌 ] - Already enabled.");
            global.manhG.simsimi.set(threadID, messageID);
            return reply("[ 𝐒𝐈𝐌 ] - Chat bot is now active.");
        
        case "off":
            if (!global.manhG.simsimi.has(threadID)) return reply("[ 𝐒𝐈𝐌 ] - Already disabled.");
            global.manhG.simsimi.delete(threadID);
            return reply("[ 𝐒𝐈𝐌 ] - Chat bot is now disabled.");

        default:
            const { error, data } = await simsimi(args.join(" "));
            return error ? reply("❌ Error: " + data) : reply(data);
    }
};