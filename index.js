const Discord = require('discord.js');
require('discord-reply');
require('dotenv').config();

const {
    activityType,
    activityName,
    botChannel
} = require('./config.json');
const fetch = require("node-fetch");
const client = new Discord.Client();

const colors = require('colors');

colors.setTheme({
    regards: 'cyan',
    success: 'green',
    error: 'red',
    warn: 'yellow'
}); //for coloured console log

client.login(process.env.Token);
//process.env for fetching your token in .env file

// you can also replace process.env.Token with "your_bots_token" and it will still work!

client.on("ready", () => {
    console.log(`
        ████████████████████████████████████████
        █─▄▄▄─█─█─██▀▄─██─▄─▄─█▄─▄─▀█─▄▄─█─▄─▄─█
        █─███▀█─▄─██─▀─████─████─▄─▀█─██─███─███
        ▀▄▄▄▄▄▀▄▀▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▄▄▄▀▀


        `);
    console.log("• Bot is online".success);
    console.log("• Thanks for using this bot!".regards);

    client.user.setPresence({
        status: "online",
        activity: {
            name: activityName,
            type: activityType,
        }
    })
});



//main working (don't do any changes here!)

client.on("message", async message => {
    if (message.channel.id == botChannel) {

        if (message.author.bot) return;
        message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");

        if (message.content.includes(`@`)) {
            return message.channel.send(`**:x: Please dont mention a user noob!!!**`);
        }

        message.channel.startTyping();

        if (!message.content) return message.channel.send("Please say something.");

        fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=DEVELOPER_NAME`)

        .then(res => res.json())
        .then(data => {
            message.lineReply(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
        });

        message.channel.stopTyping();
    }
});
