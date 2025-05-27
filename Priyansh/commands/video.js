const videoCommand = {
  config: {
    name: "video",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Download YouTube video from keyword search",
    commandCategory: "Media",
    usages: "[songName]",
    cooldowns: 5,
    dependencies: {
      "node-fetch": "",
      "yt-search": "",
    },
  },

  run: async function ({ api, event, args }) {
    if (!args.length) {
      return api.sendMessage("Please provide a song/video name.", event.threadID, event.messageID);
    }

    const songName = args.join(" ");
    const processingMessage = await api.sendMessage(
      "🔍 Searching and downloading video... Please wait...",
      event.threadID,
      null,
      event.messageID
    );

    try {
      const searchResults = await ytSearch(songName);
      if (!searchResults || !searchResults.videos.length) {
        throw new Error("No results found for your search query.");
      }

      const topResult = searchResults.videos[0];
      const videoId = topResult.videoId;
      const apiKey = "priyansh-here";
      const apiUrl = `https://priyansh-ai.onrender.com/youtube?id=${videoId}&type=video&apikey=${apiKey}`;

      api.setMessageReaction("⌛", event.messageID, () => {}, true);
      const downloadResponse = await axios.get(apiUrl);
      const downloadUrl = downloadResponse.data.downloadUrl;

      const safeTitle = topResult.title.replace(/[^a-zA-Z0-9 \-_]/g, "");
      const filename
