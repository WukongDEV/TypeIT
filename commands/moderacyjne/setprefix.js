const { MessageEmbed, discord } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");
const fs = require('fs')
const db = require('quick.db')


module.exports = {
    config: {
        name: "setprefix",
        description: "Ustawia prefix serwerowy",
        usage: "setprefix <prefix>",
        category: "moderacyjne",
        accessableby: "administrator",
        aliases: ["newprefix", "ustawprefix", "nowyprefix"],
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission(["MANAGE_GUILD"])){
            return message.channel.send({embed: {color: "RED", title: "Błąd", description: "Brak permisji `ZARZĄDZANIE_SERWEREM`"}})
        }

        let newprefix = args[0];
        if(!newprefix) return message.channel.send({embed: { color: 0xFF0000, title: "Błąd", description: "Nieprawidłowy prefix"}});
        else {
            db.delete(`prefix_${message.guild.id}`)
            db.set(`prefix_${message.guild.id}`, newprefix)
            const embed = new MessageEmbed()
                .setColor("#eb34c6")
                .setTimestamp()
                .setTitle("Sukces!")
                .setDescription("Gratulacje! Zmieniłeś prefix na tym serwerze! Od dzisiaj nowy prefix to `" + newprefix+'`')
            message.channel.send(embed)
        }
        return;

    }
}