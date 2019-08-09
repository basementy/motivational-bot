// Setup
require('dotenv').config()

const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const bot = new Telegraf(process.env.BOT_TOKEN)

// Functions
console.log("--> Bot Running! <--")

bot.start((ctx) => ctx.reply(`Olá, ${ctx.message.from.first_name}!`))

bot.command('bomdia', (ctx) => {
  const rand = Math.floor((Math.random() * 7) + 1)
  ctx.replyWithPhoto( 
    {source: fs.createReadStream(`./public/bomdia/${rand}.png`)} 
  )
})

// Teste
bot.command('j', (ctx) => {
  ctx.replyWithPhoto(
    {source: fs.createReadStream('./public/outros/1.jpg')}
  )
})

bot.launch()