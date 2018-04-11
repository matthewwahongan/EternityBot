const botSettings = require("./settings.json");
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

    let MessageArray = message.content.split(" ");
    let command = MessageArray[0];
    let args =  MessageArray.slice(1);
    let args2 = MessageArray.slice(2);
    let nama = message.author.username;

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}version`) {
      let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor("Bot Version")
          .setDescription(`Alpha 0.1`)
          .addField("Developer","3t3Rn1tyW15DOM")
          .addField("Waktu Dibuat", message.author.createdAt);

      message.channel.sendEmbed(embed);
     }

     return;
   if(command === `${prefix}ban ${args} ${args2}`) {
     guild.ban(`${args}`, reason: `${args2}`)
      .then(`${nama} telah di ban dari server ini`)
   }
});


bot.login(process.env.BOT_TOKEN);
