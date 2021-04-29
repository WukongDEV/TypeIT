const { MessageEmbed } = require("discord.js");
const { cyan, red_light, green_light } = require("../../colours.json")
const { prefix } = require("../../zapisydb/botconfig.json")
const fs = require("fs")
const lang = require("../../lang/pl.json");

module.exports = {
    config: {
    name: "config",
    category: "moderation",
    usage: "<setting> <value>",
    description: "Clear messages.",
    permissions: "ADMINISTRATOR",
    },
    run: async (client, message, args, con) => {

        prefixpokaz = "!"
        joincs = require("../../zapisydb/joinc.json");
        joinms = require("../../zapisydb/joinm.json");
        leavecs = require("../../zapisydb/leavec.json");
        leavems = require("../../zapisydb/leavem.json");
        langs = require("../../zapisydb/lang.json")
        wyls = require("../../zapisydb/wyl.json")
        logis = require("../../zapisydb/log.json")

        //let prefixpokaz = prefixs[message.guild.id].prefix;
        let joinmpokaz = joinms[message.guild.id].joinm;
        let joincpokaz = joincs[message.guild.id].joinc;
        let leavempokaz = leavems[message.guild.id].leavem;
        let leavecpokaz = leavecs[message.guild.id].leavec;
        let langpokaz = langs[message.guild.id].lang;
        let wylpokaz = wyls[message.guild.id].wyl;
        //let logpokaz = logis[message.guild.id].kanal

        if (args[0] == "logi") {
            if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
            if (!args[0]) {
                const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(`Błąd! Nie podałeś akcji do wykonania!\n\`\`${prefixpokaz}config logi <idkanału>\`\` - ustawia kanał do logów z informacjami o zbanowaniu, kickowaniu itp.`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
                }
                if (!args[1]) {
                    const em1 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(`Podaj co chcesz zrobić!\n\`\`${prefixpokaz}config logi <idkanału>\`\` - ustawia kanał do logów z informacjami o zbanowaniu, kickowaniu itp.`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em1);
                    }
                if (args[1]) {
                    args.shift()
                    let kanale = args.join(" ")
                    let newsek = client.channels.cache.get(kanale);
                if (message.guild.channels.cache.find(c => c.id === kanale)) {
                       
                    logis [message.guild.id]= {
                        kanal: kanale
                    }
                    fs.writeFileSync("zapisydb/log.json", JSON.stringify(logis, null, 4), err => {
                        if(err) throw err;
                    })
        
                    const em4 = new MessageEmbed()
                       .setAuthor(lang.config.sukc, `https://i.imgur.com/WQdSa4y.gif`)
                       .setColor(cyan)
                       .setDescription(lang.config.desc8.replace("${news.id}", newsek.id).replace("${news.name}", newsek.name))
                       .setTimestamp()
                       .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                   message.channel.send(em4)
                    } else {
                        const em23 = new MessageEmbed()
                        .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                        .setColor(red_light)
                        .setDescription(lang.config.desc9)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                    return message.channel.send(em23)
                    }
                }
        }

        if (args[0] == "status") {
        
        if(!message.member.hasPermission(["ADMINISTRATOR"])) {
            const em3 = new MessageEmbed()
            .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(lang.config.desc)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em3)
        }
        if (!args[0]) {
            const em1 = new MessageEmbed()
            .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(`Podaj co chcesz zrobić!\n\`\`${prefixpokaz}config status <join/leave/nsfw> <on/off)\`\` - wyłącza/włącza powitania/pożegnania/komendy nsfw\n--------\naby włączyć powitania i pożegnania użyj dla:\npowitań:\n\`\`${prefixpokaz}config joinchannel <idkanału>\`\`\npożegnań:\n\`\`${prefixpokaz}config leavechannel <idkanału>\`\``)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(em1);
            }
            if (!args[1]) {
                const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(`Podaj co chcesz zrobić!\n\`\`${prefixpokaz}config status <join/leave/nsfw> <on/off)\`\` - wyłącza/włącza powitania/pożegnania/komendy nsfw\n--------\naby włączyć powitania i pożegnania użyj dla:\npowitań:\n\`\`${prefixpokaz}config joinchannel <idkanału>\`\`\npożegnań:\n\`\`${prefixpokaz}config leavechannel <idkanału>\`\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
                }
            if (args[1] == "join") {
                if (!args[1]) {
                    return message.channel.send(`Jeżeli chcesz wyłączyć wiadomości powitalne użyj \`\`${prefixpokaz}config status join off/on\`\``)
                }
                if (args[2] === "on") {
                    return message.channel.send(`Aby włączyć użyj: \`\`${prefixpokaz}config joinchannel <idkanału>\`\``)
                }
                if (args[2] === "off") {
                    joincs [message.guild.id]= {
                        joinc: "0"
                    }
                    fs.writeFileSync("zapisydb/joinc.json", JSON.stringify(joincs, null, 4), err => {
                        if(err) throw err;
                    })
                    const em56 = new MessageEmbed()
                    .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                    .setColor(cyan)
                    .setDescription("Wyłączyłeś wiadomości powitalne!")
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                    return message.channel.send(em56);
                    } else {
                    return message.channel.send(`Jeżeli chcesz wyłączyć wiadomości powitalne użyj \`\`${prefixpokaz}config status join off/on\`\``)
                }
            }
            if (args[1] == "leave") {
                if (!args[1]) {
                    return message.channel.send(`Jeżeli chcesz wyłączyć wiadomości pożegnalne użyj \`\`${prefixpokaz}config status leave off/on\`\``)
                }
                if (args[2] === "on") {
                    return message.channel.send(`Aby włączyć użyj: \`\`${prefixpokaz}config leavechannel <idkanału>\`\``)
                }
                if (args[2] === "off") {
                    leavecs [message.guild.id]= {
                        leavec: "0"
                    }
                    fs.writeFileSync("zapisydb/leavec.json", JSON.stringify(leavecs, null, 4), err => {
                        if(err) throw err;
                    })
                    const em65 = new MessageEmbed()
                    .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                    .setColor(cyan)
                    .setDescription("Wyłączyłeś wiadomości powitalne!")
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                    return message.channel.send(em65);  
                } else {
                    return message.channel.send(`Jeżeli chcesz wyłączyć wiadomości powitalne użyj \`\`${prefixpokaz}config status join off/on\`\``)
                }
        }
            if (args[1] === "nsfw") {
                if(!args[1]) {
                    const em1 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(`Podaj co chcesz zrobić! \`\`${prefixpokaz}config status nsfw off/on\`\``)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
                }
                if(!args[2]) {
                    const em1 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(`Podaj co chcesz zrobić!\n off - wyłącza kategorię komend nsfw.\n on - włącza kategorię komend nsfw.`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
                }
                if (args[2] === "off") {
                args.shift()
                
                wyls [message.guild.id]= {
                    wyl: "tak"
                }
                fs.writeFileSync("zapisydb/wyl.json", JSON.stringify(wyls, null, 4), err => {
                    if(err) throw err;
                })

                const em1 = new MessageEmbed()
                    .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                    .setColor(cyan)
                    .setDescription(`Wyłączyłeś kategorię komend nsfw!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
    }
                if (args[2] === "on") {
                    args.shift()
                
                    wyls [message.guild.id]= {
                        wyl: "nie"
                    }
                    fs.writeFileSync("zapisydb/wyl.json", JSON.stringify(wyls, null, 4), err => {
                        if(err) throw err;
                    })
    
                    const em1 = new MessageEmbed()
                        .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                        .setColor(cyan)
                        .setDescription(`Włączyłeś kategorię komend nsfw!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em1);
            } else {
                    const em1 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(`Podaj co chcesz zrobić!\n off - wyłącza kategorię komend nsfw.\n on - włącza kategorię komend nsfw.`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
            }
        }
    else {
            const em1 = new MessageEmbed()
            .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(`Podaj co chcesz zrobić!\n off - wyłącza kategorię komend nsfw.\n on - włącza kategorię komend nsfw.`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    return message.channel.send(em1);
    }
    }
        if (args[0] == "pokaz") {
            
        if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
        
        let kanaljoin = client.channels.cache.get(joincpokaz);
        let kanalleave = client.channels.cache.get(leavecpokaz)
        //let kanallog = client.channels.cache.get(logpokaz)
        const embed2 = new MessageEmbed()
            .setAuthor(lang.config.title, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            .setColor(cyan)
            .addField(lang.config.field, lang.config.fieldp.replace("${rows[0].joinc}", joincpokaz).replace("${kanaljoin}", kanaljoin).replace("${rows[0].joinm}", joinmpokaz))
            .addField(lang.config.field1, lang.config.fieldp1.replace("${rows[0].leavec}", leavecpokaz).replace("${kanalleave}", kanalleave).replace("${rows[0].leavem}", leavempokaz))
            .addField(lang.config.field2, lang.config.fieldp2.replace("${rows[0].lang}", langpokaz))
            //.addField(lang.config.field3, lang.config.fieldp3.replace("${rows[0].prefix}", prefixpokaz))
            .addField("• Wyłączone kategorie komend:", `\`\`\`nsfw - ${wylpokaz}\`\`\``)
            //.addField("• Kanał do logów:", `ID: \`\`${logpokaz}\`\`\nOznaczony: ${kanallog}`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(embed2);
    }
    /*if (args[0] == "prefix") {
        
        if(!message.member.hasPermission(["ADMINISTRATOR"])) {
            const em3 = new MessageEmbed()
            .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(lang.config.desc)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em3)
        }
        if (!args[1]) {
            const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription("Podaj jaki chcesz ustawic prefix!")
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
            }
            if (args[1].length > 5) return message.reply("Za długi prefix! (Maksymalnie 5 znaków)")
            if (args[1]) {
                args.shift()
                let pref = args.join("-")

                prefixs [message.guild.id]= {
                    prefix: pref
                }
                fs.writeFileSync("zapisydb/prefix.json", JSON.stringify(prefixs, null, 4), err => {
                    if(err) throw err;
                })

                const em1 = new MessageEmbed()
                    .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                    .setColor(cyan)
                    .setDescription(`Mój nowy prefix to \`\`${pref}\`\``)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
            }
        }*/
        if (!args[0]) {
            let prefixpokaz = "!"
            if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
        const embed1 = new MessageEmbed()
            .setAuthor(lang.config.title1, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            .setColor(green_light)
            .setDescription(lang.config.desc1.replace("${pr}", prefixpokaz).replace("${prf}", prefixpokaz).replace("${prf}", prefixpokaz).replace("${prf1}", prefixpokaz).replace("${prf2}", prefixpokaz).replace("${prf3}", prefixpokaz).replace("${prf4}", prefixpokaz).replace("${prf5}", prefixpokaz).replace("${prf6}", prefixpokaz).replace("${prf7}", prefixpokaz).replace("${prf8}", prefixpokaz).replace("${prf9}", prefixpokaz))
            .setImage(`https://i.imgur.com/HNhNdi8.png`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(embed1);  
        }
        if (args[0] == "lang") {
            const em3 = new MessageEmbed()
            .setAuthor(lang.wyl.blad, `https://i.imgur.com/8BzirRk.gif`)
            .setColor(red_light)
            .setDescription(lang.wyl.descs)
            .setTimestamp()
            .setImage("https://i.imgur.com/j0pkf8X.gif")
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em3)
        }
            /*if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
            if (!args[1]) {
            const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc2) //"Użyj pl lub en"
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
            }
            if (args[1].length > 2) {
                const em1 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(lang.config.desc3)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em1);
            }
        if (args[1] === "pl") { //args[1] === "en" || 
            con.query(`SELECT * FROM config WHERE id = ${message.guild.id}`, (err, rows) => {
            args.shift()
            let msg = args.join(" ")
            con.query(`UPDATE config SET lang = '${msg}' WHERE id = ${message.guild.id}`)
            const em1 = new MessageEmbed()
                .setAuthor(lang.config.sukc, `https://i.imgur.com/WQdSa4y.gif`)
                .setColor(cyan)
                .setDescription(lang.config.desc4.replace("${msg}", msg))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(em1);
            })
            } else {
                const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc2) //"Użyj pl lub en"
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
            }
        }*/
        if (args[0] == "joinmessage") {
            if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
            if (!args[1]) {
            const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc5)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em1);
            }
            if (args[1].length > 200) {
                const em1 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(lang.config.desc6)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em1);
                }
        if (args[1]) {
            args.shift()
            let msg = args.join(" ")
            
            joinms [message.guild.id]= {
                joinm: msg
            }
            fs.writeFileSync("zapisydb/joinm.json", JSON.stringify(joinms, null, 4), err => {
                if(err) throw err;
            })

            const em1 = new MessageEmbed()
                .setAuthor("Sukces!", `https://i.imgur.com/WQdSa4y.gif`)
                .setColor(cyan)
                .setDescription(lang.config.desc4.replace("${msg}", msg))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(em1);
        }
    }
        if (args[0] == "joinchannel") {
            if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                return message.channel.send(em3)
            }
            if (!args[1]) {
            const em1 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc7)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(em1);
        }
        if (args[1]) {
            args.shift()
            let msg = args.join(" ")
            let news = client.channels.cache.get(msg);
        if (message.guild.channels.cache.find(c => c.id === msg)) {
               
            joincs [message.guild.id]= {
                joinc: msg
            }
            fs.writeFileSync("zapisydb/joinc.json", JSON.stringify(joincs, null, 4), err => {
                if(err) throw err;
            })

            const em4 = new MessageEmbed()
               .setAuthor(lang.config.sukc, `https://i.imgur.com/WQdSa4y.gif`)
               .setColor(cyan)
               .setDescription(lang.config.desc8.replace("${news.id}", news.id).replace("${news.name}", news.name))
               .setTimestamp()
               .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
           message.channel.send(em4)
            } else {
                const em23 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc9)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em23)
            }
        }
    }
        if (args[0] == "leavemessage") {
            if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
            if (!args[1]) {
            const em65 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc10)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em65);
            }
            if (args[1].length > 200) {
                return message.channel.send(em1);
                }
                if (args[1]) {
                args.shift()
                let msg = args.join(" ")
                leavems [message.guild.id]= {
                    leavem: msg
                }
                fs.writeFileSync("zapisydb/leavem.json", JSON.stringify(leavems, null, 4), err => {
                    if(err) throw err;
                })
            const em45 = new MessageEmbed()
                .setAuthor(lang.config.sukc, `https://i.imgur.com/WQdSa4y.gif`)
                .setColor(cyan)
                .setDescription(lang.config.desc4.replace("${msg}", msg))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        return message.channel.send(em45);
        }
        }
        if (args[0] == "leavechannel") {
            if(!message.member.hasPermission(["ADMINISTRATOR"])) {
                const em3 = new MessageEmbed()
                .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                .setColor(red_light)
                .setDescription(lang.config.desc)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em3)
            }
            if (!args[1]) {
                const em243 = new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(lang.config.desc11)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            return message.channel.send(em243);
            }
            if (args[1]) {
                args.shift()
                let msg = args.join(" ")
                let news = client.channels.cache.get(msg);
            if (message.guild.channels.cache.find(c => c.id === msg)) {
                leavecs [message.guild.id]= {
                    leavec: msg
                }
                fs.writeFileSync("zapisydb/leavec.json", JSON.stringify(leavecs, null, 4), err => {
                    if(err) throw err;
                })
                const em34 = new MessageEmbed()
                   .setAuthor(lang.config.sukc, `https://i.imgur.com/WQdSa4y.gif`)
                   .setColor(cyan)
                   .setDescription(lang.config.desc8.replace("${news.id}", news.id).replace("${news.name}", news.name))
                   .setTimestamp()
                   .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
               message.channel.send(em34)
                } else {
                    const em87= new MessageEmbed()
                    .setAuthor(lang.config.blad, `https://i.imgur.com/8BzirRk.gif`)
                    .setColor(red_light)
                    .setDescription(lang.config.desc9)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                return message.channel.send(em87)
                }
            }
        }
    }
}
