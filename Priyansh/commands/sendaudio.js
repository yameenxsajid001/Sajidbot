module.exports.config = {
  name: "sendaudio",
  version: "1.1.1",
  hasPermssion: 2,
  credits: "ATF-TEAM",
  usePrefix: false ,
  description: "",
  commandCategory: "System",
  usages: "Dont Used",
  cooldowns: 2
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Karachi").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async ({ api,
  event, Users }) => {
  const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event;
  const allTid = global.data.allThreadID || [];
  const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
  const content = !args[1] ? "●●● ━━━━━ ◥💜◤ ━━━━━ ●●●" : body.slice(body.indexOf(args[1]));
  if (!args[1] && atm == "nofile") return api.sendMessage(`B0ss Add Content 📥`, tid, mid);
  var msg = `${content}\n\nFrom: ${(await Users.getData(sid)).name}\nTiMe: ${fullTime()}`
  const uwu = atm == "nofile" ? msg : {
    body: msg,
    attachment: await DownLoad(atm)
  };
  var c1 = 0, c2 = 0;
  for (var idT of allTid) {
    var promise = new Promise(async (r1, r2) => {
      await api.sendMessage(uwu, idT, async (e, i) => {
        if (e) r2(++c2); else r1(++c1)
        return global.client.handleReply.push({
          name: this.config.name,
          messageID: i.messageID,
          author: sid,
          type: "userReply"
        })
      });
    })
  }
  promise.then(async (r) => api.sendMessage(` SenT Message T0o ${r} Group`, tid, mid)).catch(async (err) => api.sendMessage(` UnaBle T0o SenD Notifications T0o ${err} Group`, tid, mid))
};
module.exports.handleReply = async ({ api, event, handleReply: h, Users, Threads }) => {
  const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
  const { ADMINBOT } = global.config;
  switch (h.type) {
    case "userReply": {
      const atm = atms.length != 0 ? atms : "nofile";
      var msg = `📩 Feedback From Users ${(await Users.getData(sid)).name}\n👥 Group: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏱ TiMe: ${fullTime()}\n\n📝 ConTent: ${atm == "nofile" ? body : "0nly File's T0o You"}\n\nReply T0o Respond T0o Users `
      const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
      };
      var c1 = 0, c2 = 0;
      for (var idA of ADMINBOT) {
        var promise = new Promise(async (r1, r2) => {
          await api.sendMessage(uwu, idA, async (e, i) => {
            if (e) r2(++c2); else r1(++c1)
            return global.client.handleReply.push({
              name: this.config.name,
              messageID: i.messageID,
              author: h.author, idThread: tid, idMessage: mid, idUser: sid,
              type: "adminReply"
            })
          });
        });
      };
      promise.then(async (r1) => api.sendMessage(`📨 Responded T0o Your message T0o  Admin... ${(await Users.getData(h.author)).name}`, tid, mid)).catch(async (err) => api.sendMessage(` UnaBle T0o Respond T0o ${err} Admin`, tid, mid))
      break;
    };
    case "adminReply": {
      const atm = atms.length != 0 ? atms : "nofile";
      var msg = `${(await Users.getData(sid)).name}:\n${atm == "nofile" ? body : "0nly File T0o You"}\n\nTime: ${fullTime()}`
      const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
      };
      await api.sendMessage(uwu, h.idThread, async (e, i) => {
        if (e) return api.sendMessage(`Error`, tid, mid);
        else api.sendMessage(`SenT A Message T0o User ${(await Users.getData(h.idUser)).name} Group ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
        return global.client.handleReply.push({
          name: this.config.name,
          messageID: i.messageID,
          author: sid,
          type: "userReply"
        })
      }, h.idMessage);
      break;
    };
  }
};

const DownLoad = async (atm) => {
  var arr = [];
  for (var i = 0; i < atm.length; i++) {
    const nameUrl = request.get(atm[i].url).uri.pathname
    const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
    const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
    await imageDownload.image({
      url: atm[i].url,
      dest: path
    });
    arr.push(fse.createReadStream(path));
    fse.unlinkSync(path);
  }
  return arr;
};