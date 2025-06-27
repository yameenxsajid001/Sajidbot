module.exports.config = {
  name: "autotime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "yameenxsajid001",
  description: "Automatically sends scheduled messages to all groups.",
  commandCategory: "group messenger",
  usages: "",
  cooldowns: 3
};

// Change this to your preferred timezone, e.g. 'Asia/Dhaka', 'America/New_York'
const TIMEZONE = 'UTC';

const SCHEDULE = [
  {
    time: "08:00 AM",
    messages: [
      "Good morning, everyone!"
    ]
  },
  {
    time: "01:00 PM",
    messages: [
      "Time for lunch!"
    ]
  },
  {
    time: "05:30 PM",
    messages: [
      "Good evening!"
    ]
  }
];

function getCurrentTimeString() {
  // Use the system timezone (can be changed to use a library like moment-timezone for more options)
  const now = new Date();
  // Adjust for timezone if needed
  // NOTE: For server in UTC, no change. For other timezones, use a library.
  return now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

module.exports.onLoad = function (api) {
  setInterval(() => {
    const now = new Date();
    // To handle timezones robustly, you can use moment-timezone (if supported by your host):
    // const now = require('moment-timezone')().tz(TIMEZONE);
    // const currentTime = now.format('hh:mm A');
    // But here we stick to vanilla JS for portability:

    let hours = now.getUTCHours();
    let minutes = now.getUTCMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    let minuteStr = minutes < 10 ? "0" + minutes : "" + minutes;
    let currentTime = `${hours < 10 ? "0" + hours : hours}:${minuteStr} ${ampm}`;

    const scheduleItem = SCHEDULE.find(item => item.time === currentTime);
    if (scheduleItem) {
      global.data.allThreadID.forEach(threadID => {
        const message = scheduleItem.messages[Math.floor(Math.random() * scheduleItem.messages.length)];
        api.sendMessage(message, threadID);
      });
    }
  }, 60 * 1000); // Check every minute
};

module.exports.run = () => {};