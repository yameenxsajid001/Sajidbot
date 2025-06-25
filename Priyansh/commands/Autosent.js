module.exports.config = {
  name: "autotime",
  version: "10.02",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_𝑴_ ☢️",
  description: "এটা একটি অটো টাইম সেট করা সময় অনুযায়ী গ্রুপ এ আসবে সবাই🙂\n\n𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁!",
  commandCategory: "group messenger",
  usages: "[]",
  cooldowns: 3
};

const nam = [
  {
    timer: "7:00:00 AM",
    message: [
      "Good Morning To All Members "
    ]
  },
  {
    timer: "5:00:00 AM",
    message: [
      "Sehri Ka Time Ho gya hai 😒"
    ]
  },
  {
    timer: "8:00:00 AM",
    message: [
      "It's Duty Time  Chalo Shabash"
    ]
  },
  {
    timer: "9:00:00 AM",
    message: [
      "It's Breakfast Time Chalo Sab Nashta Karlo 😋"
    ]
  },
  {
    timer: "10:00:00 AM",
    message: [
      "This Is Food Time Chalo Shabash Larkiyon Sabzi Banana start Kro 🔪🧄🍍"
    ]
  },
  {
    timer: "11:00:00 AM",
    message: [
      "Pora 11:00 ho gye "
    ]
  },
  {
    timer: "12:00:00 PM",
    message: [
      "Doop se Banda kala ho jata it's 12:00"
    ]
  },
  {
    timer: "1:00:00 PM",
    message: [
      "Chalo Haajio Namaz time ho gya "
    ]
  },
  {
    timer: "2:00:00 PM",
    message: [
      "Agar bhok lagi hai to Khana Kha lo it's 02:00 "
    ]
  },
  {
    timer: "3:00:00 PM",
    message: [
      "Ts Rest time so jao sab"
    ]
  },
  {
    timer: "4:00:00 PM",
    message: [
      "Tea 🍵 Time it's 04:00"
    ]
  },
  {
    timer: "5:00:00 PM",
    message: [
      "Drink 🍷 time 😏"
    ]
  },
  {
    timer: "6:00:00 PM",
    message: [
      "It's Halwa pori time 😒"
    ]
  },
  {
    timer: "7:00:00 PM",
    message: [
      "It's Game time lest play "
    ]
  },
  {
    timer: "8:00:00 PM",
    message: [
      "Mode off"
    ]
  },
  {
    timer: "9:00:00 PM",
    message: [
      "Mode on"
    ]
  },
  {
    timer: "10:00:00 PM",
    message: [
      "Hello everyone kese hu sab"
    ]
  },
  {
    timer: "11:00:00 PM",
    message: [
      "Good night to all members"
    ]
  }
];

module.exports.run = api => setInterval(() => {
  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  const now = new Date(Date.now() + 6 * 60 * 60 * 1000); // UTC+6 for Bangladesh
  const time = now.toLocaleString('en-US', { hour12: false }).split(',')[1].trim();
  const match = nam.find(x => x.timer == time);
  if (match) {
    global.allThreadID.forEach(threadID => {
      api.sendMessage(getRandom(match.message), threadID);
    });
  }
}, 60000);

module.exports.onLoad = () => {};