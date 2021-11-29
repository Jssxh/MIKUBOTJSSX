const Discord = require("discord.js");
const figlet = require("figlet");
 
module.exports = {
    config: {
  name: "ascii",
   category: "fun",
   description: "create un ascii",
   aliases: [""],
   usage: "ascii <name>",
    },
run: async (bot, message, args) => {
    
    if(!args[0]) return message.channel.send('Porfavor el texto');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Algo a salido mal raios');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('El texto pls no mas de 2000 caracteres')

            message.channel.send('```' + data + '```');
        });
    }
};