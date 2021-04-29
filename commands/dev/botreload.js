const { MessageEmbed } = require("discord.js")
const { red_light, cyan } = require("../../colours.json")

module.exports = {
    config: {
        name: "botreload",
        description: "reloaduje bota",
        usage: "botreload",
        category: "",
        accessableby: "Właściciel bota.",
        aliases: ["rl", "reset"]
    },
    run: async (bot, message, args) => {

        if(message.author.id == "692734175324799016") {

            const embed = new MessageEmbed()
                .setColor(cyan)
                .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                .setDescription(`Bot zaczyna proces restartowania...`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            //bot.user.setStatus("dnd")
            bot.user.setPresence({ activity: { name: "Trwa restartowanie bota..." }, status: 'dnd' });
            await message.channel.send(embed);
            process.exit();
        }
        if(message.author.id == "436596486113984532") {

            const embed = new MessageEmbed()
                .setColor(cyan)
                .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                .setDescription(`Bot zaczyna proces restartowania...`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            //bot.user.setStatus("dnd")
            bot.user.setPresence({ activity: { name: "Trwa restartowanie bota..." }, status: 'dnd' });
            await message.channel.send(embed);
            process.exit();
           // bot.destroy()
           // bot.login(tokenbot);
        }
        else{
            const sembed = new MessageEmbed()
                .setColor(red_light)
                .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
                .setDescription("Nie wykryłem twojego ID w mojej bazie dla developerów. Jeśli jesteś developerem bota, skontaktuj się z `Jamess#2343`")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(sembed);
        };
    }
}