const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");
const moment = require("moment")

module.exports = {
    config: {
        name: "kick",
        description: "Wyrzuca oznaczonego użytkownika z serwera.",
        usage: "kick <@użytkownik> <powód>",
        category: "moderacyjne",
        accessableby: "Wyrzucanie użytkowników, administrator",
        aliases: ["k", "usunużytkownika"]
    },
    run: async (bot, message, args) => {

        if (!message.member.hasPermission(["KICK_MEMBERS"])) {
            const isembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie posiadasz wystarczających permisji! \n> KICK_MEMBERS")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                    size: 1024,
                    dynamic: true
                }))
            return message.channel.send(isembed);
        }
        ;
        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!banMember) {
            const iembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Proszę o podanie <@użytkownik>")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                    size: 1024,
                    dynamic: true
                }))
            return message.channel.send(iembed);
        }
        ;

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Administrator nie podał powodu."

        if (!message.guild.me.hasPermission(["KICK_MEMBERS"])) {
            const sembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie posiadam permisji\n>ADMINISTRATOR")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                    size: 1024,
                    dynamic: true
                }))
            return message.channel.send(sembed);
        }
        ;
        if (!banMember) {
            const esmbed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Oznacz osobę którą mam wyrzucić.")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                    size: 1024,
                    dynamic: true
                }))
            return message.channel.send(esmbed);
        }
        ;
        if (banMember.id === message.author.id) {
            const ibed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie możesz wyrzucić siebie samego!")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                    size: 1024,
                    dynamic: true
                }))
            return message.channel.send(ibed);
        }
        ;

        if (!banMember.bannable) {
            const iembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie mogę wyrzucić oznaczonej osoby! \nByć może ma ona większą rangę niż ja lub jest właścicielem serwera!")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                    size: 1024,
                    dynamic: true
                }))
            return message.channel.send(iembed);
        }
        ;
        const embeds = new MessageEmbed()
            .setColor(red_light)
            .setAuthor("Zostałeś wyrzucony z serwera " + message.guild.name, message.guild.iconURL())
            .setImage(`https://i.imgur.com/8d6Oakt.gif`)
            .setDescription(`Moderator: ${message.author.username} ( ${message.author.id} - ${message.author.tag}\nPowód bana: ${reason}`)
            .addField(`Data bana: `, moment(message.createdAt).format("DD.MM.YYYYr, HH:mm:SS"))
            .setFooter(`© Staffy • Kicki`)

        const embed = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(`Sukcess!`, `https://i.imgur.com/WQdSa4y.gif`)
            .setDescription(`${message.author.username} wyrzucił ${banMember.user.tag} za ${reason}`)
            .setImage(`https://i.imgur.com/8d6Oakt.gif`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                size: 1024,
                dynamic: true
            }))


        message.channel.send(embed)
        banMember.ban({reason: reason})
        banMember.send(embeds).catch((err) => {
            banMember.ban()
        })

    }
}