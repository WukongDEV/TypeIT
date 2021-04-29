const { MessageEmbed } = require("discord.js");
const { red_light } = require("../../colours.json")

module.exports = { 
    config: {
        name: "8ball",
        description: "Bot odpowiada na pytania.",
        usage: " ",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownicy",
        aliases: ["magic8ball"]
    },
    run: async (bot, message, args) => {
            
        langs = require("../../zapisydb/lang.json")
        let langpokaz = langs[message.guild.id].lang;
        const lang = require("../../lang/" + langpokaz + ".json");
        if (!args[0]) {
            const embe = new MessageEmbed()
            .setAuthor(lang.ball.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(lang.ball.desc)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(embe)
        } else {
            
            message.channel.startTyping()
        
        let odpowiedzi = [
            lang.ball.o1,
            lang.ball.o2,
            lang.ball.o3,
            lang.ball.o4,
            lang.ball.o5,
            lang.ball.o6,
            lang.ball.o7
            ]
            let losow = (Math.floor(Math.random() * odpowiedzi.length));
    const embed = new MessageEmbed()
    .setAuthor(lang.ball.title)
    .setColor("RANDOM")
    .setThumbnail(`https://i.imgur.com/IDp4MJI.gif`)
    .addField(lang.ball.fields, args.join(" "))
    .addField(lang.ball.fields1, odpowiedzi[losow])
    .setFooter("Zadaj pytanie!")
    setTimeout(function() {
            message.channel.send(embed).then(() => message.channel.stopTyping())
    }, 5000)
        }  
    }
}
