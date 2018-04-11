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

      return;
     }
     if(command === `${prefix}mute`) {
       if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("anda tidak memiliki izin untuk command ini!");

       let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
       if(!toMute) return message.channel.sendMessage("Nama atau ID yang anda gunakan tidak Valid atau salah");

       let role = message.guildroles.find(r => r.name === "Muted Player");
      if(!role) {
        try{
           role =  await message.guild.createRole({
             name: "Muted Player",
             color: "BLACK",
             permissions: [],
           });

           message.guild.channels.forEach(async (channel, id) => {
             await channel.overwritePermissions(role, {
               ADD_REACTIONS: false,
               SEND_MESSAGES: false
             });
           });
        } catch(e) {
          console.log(e.stack);
        }
      }

      if(toMute.roles.has(role.id)) return message.channel.sendMessage("Sudah di mute sebelumnya!");

      await toMute.addRole(role);
      message.channel.sendMessage(`EternityBot Berhasil melakukan misi MUTE!`);

      return;
      }
});


bot.login(process.env.BOT_TOKEN);
