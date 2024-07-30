const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

// This informs the Telegram servers to send updates to the webhook URL
const domain = process.env.DOMAIN; // Use an environment variable for the domain
const webhookURL = `${domain}/api/bot${token}`;

bot.setWebHook(webhookURL);

app.use(express.json());

// This route receives updates from Telegram
app.post(`/api/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

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

bot.on("polling_error", (error) => {
  console.error(error);
});

module.exports = app; // Export the app for Vercel

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
