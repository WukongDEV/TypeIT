const { MessageEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const os = require('os');

module.exports = {
    config: {
        name: "botinfo",
        description: "Wyświetla ping bota w ms.",
        category: "informacyjne",
        accessableby: "Wszyscy, użytkownik",
    },
    run: async (bot, message, args) => {

        let uptime = process.uptime();
        let days = Math.floor((uptime % 31536000) / 86400);
        let hours = Math.floor((uptime % 86400) / 3600);
        let minutes = Math.floor((uptime % 3600) / 60);
        let seconds = Math.round(uptime % 60);
        let botuptime = (days > 0 ? days + "d : " : "") + (hours > 0 ? hours + "g : " : "") + (minutes > 0 ? minutes + "m : " : "") + (seconds > 0 ? seconds + "s" : "")
        const package = require('../../package.json')

        const os = require('os')
        var usedMemGB = Math.round(((((os.totalmem() - os.freemem()) / 1024) / 1024) / 1024).toFixed(2));

        const embed = new MessageEmbed()
            .setTitle("ℹ️ Informacje o bocie TypeIT")
            .setColor("#dfeb34")
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({
                size: 1024,
                dynamic: true
            }))
            .addField("**Czas Działania Bota:**", `> ${botuptime}`, false)
            .addField("**Software:**", `> Windows`, true)
            .addField("**Wykorzystane RAM**", `${usedMemGB}MB/1GB (${Math.round((usedMemGB) - 100)}%)`, true)
            .addField("**Liczba wszystkich serwerów:**", `> ${bot.guilds.cache.size}`, true)
            .addField("**Liczba wszystkich kanałów**", `> ${bot.channels.cache.size}`, true)
            .addField("**Liczba wszystkich użytkowników**", `> ${bot.users.cache.size}`, true)
            .addField("**Wersja Node.js:**", `> ${process.version.slice(1)}`, true)
            .addField("**Wersja Discord.js:**", `${package.dependencies["discord.js"].slice(1)}`, true)

        message.channel.send(embed);
    }
}