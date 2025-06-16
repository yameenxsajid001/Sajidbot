module.exports.config = {
        name: "join",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "Deku",
        description: "Notify bots or people entering the group",
        dependencies: {
                "fs-extra": ""
        }
};
module.exports.run = async function({ api, event }) {
const request = require("request");
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`》 ${global.config.PREFIX} 《 ❃ ➠ ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                return api.sendMessage(`❒❒ BOT CONNECTED ❒❒\n=====================\n\n┏━━━━ 🖤 ━━━━┓
   ✦❥⋆⃝Yameen ✦ 
┗━━━    🖤 ━━━━┛\n\n=====================\n➪ BOT: ${global.config.BOTNAME}\n➪ Prefix: ${global.config.PREFIX}\n➪ Users: ${global.data.allUserID.length}\n➪ Groups: ${global.data.allThreadID.length}\n=====================\n[]---------------------------------------[]\n\nUse '${global.config.PREFIX}Help' T0o View The Commands That Available!(ღ˘⌣˘ღ)\n\n[]---------------------------------------[]\n!`, threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 568554150208913}, event.threadID);
      }, 100)
    })/*api.sendMessage(`${global.config.BOTNAME} Connected successfully!
Thank you for choosing ${global.config.BOTNAME} bot, have fun using it.`, threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 568554150208913}, event.threadID);
      }, 100)
    })*/
        }
        else {
                try {
    const request = require("request");
                        const fs = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs, imageSrc } = await api.getThreadInfo(threadID);
var threadInfo = await api.getThreadInfo(threadID);
                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};                
                        var mentions = [], nameArray = [], memLength = [], i = 0;
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
  var tite = ["https://i.imgur.com/oeyVcRU.jpg", "https://i.imgur.com/qDG55dz.jpg", "https://i.imgur.com/4GGnm3O.jpg", "https://i.imgur.com/cak3TM4.jpg"];
  var linkava1 = tite[Math.floor(Math.random() * tite.length)];
     var linkava = ["https://i.imgur.com/EsQBZY4.jpg"];
    var userName = data[obj].name.replace("@", "");
  if (userID !== api.getCurrentUserID()) {  
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id: userID, fromIndex: 0 });
memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
(typeof threadData.customJoin == "undefined") ? msg = "Hello Mr/ {name},\n─────────────────\n You're The {soThanhVien}Member ─────────────────\nOf {threadName} Group\n─────────────────\nPlease Enjoy Your Stay\n─────────────────\nAnd Make Lots Of Friends =)\n──────-°°__𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{uName}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);                        
var random1 = [`https://api.popcat.xyz/welcomecard?background=${tite}&text1=${userName}&text2=Welcome+To+${threadName}&text3=You+Are+The ${participantIDs.length}th+Member&avatar=https://i.ibb.co/KjgXrL2S/aeeabb31ab793a3d2ab28d2b59561b3d.jpg`];
  var randomm = random1[Math.floor(Math.random() * random1.length)];    
        let callback = function () {
         return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/cache/come.jpg`), mentions
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/come.jpg`));

                };
                request(encodeURI(randomm)).pipe(fs.createWriteStream(__dirname + `/cache/come.jpg`)).on("close", callback);
     }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
        }
     }