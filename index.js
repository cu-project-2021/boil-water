const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.on("ready", () => {
    console.log("logged in");
})

client.login(process.env.TOKEN);