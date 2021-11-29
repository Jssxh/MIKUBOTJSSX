const Discord = require("discord.js");

module.exports = {
    config: {
        name: "ping",
        description: "Ping del bot",
        category: 'utility',
        usage: "ping",
        example: "ping",
        aliases: ['']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 Creo que mi ping esta alto...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Pong!", message.author.avatarURL({ dynamic: true }))
    .addField("API Latency", Math.round(bot.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms")
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};