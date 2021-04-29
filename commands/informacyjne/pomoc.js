const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../zapisydb/botconfig.json");
const { readdirSync } = require("fs")
const { cyan, red_light, white, aqua, green_dark } = require("../../colours.json")

module.exports = {
    config: {
        name: "pomoc",
        aliases: ["help", "pomocy", "brak3", "brak4"],
        usage: "pomoc (komenda)",
        category: "informacyjne",
        description: "Wyświetla wszytskie komendy które posiada bot.",
        accessableby: "Wszyscy, użytkownicy"
    },
    run: async (bot, message, args) => {
        wyls = require("../../zapisydb/wyl.json")
        let wylpokaz = ('test')//wyls[message.guild.id].wyl;
        if (wylpokaz === "tak") {
            const e1 = new MessageEmbed()
                .setAuthor("Zbiór komend TypeIT", bot.user.displayAvatarURL())
                .setDescription("**• 🔗 Linki:**\n\n <a:kckc:741289692959342642> Dodaj Bota! [Klinij](https://discord.com/oauth2/authorize?client_id=741284824685477930&permissions=8&scope=bot)\n• <a:kckc:741289692959342642> Serwer Wsparcia! [Kliknij!](https://discord.gg/8aQe8Az)\n\n\n")
        message.channel.send(e1)

            return;
        } else {
            const e1 = new MessageEmbed()
            .setAuthor("Zbiór komend TypeIT", bot.user.displayAvatarURL())
            .setDescription("**• 🔗 Linki:**\n\n <a:kckc:741289692959342642> Dodaj Bota! [Klinij](https://discord.com/oauth2/authorize?client_id=741284824685477930&permissions=8&scope=bot)\n <a:kckc:741289692959342642> Serwer Wsparcia! [Kliknij!](https://discord.gg/8aQe8Az)\n\n\n• <a:miga:741289738845159426> Komendy Developerskie (3)\n`eval`, `botreload`, `eval`\n\n• <a:powiadomienie:741289803005558804> Komendy Informacyjne (6)\n`botinfo`, `ping`, `pomoc`, `profil`, `serverinfo`, `setprofil`\n\n• <a:brakdostepu:741289653528952873> Komendy Moderacyjne (4)\n`addrole`, `antyinvite`, `ban`, `clear`")
            .setThumbnail("https://cdn.discordapp.com/attachments/738473023123882166/741571373830504518/typeokragle.png")
            .setFooter("• Developerem bota jest Jamess#2343 | Zauważyłeś błąd? Wejdź na serwer wsparcia i zgłoś go!")
            message.channel.send(e1)
                return;
            }
    }
}