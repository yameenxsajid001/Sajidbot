module.exports.config = {
    name: "admin",
    version: "1.0.5",
    hasPermssion: 2, // Anyone can use
    credits: "Modified by Amir",
    description: "Add or remove bot admins (No permission check)",
    commandCategory: "config",
    usages: "[list/add/remove] [userID or tag]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "en": {
        "listAdmin": '[Admin] Admin list:\n\n%1',
        "addedNewAdmin": '[Admin] Added %1 Admin(s):\n\n%2',
        "removedAdmin": '[Admin] Removed %1 Admin(s):\n\n%2'
    }
};

module.exports.run = async function ({ api, event, args, Users }) {
    const content = args.slice(1);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
        case "list": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            const msg = [];
            for (const id of listAdmin) {
                const name = await Users.getNameUser(id);
                msg.push(`- ${name} (https://facebook.com/${id})`);
            }
            return api.sendMessage(module.exports.languages.en.listAdmin.replace("%1", msg.join("\n")), threadID, messageID);
        }

        case "add": {
            var listAdd = [];
            if (mention.length > 0) {
                for (const id of mention) {
                    if (!ADMINBOT.includes(id)) {
                        ADMINBOT.push(id);
                        config.ADMINBOT.push(id);
                        listAdd.push(`[${id}] » ${event.mentions[id]}`);
                    }
                }
            } else if (content.length > 0 && !isNaN(content[0])) {
                if (!ADMINBOT.includes(content[0])) {
                    ADMINBOT.push(content[0]);
                    config.ADMINBOT.push(content[0]);
                    const name = await Users.getNameUser(content[0]);
                    listAdd.push(`[${content[0]}] » ${name}`);
                }
            } else return;

            writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
            return api.sendMessage(module.exports.languages.en.addedNewAdmin.replace("%1", listAdd.length).replace("%2", listAdd.join("\n")), threadID, messageID);
        }

        case "remove": {
            var listRemove = [];
            if (mention.length > 0) {
                for (const id of mention) {
                    const index = config.ADMINBOT.indexOf(id);
                    if (index !== -1) {
                        ADMINBOT.splice(index, 1);
                        config.ADMINBOT.splice(index, 1);
                        listRemove.push(`[${id}] » ${event.mentions[id]}`);
                    }
                }
            } else if (content.length > 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.indexOf(content[0]);
                if (index !== -1) {
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    const name = await Users.getNameUser(content[0]);
                    listRemove.push(`[${content[0]}] » ${name}`);
                }
            } else return;

            writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
            return api.sendMessage(module.exports.languages.en.removedAdmin.replace("%1", listRemove.length).replace("%2", listRemove.join("\n")), threadID, messageID);
        }

        default:
            return api.sendMessage("❌ Use: admin list | admin add @tag | admin remove @tag", threadID, messageID);
    }
};