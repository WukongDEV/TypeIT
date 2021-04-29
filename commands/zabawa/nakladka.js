const cnvs = require('canvas');
const { MessageAttachment } = require("discord.js")
const { Canvas } = require("canvas-constructor");
const { MessageEmbed } = require("discord.js");
module.exports = { 
    config: {
        name: "nakladka",
        description: "Bot odpowiada na pytania.",
        usage: " ",
        category: "zabawa",
        accessableby: "Wszyscy, użytkownicy",
        aliases: ["nk", "av", "nakladka"]
    },
    run: async (bot, message, args) => {

        let target = message.mentions.users.first() || message.author
        
        const avatar = await cnvs.loadImage(target.displayAvatarURL({size: 1024, dynamic: true, format: "jpg"}));
        const plate = await cnvs.loadImage("images/staffy-nakladka.png");
        const canvas = new Canvas(256, 256)
        .addCircularImage(avatar, 128, 128, 128, 128)
        .addImage(plate, 0, 0, 256, 256)
        const attachment = new MessageAttachment(canvas.toBuffer(), 'nakladka-staffy.png');
        message.channel.send("Nakładka jest generowana...").then(message.channel.send("Wygenerowano nakładkę!"))
        message.channel.send(attachment);

}
}