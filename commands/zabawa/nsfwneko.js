const { MessageEmbed } = require('discord.js');
const snekfetch = require('snekfetch');
const { red_light } = require("../../colours.json")

module.exports = {
    config: {
        name: "nsfwneko",
        description: "losowe zdjęcie nagiej neko. Działa na kanale nsfw",
        usage: "nsfwneko",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownik",
    },
    run: async (bot, message, args) => {
        if(!message.channel.nsfw) {
            const pembed = new MessageEmbed()
            .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription("Komenda ta jest przeznaczona do użytku na kanale \`\`NSFW\`\`")
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(pembed);
        };
        if(message.channel.nsfw) {
        const res = await snekfetch.get(`http://nekos.life/api/lewd/neko`);
        const preview = res.body.neko;

        const embed = new MessageEmbed()
            .setImage(preview)
            .setAuthor("NEKO", `https://cdn.nekos.life/neko/neko_390.png`)
            .setColor('#A187E0')
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send({ embed });
        }
    }
}