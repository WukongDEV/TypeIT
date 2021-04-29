const rp = require('request-promise');
const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "ascii",
        description: "Wyświetla informacje na temat oznaczonego bota",
        usage: "<@użytkownik/id użytkownika>",
        category: "informacyjne",
        accessableby: "Wszyscy, użytkownik",
        },
        run: (bot, message, args) => {
            
            if (args.join(" ") === "ę") {
                return message.channel.send("Wiadomośc nie może mieć polskich znaków!")
            }

            if (args.join(" ").length > 11) {
                return message.channel.send("Wiadomośc może mieć max 11 znaków, licząć spację.")
            } else {
            
    const url = `http://artii.herokuapp.com/make?text=${args}`;

    rp(url)
          .then(function(html){
            const ascii = html;
            /*const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setAuthor("Sukces!", "https://i.imgur.com/WQdSa4y.gif")
                .setDescription(`\`\`\`${ascii}\`\`\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    */
            message.channel.send(`\`\`\`${ascii}\`\`\``);
      })
      .catch(function(err){
        //handle error
      });
    }
    }
}