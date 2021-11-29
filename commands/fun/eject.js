const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'eject',
        description: 'Te ejectan como en sus (Among Us)',
        aliases: ["eject"],
        usage: '<user>',
        category: 'fun',
    },
    run: async (bot, message, args) => {
    
         try {
 
const user = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"];
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`);
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setTitle(`${message.author.username} decided to eject ${user.username}`)
      .setColor(config.embedcolor)
      .setImage(`${data.url}`);
      
    message.channel.send(embed);
  }catch(err) {
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`${bot.emotes.error} Algo ha salido mal.\n${bot.emotes.error}Note : No funcionara si tienes un nombre raro o tiene emojis.`)
    .setColor(config.embedcolor);
    message.channel.send(embed2);
    }

    }
};