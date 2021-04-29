const { MessageEmbed } = require("discord.js")
const { cyan, red_light } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "foka",
        description: "Wysyła losowe zdjęcie foki.",
        usage: "",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownicy",
    },
    run: async (bot, message, args) => {
        const embeds = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Czekaj!", "https://i.imgur.com/ec15Wbu.gif")
        .setDescription("Generowanie...")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        let msg = await message.channel.send(embeds)

        fetch("https://apis.duncte123.me/seal")
        .then(res => res.json()).then(body => {
            if(!body) return message.channel.send("WUPS. Nie udało się, spróbuj ponownie.")

            let embed = new MessageEmbed()
            .setColor(cyan)
            .setAuthor("Sukces!", "https://i.imgur.com/WQdSa4y.gif")
            .setImage(body.data.file)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            setTimeout(function() {
                msg.edit(embed)
            }, 5000)
                
        })
    }
}