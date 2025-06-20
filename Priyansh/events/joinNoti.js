const fs = require("fs-extra");
const path = require("path");
const request = require("request");

//━━━━ 🖤 ━━━━ JOIN NOTIFICATION MODULE ━━━━ 🖤 ━━━━
module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.6",
  credits: "jojo99king",
  description: "Sends a welcome image and message when a new user or bot joins the group."
};

const backgroundImages = [
  "https://i.postimg.cc/660hZC9q/a464b6e7101687a156ab6d6739aa152b.jpg",
  "https://i.postimg.cc/2yVN4rBS/917a39ad1ae5480a7ff01b6ecc799692.jpg",
  "https://i.postimg.cc/sGKDGJvg/0c5b19769ca3ff32e1af7937f8c4f3fa.jpg",
  "https://i.postimg.cc/QFCV5vgG/47a9f336d3d8bf8833e03f761977d749.jpg",
  "https://i.postimg.cc/njJ7tZgb/5e2097dec266d2028a90d65b36d7e6f9.jpg",
  "https://i.postimg.cc/v4KLkJGb/927047970a986c0b61fa11a4ce2d7e5f.jpg"
];

//━━━━ 🖤 ━━━━ MAIN FUNCTION ━━━━ 🖤 ━━━━
module.exports.run = async function ({ api, event, Users }) {
  const { threadID } = event;
  const botID = api.getCurrentUserID();

  // Bot added to group
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == botID)) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${global.config.BOTNAME || "Bot"}`, threadID, botID);
    return api.sendMessage(
      "❒❒ BOT CONNECTED ❒❒\n=====================\n\n┏━━━━ 🖤 ━━━━┓
   ✦❥⋆⃝YameenK99 ✦ 
┗━━━    🖤 ━━━━┛\n\n=====================\n➪ BOT: ${global.config.BOTNAME}\n➪ Prefix: ${global.config.PREFIX}\n➪ Users: ${global.data.allUserID.length}\n➪ Groups: ${global.data.allThreadID.length}\n=====================\n[]---------------------------------------[]\n\nUse '${global.config.PREFIX}Help' T0o View The Commands That Available\n[]---------------------------------------[]\n ❒❒\n=====================\n",
      threadID
    );
  }

  // User(s) added
  try {
    const { threadName, participantIDs, imageSrc: groupIconUrl } = await api.getThreadInfo(threadID);
    const threadData = global.data.threadData.get(parseInt(threadID)) || {};
    const addedUsers = event.logMessageData.addedParticipants;

    const defaultMsg = `Hello {userName}! Welcome to {threadName}\nYou're the {memberCount}th member of this group. Enjoy your stay! 🎉`;

    for (const user of addedUsers) {
      const userID = user.userFbId;
      const userName = user.fullName;
      const memberCount = participantIDs.length;
      const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      const avatarUrl = `https://graph.facebook.com/${userID}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const welcomeImageUrl = `https://koja-api.web-server.xyz/welcome?username=${encodeURIComponent(userName)}&avatarUrl=${encodeURIComponent(avatarUrl)}&groupname=${encodeURIComponent(threadName)}&bg=${encodeURIComponent(randomBg)}&memberCount=${memberCount}&groupIcon=${encodeURIComponent(groupIconUrl || 'https://i.pinimg.com/videos/thumbnails/originals/07/9a/15/079a1550baf49469b2a3e50e921b9641.0000000.jpg')}`;

      const messageTemplate = threadData.customJoin || defaultMsg;

      const formattedMsg = messageTemplate
        .replace(/\{userName}/g, userName)
        .replace(/\{name}/g, userName) // also support {name}
        .replace(/\{threadName}/g, threadName)
        .replace(/\{soThanhVien}/g, memberCount)
        .replace(/\{memberCount}/g, memberCount)
        .replace(/\{type}/g, "you");

      const filePath = path.join(__dirname, "cache", "welcome.jpg");

      const callback = () => {
        api.sendMessage({
          body: formattedMsg,
          attachment: fs.createReadStream(filePath),
          mentions: [{ tag: userName, id: userID }]
        }, threadID, () => fs.unlinkSync(filePath));
      };

      request(welcomeImageUrl).pipe(fs.createWriteStream(filePath)).on("close", callback);

      // Save new user data
      if (!global.data.allUserID.includes(userID)) {
        await Users.createData(userID, { name: userName, data: {} });
        global.data.userName.set(userID, userName);
        global.data.allUserID.push(userID);
      }
    }
  } catch (error) {
    console.error("//━━━━ 🖤 ━━━━ JOIN NOTI ERROR ━━━━ 🖤 ━━━━", error);
  }
};