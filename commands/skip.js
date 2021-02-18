const { Message } = require('discord.js');

module.exports = {
    name: `skip`,
    description: "`[0-10]` Skips the current song; If given an integer, skips to that index in queue",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Bro... nothing is even playing lmao');

        // Sets the index to skip in songQueue
        index = parseInt(args[0]);
        if(index != NaN && (1 <= index <= client.songQueue.length)) client.skipTo = index - 1; 
        if(index != NaN && (1 > index || index > client.songQueue.length)) return await message.channel.send("😵 No such index!");
        
        message.channel.send('⏩ Skipped!');
        await client.musicplayer.stopTrack();
        // After stopping the track, will redirect to the 'end' event for the ShoukakuPlayer (this.musicplayer)
    }
}
