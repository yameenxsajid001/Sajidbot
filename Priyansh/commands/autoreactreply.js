module.exports.config = {
  name: "autoreactreply",
  version: "1.0.0",
  hasPermssion: 0, // Anyone triggers it
  credits: "yameenxsajid001",
  description: "Bot automatically reacts and replies to all user messages.",
  commandCategory: "automation",
  usages: "",
  cooldowns: 1
};

module.exports.handleEvent = async function({ api, event, Users }) {
  // Avoid replying/reacting to the bot's own messages
  if (event.sender.floor(Math.random() * emojis.length)];
  api.setMessageReaction(emoji, event.messageID, () => {}, true);

  // Get user name
  let userName = "there";
  try {
    userName = await Users.getNameUser(event.senderID);
  } catch (e) {}

  // Reply with a customizable message
  const replies = [
    `Thanks for your message, ${userName}!`,
    `Received! 😊`,
    `Hello ${userName}, how can I help?`,
    `👋 Hi ${userName}!`,
    `Bot is here for you, ${userName}.`
  ];
  const reply = replies[Math.floor(Math.random() * replies.length)];

  api.sendMessage(reply, event.threadID, event.messageID);
};

module.exports.run = async function() {};