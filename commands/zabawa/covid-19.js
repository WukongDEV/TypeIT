const { MessageEmbed } = require('discord.js');
const superagent = require('superagent')
const { red_light } = require("../../colours.json")
//const superagent = require("superagent");
//const { ucfirst } = require("js-helpers")

module.exports = {
    config: {
        name: "covid-19",
        description: "Wyświetla informacje na temat koronawirusa",
        usage: "covid",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownik",
        aliases: ["covid"]
    },
    
    run: async (client, message, args, level, prefix) => {
      if (args[0]) {
      kraj = args[0].toUpperCase();

      lista = ["BD", "BE", "USA", "BF", "BG", "BA", "BB", "WF", "BL", "BM", "BN", "BO", "BH", "BI", "BJ", "BT", "JM", "BV", "BW", "WS", "BQ", "BR", "BS", "JE", "BY", "BZ", "RU", "RW", "RS", "TL", "RE", "TM", "TJ", "RO", "TK", "GW", "GU", "GT", "GS", "GR", "GQ", "GP", "JP", "GY", "GG", "GF", "GE", "GD", "GB", "GA", "SV", "GN", "GM", "GL", "GI", "GH", "OM", "TN", "JO", "HR", "HT", "HU", "HK", "HN", "HM", "VE", "PR", "PS", "PW", "PT", "SJ", "PY", "IQ", "PA", "PF", "PG", "PE", "PK", "PH", "PN", "PL", "PM", "ZM", "EH", "EE", "EG", "ZA", "EC", "IT", "VN", "SB", "ET", "SO", "ZW", "SA", "ES", "ER", "ME", "MD", "MG", "MF", "MA", "MC", "UZ", "MM", "ML", "MO", "MN", "MH", "MK", "MU", "MT", "MW", "MV", "MQ", "MP", "MS", "MR", "IM", "UG", "TZ", "MY", "MX", "IL", "FR", "IO", "SH", "FI", "FJ", "FK", "FM", "FO", "NI", "NL", "NO", "NA", "VU", "NC", "NE", "NF", "NG", "NZ", "NP", "NR", "NU", "CK", "XK", "CI", "CH", "CO", "CN", "CM", "CL", "CC", "CA", "CG", "CF", "CD", "CZ", "CY", "CX", "CR", "CW", "CV", "CU", "SZ", "SY", "SX", "KG", "KE", "SS", "SR", "KI", "KH", "KN", "KM", "ST", "SK", "KR", "SI", "KP", "KW", "SN", "SM", "SL", "SC", "KZ", "KY", "SG", "SE", "SD", "DO", "DM", "DJ", "DK", "VG", "DE", "YE", "DZ", "US", "UY", "YT", "UM", "LB", "LC", "LA", "TV", "TW", "TT", "TR", "LK", "LI", "LV", "TO", "LT", "LU", "LR", "LS", "TH", "TF", "TG", "TD", "TC", "LY", "VA", "VC", "AE", "AD", "AG", "AF", "AI", "VI", "IS", "IR", "AM", "AL", "AO", "AQ", "AS", "AR", "AU", "AT", "AW", "IN", "AX", "AZ", "IE", "ID", "UA", "QA", "MZ"];

      }

      let { body } = await superagent.get(`https://disease.sh/v2/all?yesterday=true`);
    
      if (!args[0]) {
        const embedd = new MessageEmbed()
        .setColor("#00e012")
        .setThumbnail(`https://i.imgur.com/gqy3gfY.png`)
        .setTitle("COVID-19 INFORMACJE - Global", true)
        .addField("**WSZYSTKIE ZARAŻENIA:**", "Liczba osób: " + body.cases, true)
        .addField("**ZARAŻENIA DZIŚ:**", "Liczba osób: " + body.todayCases, true)
        .addField("**WYLECZENI:**", "Liczba osób: " + body.recovered, true)
        .addField("**KRYTYCZNE ZARAŻENIA:**", "Liczba osób: " + body.critical, true)
        .addField("**WSZYSTKIE ZGONY:**", "Liczba osób: " + body.deaths, true)
        .addField("**ZGONY DZIŚ:**", "Liczba osób: " + body.todayDeaths, true)
        .addField("**ZAKTUALIZOWANO:**", `${body.updated} razy`, true)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        message.channel.send(embedd);
      }
      if(args[0] == "lista") {
        const embds = new MessageEmbed()
        .setColor("#00e012")
        .setThumbnail(`https://i.imgur.com/gqy3gfY.png`)
        .setTitle("COVID-19 Lista kodów krajów")
        .setDescription(lista.join(", "))
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
      message.channel.send(embds)
      }
      if (args[0]) {
        if(lista.includes(kraj)) {
          let { body } = await superagent.get(`https://disease.sh/v2/countries/${kraj}?yesterday=true&strict=false`);
        
          
          const embedpl = new MessageEmbed()
            .setColor("#00e012")
            .setThumbnail(body.countryInfo.flag)
            .setTitle("COVID-19 INFORMACJE - " + body.country)
            .addField("**WSZYSTKIE ZARAŻENIA:**", "Liczba osób: " + body.cases, true)
            .addField("**ZARAŻENIA DZIŚ:**", "Liczba osób: " + body.todayCases, true)
            .addField("**WYLECZENI:**", "Liczba osób: " + body.recovered, true)
            .addField("**KRYTYCZNE ZARAŻENIA:**", "Liczba osób: " + body.critical, true)
            .addField("**WSZYSTKIE ZGONY:**", "Liczba osób: " + body.deaths, true)
            .addField("**ZGONY DZIŚ:**", "Liczba osób: " + body.todayDeaths, true)
            .addField("**KONTYNENT**", body.continent, true)
            .addField("**ZAKTUALIZOWANO:**", `${body.updated} razy`, true)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            message.channel.send(embedpl);
        }else {
          message.delete({ timeout: 1000 })
          message.channel.send("Podany kod nie isntnieje").then(m => m.delete({ timeout: 1000 }));
        }
      }

    }
  }
