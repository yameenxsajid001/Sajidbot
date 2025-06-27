const moment = require("moment-timezone");

module.exports.config = {
  name: "autotime",
  version: "10.02",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_𝑴_ ☢️",
  description: "یہ خودکار پیغام رسانی ہے۔ وقت کے مطابق پیغام بھیجے گا۔",
  commandCategory: "group messenger",
  usages: "[]",
  cooldowns: 3
};

const schedule = [
  { timer: "05:00:00", message: ["Sehri Ka Time Ho gya hai 😒"] },
  { timer: "07:00:00", message: ["Good Morning To All Members"] },
  { timer: "08:00:00", message: ["It's Duty Time  Chalo Shabash"] },
  { timer: "09:00:00", message: ["It's Breakfast Time Chalo Sab Nashta Karlo 😋"] },
  { timer: "10:00:00", message: ["This Is Food Time Chalo Shabash Larkiyon Sabzi Banana start Kro 🔪🧄🍍"] },
  { timer: "11:00:00", message: ["Pora 11:00 ho gye"] },
  { timer: "12:00:00", message: ["Doop se Banda kala ho jata it's 12:00"] },
  { timer: "13:00:00", message: ["Chalo Haajio Namaz time ho gya"] },
  { timer: "14:00:00", message: ["Agar bhok lagi hai to Khana Kha lo it's 02:00"] },
  { timer: "15:00:00", message: ["Ts Rest time so jao sab"] },
  { timer: "16:00:00", message: ["Tea 🍵 Time it's 04:00"] },
  { timer: "17:00:00", message: ["Drink 🍷 time 😏"] },
  { timer: "18:00:00", message: ["It's Halwa pori time 😒"] },
  { timer: "19:00:00", message: ["It's Game time lest play"] },
  { timer: "20:00:00", message: ["Mode off"] },
  { timer: "21:00:00", message: ["Mode on"] },
  { timer: "22:00:00", message: ["Hello everyone kese hu sab"] },
  { timer: "23:00:00", message: ["Good night to all members"] }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports.onLoad = function(api) {
  setInterval(() => {
    const now = moment().tz("Asia/Karachi");
    const currentTime = now.format("HH:mm:ss");
    const match = schedule.find(item => item.timer === currentTime);
    if (match && global.allThreadID) {
      global.allThreadID.forEach(threadID => {
        api.sendMessage(getRandom(match.message), threadID);
      });
    }
  }, 60 * 1000); // every minute
};

module.exports.run = () => {};