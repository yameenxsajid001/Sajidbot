const os = require("os");
const fs = require("fs-extra");

const startTime = new Date(); // Moved outside onStart

module.exports = {
  config: {
    name: "uptime",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "test",
    commandCategory: "box",
    usages: "test",
    prefix: "false",
    dependencies: {},
    cooldowns: 5
  },

  run: async function ({ api, event, args }) {
    try {
      const uptimeInSeconds = (new Date() - startTime) / 1000;

      const seconds = uptimeInSeconds;
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsLeft = Math.floor(seconds % 60);
      const uptimeFormatted = `${days}d ${hours}h ${minutes}m ${secondsLeft}s`;

      const loadAverage = os.loadavg();
      const cpuUsage =
        os
          .cpus()
          .map((cpu) => cpu.times.user)
          .reduce((acc, curr) => acc + curr) / os.cpus().length;

      const totalMemoryGB = os.totalmem() / 1024 ** 3;
      const freeMemoryGB = os.freemem() / 1024 ** 3;
      const usedMemoryGB = totalMemoryGB - freeMemoryGB;

     // const allUsers = await usersData.getAll();
     // const allThreads = await threadsData.getAll();
      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "🔎 Searching...",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "⛔| 𝖡𝖺𝖽 𝖲𝗒𝗌𝗍𝖾𝗆";
      if (ping < 1000) {
        pingStatus = "✅| 𝖲𝗆𝗈𝗈𝗍𝗁 𝖲𝗒𝗌𝗍𝖾𝗆";
      }
      const systemInfo = `╭──𝗨𝗽𝘁𝗶𝗺𝗲 • 𝗦𝗵𝗼𝗻𝗮──♥︎╮\n   ${hours} 𝗛𝗿𝘀 ${minutes} 𝗠𝗶𝗻𝘀 ${seconds} 𝗦𝗲𝗰\n𓆩User ${global.data.allUserID.length}  𓆩Gc ${global.data.allThreadID.length}\n𓆩Cpu ${pidusage.cpu.toFixed(1)}%   𓆩Ram ${byte2mb(pidusage.memory)}\n       𓆩𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n╰♥︎─────────────╯
`;

      api.sendMessage(
        {
          body: systemInfo,
        },
        event.threadID,
        (err, messageInfo) => {
          if (err) {
            console.error("Error sending message with attachment:", err);
          } else {
            console.log(
              "Message with attachment sent successfully:",
              messageInfo,
            );
          }
        },
      );
    } catch (error) {
      console.error("Error retrieving system information:", error);
      api.sendMessage(
        "Unable to retrieve system information.",
        event.threadID,
        event.messageID,
      );
    }
  },
};
