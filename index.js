const TelegramBot = require("node-telegram-bot-api");

const token = "7263679037:AAHOI2wDdQZy-bfBJP6U4sZLcnnRM3j21Gk";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const url = "https://tap-bot-telegram-git-main-dev-1ces-projects.vercel.app/";

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            web_app: { url: url },
          },
        ],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    "Welcome! Click the button below to play the game.",
    opts
  );
});

bot.on("polling_error", (error) => {
  console.error(error);
});

bot.onText(/\/run/, (msg) => {
  const chatId = msg.chat.id;
  const url = "https://tap-bot-telegram-git-main-dev-1ces-projects.vercel.app/";

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            url: url,
          },
        ],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    "Welcome! Click the button below to play the game.",
    opts
  );
});

bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.chat.username);
  bot.sendMessage(chatId, "Welcome! This is test");
});

// function sendMessage(messageObj, messageText) {
//   return axiosInstance.get("sendMessage", {
//     chat_id: messageObj.chat.id,
//     text: messageText,
//   });
// }

// function handleMessage(messageObj) {
//   const messageText = messageObj.text || "";
//   if (messageText.charAt(0) === "/") {
//     const command = messageText.substr(1);
//     switch (command) {
//       case "start":
//         return;
//       default:
//         return sendMessage(messageObj, "Hi!, I don't know");
//     }
//   } else {
//     return sendMessage(messageObj, messageText);
//   }
// }

// module.exports = { handleMessage };
