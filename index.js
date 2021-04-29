const { Client, Collection, MessageEmbed } = require("discord.js");
const { tokenbot } = require("./zapisydb/botconfig.json");
const bot = new Client();
const fs = require("fs")
const { cyan, red_light } = require("./colours.json")
let moment = require("moment-timezone");
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
/*
let token = "44lo45pTm6U7idvY";
let clientID = "709843206866731089";
let disableLogs = false // true
let DBListaAPI = require("dblista-wrapper");
let DBLista = new DBListaAPI({token, clientID, disableLogs});

//DBLISTA API
bot.on("ready", async () => {

    setInterval(async function(){
        try {
            let api = await DBLista.updateStats(bot.users.cache.size*3, bot.guilds.cache.size);
            console.log(api);
        } catch (error) { console.log(error); }
    }, 300000);
}); bot.on("ready", async () => {

    setInterval(async function(){
        try {
            let api = await DBLista.updateStats(bot.users.cache.size*3, bot.guilds.cache.size);
            console.log(api);
        } catch (error) { console.log(error); }
    }, 300000);
});
//KONIEC API DBLISTY
*/
//System komend i prefixów

bot.on("message", async message => {

    if(message.author.bot || message.channel.type === "dm") return;
    const db = require('quick.db');
    const send = require('quick.hook');



    let prefix;

    let dbprefix = await db.fetch(`prefix_${message.guild.id}`);

    /*if(dbprefix == null){
        db.set(`prefix_$message.guild.id}`, `,`)S
    }*/
    if(!dbprefix){
        prefix = 's.';

    }
    else {
        prefix = dbprefix;
    }

    let reklama = ["discord.gg/", "https://discord.gg/"]
    let foundInText = false
    for (var i in reklama) {
        if (message.content.toLowerCase().includes(reklama[i].toLowerCase())) foundInText = true



        let reklamowe;

        let dbreklama = await db.fetch(`reklama_${message.guild.id}`)

        if(!dbreklama) {

            let blockedEmbed = new MessageEmbed()
                .setColor("#eb3434")
                .setAuthor("TypeIT - Moduł AntyInvite", bot.user.displayAvatarURL())
                .setDescription(`Użytkownik o nicku ${message.author.tag} ID: ( ${message.author.id} ) Próbował się zareklamować! Na szczęście, włączony moduł AntyInvite zadziałał, i zablokował reklamę!`)
                .setFooter('Moduł AntyInvite wyłączysz używając komendy: '+prefix+'antyinvite <on/off>')

            if (foundInText) {

                return;
            }
        }

        if(dbreklama == "tak"){
            let blockedEmbed = new MessageEmbed()
                .setColor("#eb3434")
                .setAuthor("TypeIT - Moduł AntyInvite", bot.user.displayAvatarURL())
                .setDescription(`Użytkownik o nicku ${message.author.tag} ID: ( ${message.author.id} ) Próbował się zareklamować! Na szczęście, włączony moduł AntyInvite zadziałał, i zablokował reklamę!`)
                .setFooter('Moduł AntyInvite wyłączysz używając komendy: '+prefix+'antyivnite <on/off>')

            if (foundInText) {
                if(message.member.hasPermission(["ADMINISTRATOR"])) return;
                message.delete()
                message.channel.send(blockedEmbed)
                return;
            }
        }
        if(dbreklama == "nie") return;
    }




    if(message.mentions.everyone) return;
    let zEmbed = new MessageEmbed()
        .setColor("#eb34c6")
        .setAuthor("Oznaczono Bota!", `https://i.imgur.com/I8W4u8z.gif`)
        //.setDescription(`Witaj widzę że nie znasz mojego prefixu i komend.\nMój domyślny prefix: \`\`,\`\`\nPrefix na tym serwerze to\`\`\`\`\nListę komend znajdziesz pod \`\`,pomoc\`\``)
        .setDescription('Cześć! Oznaczyłeś mnie więc pewnie potrzebujesz pomocy! Przeczytaj wszystko poniżej.\n\nMój prefix główny to `!`\n\nPrefix tego serwera to `'+prefix+'`\n\nJeśli chcesz poznać moje komendy użyj: `'+prefix+'pomoc`\n\n\nSerwer Wsparcia: [Kliknij!](https://discord.gg/8aQe8Az)\n\nChcesz dodać bota? [Kliknij](https://discord.com/api/oauth2/authorize?client_id=741284824685477930&permissions=8&scope=bot)')
        .setThumbnail("https://media.discordapp.net/attachments/738473023123882166/741303619617292388/005-free-emoji.png")
        .setTimestamp()
    if (message.mentions.has(bot.user)) return message.channel.send(zEmbed)

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) {
        bl = db.fetch(`blacklist_${message.author.id}`)
        if(bl){
            let bembed = new MessageEmbed()
                .setColor("#eb3434")
                .setAuthor("Błąd! Nie możesz wykonać komendy ponieważ posiadasz blokadę komend!", message.author.displayAvatarURL())
                .addField("Powód blokady:", bl, true)
                .addField("Chcesz usunąć Blacklistę?", "Zgłoś się do developera! Jego tag to: `Jamess#2343` i opisz dlaczego ma ci usunąć blokadę komend!", true)
            message.channel.send(bembed)
            return;
        }
        commandfile.run(bot, message, args);
    } else if (message.content.startsWith(prefix)) {
        let e = new MessageEmbed()
        .setColor("#eb3434")
        .setAuthor("Błąd Systemu!", bot.user.displayAvatarURL())
        .setDescription(`Podana przez ciebie komenda nie widnieje w naszej bazie. Upewnij się czy dobrze ją napisałeś!`)
        .setFooter(`Wywołał ${message.author.username} ( ${message.author.id} )`, message.author.displayAvatarURL)
        message.channel.send(e)
        //message.react("❌");
    }
    /*if(cmd === "ods") {
        if(message.author.id === "414536807334805506") {
            const kanalkanal = bot.channels.cache.get("716974526981996584")
            const kanaly = bot.channels.cache.size
            const nazwakanals = `📟  | Kanały: ${kanaly}`
            kanalkanal.edit({ name: nazwakanals })
            //
            const kanalping = bot.channels.cache.get("716386653564043316")
            const ping = bot.ws.ping
            const pingname = `📟  | Ping: ${ping}`
            kanalping.edit({ name: pingname })
            return message.channel.send("już")
        } else {
            return message.channel.send("nie możesz lol")
        }
    }*/

});

//dbit-bot: NzA5ODQzMjA2ODY2NzMxMDg5.XtK9RQ.O_2PYynK4_lyoOLWWOa1xoFJ9rI
//dbit-test: NzAwMjM0MTgxNDE4MDI0OTkx.XsrL0g.mOUq_8Tsgx_cm7yevTlD6czZwZ4

bot.login(tokenbot);//token


//koniec sstemu komend i prefixów