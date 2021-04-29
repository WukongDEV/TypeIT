const { MessageEmbed } = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = {
    config: {
        name: "neko",
        description: "losowe zdjęcie neko.",
        usage: "neko",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownik",
    },
    run: async (bot, message, args) => {
        
            const res = await snekfetch.get(`http://nekos.life/api/neko`);
            const preview = res.body.neko;

            const embed = new MessageEmbed()
                .setAuthor("NEKO", `https://cdn.nekos.life/neko/neko_390.png`)
                .setImage(preview)
                .setColor('#A187E0')
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send({ embed });

        }
    }