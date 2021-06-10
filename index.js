require('dotenv').config();
const BOT = require('./src');

let bot = new BOT();

bot.init();