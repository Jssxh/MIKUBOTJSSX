const db = require("old-wio.db");

const { MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

var pattern = new RegExp(
  "^(https?:\\/\\/)?" +
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
    "((\\d{1,3}\\.){3}\\d{1,3}))" +
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
    "(\\?[;&a-z\\d%_.~+=-]*)?" +
    "(\\#[-a-z\\d_]*)?$",
  "i"
);

module.exports = {
  config: {
    name: "decir",
    aliases: ["broadcast"],
    description: "Dice lo que tu quieras",
    category: "fun",
    usage: "decir <mensaje>",
  },
    run: async (bot, message, args) => {
    //Start

    message.delete();

    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`DIME ALGO PARA QUE DIGA`);

    function UrlCheck(str) {
      return pattern.test(str);
    }

    if (UrlCheck(Content) === true) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(
          `Bobines no permitidos | Solo admins pueden usar links!`
        );
      }
    }

    return message.channel.send(Content);

    //End
  }
};
