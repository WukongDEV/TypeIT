const { prefix } = require("../../zapisydb/botconfig.json");
const moment = require("moment")

module.exports = bot => {
        let l = 0;
        bot.guilds.cache.forEach(x => { l = l + x.memberCount} )

        console.log(`[${bot.user.username}] [${Math.round(bot.ws.ping)}ms] Jestem online! Domyslny prefix: [${prefix}], serwery: [${bot.guilds.cache.size}], użytkownicy: [${l}]`);
        //
      /*  const kanal = bot.channels.cache.get("706248540111896636")
        const gildie = bot.guilds.cache.size
        const nazwa = `📟  | Serwery: ${gildie}`
       // kanal.edit({ name: nazwa })
        
    
        //🔧 Tworzenie warn
        /*if (bot.ws.ping < 120) {
                bot.user.setPresence({ activity: { name: "@EndyBOT  1�71ￄ1�77 Serwy: " + bot.guilds.cache.size + "  1�71ￄ1�77 ,pomoc  1�71ￄ1�77 [" + bot.ws.ping + "]" }, status: 'online' });
        } else if (bot.ws.ping < 200) {
                bot.user.setPresence({ activity: { name: "@EndyBOT  1�71ￄ1�77 Serwy: " + bot.guilds.cache.size + "  1�71ￄ1�77 ,pomoc  1�71ￄ1�77 [" + bot.ws.ping + "]" }, status: 'idle' });
        } else if (bot.ws.ping > 400) {
                bot.user.setPresence({ activity: { name: "@EndyBOT  1�71ￄ1�77 Serwy: " + bot.guilds.cache.size + "  1�71ￄ1�77 ,pomoc  1�71ￄ1�77 [" + bot.ws.ping + "]" }, status: 'dnd' });
        }*/


       /* setInterval(function() {
                //
                const kanalkanal = bot.channels.cache.get("716974526981996584")
                const kanaly = bot.channels.cache.size
                const nazwakanals = `📟  | Kanały: ${kanaly}`
                kanalkanal.edit({ name: nazwakanals })
                //
                const kanalping = bot.channels.cache.get("716386653564043316")
                const ping = bot.ws.ping
                const pingname = `📟  | Ping: ${ping}`
                kanalping.edit({ name: pingname })
                //
                const kanaluser = bot.channels.cache.get("706248817187749903")
                const nazwakanal = `📟  | Użytkownicy: ${l}`
                kanaluser.edit({ name: nazwakanal })
        }, 300000);*/
       setInterval(function() {
                if (bot.ws.ping < 100) {
                        bot.user.setPresence({ activity: { name: `@TypeIT  | Serwerów: [${bot.guilds.cache.size}] | Ping for help` }, status: 'online' });
                } else if (bot.ws.ping < 170) {
                        bot.user.setPresence({ activity: { name: `@TypeIT  | Serwerów: [${bot.guilds.cache.size}] | Ping for help` }, status: 'idle' });
                } else if (bot.ws.ping > 300) {
                        bot.user.setPresence({ activity: { name: `@TypeIT  | Serwerów: [${bot.guilds.cache.size}] | Ping for help `}, status: 'dnd' });
                }
        }, 5000);
/*setInterval(function() {
        bot.user.setPresence({ activity: { name: `,help • @DBIT` }, status: 'online'});
    setTimeout(function() {
            bot.user.setPresence({ activity: { name: `A bota Dribble znacie?` }, status: 'idle'});
        }, 25000);
    }, 40000);
    setInterval(function() {
        bot.user.setPresence({ activity: { name: `,help • @DBIT` }, status: 'online'});
    setTimeout(function() {
            bot.user.setPresence({ activity: { name: `Dribble! Znacie go?`, type: 'WATCHING' }, status: 'idle'});
        }, 30000);
    setTimeout(function() {
            bot.user.setPresence({ activity: { name: `https://dbit-bot.ct8.pl`, type: 'WATCHING' }, status: 'idle'});
        }, 20000);
    }, 45000);*/
}
