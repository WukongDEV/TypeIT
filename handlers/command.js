const { readdirSync } = require("fs");
const aliases = require("discord.js");
const fs = require("fs");

module.exports = (bot, message) => {

    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            bot.commands.set(pull.config.name, pull);
            if (pull.config.aliases) pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
          };
        };
        ["informacyjne", "moderacyjne", "zabawa", "wylaczone", "nsfw", "dev"].forEach(x => load(x));

};