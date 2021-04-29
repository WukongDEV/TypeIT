const fetch = require("node-fetch");
const querystring = require("querystring");
const { MessageEmbed }= require("discord.js");
const superagent = require("superagent")

module.exports = {
    config: {
        name: "tweet",
        description: "wysyłą tweet na czat",
        usage: "tweet <treść>",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownik",
        aliases: ["twet"]
    },
    run: async (bot, message, args) => {
        
       // prefixs = require("../../zapisydb/prefix.json")
      //let prefix = prefixs[message.guild.id].prefix;
        
        if(!args[0]) return message.reply(`źle napisałeś zawartość. Użyj \`\`${prefix}weet <wiadomość>\`\``);
        let text = args.join(" ");
        if(args.join(" ").length > 30) {
            return message.channel.send("Wiadomośc może mieć max 30 znaków, licząć spację.")
        }
        const {
            body
        } = await superagent
            .get("https://nekobot.xyz/api/imagegen?type=tweet&username=" + message.author.username + "&text=" + text);
        link = body.neko;

        const embed = new MessageEmbed()
            .setColor("#ff9900")
            .setTitle("Tweet")
            .setImage(body.message)
            .setFooter(`© DBIT`);
        let wiad = message.channel.send(embed).then(msg => {
      
            msg.react("💬").then(async r => {
            msg.react("➕")
            await msg.react("❤️")
            })
        })
        //.then(m => m.react("💬")).then(s => s.react("🧬")).then(c => c.react("❤️"))
    }
};