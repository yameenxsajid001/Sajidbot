const fs = require("fs");
module.exports.config = {
	name: "autoreact",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	usePrefix: true,
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("😂") ||
     react.includes("😆") || 
react.includes("😁") || 
react.includes("😆") ||
react.includes("🤣") ||
react.includes("😁") ||
react.includes("😛") ||
react.includes("😹") ||
react.includes("🤓") ||
react.includes("😂") ||
react.includes("😹") ||
react.includes("😛")) {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
		if(react.includes("🙂") ||
     react.includes("🙃") || 
react.includes("🫠") || 
react.includes("🙂") ||
react.includes("🙂")) {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔪", event.messageID, (err) => {}, true)
		}
		if(react.includes("😷") ||
     react.includes("🤦‍♀️") || 
react.includes("🤦") || 
react.includes("🤭") ||
react.includes("🙈")) {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
		}
		if(react.includes("🙄") ||
    react.includes("🤨") || 
react.includes("🧐") || 
react.includes("😒") ||
react.includes("🤔")) {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	if(react.includes("😘") ||
     react.includes("😽") || 
react.includes("💋") || 
react.includes("👅") || 
react.includes("👄") || 
react.includes("😙") ||
react.includes("😚") ||      
react.includes("👩‍❤️‍💋‍👨") || 
react.includes("Ummaha") || 
react.includes("😗") || 
react.includes("🥳") ||     
react.includes("kiss") ||
react.includes("chumma")) {
		var msg = {
				body: "",
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
			if(react.includes("🥺") ||
     react.includes("😭") || 
react.includes("🥲") || 
react.includes("😢") || 
react.includes("😪") || 
react.includes("🥺") ||
react.includes("🤧") ||      
react.includes("🥺") || 
react.includes("😓") || 
react.includes("😩") || 
react.includes("🤧") ||     
react.includes("🤧") ||
react.includes("🤧")) {
		var msg = {
				body: "",
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		}
		if(react.includes("magi") || 
react.includes("bessa") || 
react.includes("fuck") || 
react.includes("Gandu") || 
react.includes("gali") ||
react.includes("galibaz") ||   
react.includes("sex") || 
react.includes("Randi") ||
react.includes("madarxud") ||
react.includes("Kutti") || 
react.includes("xuda") || 
react.includes("xudi") ||
react.includes("cuda") ||
react.includes("cudi") ||
react.includes("kutta") ||
react.includes("vuku") || 
react.includes("vukku") || 
react.includes("bsdk") ||
react.includes("sexy") ||
react.includes("bal") ||
react.includes("bl") ||
react.includes("sali") || 
react.includes("Sala") || 
react.includes("kutta") || 
react.includes("kutti") ||
react.includes("kamena") ||
react.includes("bap") ||
react.includes("Kameni") ||
  react.includes("madarxhod") ||
  react.includes("bukaxhuda") || 
  react.includes("খেপি")) {
		var msg =   {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
  api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
		if(react.includes("🥰") ||
     react.includes("🥀") || 
react.includes("❣️") || 
react.includes("💓") || 
react.includes("🤩") || 
react.includes("😍") ||
react.includes("😻") ||      
react.includes("😇") || 
react.includes("r") || 
react.includes("Amir") || 
react.includes("Jawan") ||     
react.includes("💗") ||
react.includes("crush")) {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
  api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }