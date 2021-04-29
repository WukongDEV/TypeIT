const { MessageEmbed, discord } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");
const db = require('quick.db');
const send = require('quick.hook');


module.exports = {
    config: {
        name: "setProfil",
        description: "Wysyła wiadomość w embed na kanale.",
        usage: "ogloszenie (kanał) <treść>",
        category: "informacjne",
        accessableby: "Użytkownik",
        aliases: ["setprofil", "setprof", "ustawprofil"]
    },
    run: async (bot, message, args) => {
        let member = message.author;
        //Prefix info
        let prefix;

        let dbprefix = await db.fetch(`prefix_${message.guild.id}`);

        if (!dbprefix) {
            prefix = '!';
        } else {
            prefix = dbprefix;
        }
        if (args[0] == "zapisz") {
            if (args[1] == "wiek") {
                let newwiek = args[2]
                if (!newwiek) return message.channel.send({
                    embed: {
                        color: 0xFF0000,
                        title: "Błąd",
                        description: "Błąd! Twój wiek nie mógł zostać pworwadzony do naszej bazy danych, ponieważ jest nieprawidłowy!"
                    }
                });
                db.set(`wiek_${member.id}`, newwiek)
                message.channel.send({
                    embed: {
                        color: "RANDOM",
                        title: "Pomyślność",
                        description: "Gratulacje! Twój wiek został wprowadzony do naszej bazy danych. Twój wiek to: " + newwiek
                    }
                });
                return;
            };
            if (args[1] == "pupil") {
                let newpupil = args[2]
                if (!newpupil) return message.channel.send({
                    embed: {
                        color: 0xFF0000,
                        title: "Błąd",
                        description: "Błąd! Twój pupil nie mógł zostać wprowadzony do naszej bazy danych, ponieważ go nie podałeś!"
                    }
                });
                db.set(`zwierz_${member.id}`, newpupil)
                message.channel.send({
                    embed: {
                        color: "RANDOM",
                        title: "Pomyślność",
                        description: "Gratulacje! Twój pupil został wprowadzony do naszej bazy danych. Twój pupil to: "+newpupil
                    }
                });
                return;
            };
            if (args[1] == 'imie') {
                let newimie = args[2]
                if (!newimie) return message.channel.send({
                    embed: {
                        color: 0xFF0000,
                        title: "Błąd",
                        description: "Błąd! Twoje imie nie mogło zostać wprowadzone do naszej bazy danych, ponieważ jest nieprawidłowe"
                    }
                });
                db.set(`imie_${member.id}`, newimie)
                message.channel.send({
                    embed: {
                        color: "RANDOM",
                        title: "Pomyślność",
                        description: "Gratulacje! Twoje imie zostało wprowadzone do naszej bazy danych. Twoje imie to: " + newimie
                    }
                });
                return;
            };
        };
        if (args[0] == 'usun') {
            if (args[1] == "wiek") {
                db.delete(`wiek_${member.id}`)
                        message.channel.send({
                            embed: {
                                color: "RANDOM",
                                title: "Pomyślność",
                                description: "Gratulacje! Twój wiek został usunięty z naszej bazy danych."
                            }
                        });
                return;
                    };
            if (args[1] == "pupil") {
                db.delete(`zwierz_${member.id}`)
                message.channel.send({
                    embed: {
                        color: "RANDOM",
                        title: "Pomyślność",
                        description: "Gratulacje! Twój pupil został usunięty z naszej bazy danych."
                    }

                });
                return;
            };
                    if (args[1] == 'imie') {
                        db.delete(`imie_${member.id}`)
                        message.channel.send({
                            embed: {
                                color: "RANDOM",
                                title: "Pomyślność",
                                description: "Gratulacje! Twoje imie zostało usunięte z naszej bazy danych."
                            }
                        });
                        return
                    };

                };




            message.channel.send({embed: { color: 0xFF0000, title: "Błąd", description: "Źle wprowadzono komendę. Użyj `"+prefix+"setprofil <zapisz/usun> <wiek/imie/pupil> <wartość>` aby ustawić swój własny profil!"}});

    }
}