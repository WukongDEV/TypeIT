const { MessageEmbed } = require('discord.js')
const db = require('quick.db');
const send = require('quick.hook');

module.exports = {
    config: {
        name: "shop",
        description: "Ustawia config bota",
        usage: "config <wartosc> <argument>",
        category: "moderacyjne",
        accessableby: "administrator",

    },
    run: async (bot, message, args) => {
        let prefix = db.fetch(`prefix_${message.guild.id}`)
        if(!prefix){
            prefix == ','
        }
        let hajsy = db.fetch(`hajs_${message.author.id}`)
        if(!hajsy){
            hajsy = '0'
        }
        const przedmiot = args[0]

        //embed sklepu

            let e = new MessageEmbed()
                .setAuthor(`Sklep DBIT'a`, bot.user.displayAvatarURL())
                .addField(`Własny kolor embed w profilu`, `Koszt: 200 DBIT coins. Po kupieniu tego dodatku, Twój profil nie będzie wyglądał tak smutno ;)`, true)
                .addField(`Voucher na aktywację DBIT'a premium`, `Koszt 1000 DBIT coins. Po kupieniu Vouchera, możesz aktywować go na dowolnym serwerze! Po zakupie instrukcje zostaną wysłane na pv!`, true)
                .setFooter(`Posiadasz w tym momencie ${hajsy} DBIT coins na swoim koncie!`, message.author.displayAvatarURL())
        message.channel.send(e)

        //koniec embed sklepu

        if(przedmiot == 'embed'){

        }
    }
}