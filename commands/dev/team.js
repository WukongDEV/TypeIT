const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "ekipa",
        description: "reloaduje bota",
        usage: "botreload",
        category: "dev",
        accessableby: "Każdy",
    },
    run: async (bot, message, args) => {
        if(message.author.id == "670753041552506900"){
            let ash = bot.users.cache.get("692734175324799016")
            let noisak = bot.users.cache.get("707531107788390411")

            function status(user) {
                var status = "";
                return status = (user.presence.status === "dnd" ? "<a:dnd:740155488305414204>" : user.presence.status === "online" ? "<a:online:740155620136845392>" : user.presence.status === "idle" ? "<a:idle:740155501723254865>" : user.presence.status === ("offline") ? "<a:offline:740155637031370834>" : "");
            }

            const embed = new MessageEmbed()
            .setTitle("Zarząd TypeIT")
            .addField("**《👑》Owners**:", `\n• ${ash.tag} - ${status(ash)}\n• ${noisak.tag} - ${status(noisak)}`)
            .addfield("**《🔎》Opiekunowie**:", `\n• Brak \n • Brak \n• Brak`)
            .addField("**《🛡️》Supporterzy**:", `\n• Brak\n• Brak\n• Brak`)
            return message.channel.send(embed).then(msgs => {
                setInterval(function () {
                    const embed1 = new MessageEmbed()
                    .setTitle("Zarząd TypeIT")
                    .addField("**《👑》Owners**:", `\n• ${ash.tag} - ${status(ash)}\n• ${noisak.tag} - ${status(noisak)}`)
                    .addfield("**《🔎》Opiekunowie**:", `\n• Brak \n • Brak \n• Brak`)
                    .addField("**《🛡️》Supporterzy**:", `\n• Brak\n• Brak\n• Brak`)
                    msgs.edit(embed1)

                }, 0)
            })
        }




        }

}