module.exports = (bot) => {
    let prompt = process.openStdin()
    /*prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)*/
            bot.channels.get("716958769040457748").send(prompt.join(" "));
    }