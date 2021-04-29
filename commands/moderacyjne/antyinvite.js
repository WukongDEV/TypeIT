const { MessageEmbed, discord } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");
const fs = require('fs')
const db = require('quick.db')


module.exports = {
    config: {
        name: "antyinvite",
        description: "Ustawia prefix serwerowy",
        usage: "setprefix <prefix>",
        category: "moderacyjne",
        accessableby: "administrator",
        aliases: ["antyzaproszenie"],
        cooldown: "4"
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission(["MANAGE_GUILD"])){
            return message.channel.send({embed: {color: "RED", title: "Błąd", description: "Brak permisji `ZARZĄDZANIE_SERWEREM`"}})
        }

        let wybor = args[0];
        if(!wybor) return message.channel.send({embed: { color: red_light, title: "Błąd", description: "Błąd! Nie podałeś żadnej opcji. Dostępne opcje to `on/off`"}});
        else {
            if(wybor == "on"){
                db.delete(`reklama_${message.guild.id}`)
                db.set(`reklama_${message.guild.id}`, "tak")
                const embed = new MessageEmbed()
                    .setColor(0x00FF00)
                    .setTimestamp()
                    .setTitle("Pomyslność")
                    .setDescription("Gratulacje! Włączyłeś moduł AntyInvite na swoim serwerze! Od teraz nie będzie można wysyłać zaproszeń!")
                    .setImage("https://media.discordapp.net/attachments/740144186417741893/740219228195651626/ab1c20387447f2314959669e47091f33-1.png?width=665&height=665")
                await message.channel.send(embed)
                return;
            }
            if(wybor == "off"){
                db.delete(`reklama_${message.guild.id}`, "nie")
                const embed = new MessageEmbed()
                    .setColor(0x00FF00)
                    .setTimestamp()
                    .setTitle("Pomyślność")
                    .setDescription("Gratulacje! Wyłączyłeś modul AntyInvite na swoim serwerze. Od teraz będzie można wysyłać zaproszenia!")
                    .setImage("https://media.discordapp.net/attachments/740144186417741893/740219529371582584/unlocked-solid-512.png")
                await message.channel.send(embed)
                return;
            }
            else{
            const embed = new MessageEmbed()
            .setColor(0x00FF00)
            .setTimestamp()
            .setTitle("Błąd!")
            .setDescription("Błąd! Nie podałeś żadnej opcji. Dostępne opcje to `on/off`")
        await message.channel.send(embed)
            }
        }
        

    }
}