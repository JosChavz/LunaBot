const { Message } = require('discord.js');

module.exports = {
    name: 'pause',
    description: "To pause current music",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Nothing is currently playing, big dawg');
        if(client.musicplayer.paused) return message.channel.send('Already paused, you little dummy 😏'); 

        message.channel.send("✋🏽 Paused!~");
        
        client.musicplayer.setPaused(true);
    }
}