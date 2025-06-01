const fs = require("fs");
module.exports.config = {
	name: "g",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "Deku", 
	description: "",
	commandCategory: "no prefix",
	usages: "...",
    cooldowns: 0, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const chalk = require('chalk');
  const { exec } = require("child_process");
  const cron = require('node-cron');
cron.schedule(`0 */1 * * * *`, () => {
exec("rm -rf modules/commands/cache && mkdir -p modules/commands/cache && rm -rf modules/commands/tad/* ", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(chalk.bold.hex("#00ffff")("[ AUTO CLEAR CACHE ] ❯ ") + chalk.hex("#00ffff")("Successfully delete cache"));
});
},{
  scheduled: true,
  timezone: "Asia/Manila"
});
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	if (event.body.indexOf("upt")==0) {
			api.sendMessage(`Master, bot is up and running  ${hours}:${minutes}:${seconds}`, threadID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }