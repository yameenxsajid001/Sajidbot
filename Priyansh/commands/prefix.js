module.exports.config = {
  name: "bot",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "tiện ích",
  hide:true,
  usages: "",
  cooldowns: 5,
    dependencies: {
		"fast-speedtest-api": ""
	}
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
     "Mỹ nhân trên thiên hạ đều tầm thường chỉ có vợ kẻ thù mới làm ta hứng thú","Tuổi thanh xuân tươi đẹp, thời gian quý báu của cuộc đời, hãy sống tự do hết mình."," Khi thanh xuân, người ta vui chơi, yêu đương và làm những điều rồ dại. Người ta vẫn lớn lên mỗi ngày, sai lầm, đứng dậy, đi tiếp.","Tuổi trẻ của mỗi chúng ta chẳng ai giống nhau, có thể tươi đẹp hoặc sóng gió triền miên nhưng đọng lại là những kí ức mãi mãi không thể nào xóa nhòa."
    ];
    var link = [
      "https://i.imgur.com/bDgHtLv.jpg",
"https://i.imgur.com/e8pPmPv.jpg",
"https://i.imgur.com/FZNZrmg.jpg",
"https://i.imgur.com/8qk4gq0.jpg",
"https://i.imgur.com/0dM5C3z.jpg",
"https://i.imgur.com/DjPVuUm.jpg",
"https://i.imgur.com/Yuxe71d.jpg",
"https://i.imgur.com/Ud5cEFq.jpg",
"https://i.imgur.com/vCKIb0O.jpg",
"https://i.imgur.com/JkIl50k.jpg",
"https://i.imgur.com/6ABwS7i.jpg",
"https://i.imgur.com/Ye7qlbw.jpg",
"https://i.imgur.com/gryzOen.jpg",
"https://i.imgur.com/NP0sdUc.jpg",
"https://i.imgur.com/q0rKNsr.jpg",
"https://i.imgur.com/YVLjuVV.jpg",
"https://i.imgur.com/X24SK2G.jpg",
"https://i.imgur.com/eSAueQz.jpg",
"https://i.imgur.com/oRVOR0W.jpg",
"https://i.imgur.com/EkHWUpa.jpg",
"https://i.imgur.com/p2HzsXQ.jpg",
"https://i.imgur.com/vm0Sq3F.jpg",
"https://i.imgur.com/qKVZs8U.jpg",
"https://i.imgur.com/v3Zyyob.jpg",
"https://i.imgur.com/hNbsZ43.jpg",
"https://i.imgur.com/kVQx8Za.jpg",
"https://i.imgur.com/KO6rtui.jpg",
"https://i.imgur.com/EHSF0cM.jpg",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `==「 ${namebot} 」==\n\n[🔰] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠: ${PREFIX}\n[📛] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐛𝐨𝐱: ${prefix}\n[📱] 𝐌𝐨𝐝𝐮𝐥𝐞𝐬: ${commands.size}\n[🌐] 𝐏𝐢𝐧𝐠: ${Date.now() - dateNow}ms\n[📈] 𝐅𝐚𝐬𝐭: ${resault} 𝐌𝐁𝐒\n[🍁] 𝐓𝐨𝐭𝐚𝐥 𝐮𝐬𝐞𝐫𝐬: ${global.data.allUserID.length}\n[🎆] 𝐓𝐨𝐭𝐚𝐥 𝐭𝐡𝐫𝐞𝐚𝐝𝐬: ${global.data.allThreadID.length}\n──────────────────────\n======「 𝐀𝐃𝐌𝐈𝐍 」 ======\n${msg.join("\n")}\n──────────────────────\n===「 𝐍𝐆𝐔̛𝐎̛̀𝐈 𝐇𝐎̂̃ 𝐓𝐑𝐎̛̣ 」 ===\n${msg1.join("\n")}\n──────────────────────\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐁𝐨𝐭 𝐨𝐧𝐥𝐢𝐧𝐞 ${hours} 𝐡𝐨𝐮𝐫(𝐬) ${minutes} 𝐦𝐢𝐧𝐮𝐭𝐞(𝐬) ${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝(𝐬)\n\n──────────────────────\n[𝐁𝐚̣𝐧 𝐜𝐨́ 𝐛𝐢𝐞̂́𝐭 ?]: ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  }
};