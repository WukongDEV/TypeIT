const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const send = require('quick.hook');

module.exports = {
    config: {
        name: "conf",
        description: "Ustawia config bota",
        usage: "config <wartosc> <argument>",
        category: "moderacyjne",
        accessableby: "administrator",

    },
    run: async (bot, message, args) => {
        const currentprefix = db.fetch(`prefix_${message.guild.id}`)
        const opcja = args[0].toLowerCase()
        const wartosc = args[1].toLowerCase()

        if(opcja == "prefix"){
            if(!message.member.hasPermission(["MANAGE_GUILD"])){
                return message.channel.send({embed: {color: "RED", title: "Błąd", description: "Nie posiadasz permisji `ZARZĄDZANIE_SERWEREM`!", image: "https://cdn.discordapp.com/attachments/740144186417741893/740223644675866664/Zrzut_ekranu_562.png"}})
            }

            let newprefix = args[1];
            if(!newprefix) return message.channel.send({embed: { color: 0xFF0000, title: "Błąd", description: "Podałeś nieprawidłowy prefix!"}});
            else {
                db.delete(`prefix_${message.guild.id}`)
                db.set(`prefix_${message.guild.id}`, newprefix)
                const embed = new MessageEmbed()
                    .setColor(0xFFFFFF)
                    .setTimestamp()
                    .setTitle("Sukces!")
                    .setDescription("Ustawiłeś nowy prefix serwera! \nOd teraz prefix tego serwera to: `" + newprefix+'`')
                message.channel.send(embed)
            }
            return;
        }
        if(opcja == 'joinmessagechannel'){
            if(!wartosc) return message.channel.send
            db.delete(`joinmsgchannel_${message.guild.id}`)
            db.set(`joinmsgchannel_${message.guild.id}`)
        }

        else{
            message.channel.send(`<@${message.author.id}> Podaj poprawną opcję! \nUżycie ${currentprefix}config <prefix/joinmessage/leavemessage/joinchannel/leavechannel> <wartość>`)
        }
    }
}