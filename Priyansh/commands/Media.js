const axios = require("axios"); const fs = require("fs"); const path = require("path"); const ytSearch = require("yt-search");

module.exports = { config: { name: "media", version: "1.0.1", hasPermssion: 0, credits: "Modified by ChatGPT | Original by Priyansh Rajput", description: "Send audio, video, or both from YouTube keyword", commandCategory: "Media", usages: "media [audio|video|both] [song name]", cooldowns: 5, dependencies: { "axios": "", "yt-search": "" }, },

run: async function ({ api, event, args }) { const type = args[0]?.toLowerCase(); const query = args.slice(1).join(" ");

if (!type || !["audio", "video", "both"].includes(type) || !query) {
  return api.sendMessage(
    "Please use the correct format:\nmedia audio [song] — for audio only\nmedia video [song] — for video only\nmedia both [song]  — for both",
    event.threadID,
    event.messageID
  );
}

const msg = await api.sendMessage("🔍 Searching...", event.threadID);

try {
  const search = await ytSearch(query);
  const video = search.videos[0];
  if (!video) throw new Error("No results found");

  const apiKey = "priyansh-here";
  const baseURL = `https://priyansh-ai.onrender.com/youtube?id=${video.videoId}&apikey=${apiKey}`;

  const tasks = [];
  if (type === "audio" || type === "both") {
    tasks.push(downloadAndSend("audio", baseURL, video.title, api, event));
  }
  if (type === "video" || type === "both") {
    tasks.push(downloadAndSend("video", baseURL, video.title, api, event));
  }

  await Promise.all(tasks);
  api.unsendMessage(msg.messageID);
} catch (err) {
  console.error(err);
  api.sendMessage("❌ Error: " + err.message, event.threadID, event.messageID);
}

}, };

async function downloadAndSend(mediaType, baseURL, title, api, event) { const safeTitle = title.replace(/[^a-zA-Z0-9 -_]/g, ""); const filename = ${safeTitle}.${mediaType === "audio" ? "mp3" : "mp4"}; const filePath = path.join(__dirname, "cache", filename);

const res = await axios.get(${baseURL}&type=${mediaType}); const downloadUrl = res.data.downloadUrl;

const response = await axios({ url: downloadUrl, method: "GET", responseType: "stream", });

if (!fs.existsSync(path.dirname(filePath))) { fs.mkdirSync(path.dirname(filePath), { recursive: true }); }

const writer = fs.createWriteStream(filePath); response.data.pipe(writer);

await new Promise((resolve, reject) => { writer.on("finish", resolve); writer.on("error", reject); });

await api.sendMessage( { attachment: fs.createReadStream(filePath), body: ${mediaType === "audio" ? "🎧 Audio" : "🎥 Video"} — ${title}, }, event.threadID, () => fs.unlinkSync(filePath), event.messageID ); }

