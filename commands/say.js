const { Message } = require('discord.js');

module.exports = {
    name: 'say',
    description: "Repeats message",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        // If there are no text to repeat
        if(!args[0]) {
            message.author.send("🤫 Psst... add something after the command!");
            return;
        }

        message.channel.send(args.join(" "));
        message.delete();
    }

}