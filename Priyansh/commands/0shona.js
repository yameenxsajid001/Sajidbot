module.exports.config = { 
name: 'shona', 
version: '1.1.1', 
hasPermssion: 0, 
credits: 'Deku', 
description: 'ChatGPT', commandCategory: '....', 
usages: 'Ai Qus', 
cooldowns: 0, 
}; 
module.exports.run = async function({ api, event, args }) {
 const b = require('axios'); 
let txt = args.join(" "); 
if (!txt){ 
return api.sendMessage("✦ 𝐆 𝐒𝐡𝐎𝐧𝐚 𝐊𝐢 𝐉𝐚𝐚𝐍 𝐇𝐮𝐊𝐦 ✦..", event.threadID, event.messageID)
 } 
api.sendMessage(`🔍"${txt}"`,event.threadID, event.messageID); 
const res = await b.get(`https://ccprojectsapis.zetsu.xyz/api/gpt3?ask=${txt}`); 
let resu = res.data.result; 
api.sendMessage(resu, event.threadID, event.messageID)
 }
 module.exports.handleEvent = async function({ api, event, args }) {
 const b = require("axios")
if (event.body.startsWith("Shona")){ 
let text = event.body; 
let chat = text.split(" "); 
if (chat.length < 2) {
 api.sendMessage("✦ 𝐆 𝐒𝐡𝐎𝐧𝐚 𝐊𝐢 𝐉𝐚𝐍 𝐇𝐮𝐊𝐦 ✦..", event.threadID, event.messageID);
 } else {
 chat.shift() 
api.sendMessage(`🔍"${chat.join(" ")}"`,event.threadID, event.messageID); 
const res = await b.get(`https://ccprojectsapis.zetsu.xyz/api/gpt3?ask=${chat.join(" ")}`);
 let resu = res.data.result; api.sendMessage(resu, event.threadID, event.messageID)
       } 
    } 
 }
