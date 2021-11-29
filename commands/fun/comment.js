const Discord = require('discord.js');
const config = require('../../config.json');
const canvacord = require('canvacord');

module.exports = {
    config: {
        name: 'comment',
        description: 'Muestra tu texto como comentario del youtube',
        aliases: ["comment"],
        usage: '<texto>',
        category: 'fun',
    },
    run: async (bot, message, args) => {
        const comment = args.join('');
        if(!comment) return message.channel.send(`${bot.emotes.error} Pon un contenido!`)
        try {    
        let yt = await canvacord.Canvas.youtube({"avatar":message.author.displayAvatarURL({format: "png"}),"username":message.author.username, "content":args.join(" ")})
        let attachment = new Discord.MessageAttachment(yt, 'comment.png')
        message.channel.send(attachment);
    }catch(err) {
        const embed2 = new Discord.MessageEmbed()
    .setTitle(`${bot.emotes.error} Something went wrong.\n${bot.emotes.error}Nota : No funcionara si tiene caracteres raros, ejemplo emojis`)
    .setColor(config.embedcolor);
    message.channel.send(embed2);
    }

    }
};