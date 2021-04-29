const { MessageEmbed } = require("discord.js")
const mysql = require("mysql");
const { red_light } = require("../../colours.json")
const { prefix } = require("../../zapisydb/botconfig.json")

module.exports = async (bot, member) => {

    leavecs = require("../../zapisydb/leavec.json");
    leavems = require("../../zapisydb/leavem.json");
    try {
    let leavec = leavecs[member.guild.id].leavec;
    let leavem = leavems[member.guild.id].leavem;

        let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true });

        if(member.user.bot) return;
        if(leavec === "0") return;
        //if(isNaN(leavec)) return;
        //let replaced = rows[0].leavem.replace("&nick", member.user.username);

        let replaced = leavem.replace("%tag", member.user.discriminator).replace("%nick", member.user.username).replace("%member", member).replace("%serverMember", member.guild.members.cache.filter((member) => !member.user.bot).size).replace("%serverName", member.guild.name);
        
        let powembed = new MessageEmbed()
        .setAuthor("Użytkownik wyszedł ")
        .setThumbnail(avatar)
        .setColor(red_light)
        .setDescription(replaced)
        .setTimestamp()
        .setFooter(member.guild.name, member.guild.iconURL({ size: 1024, dynamic: true }))
        
        bot.channels.cache.get(leavec).send(powembed)
        } catch(err) {
        return;
        }
};