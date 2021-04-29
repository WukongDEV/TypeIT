const { MessageEmbed } = require("discord.js")
const { red_light, cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "removerole",
        description: "Zabiera rolę oznaczonemu użytkownikowi.",
        usage: "removerole <@użytkownik/id użytkownika> <@rola/id roli/dokładna nazwa roli> <powód>",
        category: "moderacyjne",
        accessableby: "Zarządzanie rolami, administrator",
        aliases: ["rr", "roleremove"]
    },
    run: async (bot, message, args) => {

        langs = require("../../zapisydb/lang.json")
        let langpokaz = langs[message.guild.id].lang;
        const lang = require("../../lang/" + langpokaz + ".json");

    if(!message.member.hasPermission(["MANAGE_ROLES"])) {
        const ughembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.remove.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.remove.desc)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(ughembed);
    };
    let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.cache.get(args[0])
    if(!rMember) { 
        const pembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.remove.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.remove.desc1)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(pembed).then(m => m.delete({ timeout: 10000 }))
    };
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) { 
        const qembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.remove.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.remove.desc2)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(qembed);
    };
    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) {
        const isembed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(lang.remove.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setDescription(lang.remove.desc3)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(isembed);
    };
    if(!rMember.roles.cache.has(role.id)) { 
        const eembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(lang.remove.blad, `https://i.imgur.com/8BzirRk.gif`)
        .setDescription(lang.remove.desc4)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(eembed);
    }else {
        rMember.roles.remove(role.id)
                
        const aaembed = new MessageEmbed()
            .setColor(cyan)
            .setAuthor(lang.remove.sukc, `https://i.imgur.com/WQdSa4y.gif`)
            .setDescription(lang.remove.desc5.replace("${message.author.displayName}", message.author.username).replace("${role.name}", role.name).replace("${rMember.displayName}", rMember.displayName))
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        message.channel.send(aaembed);
        };
    }
}
