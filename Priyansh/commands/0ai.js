const axios = require('axios');
const aiStatus = {}; // To track AI On/Off per thread

module.exports.config = { 
  name: 'ai', 
  version: '1.1.1', 
  hasPermssion: 0, 
  credits: 'AMIR', 
  description: 'ChatGPT with AI On/Off toggle', 
  commandCategory: 'AI', 
  usages: 'Ai [question/on/off]', 
  cooldowns: 0, 
}; 

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;
  const input = args.join(" ").toLowerCase();

  // Toggle ON
  if (input === "on") {
    aiStatus[threadID] = true;
    return api.sendMessage("✅ AI Auto-Reply is now ON. Reply to my messages to chat with me.", threadID, messageID);
  }

  // Toggle OFF
  if (input === "off") {
    aiStatus[threadID] = false;
    return api.sendMessage("❌ AI Auto-Reply is now OFF.", threadID, messageID);
  }

  // Normal AI usage via command
  if (!input) {
    return api.sendMessage("✦ HanJi ✦..", threadID, messageID);
  }

  try {
    api.sendMessage("Sochny De MereKo...", threadID, messageID); 
    const res = await axios.get(`https://ccprojectsapis.zetsu.xyz/api/gpt3?ask=${encodeURIComponent(input)}`); 
    const resu = res.data.data || res.data.result || "Abhi Mera M0oD Nhi Hai 😒";
    api.sendMessage(resu, threadID, messageID);
  } catch (err) {
    console.error(err);
    api.sendMessage("⚠️ Error: Couldn't process your request.", threadID, messageID);
  }
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, messageReply, senderID, body } = event;

  // Only work when AI is enabled and it's a reply to bot
  if (aiStatus[threadID] && messageReply && messageReply.senderID == api.getCurrentUserID()) {
    if (!body) return;

    try {
      api.sendMessage("Sochne De MereKo 🤔", threadID, messageID); 
      const res = await axios.get(`https://ccprojectsapis.zetsu.xyz/api/gpt3?ask=${encodeURIComponent(body)}`);
      const resu = res.data.data || res.data.result || "😕 No response.";
      api.sendMessage(resu, threadID, messageID);
    } catch (err) {
      console.error(err);
      api.sendMessage("⚠️ Error while replying.", threadID, messageID);
    }
  }
};
