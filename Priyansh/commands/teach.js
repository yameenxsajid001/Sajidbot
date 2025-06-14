module.exports.config = {
    name: "teach",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Amir",
    description: "Sim learning by teaching",
    commandCategory: "Sim",
    usages: "",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = ({ api, event, args }) => {
    const { threadID, messageID, senderID } = event;
    return api.sendMessage("[ 𝐒𝐈𝐌 ] - Reply to this message with a question for Simmi to learn", threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            messageID: info.messageID,
            content: {
                id: senderID,
                ask: "",
                ans: ""
            }
        });
    }, messageID);
};

module.exports.handleReply = async({ api, event, Users, handleReply }) => {
    const axios = require("axios");
    const moment = require("moment-timezone");
    const { threadID, messageID, senderID, body } = event;

    if (handleReply.content.id != senderID) return;
    const input = body.trim();
    const send = (msg) => api.sendMessage(msg, threadID, messageID);
    const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        api.unsendMessage(handleReply.messageID);
        global.client.handleReply.push({
            step: step,
            name: module.exports.config.name,
            messageID: info.messageID,
            content: content
        });
    }, messageID);

    let content = handleReply.content;
    let timeZ = moment.tz("Asia/Karachi").format("HH:mm:ss | DD/MM/YYYY");

    switch (handleReply.step) {
        case 1:
            content.ask = input;
            sendC("[ 𝐒𝐈𝐌 ] - Great! Now reply with the answer Simmi should learn.", 2, content);
            break;

        case 2:
            content.ans = input;
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
            api.unsendMessage(handleReply.messageID);

            try {
                let c = content;
                let apiUrl = `https://sim-teach-api.vercel.app/api/teach?query=${encodeURIComponent(c.ask)}&response=${encodeURIComponent(c.ans)}`;
                let res = await axios.get(apiUrl);

                if (res.data.status !== "success") return send(`[ 𝐒𝐈𝐌 ] - Failed to teach.\n➤ Error: ${res.data.message || "Unknown error"}`);

                send(`[ 𝐒𝐈𝐌 ] - Taught successfully!\n\n🧠 Learned:\n${res.data.message}\n\n⏱ Time: ${timeZ}`);
            } catch (e) {
                send("[ 𝐒𝐈𝐌 ] - Teaching failed due to an API or server error.");
            }
            break;

        default:
            break;
    }
};