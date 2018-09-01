const botconfig = require("./botconfig.json");
const Discord = require ("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

    if(cmd === `${prefix}serverinfo`){

      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Informatie")
      .setColor("#FF0000")
      .setThumbnail(sicon)
      .addField("Server Naam", message.guild.name)
      .addField("Gemaakt op", message.guild.createdAt)
      .addField("Gejoint op", message.guild.joinedAt)
      .addField("Mensen in de discord", message.guild.memberCount);

      return message.channel.send(serverembed);
    }



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Informatie")
    .setThumbnail(bicon)
    .setColor("#FF0000")
    .addField("Bot Naam", bot.user.username)
    .addField("Gemaakt op", bot.user.createdAt);

    return message.channel.send(botembed);


  }

});

bot.login(botconfig.token);
