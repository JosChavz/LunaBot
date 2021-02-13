const { Message } = require('discord.js');

module.exports = {
    name: `clear`,
    /**
     * @param {ShoukakuPlayer} musicplayer
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Bro... nothing is even playing lmao');

        client.songQueue = [];
        return message.channel.send("Queue cleared! 💥");
    }
}