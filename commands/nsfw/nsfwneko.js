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

        wyls = require("../../zapisydb/wyl.json")
        prefixs = require("../../zapisydb/prefix.json")
        let wylpokaz = wyls[message.guild.id].wyl;
        let prefixpokaz = prefixs[message.guild.id].prefix;
    
        if(wylpokaz === "tak") {
            const pembed = new MessageEmbed()
            .setAuthor("Błąd!", `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(`Kategoria została wyłączona! Użyj \`\`${prefixpokaz}config status nsfw off/on\`\` aby włączyć lub wyłączyć.`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(pembed);
          }
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
        const res = await snekfetch.get(`https://nekos.life/api/v2/img/lewd`);
        const preview = res.body.url;

        const embed = new MessageEmbed()
            .setImage(preview)
            .setTitle("NEKO")
            .setColor("BLACK")
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send({ embed });
        }
    }
}