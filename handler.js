const { Client } = require('discord.js');
const client = new Client();
const { checkForCommand } = require('./utils');
const ytdl = require('ytdl-core');
var connection;


client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log("LOGGED IN");
})

client.on('message', async msg => {
    if (msg.author.bot) {
        return;
    }

    let cmd = checkForCommand(msg.content);


    switch (cmd) {
        case "help":
            return msg.channel.send("Help is here!!!");

        case "join":
            try {
               connection = await msg.member.voice.channel.join(); 
               console.log(connection);
               return;
            } catch (error) {
                console.log(error);
            }
        case "play":
            try {
               if(typeof connection !== "undefined"){
                   let dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=sOCPSk9tx5A", {filter: "audioandvideo"}));
                   console.log("playing");
               } 
            } catch (error) {
                console.log(error);
            }
    }

})