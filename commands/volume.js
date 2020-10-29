const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: 'volume',
    /**
     * @param {Client} music
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(music, client, message, args) => {
        if(!args[0]) return message.channel.send('Bro, tf you want me to play???? omg ur capping rn!!!');
        else if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        
        await music.setVolume(Number(args[0]));
        message.channel.send('Done!');
    }
}