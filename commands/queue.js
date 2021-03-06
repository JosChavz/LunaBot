const { Message } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Prints out the current queue for music & podcast.',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Nothing is currently playing!');

        if(client.songQueue.length == 0) return message.channel.send("🙈 Nothing here!");
        else {
            list = `${client.songQueue.slice(0, 10).map( (song, i) => {
                return `**${i+1}** - ${song.info.title} by ${song.info.author}`
            } ).join('\n')}${client.songQueue.length > 10 ? `\nAnd ${client.songQueue.length - 10} songs more...` : ''}`;

            message.channel.send(
                client.embed(
                    {
                        title: 'Queue:',
                        description: list
                    },
                    message
                )
            );
        } 
    }
}