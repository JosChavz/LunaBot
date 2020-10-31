const { Message } = require('discord.js');

module.exports = {
    name: 'resume',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Nothing is currently playing, big dawg');
        if(!client.musicplayer.paused) return message.channel.send('Already playing, you little dummy 😏'); 
        
        client.musicplayer.setPaused(false);
    }
}