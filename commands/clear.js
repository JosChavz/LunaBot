const Client = require('../structures/Client');
const { Message } = require('discord.js');

module.exports = {
    name: `clear`,
    /**
     * @param {ShoukakuPlayer} musicplayer
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(musicplayer, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!musicplayer.getQueue(message)) return message.channel.send('Bro... nothing is even playing lmao');

        await musicplayer.stop(message);
        message.channel.send(`Stopped.`);
    }
}