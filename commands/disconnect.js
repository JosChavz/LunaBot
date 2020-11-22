const { Message } = require('discord.js');

module.exports = {
    name: `disconnect`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        
        message.channel.send('✌ Left voice channel!');
        client.clearMusicCache();
    }
}