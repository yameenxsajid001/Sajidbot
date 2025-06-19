const axios = require("axios");

module.exports.config = {
  name: "tiktalk",
  version: "2.0.0",
  hasPermission: 0,
  credits: "KOJA-PROJECT",
  description: "AI chatbot jo 'tiktalk on/off' par kaam karta hai",
  commandCategory: "AI",
  usePrefix: false,
  usages: "tiktalk on / off / clear / status",
  cooldowns: 5,
};

let activeThreads = {};
let userMemory = {};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body, messageReply } = event;

  if (!activeThreads[threadID] || !body) return;
  if (!messageReply || messageReply.senderID !== api.getCurrentUserID()) return;

  const userQuery = body.trim();
  if (!userMemory[senderID]) userMemory[senderID] = [];

  const history = userMemory[senderID].join("\n");
  const fullMessage = `${history}\nUser: ${userQuery}\nBot:`;

  const apiURL = `https://koja-api.web-server.xyz/jarvis?message=${encodeURIComponent(fullMessage)}`;

  try {
    const res = await axios.get(apiURL);
    const reply = res.data?.reply?.response || "⚠️ Kuch samajh nahi aaya.";

    userMemory[senderID].push(`User: ${userQuery}`);
    userMemory[senderID].push(`Bot: ${reply}`);

    if (userMemory[senderID].length > 20) {
      userMemory[senderID] = userMemory[senderID].slice(-18);
    }

    return api.sendMessage(reply, threadID, messageID);
  } catch (err) {
    console.error("API error:", err.message);
    return api.sendMessage("❌ Maafi chahta hoon, AI se response nahi mila.", threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const input = args[0]?.toLowerCase();

  switch (input) {
    case "on":
      activeThreads[threadID] = true;
      return api.sendMessage("✅ TikTalk AI ab is thread mein active hai.", threadID, messageID);

    case "off":
      delete activeThreads[threadID];
      return api.sendMessage("❌ TikTalk AI ab is thread mein band hai.", threadID, messageID);

    case "clear":
      if (args[1] === "all") {
        userMemory = {};
        return api.sendMessage("🧹 Sabki memory clear kar di gayi.", threadID, messageID);
      } else {
        delete userMemory[senderID];
        return api.sendMessage("🧹 Aapki memory clear kar di gayi.", threadID, messageID);
      }

    case "status":
      if (activeThreads[threadID]) {
        return api.sendMessage("📶 TikTalk is thread mein *ACTIVE* hai.", threadID, messageID);
      } else {
        return api.sendMessage("📴 TikTalk is thread mein *INACTIVE* hai.", threadID, messageID);
      }

    default:
      return api.sendMessage(
        "📘 Commands:\n• tiktalk on\n• tiktalk off\n• tiktalk clear [all]\n• tiktalk status",
        threadID,
        messageID
      );
  }
};