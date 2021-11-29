const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
  name: "8ball",
  aliases: [" "],
  description: "Hola preguntale a la cumball!",
  category: "fun",
  usage: "8ball",
    },
  run: async (bot, message, args) => {
    let question = message.content.slice(bot.prefix + 6);
    if (!question)
      return message.channel.send(`No especificaste papu`);
    else {
      let responses = [
       'Puede ser.',
	'Obviamente no.',
	'Creo que.',
	'Ni en tus sueños mas grandes prro.',
	'Hay una gran chance.',
	'Un poco likeable supongo.',
	'lo creo',
	'Nunca.',
	'Puede ser.',
	'NUNCA!',
	'El pepe Ete sech.',
	'AJJAJA ENSERIO PREGUNTAS ESO?!',
	'Pff.',
	'Perdón, cumball.',
	'Cielo... Si.',
	'Al diablo que no.',
	'Prueba en un futuro.',
	'En mi cumball del futuro ve que es posible.',
	'Enserio te tengo que decir..?',
	'A quien le importa',
	'Posibildad 1% fe 99%.',
	'Nunca, unca, unca.',
	'Chance pequeña como los cocos de Justin.',
	'SI!'
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Tu pregunta: ${question}\nMi Respuesta: ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};