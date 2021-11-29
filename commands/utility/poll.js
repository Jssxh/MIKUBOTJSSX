const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "poll",
        aliases: [""],
        description: "Haz una poll muy simple",
        category: "utility",
        usage: "poll <pregunta>",
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Porfavor pon algo valido**");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll de ${message.guild.name} Sever`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('✅');
        await msg.react('❌');

        message.delete({ timeout: 1000 });
    }
}