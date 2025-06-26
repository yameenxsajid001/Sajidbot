module.exports.config = {
  name: "automention",
  version: "1.0.0",
  hasPermssion: 0, // 0 = anyone can trigger
  credits: "yameenxsajid001",
  description: "Auto reply when someone mentions the boss/admin.",
  commandCategory: "other",
  usages: "",
  cooldowns: 1
};

module.exports.handleEvent = function({ api, event }) {
  // Replace with the boss/admin's Facebook User ID as a string
  const bossIDs = ["1199760804"]; // Example: ["1199760804"]

  // Ignore if the sender is the boss themself
  if (bossIDs.includes(event.senderID)) return;

  // Check if any of the boss IDs are mentioned
  for (const bossID of bossIDs) {
    if (Object.keys(event.mentions).includes(bossID)) {
      const replies = [
        "Don't mention my boss 😒",
        "Hey! Please don't tag the boss 😁",
        "Boss is busy right now, please avoid tagging.",
        "The boss is in a meeting, drop your message here.",
        "Try not to disturb the boss, thanks!",
        "If urgent, send your message in private.",
        "Walaikum Assalam, but boss is unavailable.",
        "Please talk to me if you need anything!"
      ];
      // Send a random reply
      return api.sendMessage(
        replies[Math.floor(Math.random() * replies.length)],
        event.threadID,
        event.messageID
      );
    }
  }
};

module.exports.run = async function({}) {};