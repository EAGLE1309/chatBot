const Discord = require('discord.js');
require('discord-reply');
require('dotenv').config();

const fetch = require("node-fetch");

const client = new Discord.Client();

var colors = require('colors');

colors.setTheme({
  regards: 'cyan',
  success: 'green',
  error: 'red',
  warn: 'yellow'
}); //for coloured console log

client.login("ODQ2Njc2MDAxOTQ4Njk2NTg3.YKy-eQ.BBezXp8pbg55eFfbn9bHOXV3h70");
//process.env for fetching your token in .env file

client.on("ready", () => { 
  console.log(`
████████████████████████████████████████
█─▄▄▄─█─█─██▀▄─██─▄─▄─█▄─▄─▀█─▄▄─█─▄─▄─█
█─███▀█─▄─██─▀─████─████─▄─▀█─██─███─███
▀▄▄▄▄▄▀▄▀▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▄▄▄▀▀


`);
console.log("• Bot is online".success);
console.log("• Thanks for using this bot!".regards);
});



//main working (don't do any changes here!)

client.on("message", async message => {
if (message.channel.name == "chatbot-test") {
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