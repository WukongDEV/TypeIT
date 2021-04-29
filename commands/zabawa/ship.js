const { MessageEmbed } = require("discord.js");
const { pink, red_light } = require("../../colours.json")
const { get } = require("node-superfetch");

module.exports = {
    config: {
        name: "ship",
        description: "Wyrzuca oznaczonego użytkownika z serwera. Wysyła informacje na kanał #logi. Jeżeli nie potrzebujesz nie twórz kanału #logi.",
        usage: "ship <@użytkownik> <@użytkownik>",
        category: "wyłączone",
        accessableby: "Wszyscy, użytkownik",
        aliases: ["s"]
    },

run: async (bot, message, args) => {
    const shipped = message.mentions.members.size === 2 ? message.mentions.members.array()[1] : message.member;
    const shipper = message.mentions.members.size === 1 || message.mentions.members.size === 2 ? message.mentions.members.array()[0] : message.member;
    const first_length = Math.round(shipper.displayName.length / 2);
    const first_half = shipper.displayName.slice(0, first_length);
    const second_length = Math.round(shipped.displayName.length / 2);
    const second_half = shipped.displayName.slice(second_length);
    const final_name = first_half + second_half;
    const score = Math.random() * (0, 100);
    const prog_bar = Math.ceil(Math.round(score) / 100 * 10);
    const counter = "◻️".repeat(prog_bar) + "◼️".repeat(10 - prog_bar);
    const m = await message.channel.send('*Poczekaj trwa generowanie!*');
  message.channel.startTyping();

    const embed = new MessageEmbed()
    .setTitle(`${shipper.displayName} ❤ ${shipped.displayName}`)
    .setDescription(`**Miłość ${Math.round(score)}%**\n${counter}\n`)
    .setColor(pink)
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))

    return message.channel.send(embed).then(() => {m.delete(); message.channel.stopTyping();});

}
}