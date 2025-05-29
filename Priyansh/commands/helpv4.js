module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "Jordan",
    description: "View command list and info",
    commandCategory: "tools",
    usages: "[command name/all]",
    cooldowns: 0
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args
}) {
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 0
  const { events } = global.client;
    const vjp = process.uptime();
  var hieu = Math.floor(vjp / (60 * 60));
  var simp = Math.floor((vjp % (60 * 60)) / 60);
  var rin = Math.floor(vjp % 60);
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
    if (type == "all") {
        for (const cmd of cmds.values()) {
            msg += `${++i}. ${cmd.config.name}: ${cmd.config.description}\n`
        }
        return api.sendMessage(msg, tid, mid)
    }
   // if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `Command Not Found '${type}'\nSimilar command found => '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `『 ${cmd.name} 』\n➜ Ban Season : ${cmd.version}\n➜ Trem Book : ${TextPr(cmd.hasPermssion)}\n➜ Author: ${cmd.credits}\n➜ describe: ${cmd.description}\n➜ Belonging to Group : ${cmd.commandCategory}\n➜ How To Used : ${cmd.usages}\n➜ Waiting Time : ${cmd.cooldowns}s`
        api.sendMessage(msg, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
        for (const cmd of array) {
            msg += `➜ ${++i} ► ${cmd.cmdCategory.toUpperCase()} ◄\n➜ Trem Book : ${TextPr(cmd.permission)}\n➜ Total ${cmd.nameModule.length} command , including :\n➜ ${cmd.nameModule.join(" | ")}\n────────────────────\n`
        }
       return api.sendMessage({body: msg += `\n➩ Total number of orders : ${cmds.size}\n➩ ${prefix}help + command name to see details\n➩ ${prefix}help + all to see all commands\n➩ Currently the bot is online in total ${hieu} hour ${simp} minute ${rin} second`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-images.duytrollgame.repl.co/rin.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        api.sendMessage(msg, tid)
        }
 global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const { events } = global.client;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = ` the bot is online know ${hours} Hour ${minutes} minutes ${seconds} seconds`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-images.duytrollgame.repl.co/rin.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID); 
  }
    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Member" : p == 1 ? "Qtv group" : p = 2 ? "Admin Bot" : "governor"
              }