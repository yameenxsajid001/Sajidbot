module.exports.config = {
	name: "uns",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Delete BoT msg",
	commandCategory: "system",
	usages: "reply uns",
  usePrefix: false ,
	cooldowns: 0
};

module.exports.languages = {
	"vi": {
		"returnCant": "Không thể gỡ tin nhắn của người khác.",
		"missingReply": "Hãy reply tin nhắn cần gỡ."
	},
	"en": {
		"returnCant": "Aby LoL Main Kisi 0or Ka Msg Q Unsent Krun 😒",
		"missingReply": "BaBe RePly Kro Us Msg Ka J0o UnSent KRrna"
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}