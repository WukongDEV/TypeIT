const { MessageEmbed } = require("discord.js")
const { cyan, red_light } = require("../../colours.json")
module.exports = {
    config: {
        name: "clear",
        description: "Usuwa podaną liczbę wiadomości.",
        usage: "clear <ilość>",
        category: "moderacyjne",
        accessableby: "Zarządzanie wiadomościami, administrator",
        aliases: ["cc", "deletemessage"]
    },
    run: async (client, message, args) => {



        message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const isembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Nie posiadasz wystarczających permisji! \nWymagane permisje to >``Zarządzanie Wiadomościami``")
        .setImage("https://cdn.discordapp.com/attachments/740144186417741893/740223644675866664/Zrzut_ekranu_562.png")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(isembed);
    };

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    const iembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Nie podałeś ilości wiadomości do usunięcia!")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(iembed);
    };

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const isembed = new MessageEmbed()
        .setColor(red_light)
        .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
        .setDescription("Nie posiadam permisji! \nWymagane permisje to >``Zarządzanie Wiadomościami``")
        .setImage("https://cdn.discordapp.com/attachments/740144186417741893/740223644675866664/Zrzut_ekranu_562.png")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(isembed)
    };
        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true).then(deleted => message.channel.send(`${message.author.username} usunął ${deleted.size} wiadomości z kanału ${message.channel.name}`))
    }
}
/*    logis = require("../../zapisydb/log.json")
    let logpokaz = logis[message.guild.id].kanal

    if(logpokaz === "0") return;

        const logemb = new MessageEmbed()
        .setAuthor("Logi", message.guild.iconURL({ size: 1024, dynamic: true }))
        .setTitle("Clear")
        .setColor(cyan)
        .addField("Author", `${message.author}\n${message.author.tag}`, true)
        .addField("Kanal", `<#${message.channel.id}>`, true)
        //.addField("Wyczyszczono", `${deleteAmount}`)
        .setTimestamp()
        .setFooter("Zapis z ")
    bot.channels.cache.get(logpokaz).send(logemb)
    */