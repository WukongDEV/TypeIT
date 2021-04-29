const { MessageEmbed } = require("discord.js")
const { green_light } = require("../../colours.json")
const { prefix } = require("../../zapisydb/botconfig.json")

module.exports = (bot, member) => {

    joincs = require("../../zapisydb/joinc.json");
    joinms = require("../../zapisydb/joinm.json");
    try {
    let joinc = joincs[member.guild.id].joinc;
    let joinm = joinms[member.guild.id].joinm;

        let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true });

        if(member.user.bot) return;

        if(joinc === "0") return;
        //if(isNaN(joinm)) return;

        let replaced = joinm.replace("%tag", member.user.discriminator).replace("%nick", member.user.username).replace("%member", member).replace("%serverMember", member.guild.members.cache.filter((member) => !member.user.bot).size).replace("%serverName", member.guild.name);

        let powembed = new MessageEmbed()
        .setAuthor("Nowy Użytkownik!")
        .setThumbnail(avatar)
        .setColor(green_light)
        .setDescription(replaced)
        .setTimestamp()
        .setFooter(member.guild.name, member.guild.iconURL({ size: 1024, dynamic: true }))   

        bot.channels.cache.get(joinc).send(powembed)
        } catch(err) {
        return;
    }
}