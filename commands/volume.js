const { Message } = require('discord.js');

module.exports = {
    name: 'volume',
    description: "`[0-100]` Raise/Lower the music! *Current volume is always 50",
    /**
     * @param {Client} music
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('Bro, tf you want me to play???? omg ur capping rn!!!');
        else if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        else if(isNaN(args[0])) return message.channel.send("That's not a number! 😠💢🗯");
        const currentVolume = client.musicplayer.volume;
        const newVolume = Number(args[0]);

        // Will only change if value is different
        if(currentVolume != newVolume) await client.musicplayer.setVolume(newVolume);
        else return message.channel.send('👴 Nothing has changed...');

        if(newVolume == 0) return message.channel.send(`🔈 Bot is muted to 0... 🤐`);
        else return message.channel.send(`
            ${(newVolume > currentVolume)? '🔊 Raised ': '🔉 Lowered '} the volume to ${newVolume}${(newVolume > currentVolume)? '! 🤪' : '... 🤫'}
        `);
    }
}