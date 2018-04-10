const botSettings = require('./settings.json');
const Discord = require('discord.js');

const bot =  new Discord.Client({disableEveryone: true});


bot.on("ready", () => {
    console.log('I\'m Online\nI\'m Online');
});
bot.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let MessageArray = message.content.split(" ");
    let command = MessageArray[0];
    let args =  MessageArray.slice(1);

    console.log(MessageArray);
    console.log(command);
    console.log(args);
});
bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

bot.login(process.env.BOT_TOKEN);
