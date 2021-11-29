const Discord = require('discord.js')
const fs = require("fs");
const { PREFIX } = require("../../config.js");
const db = require('old-wio.db');
const { stripIndents } = require("common-tags");
const { support } = require("../../config.json");

module.exports = {
config: {
    name: "help",
    description: "Menu de Ayuda",
    category: 'utility',
    usage: "1) mk!help \n2) mk!help [module name]\n3) mk!help [command (name or alias)]",
    example: "1) !help\n2) !help util\n3) !help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
    
    try {

    let Categories = ["fun", "images", "info", "utility"],
    AllCommands = [];

const Emotes = {
   fun: "🙂 Diversion",
    images: "🔍 Imagenes",
    info: "📚 Info",
    utility: "🤖 Utilidad"
};

for (let i = 0; i < Categories.length; i++) {
    const Cmds = await bot.commands.filter(C => C.config.category === Categories[i]).array().map(C => C.config.name).sort((a, b) => a < b ? -1 : 1).join(", ");
    AllCommands.push(`\n\n**${Emotes[Categories[i]]}**\n\`\`\`${Cmds}\`\`\``);
};

const Description = `Mi prefix **${message.guild.name}** Es **${prefix}**\n\nPara más informacion de comandos escribe:\n**${prefix}help <nombre de comando> or** <@${bot.user.id}> **help <nombre de comando>**`;

const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Commands", message.author.avatarURL({
        dynamic: true
    }))
    .setDescription(Description + AllCommands.join("") + "" + "\n\n" + "**Links -**" + ` [Unirse al server de soporte](${support}) • [Invitame](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`)
    .setFooter(`Solicitad@ por: ${message.author.username}`, bot.user.displayAvatarURL())
    .setTimestamp();

if (!args[0]) return message.channel.send(Embed);

else {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setThumbnail(bot.user.displayAvatarURL())

    let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
    if (!command) return message.channel.send(embed.setTitle("**Comando invalido**").setDescription(`**Pon \`${prefix}help\` Para la lista de comandos**`))
    command = command.config

    embed.setDescription(stripIndents`
    ** Comando -** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\n
    ** Descripcion -** \`${command.description || "No Description provided."}\`\n
    ** Uso -** [   \`${command.usage ? `${command.usage}` : "No Usage"}\`   ]\n
    ** Ejemplos -** \`${command.example ? `${command.example}` : "No Examples Found"}\`\n
    ** Alias -** [ \`${command.aliases ? command.aliases.join(" , ") : "None."}\` ]`)
    embed.setFooter(message.guild.name, message.guild.iconURL())

    return message.channel.send(embed)
};
} catch (e) {
  console.log(e);
};

    

}

}