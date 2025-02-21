import { Telegraf } from 'telegraf';
const TOKEN = '7502793813:AAFHxFnVn9Hn1yPsauIU5gGSzcu5F8ws0Gc';
const bot = new Telegraf(TOKEN);

const web_link = 'https://superb-klepon-2d71ac.netlify.app/';

bot.start((ctx) =>
  ctx.reply('Welcome', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Сайт',
            web_app: { url: web_link },
          },
        ],
      ],
    },
  })
);

bot.launch();
