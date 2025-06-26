module.exports.config = {
  name: "no prefix",                        // Command name
  version: "1.0.1",                         // Version
  hasPermssion: 0,                          // Permissions (0 = everyone)
  credits: "JORDAN and OFFICIAL",           // Credits
  description: "Just Respond",              // Description
  commandCategory: "ASSALAM",               // Category
  cooldowns: 5                              // Cooldown in seconds
};

module.exports.handleEvent = async function({
  api,
  event,
  client,
  Users,
  __GLOBAL
}) {
  // Anti-credit change protection
  if (this.config.credits != "JORDAN and OFFICIAL") {
    return api.sendMessage(
      "Detected credits have been changed",
      event.threadID,
      event.messageID
    );
  }

  var { threadID, messageID } = event;
  var senderName = await Users.getNameUser(event.senderID);

  // List of possible greetings (case-insensitive, indexOf tests)
  if (
    event.body.indexOf("salam") == 0 ||
    event.body.indexOf("Assalam") == 0 ||
    event.body.indexOf("salam") == 0 ||
    event.body.indexOf("Assalamualaikum") == 0 ||
    event.body.indexOf("ASSALAM") == 0 ||
    event.body.indexOf("asalam O alikum") == 0 ||
    event.body.indexOf("السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ") == 0 ||
    event.body.indexOf("assalam") == 0 ||
    event.body.indexOf("Asalamalaikum") == 0 ||
    event.body.indexOf("Asalam O alikum") == 0
  ) {
    var reply = {
      body: "🌹 𝐖𝐚 𝐀𝐥𝐚𝐢𝐤𝐮𝐦 𝐀𝐬𝐬𝐚𝐥𝐚𝐦 🌹\nوَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ " + senderName + "🥰"
    };
    api.sendMessage(reply, threadID, messageID);
    api.setMessageReaction('❤️', event.messageID, _ => {}, true);
  }
};

module.exports.run = function({
  api,
  event,
  client,
  __GLOBAL
}) {};