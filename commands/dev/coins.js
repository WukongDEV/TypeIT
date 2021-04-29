const { MessageEmbed } = require('discord.js')
const db = require('quick.db');
const send = require('quick.hook');

module.exports = {
    config: {
        name: "coins",
        description: "Ustawia config bota",
        usage: "config <wartosc> <argument>",
        category: "moderacyjne",
        accessableby: "administrator",

    },
    run: async (bot, message, args) => {
        if(message.author.id == '707531107788390411'){
            let id = args[1]
            let ammount = args[2]

        if(args[0] == 'add'){
            if(id){
                if(ammount){

                    db.add(`hajs_${id}`, `${ammount}`)
                    message.channel.send(`Dodano ${ammount} do konta uzytkownika o id ${id}`)
                }
            }
        }
            if(args[0] == 'rem'){
                if(id){
                    if(ammount){

                        db.subtract(`hajs_${id}`, `${ammount}`)
                        message.channel.send(`Usunieto ${ammount} do konta uzytkownika o id ${id}`)
                    }
                }
            }
        }
        if(message.author.id == '692734175324799016'){
            let id = args[1]
            let ammount = args[2]

            if(args[0] == 'add'){
                if(id){
                    if(ammount){

                        db.add(`hajs_${id}`, `${ammount}`)
                        message.channel.send(`Dodano ${ammount} do konta uzytkownika o id ${id}`)
                    }
                }
            }
            if(args[0] == 'rem'){
                if(id){
                    if(ammount){

                        db.subtract(`hajs_${id}`, `${ammount}`)
                        message.channel.send(`Usunieto ${ammount} do konta uzytkownika o id ${id}`)
                    }
                }
            }
        }
    }
}