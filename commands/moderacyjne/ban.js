const { MessageEmbed } = require("discord.js")
const { red_light, cyan } = require("../../colours.json");
const moment = require("moment")

module.exports = {
    config: {
        name: "ban",
        description: "Banuje oznaczonego użytkownika na serwerze.",
        usage: "ban <@użytkownik/id użytkownika> <powód>",
        category: "moderacyjne",
        accessableby: "Banowanie użytkowników, administrator",
        aliases: ["b", "banicja", "usunuser"]
    },
    run: async (bot, message, args) => {



    if(!message.member.hasPermission(["BAN_MEMBERS"])) {
     const isembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Nie posiadasz permisji! \n Wymagane permisje to >``Banowanie Członków``")
        .setImage("https://cdn.discordapp.com/attachments/740144186417741893/740220827357937676/Zrzut_ekranu_561.png")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(isembed);
    };
    let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!banMember) {
    const iembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Błąd! Nie oznaczyłeś użytkownika. Oznacz go próbując ponownie!")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(iembed);
    };

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Administrator nie podał powodu bana."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) {
        const sembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Nie posiadam permisji! \nWymagane permisje to >``Administrator``")
        .setImage("https://media.discordapp.net/attachments/740144186417741893/740217935800434879/Zrzut_ekranu_559.png")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(sembed);
    };
    if (!banMember) {
        const esmbed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Błąd! Nie oznaczyłeś użytkownika. Oznacz go próbując ponownie!")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(esmbed);
    };
    if (banMember.id === message.author.id) {
        const ibed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Błąd! Nie możesz zbanować siebie samego")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(ibed);
    };

    if (!banMember.bannable) {
        const iembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Błąd! Nie mogę zbanować tego użytkownika. Sprawdź czy ma ona większe uprawnienia niż ja, lub czy nie jest właścicielem serwera!")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(iembed);
    };
    const embeds = new MessageEmbed()
    .setColor(red_light)
    .setAuthor("Zostałeś zbanowany na serwerze o nazwie "+message.guild.name, message.guild.iconURL())
    .setImage(`https://i.imgur.com/8d6Oakt.gif`)
    .setDescription(`Administrator: ${message.author.username} ( ${message.author.id} - ${message.author.tag}\nPowód bana: ${reason}`)
    .addField(`Data bana: `, moment(message.createdAt).format("DD.MM.YYYYr, HH:mm:SS"))
    .setFooter(`© NysferBot`)

    const embed = new MessageEmbed()
    .setColor(red_light)
    .setAuthor(`Sukcess!`, `https://i.imgur.com/WQdSa4y.gif`)
    .setDescription(`${banMember.user.tag} został zbanowany przez ${message.author.username} za ${reason}`)
    .setImage(`https://i.imgur.com/8d6Oakt.gif`)
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))


    message.channel.send(embed)
    banMember.ban({ reason: reason })
    banMember.send(embeds).catch((err) => {
        banMember.ban()
    })
    
    /*logis = require("../../zapisydb/log.json")
    let logpokaz = logis[message.guild.id].kanal

    if(logpokaz === "0") return;

        const logemb = new MessageEmbed()
        .setAuthor("Logi", message.guild.iconURL({ size: 1024, dynamic: true }))
        .setTitle("Ban")
        .setColor(cyan)
        .addField("Author", `${message.author}\n${message.author.tag}`, true)
        .addField("Oskarżony", `${banMember}`, true)
        .addField("Powód", `${reason}`)
        .setTimestamp()
        .setFooter("Zapis z ")
    try {
    bot.channels.cache.get(logpokaz).send(logemb)
    } catch(err) {
        return;   
    }*/

    }
}