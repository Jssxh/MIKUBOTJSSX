const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "Verdad o reto",
        aliases: ['vor', 'verdadoreto', 'rov'],
        category: 'fun',
        description: 'Escoje si Verdad o Reto!',
        usage: 'coinflip',
    },
    run: async (bot, message, args) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Reto';
        else result = 'Verdad';
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**${message.member.displayName} Toco... ${result}**!`)
        message.channel.send(embed);
    }
};