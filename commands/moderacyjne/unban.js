const { MessageEmbed } = require("discord.js")
const { red_light, cyan } = require("../../colours.json");
const moment = require("moment")

module.exports = {
    config: {
        name: "unban",
        description: "Odbanowywuje oznaczonego użytkownika",
        usage: "<id> <unban>",
        category: "moderacyjne",
        accessableby: "Banowanie użytkowników, administrator",
        aliases: ["ub", "unbanish"]
    },
    run: async (bot, message, args) => {

        langs = require("../../zapisydb/lang.json")
        let langpokaz = langs[message.guild.id].lang;
        const lang = require("../../lang/" + langpokaz + ".json");

        if(!message.member.hasPermission(["BAN_MEMBERS"])) {
         const isembed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(lang.unban.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setDescription(lang.unban.desc)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(isembed);
        };
        let banMember = await bot.users.fetch(args[0])
        if(!banMember) {
        const iembed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(lang.unban.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setDescription(lang.unban.desc1)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(iembed); 
        };
    
        let reason = args.slice(1).join(" ")
        if(!reason) reason = lang.unban.powod
    
        if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) {
            const sembed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(lang.unban.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setDescription(lang.unban.desc2)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(sembed);
        };
        if (!banMember) {
            const esmbed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(lang.unban.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setDescription(lang.unban.desc3)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(esmbed); 
        };
        if (banMember.id === message.author.id) {
            const ibed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(lang.unban.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setDescription(lang.unban.desc4)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(ibed); 
        };
        
        /*if (!banMember.bannable) {
            const iembed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
            .setDescription("Nie posiadam najwyższej roli. Abym mogł odbanować tą osobę przenieś mnie nad jej rolę!")
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(iembed); 
        };*/
    
        const embed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.unban.sukc, `https://i.imgur.com/WQdSa4y.gif`)
        .setDescription(lang.unban.desc5.replace("${message.author.username}", message.author.username).replace("${banMember.id}", args[0]))
        .setImage(`https://i.imgur.com/XOk6aif.gif`)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        
        message.channel.send(embed)
        message.guild.members.unban(banMember, {reason: reason})
    }
}