const { MessageEmbed, discord } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");
const db = require('quick.db');
const send = require('quick.hook');
const moment = require('moment');


module.exports = {
    config: {
        name: "blacklist",
        description: "Wysyła wiadomość w embed na kanale.",
        usage: "ogloszenie (kanał) <treść>",
        category: "informacjne",
        accessableby: "Użytkownik",

    },
    run: async (bot, message, args) => {
        const kanal = bot.channels.cache.get("692734175324799016")
        if (message.author.id == "707531107788390411") {
            if (args[0] == 'dodaj') {
                const idbl = args[1]
                let powod = args.slice(2).join(' ');
                if (!idbl) return message.channel.send(`<@${message.author.id}> podaj ID osoby, którą mam dodać do blacklisty!`);
                if (!powod) {
                    powod = "Nie podano"
                }
                db.set(`blacklist_${idbl}`, `${powod}`)

                let blpeople = await bot.users.cache.get(idbl);
                const embed3 = new MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Dodawanie do blacklisty")
                .setDescription(`Pomyślnie dodałeś ( <@${idbl}> ) do blacklisty.\nNie może on od teraz używać komend TypeIT!`)
                message.channel.send(embed3);
                bot.channels.cache.get("692734175324799016").send(`Użytkownik o id ${id} został dodany na blacklistę!\mPowód ${powod}`)
                return;
            }
            if (args[0] == 'usun') {
                const idbl = args[1]
                //let powod = args.slice(2).join(' ');
                if (!idbl) return message.channel.send(`<@${message.author.id}> podaj ID osoby, którą mam usunąć z blacklisty!`);
                //if(!powod){
                //  powod = "Nie podano"
                //}
                db.delete(`blacklist_${idbl}`)
                let blpeople = await bot.users.cache.get(idbl);
                const embed2 = new MessageEmbed()
                .setColor("#34eb46")
                .setTitle("Usuwanie z blacklisty")
                .setDescription(`Pomyślnie usunąłeś ( <@${idbl}> ) z blacklisty.\nMoże on od teraz używać komend TypeIT`)
                message.channel.send(embed2);
                return;
            }
        }
        if (message.author.id == "692734175324799016") {
            if (args[0] == 'dodaj') {
                const idbl = args[1]
                let powod = args.slice(2).join(' ');
                if (!idbl) return message.channel.send(`<@${message.author.id}> podaj ID osoby, którą mam dodać do blacklisty!`);
                if (!powod) {
                    powod = "Nie podano"
                }
                db.set(`blacklist_${idbl}`, `${powod}`)

                let blpeople = await bot.users.cache.get(idbl);
                const embed1 = new MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Dodawanie do blacklisty")
                .setDescription(`Pomyślnie dodałeś ( <@${idbl}> ) do blacklisty.\nNie może on od teraz używać komend TypeIT`)
                message.channel.send(embed1)
                bot.channels.cache.get("692734175324799016").send(`Użytkownik o id ${id} został dodany na blacklistę!\mPowód ${powod}`)
                return;
            }
            if (args[0] == 'usun') {
                const idbl = args[1]
                //let powod = args.slice(2).join(' ');
                if (!idbl) return message.channel.send(`<@${message.author.id}> podaj ID osoby, którą mam usunąć z blacklisty!`);
                //if(!powod){
                //  powod = "Nie podano"
                //}
                db.delete(`blacklist_${idbl}`)
                let blpeople = await bot.users.cache.get(idbl);
                const embed = new MessageEmbed()
                .setColor("#34eb46")
                .setTitle("Usuwanie z blacklisty!")
                .setDescription(`Pomyślnie usunąłeś ( <@${idbl}> ) z blacklisty.\nMoże on od teraz używać komend TypeIT`)
                message.channel.send(embed);
                return;
            }
        }

    }
}
