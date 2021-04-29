const { MessageEmbed, discord } = require("discord.js");
const { cyan, red_light } = require("../../colours.json");
const db = require('quick.db');
const send = require('quick.hook');
const moment = require('moment');


module.exports = {
    config: {
        name: "profil",
        description: "Wysyła wiadomość w embed na kanale.",
        usage: "ogloszenie (kanał) <treść>",
        category: "informacjne",
        accessableby: "Użytkownik",

    },
    run: async (bot, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member){
            member=message.author
        }
        //Prefix info
        let prefix;

        let dbprefix = await db.fetch(`prefix_${message.guild.id}`);

        if(!dbprefix){
            prefix = ',';
        }
        else{
            prefix=dbprefix;
        }

        //dane z bazy
        //wiek
        let wiek;

        let dbwiek = await db.fetch(`wiek_${member.id}`);

        if(!dbwiek){
            wiek = 'Nie podano';
        }
        else{
            wiek=dbwiek;
        }
        //imie
        let imie;

        let dbimie = await db.fetch(`imie_${member.id}`);

        if(!dbimie){
            imie = 'Nie podano';
        }
        else{
            imie=dbimie;
        }
        //zwierz
        let zwierz;

        let dbzwierz = await db.fetch(`zwierz_${member.id}`);

        if(!dbzwierz){
            zwierz = 'Nie podano';
        }
        else{
            zwierz=dbzwierz;
        }

      //  const joined = moment(member.joinedAt).format("DD.MM.YYYYr, HH:mm");

        let status = {
            online: "<a:online:740155620136845392> - Online",
            idle: "<a:idle:740155501723254865>> - Zaraz Wracam",
            dnd: "<a:dnd:740155488305414204> - Nie Przeszkadzać",
            offline: "<a:offline:740155637031370834> - Offline"
        };

        //const created = moment(member.user.createdAt).format("DD.MM.YYYYr, HH:mm");

        profilembed = new MessageEmbed()
            .setAuthor("Profil użytkownika: "+member.username, member.displayAvatarURL())
            .setColor('RANDOM')
            .addField('Podstawowe', ":man_detective:  Wiek: "+wiek+" \n:person_standing: Imię: "+imie+"\n:dog: Zwierzątko: "+zwierz, true)
            //.addField("Odznaki Discorda: ", odzn[odznaki], true)
            .addField('Status:', `${status[member.presence.status]}`, false)
            .setFooter('Aby ustawić swój profil wpisz '+prefix+'setprofil')
        message.channel.send(profilembed)
       // message.channel.send("t "+odzn[odznaki])

    }
}