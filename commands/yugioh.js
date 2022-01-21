const { Message } = require('discord.js');
const fetch = require("cross-fetch");

module.exports = {
    name: 'yugioh',
    description: "Outputs description of a yugioh card, given a name.",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.reply("Please include the card's name! 🃏")
        yugi_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + args.join(" "); 
        card_data = null;

        await fetch(yugi_url)
        .then(res => {return res.json()})
        .then(data => card_data = data)

        //console.log(card_data)
        //console.log(card_data.data[0].card_images)

        if(card_data.hasOwnProperty("error")) return message.reply("Card not found! 😪")
        await message.channel.send(card_data.data[0].name + "'s Card", {files: [
            card_data.data[0].card_images[0].image_url
        ]});
    }

}
