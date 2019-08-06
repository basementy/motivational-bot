const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '719597354:AAGcQSFm3IVQJeTXDeYATU-RqiYDEudUtCA'
const bot = new TelegramBot( TOKEN, { polling: true })

bot.onText(/\/bomdia/, (msg) => {
  console.log('Working!')
  const rand = Math.floor((Math.random() * 10) + 1)
  const chatId = msg.chat.id;

  bot.sendPhoto(chatId, `./public/imgs/${rand}.png`)
});