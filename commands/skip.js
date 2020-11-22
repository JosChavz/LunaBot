const { Message } = require('discord.js');

module.exports = {
    name: `skip`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Bro... nothing is even playing lmao');
        
        message.channel.send('⏩ Skipped!');
        await client.musicplayer.stopTrack();
        // After stopping the track, will redirect to the 'end' event for the ShoukakuPlayer (this.musicplayer)
    }
}
