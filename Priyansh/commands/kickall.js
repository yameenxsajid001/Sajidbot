module.exports.config = {
	name: "kickall",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Amir",
	description: "Kick all members from group except admins and bot",
	commandCategory: "System",
	usages: "",
	cooldowns: 0,
};

module.exports.languages = {
	"en": {
		"error": "An error occurred. Please try again later!",
		"needPermssion": "Bot needs to be an admin to use this command.",
		"noPermission": "You must be an admin to use this command.",
		"kicking": "⏳ Kicking all non-admin members...",
		"done": "✅ Successfully kicked all non-admin members.",
	}
};

module.exports.run = async function ({ api, event, getText, Threads }) {
	try {
		const { threadID, senderID, messageID } = event;
		const botID = api.getCurrentUserID();
		const dataThread = (await Threads.getData(threadID)).threadInfo;

		// Check if bot is admin
		if (!dataThread.adminIDs.some(item => item.id == botID))
			return api.sendMessage(getText("needPermssion"), threadID, messageID);

		// Check if sender is admin
		if (!dataThread.adminIDs.some(item => item.id == senderID))
			return api.sendMessage(getText("noPermission"), threadID, messageID);

		api.sendMessage(getText("kicking"), threadID, async () => {
			const membersToKick = dataThread.participantIDs.filter(id =>
				id !== botID && !dataThread.adminIDs.some(admin => admin.id == id)
			);

			for (let i = 0; i < membersToKick.length; i++) {
				setTimeout(() => {
					api.removeUserFromGroup(membersToKick[i], threadID);
				}, i * 1500); // delay to avoid spam/block
			}
		});

		setTimeout(() => {
			api.sendMessage(getText("done"), threadID);
		}, dataThread.participantIDs.length * 1500 + 2000);

	} catch (err) {
		console.error(err);
		return api.sendMessage("❌ " + getText("error"), event.threadID);
	}
};