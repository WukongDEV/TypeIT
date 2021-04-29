const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js")
const { red_light, cyan } = require("../../colours.json")

module.exports = {
  config: {
      name: "anal",
      description: "Wyświetla informacje na temat bota np. czas pracy bota.",
      usage: "botinfo",
      category: "informacyjne",
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
      .setDescription("🔞 Komenda ta jest przeznaczona do użytku na kanale \`\`NSFW\`\`")
      .setTimestamp()
      .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
      return message.channel.send(pembed);
  } else {
    const { body } = await get("https://nekobot.xyz/api/image?type=anal");
    
    const embed = new MessageEmbed()
    .setColor("BLACK")
    .setImage(body.message)
    .setTitle("ANAL")
    return message.channel.send(embed)
  }
  }
}