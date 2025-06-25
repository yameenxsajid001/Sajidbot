const fs = require('fs-extra');
const request = require('request');
const axios = require('axios');

module.exports.config = {
  name: "decode",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_𝑴_ ☢️_এর",
  description: "়রে গন ধর্ম প্রচার করি ডিক কন্ডম দিয়ে টাকার দামের লা মাগির ছবি haters vedio haters দের মায়রে ২ রেলের মাযা চুদি",
  commandCategory: "media",
  usages: "haters io",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async function({
  api,
  event,
  args,
  client,
  Users,
  Threads,
  __GLOBAL,
  Currencies
}) {
  const imgurLink = "https://i.imgur.com/hmi3eK4.mp4";
  const cachePath = __dirname + "/cache/15.mp4";
  const message = "ULLASH";
  // Download the file to cache
  const file = fs.createWriteStream(cachePath);
  request(imgurLink)
    .pipe(file)
    .on('close', () => {
      api.sendMessage({
        body: `「 ${message} 」`,
        attachment: fs.createReadStream(cachePath)
      }, event.threadID, () => fs.unlinkSync(cachePath));
    });
};