const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    config: {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "rps"
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor("#ffffff")
            .setDescription("Wybierz reakcję aby rozpocząć grę!")
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll()

            embed.setDescription("")
            embed.addField(result, `${message.author.username} - ${reacted} vs DBIT - ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Wygrałeś!";
            } else if (me === clientChosen) {
                return "Remis!";
            } else {
                return "Przegrałeś!";
            }
        }
    }
}