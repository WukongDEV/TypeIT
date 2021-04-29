//https://api.labybot.pl/api/terminal.php?text=Przykladowy+tekst!++-++LabyBOT.pl
//let { body } = await superagent.get(`https://api.labybot.pl/api/terminal.php?text=${args}`);
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent')
const { red_light } = require("../../colours.json")
//const superagent = require("superagent");
//const { ucfirst } = require("js-helpers")

module.exports = {
    config: {
        name: "owo",
        description: "Wyświetla informacje na temat koronawirusa",
        usage: "covid",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownik",
        aliases: ["OwO"]
    },
    
    run: async (bot, message, args) => {
    
    let { body } = await superagent.get(`https://api.labybot.pl/api/index.php?name=owo`);

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`\`\`\`${body.message}\`\`\``)
    message.channel.send(embed)
    
    
    }
}