module.exports.config = {
  name: "war",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "yameenxsajid001",
  description: "Auto replies with a war board when 'war' is mentioned (no prefix needed)",
  commandCategory: "fun",
  usages: "",
  cooldowns: 1
};

module.exports.handleEvent = async function({ api, event }) {
  if (!event.body) return;
  // Trigger only if 'war' (case-insensitive) is in the message and not from the bot itself
  if (event.body.toLowerCase().includes("war") && event.senderID != api.getCurrentUserID()) {
    const board = `
╔════════════════════╗
║        𝗪𝗔𝗥 𝗕𝗢𝗔𝗥𝗗        ║
╠════════════════════╣
║ ⚔️ Prepare for battle!   ║
║ 🛡️ Defend your honor!    ║
║ 💥 Unleash your power!   ║
╚════════════════════╝
    `;
    api.sendMessage(board, event.threadID, event.messageID);
  }
};

module.exports.run = () => {};