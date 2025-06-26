module.exports.config = {
  name: "ludostar",
  version: "1.0.0",
  hasPermssion: 0, // Anyone can use
  credits: "yameenxsajid001",
  description: "Roll the dice like Ludo Star!",
  commandCategory: "games",
  usages: "",
  cooldowns: 3
};

module.exports.run = async function({ api, event, Users }) {
  // Simulate a Ludo dice roll (1-6)
  const dice = Math.floor(Math.random() * 6) + 1;
  // Get the user's name
  const userName = await Users.getNameUser(event.senderID);
  // Create a fun response
  const diceEmojis = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  const response = `🎲 ${userName} rolled the dice...\n\nResult: ${diceEmojis[dice-1]} (You got ${dice}!)`;

  // Send the result
  return api.sendMessage(response, event.threadID, event.messageID);
};