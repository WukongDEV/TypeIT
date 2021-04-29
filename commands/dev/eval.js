const { ownerid, prefix } = require("../../zapisydb/botconfig.json");
const { MessageEmbed } = require("discord.js")
const { inspect } = require("util")

module.exports = {
    config: {
        name: "eval",
        description: "Evaluates code",
        accessableby: "Bot Owner",
        type: "",
        usage: "eval <input>"
    },
    run: async (bot, message, args) => {
        if(message.author.id == "692734175324799016") {
            try {
                let toEval = args.join(" ")
                let evaluated = inspect(eval(toEval, { depth: 0 }));

                if (!toEval) {
                    return message.channel.send(`Wpisz coś oprócz: \`pustki\``);
                } else {
                    let hrStart = process.hrtime()
                    let hrDiff;
                    hrDiff = process.hrtime(hrStart);
                    const embed = new MessageEmbed()
                        .setTitle("Eval")
                        .addField("argument:", `\`\`\`${args.join(" ")}\`\`\``)
                        .addField("odpowiedz:", `*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                    return message.channel.send(embed)
                }

            } catch (e) {
                return message.channel.send(`Błąd: \`${e.message}\``);
            }

        }
        if(message.author.id == "707531107788390411") {
            try {
                let toEval = args.join(" ")
                let evaluated = inspect(eval(toEval, { depth: 0 }));

                if (!toEval) {
                    return message.channel.send(`Wpisz coś oprócz: \`pustki\``);
                } else {
                    let hrStart = process.hrtime()
                    let hrDiff;
                    hrDiff = process.hrtime(hrStart);
                    const embed = new MessageEmbed()
                        .setTitle("Eval")
                        .addField("argument:", `\`\`\`${args.join(" ")}\`\`\``)
                        .addField("odpowiedz:", `*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                    return message.channel.send(embed)
                }

            } catch (e) {
                return message.channel.send(`Błąd: \`${e.message}\``);
            }

        }


        else {
            return message.reply("Nie wykryłem twojego ID w mojej bazie dla developerów. Jeśli jesteś developerem bota, skontaktuj się z `Jamess#2343`").then(msg => msg.delete(5000))
        }
    }
}