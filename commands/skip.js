const Client = require('../structures/Client');
const { Message } = require('discord.js');
const ms = require('ms');
module.exports = {
    name: `skip`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.shoukaku.getQueue(message)) return message.channel.send('Bro... nothing is even playing lmao');
        
        await client.shoukaku.skip(message);
        message.channel.send('Skipped.');
    }
}