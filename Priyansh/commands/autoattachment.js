module.exports.config = {
  name: "autoattachment",
  version: "1.0.0",
  hasPermssion: 0, // Anyone can trigger
  credits: "yameenxsajid001",
  description: "Bot automatically reacts and replies to user attachments.",
  commandCategory: "automation",
  usages: "",
  cooldowns: 1
};

module.exports.handleEvent = async function({ api, event, Users }) {
  // Check if the message contains attachments (image, audio, video, file, etc.)
  if (event.attachments && event.attachments.length > 0) {
    // React to the message (🌹)
    api.setMessageReaction("🥳", event.messageID, () => {}, true);

    // Get the user's name
    let userName = "there";
    try {
      userName = await Users.getNameUser(event.senderID);
    } catch (e) {}

    // Customize the reply message as you wish
    const replyMsg = `${userName} Very Nice 👌, ${userName}!Super SS`;

    // Send the reply
    api.sendMessage(replyMsg, event.threadID, event.messageID);
  }
};

module.exports.run = async function() {};