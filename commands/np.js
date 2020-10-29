const Client = require('../structures/Client');
const { Message } = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'np',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.shoukaku.getQueue(message)) return message.channel.send('Nothing is currently playing, big dawg');

        const np = client.shoukaku.getQueue(message).nowPlaying;
        message.channel.send(`${np.title} by ${np.author}`);
    }
}