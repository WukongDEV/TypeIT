const { MessageEmbed } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");
const os = require('os');

module.exports = {
    config: {
        name: "ping",
        description: "Wyświetla ping bota w ms.",
        category: "informacyjne",
        accessableby: "Wszyscy, użytkownik",
    },
    run: async (bot, message, args) => {
        const embed2 = new MessageEmbed()
            .setTitle("🏓 ")
            .setThumbnail(`https://cdn.discordapp.com/attachments/738473023123882166/741568278610182144/pingpong.gif`)
            .setColor(cyan)
            .addField("Ping TypeIT wynosi:", `${Math.round(bot.ws.ping)}ms. \nPamiętaj że po uruchomieniu bot ma wysoki ping!\n\n**Jeżeli wysoki ping będzie utrzymywać się stale, oznacz bota i wejdź na support oraz zgłoś to!**`)
        message.channel.send(embed2)
    }
}