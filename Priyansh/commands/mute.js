module.exports.config = {
  name: "mute",
  version: "1.0.0",
  hasPermssion: 1, // 1 = group admin only
  credits: "yameenxsajid001",
  description: "Mute a user in the group for a certain time.",
  commandCategory: "group",
  usages: "[tag user] [minutes]",
  cooldowns: 5
};

const mutedUsers = {}; // Stores muted users with expiration times

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, senderID, body } = event;
  // Check if user is muted in this thread and remove their message if so
  if (mutedUsers[threadID] && mutedUsers[threadID][senderID]) {
    const now = Date.now();
    if (now < mutedUsers[threadID][senderID]) {
      // Delete the message (if your bot has permission; else, warn them)
      try {
        await api.unsendMessage(event.messageID);
      } catch (e) {
        api.sendMessage("You are muted and cannot send messages!", threadID, event.messageID);
      }
    } else {
      // Unmute after time expires
      delete mutedUsers[threadID][senderID];
    }
  }
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, mentions, senderID } = event;
  // Only allow group admins to use this command
  const threadInfo = await api.getThreadInfo(threadID);
  if (!threadInfo.adminIDs.some(e => e.id == senderID)) {
    return api.sendMessage("Only group admins can use this command.", threadID, messageID);
  }

  // Check if user was tagged
  const mentionIDs = Object.keys(mentions);
  if (mentionIDs.length === 0)
    return api.sendMessage("Please tag the user you want to mute.", threadID, messageID);

  // Get mute duration (in minutes)
  const minutes = parseInt(args[args.length - 1]);
  const duration = (!isNaN(minutes) && minutes > 0) ? minutes : 10; // Default: 10 minutes

  // Set mute
  if (!mutedUsers[threadID]) mutedUsers[threadID] = {};
  mentionIDs.forEach(uid => {
    mutedUsers[threadID][uid] = Date.now() + duration * 60 * 1000;
  });

  api.sendMessage(
    `User(s) muted for ${duration} minute(s).`,
    threadID,
    messageID
  );
};