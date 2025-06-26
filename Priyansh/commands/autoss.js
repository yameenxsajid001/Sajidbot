module.exports.config = {
  name: "autosendsticker",
  version: "1.0.0",
  hasPermssion: 2, // 2 = admin only (change to 0 for everyone)
  credits: "yameenxsajid001",
  description: "Automatically sends a random sticker to the group at set intervals.",
  commandCategory: "automation",
  usages: "",
  cooldowns: 5
};

// List of sticker IDs you want to send
const STICKER_IDS = [
  "369239263222822", // Like
  "369239383222810", // Heart
  "369239343222814", // Wow
  // Add more sticker IDs as you like!
];

const INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds
const THREAD_ID = "YOUR_THREAD_ID"; // Replace with your group/thread ID

let intervalID = null;

module.exports.onLoad = ({ api }) => {
  if (intervalID) clearInterval(intervalID);
  intervalID = setInterval(() => {
    // Pick a random sticker from the list
    const sticker = STICKER_IDS[Math.floor(Math.random() * STICKER_IDS.length)];
    api.sendMessage({ sticker }, THREAD_ID);
  }, INTERVAL);
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("Auto sticker sender is running!", event.threadID, event.messageID);
};