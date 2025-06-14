module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, logMessageType, logMessageData, author } = event;

  const userName = (await api.getUserInfo(author))[author]?.name || "Someone";

  let message = "";

  switch (logMessageType) {
    case "log:thread-admins":
      message = logMessageData.ADMIN_EVENT === "add_admin"
        ? `👑 ${userName} ne ${logMessageData.TARGET_ID} ko admin banaya.`
        : `⚠️ ${userName} ne ${logMessageData.TARGET_ID} se admin hata diya.`;
      break;

    case "log:thread-name":
      message = `📛 ${userName} ne group ka naam badla: "${logMessageData.name}"`;
      break;

    case "log:user-nickname":
      message = `🏷️ ${userName} ne ${logMessageData.nickname} ka nickname badla.`;
      break;

    case "log:thread-icon":
      message = `😎 ${userName} ne group ka emoji change kiya: ${logMessageData.icon}`;
      break;

    case "log:thread-call":
      if (logMessageData.event === "started") {
        message = `📞 ${userName} ne group call start ki.`;
      } else if (logMessageData.event === "ended") {
        const duration = logMessageData.call_duration || "Unknown duration";
        message = `📴 Call khatam hui. Duration: ${duration} sec.`;
      }
      break;

    case "log:thread-image":
      message = `🖼️ ${userName} ne group ka DP change kiya.`;
      break;

    case "log:subscribe":
      const addedNames = logMessageData.addedParticipants.map(id => id.fullName).join(", ");
      message = `➕ ${userName} ne add kiya: ${addedNames}`;
      break;

    case "log:unsubscribe":
      const leftName = event.logMessageData.leftParticipantFbId === author
        ? `${userName} left the group.`
        : `${userName} ne ${logMessageData.leftParticipantFbId} ko remove kiya.`;
      message = `➖ ${leftName}`;
      break;

    default:
      return;
  }

  if (message) {
    api.sendMessage(`📢 Group Update:\n${message}`, threadID);
  }
};