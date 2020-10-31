const { Message } = require('discord.js');

module.exports = {
    name: 'queue',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Nothing is currently playing, big dawg');

        console.log('I am in queue... Song that is playing is: ' + client.nowPlaying.info.title);

        message.channel.send(`Now playing: ${client.nowPlaying.info.title} by ${client.nowPlaying.info.author}\n${client.songQueue.slice(0, 10).map( (song, i) => {
            return `${i+1} - ${song.info.title} by ${song.info.author}`
        } ).join('\n')}${client.songQueue.length > 10 ? `\nAnd ${client.songQueue.length - 10} songs more...` : ''}`);
    }
}