module.exports.config = {
	name: "demote",
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "remove admin the person you need to remove admin from the group by tagging",
	commandCategory: "General", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("An error occurred!",event.threadID);
if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Need group admin permission\nPlease add and try again!', event.threadID, event.messageID);
if(!mention[0]) return api.sendMessage("You must tag the person to demote it.",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {				api.changeAdminStatus(event.threadID,mention[o],false,) 
				},3000)
			}
		}
	})
      }