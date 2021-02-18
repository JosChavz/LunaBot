const { Message } = require('discord.js');

module.exports = {
    name: `ping`,
    description: "A ping of myself? I don't know... 😋",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        let msg = await message.channel.send('Pinging...');
        await msg.edit(client.embed( {
            description: `WebSocket: ${client.ws.ping}\nEdit: ${msg.createdAt - message.createdAt}`
        }, message));
        await msg.edit("Ping done!");
    }
};
