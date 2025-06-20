module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "Left the group 😱" : "being kicked by the administrator 👊";
 if (type == "Miss you 😭") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`😒𝗧𝗲𝗥𝗲 𝗞𝗼 𝗠𝗮𝗶𝗡𝘆 𝗔𝗗𝗗 𝗡𝗵𝗶 𝗞𝗥𝗿𝗡𝗮 𝗪𝗽𝘀 ${name} `, event.threadID)
   } else api.sendMessage(`${name} \nRe-added ${name} to the group ✦`, event.threadID);
  })
 }
}
