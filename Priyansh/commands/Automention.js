module.exports.config = {
  'name': "automention",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "Bot will rep ng tag admin or rep ng tagbot ",
  'commandCategory': "Other",
  'usages': '',
  'cooldowns': 0x1
}; Cc
module.exports.handleEvent = function ({
  api: _0x242514,
  event: _0x1ec2d5
}) {
  if (_0x1ec2d5.senderID !== "1199760804") {
    var _0x2dc479 = ["61554329364111"];
    for (const _0x2bee35 of _0x2dc479) {
      if (Object.keys(_0x1ec2d5.mentions) == _0x2bee35) {
        var _0x3a7db6 = ["Don't Mention My Boss 😒", "Aby Oye 😂 Mje Mention Do Boss Ko Nai 😁", "Pyaari Aunty Boss Busy Hain 😏", "Lol Uncle Mera Boss Busy Hain 😂", "Ye Le Eggs Kha 👉🥚🥚 Or Mention Krna Band Kro 😕", "If you are a girl, go to the boss's inbox.", "Boss is busy now, if you want to say anything, go to inbox and tell", "Boss is in a meeting with me now, don't mention 🙂", "Boss is busy now tell me what do you say", "Don't mention, say boss 🥵💋", "Assalamu Alaikum", "Mjh Main Kia Kami Hai 😒 Mje mention Kr 🙈🙈"];
        return _0x242514.sendMessage({
          'body': _0x3a7db6[Math.floor(Math.random() * _0x3a7db6.length)]
        }, _0x1ec2d5.threadID, _0x1ec2d5.messageID);
      }
    }
  }
};
module.exports.run = async function ({}) {};