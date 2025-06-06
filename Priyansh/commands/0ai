module.exports.config = { 
  name: 'ai', 
  version: '1.1.1', 
  hasPermssion: 0, 
  credits: 'JORDAN', 
  description: 'ChatGPT', 
  commandCategory: '....', 
  usages: 'Ai [question]', 
  cooldowns: 0, 
}; 

module.exports.run = async function({ api, event, args }) {
  const b = require('axios'); 
  let txt = args.join(" "); 
  
  if (!txt) { 
    return api.sendMessage("✦ HanJi ✦..", event.threadID, event.messageID);
  } 
  
  try {
    api.sendMessage(`Sochny De MereKo...`, event.threadID, event.messageID); 
    const res = await b.get(`https://ccprojectsapis.zetsu.xyz/api/gpt3?ask=${encodeURIComponent(txt)}`); 
    
    // Handle the response format where data comes in res.data.data
    let resu = res.data.data || res.data.result || "Abhi Mera M0oD Nhi Hai 😒";
    api.sendMessage(resu, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while processing your request.", event.threadID, event.messageID);
  }
}

module.exports.handleEvent = async function({ api, event }) {
  const b = require("axios");
  
  if (event.body && event.body.startsWith("Ai")) { 
    let text = event.body; 
    let chat = text.split(" "); 
    
    if (chat.length < 2) {
      api.sendMessage("✦ HanJi ✦..", event.threadID, event.messageID);
    } else {
      chat.shift();
      let question = chat.join(" ");
      
      try {
        api.sendMessage(`Typing...`, event.threadID, event.messageID); 
        const res = await b.get(`https://ccprojectsapis.zetsu.xyz/api/gpt3?ask=${encodeURIComponent(question)}`);
        
        // Handle the response format where data comes in res.data.data
        let resu = res.data.data || res.data.result || "Sorry, I couldn't get a response.";
        api.sendMessage(resu, event.threadID, event.messageID);
      } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while processing your request.", event.threadID, event.messageID);
      }
    } 
  } 
}
