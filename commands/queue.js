const Client = require('../structures/Client');
const { Message } = require('discord.js');
const songQueue = require("../structures/Queue");

module.exports = {
    name: 'queue',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(musicPlayer, client, message, args) => {

        console.log(songQueue);

        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!songQueue) return message.channel.send('Nothing is currently playing, big dawg');

        const np = songQueue[0].info;

        message.channel.send(`Now playing: ${np.title} by ${np.author}\n${songQueue.slice(0, 10).map( (song, i) => {
            return `${i+1} - ${song.info.title} by ${song.info.author}`
        } ).join('\n')}${songQueue.length > 10 ? `\nAnd ${songQueue.length - 10} songs more...` : ''}`);

        /*const np = client.shoukaku.getQueue(message).nowPlaying;
        const queue = client.shoukaku.getQueue(message).queue;
        message.channel.send(`Now playing: ${np.title} by ${np.author}\n${queue.slice(0, 10).map( (song, i) => {
            return `${i+1} - ${song.info.title} by ${song.info.author}`
        } ).join('\n')}${queue.length > 10 ? `\nAnd ${queue.length - 10} songs more...` : ''}`);*/
    }
}