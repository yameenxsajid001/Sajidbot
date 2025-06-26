module.exports.config = {
  name: "autoreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "yameenxsajid001",
  description: "Automatically replies to all user messages without prefix.",
  commandCategory: "automation",
  usages: "",
  cooldowns: 1
};

module.exports.handleEvent = async function({ api, event, Users }) {
  // Ignore the bot's own messages
  if (event.senderID == api.getCurrentUserID()) return;

  // Get user's name (optional, if you have Users.getNameUser)
  let name = "there";
  try { name = await Users.getNameUser(event.senderID); } catch (_) {}

  // Compose the reply
  const reply = `Hi ${name}, I saw your message!`;

  // Reply to the message
  api.sendMessage(reply, event.threadID, event.messageID);
};

module.exports.run = async function() {};