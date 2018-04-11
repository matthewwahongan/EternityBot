const botSettings = require('./settings.json');
const Discord = require('discord.js');
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
    console.log('I\'m Online\nI\'m Online');
    bot.user.setGame("Eternity Bot | Development");
});
bot.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let MessageArray = message.content.split("");
    let command = MessageArray[0];
    let args =  MessageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
      console.log("apakabar");
    }
});

bot.login(process.env.BOT_TOKEN);
