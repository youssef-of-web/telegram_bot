const { Telegraf } = require("telegraf");

const bot = new Telegraf("2088819096:AAF_-Y0hLnKDw6zSx7Rg2kJDIeJa9KK_E9U");

bot.start((ctx) => ctx.reply("Welcome"));

bot.hears("ok", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("hey there"));
bot.hears("by", (ctx) => ctx.reply("good day"));

bot.on("text", (ctx) => {
  console.log(ctx.from);
  let Message = `great, here are a docs of many framework then you can choice`;
  /* ctx.deleteMessage(); */
  bot.telegram.sendMessage(ctx.chat.id, Message, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "nodejs",
            callback_data: "nodejs",
          },
          {
            text: "reactjs",
            callback_data: "reactjs",
          },
          {
            text: "nextjs",
            callback_data: "nextjs",
          },
        ],
      ],
    },
  });
});
//method that returns image of a dog

bot.action("nodejs", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "https://nodejs.org/docs/latest-v15.x/api/"
  );
});

//method that returns image of a cat

bot.action("reactjs", (ctx) => {
  bot.telegram.sendPhoto(
    ctx.chat.id,
    "https://reactjs.org/docs/getting-started.html"
  );
});

bot.action("nextjs", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "https://nextjs.org/docs/getting-started"
  );
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
