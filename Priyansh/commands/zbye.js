module.exports.config = {
	name: "bye",
     	version: "1.0.1",
	hasPermssion: 2,
	credits: "JORDAN", 
	description: "",
	commandCategory: "",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("maya nalang")==0 || (event.body.indexOf("By")==0 || (event.body.indexOf("Bye")==0 || (event.body.indexOf("BYE")==0)))) {
		var msg = {
				body: "𝗢𝗧𝘆 𝗕𝗮𝗕𝗲"
			}
			api.sendMessage(msg, threadID, messageID);
setTimeout(() => {
api.sendMessage({sticker: "162332973951561"}, threadID, messageID)
}, 3)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}