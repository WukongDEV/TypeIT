const { MessageEmbed, discord } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");


module.exports = {
    config: {
        name: "say",
        description: "Wysyła wiadomość w embed na kanale.",
        usage: "ogloszenie (kanał) <treść>",
        category: "moderacyjne",
        accessableby: "Zarządzanie wiadomościami, administrator",
    },
    run: async (bot, message, args) => {

        langs = require("../../zapisydb/lang.json")
        let langpokaz = langs[message.guild.id].lang;
        const lang = require("../../lang/" + langpokaz + ".json");

            message.delete()

    if(!args[0]) {
        const iembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.say.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.say.desc)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(iembed);
    }

    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) {
        const isembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.say.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.say.desc1)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(isembed);
       };
       if(args[0]) {
        let argsresult;

        argsresult = args.join(" ").replace("_", "\_")
        message.channel.send(`**${lang.say.title}**\n\n${argsresult}\n\n**${lang.say.footer} ${message.author.username}**`)
       }
    if(args[0] > 1999 ) {
        const isembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.say.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.say.desc2)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(isembed);
    }
    }
}