const { Message } = require('discord.js');

module.exports = {
    name: 'np',
    description: "Shows what is currently playing",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');
        if(!client.nowPlaying) return message.channel.send('Nothing is currently playing!');

        const np = client.nowPlaying.info;
        message.channel.send(`***Currently playing:*** 🎶 \`${np.title} by ${np.author}\` 🎶`);
    }
}