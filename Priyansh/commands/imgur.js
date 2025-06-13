const axios = require('axios');
module.exports.config = {
  name: "imgur",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Amirofficial",
  description: "",
  commandCategory: "url", 
  usages: "image", 
  cooldowns: 10
};


module.exports.run = async function({ api, event }) {
    try {
        if (!event.messageReply || !event.messageReply.attachments[0]) {
            return api.sendMessage(`please reply to image that you want to upload in imgur`, event.threadID, event.messageID);
        }
        const attachment = event.messageReply.attachments[0].url;
        const res = await axios.get(`https://kaiz-apis.gleeze.com/api/imgur?url=${encodeURIComponent(attachment)}&apikey=3873fc7b-0e7e-4b6b-94b7-5be99869552e`);
        const uploaded = res.data.uploaded.image;
        return api.sendMessage(uploaded, event.threadID, event.messageID);
        
    } catch (error) {
        return api.sendMessage(`having some unexpected error while fetching the api`, event.threadID, event.messageID)
    }
}
