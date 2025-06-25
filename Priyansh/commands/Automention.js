// Module configuration for the automention command
module.exports.config = {
  name: "automention",                // Name of the command/module
  version: "1.0.0",                   // Version number
  hasPermssion: 0,                    // Permission required (0 = everyone)
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", // Credit to the original author/team
  description: "Bot will reply when you tag admin or tag bot", // Command description
  commandCategory: "Other",           // Category in the command list
  usages: '',                         // Usage instructions (none)
  cooldowns: 1                        // Cooldown time (in seconds)
};

// Handles events, particularly messages where the admin/boss is mentioned
module.exports.handleEvent = function ({
  api,      // Facebook Messenger API object
  event     // Event object (message, sender, mentions, etc.)
}) {
  // Only respond if the sender is NOT the boss (ID 1199760804)
  if (event.senderID !== "1199760804") {
    // List of special user IDs (the boss)
    var bossIDs = ["61554329364111"];
    // Check if the message mentions the boss
    for (const bossID of bossIDs) {
      // If the only mention in the message is the boss's ID
      if (Object.keys(event.mentions) == bossID) {
        // List of possible funny/defensive replies
        var replies = [
          "Don't Mention My Boss 😒",
          "Aby Oye 😂 Mje Mention Do Boss Ko Nai 😁",
          "Pyaari Aunty Boss Busy Hain 😏",
          "Lol Uncle Mera Boss Busy Hain 😂",
          "Ye Le Eggs Kha 👉🥚🥚 Or Mention Krna Band Kro 😕",
          "If you are a girl, go to the boss's inbox.",
          "Boss is busy now, if you want to say anything, go to inbox and tell",
          "Boss is in a meeting with me now, don't mention 🙂",
          "Boss is busy now tell me what do you say",
          "Don't mention, say boss 🥵💋",
          "Assalamu Alaikum",
          "Mjh Main Kia Kami Hai 😒 Mje mention Kr 🙈🙈"
        ];
        // Reply with a random message from the list
        return api.sendMessage({
          body: replies[Math.floor(Math.random() * replies.length)]
        }, event.threadID, event.messageID);
      }
    }
  }
};

// No operation for the main 'run' command (not used here)
module.exports.run = async function ({}) {};