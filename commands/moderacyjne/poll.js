const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");
const { purple_dark } = require("../../colours.json");
const moment = require("moment")

module.exports = {
    config: {
        name: "poll",
        description: "Wyrzuca oznaczonego użytkownika z serwera.",
        usage: "kick <@użytkownik> <powód>",
        category: "moderacyjne",
        aliases: ["ankieta", "strawpoll", "wybor", "pytanie"],
        accessableby: "Wyrzucanie użytkowników, administrator",
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["ADMINISTRATOR"])) {
        const isembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd!" `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Nie posiadasz uprawnień aby wykonać to polecenie. Potrzebujesz: **Administrator**")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(isembed);
    }
    else{
        const pytanie = args.slice(0).join(' ');
        if(!pytanie) return message.channel.send(message.author.tag +" Podaj tresc pytania!")
        const embed = new MessageEmbed()
            .setAuthor("Ankieta użytkownika " + message.author.tag, message.author.displayAvatarURL())
            .setColor(purple_dark)
            .setDescription("**Pytanie**: "+pytanie)

        message.channel.send(embed).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        }).then(message.delete())
    }
    

   
    }
}