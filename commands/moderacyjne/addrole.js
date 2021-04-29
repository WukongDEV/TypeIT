const { MessageEmbed } = require("discord.js")
const { red_light, cyan } = require("../../colours.json")

module.exports= {
    config: {
        name: "addrole",
        description: "Dodaje oznaczonemu użytkownikowi oznaczoną rolę. Wysyła informacje na kanał #logi. Jeżeli nie potrzebujesz nie twórz kanału #logi.",
        usage: "addrole <@użytkownik/id użytkownika> <@rola/id roli>",
        category: "moderacyjne",
        accessableby: "Zarządzanie rolami, administrator",
        aliases: ["ar", "roleadd", "dajrole", "dr"]
    },
    run: async (bot, message, args) => {



        if(!message.member.hasPermission(["MANAGE_ROLES"])) {
            const ughembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie posiadasz wystarczających permisji!\n Wymagane permisje to >``Zarządzanie Rolami``")
                .setImage("https://media.discordapp.net/attachments/740144186417741893/740216408901812388/Zrzut_ekranu_558.png")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(ughembed);
        };
        let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.cache.get(args[0])
        if(!rMember) {
            const pembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie oznaczono osoby której mam nadać rangę!")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(pembed);
        };
        let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
        if(!role) {
            const qembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie oznaczono roli którą mam nadać!")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(qembed);
        };
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
            const isembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Nie posiadam wystarczających permisji! \nWymagane permisje to >``Administrator``", `https://i.imgur.com/8BzirRk.gif`)
                .setImage("https://media.discordapp.net/attachments/740144186417741893/740217935800434879/Zrzut_ekranu_559.png")
                .setDescription(lang.addrole.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(isembed);
        };
        if(rMember.roles.cache.has(role.id)) {
            const eembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor(lang.addrole.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setDescription(lang.addrole.desc3.replace("${rMember.displayName}", rMember.displayName).replace("${role.name}", role.name))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(eembed);
        }else {
            rMember.roles.add(role.id)

            const aaembed = new MessageEmbed()
                .setColor(cyan)
                .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                .setDescription(lang.addrole.desc4.replace("${message.author.username}", message.author.username).replace("${role.name}", role.name).replace("${rMember.displayName}", rMember.displayName))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            message.channel.send(aaembed)
        };
    }
}
