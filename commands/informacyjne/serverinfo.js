const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const moment = require("moment")

module.exports = {
    config: {
        name: "serverinfo",
        description: "Wyświetla informacje na temat serwera.",
        usage: "serverinfo",
        category: "informacyjne",
        accessableby: "Wszyscy, użytkownik",
        aliases: ["si", "serverinformation", "serwer", "server"]
    },
    run: async (bot, message, args) => {


        let sEmbed = new MessageEmbed()
            .setColor("#fbff00")
            .setTitle("Informacje o serwerze " + message.guild.name)
            .setThumbnail(message.guild.iconURL({ size: 1024 }))
            .addField("Nazwa serwera: ", `> ${message.guild.name}`)
            .addField("Osoba posiadająca koronkę: ", `> ${message.guild.owner}`)
            .addField("ID serwera:", `> ${message.guild.id}`)
            .addField('Region: ', `> ${message.guild.region}`)
            .addField("Data utworzenia serwera: ", `> ${moment(message.guild.createdAt).format("DD.MM.YYYYr, HH:mm")}`)
            .addField("Ilość wszystkich użytkowników: ", `> ${message.guild.memberCount}`)
            .addField("Ilość wszystkich ról: ", `> ${message.guild.roles.cache.size}/250`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        message.channel.send(sEmbed);

    }
}

