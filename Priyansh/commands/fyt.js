const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "fyt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Jordanofficial",
  description: "love",
  commandCategory: "love",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/AJLAA9L.gif" , "https://i.imgur.com/2SfidLg.gif" , "https://i.imgur.com/jeIJ0Ch.gif" , "https://i.imgur.com/3lWoKEl.gif" , "https://i.imgur.com/qVqbN8B.gif" , "https://i.imgur.com/p6ATKUM.gif" , "https://i.imgur.com/OVPj3UI.gif" , "https://i.imgur.com/sXg7zUC.gif" , "https://i.imgur.com/qXWqUgF.gif" , "https://i.imgur.com/h6RJL7o.gif" , "https://i.imgur.com/A5pUWQr.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Tish She KRrNi Fyt Tag Kro 💉", threadID, messageID);
   var callback = () => api.sendMessage({body:`🤜${tag}` +🤛 `👊😘🙈🙈😘👊 \n\n☆ 𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 ☆ ✦❥⋆⃝𝗝𝗢𝗥𝗗𝗔𝗡 ✦ `,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
}