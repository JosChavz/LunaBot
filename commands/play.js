const Client = require('../structures/Client');
const { Message } = require('discord.js');
const songQueue = require("../structures/Queue");

module.exports = {
    name: 'play',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('Bro, tf you want me to play???? omg ur capping rn!!!');
        else if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');

        const node = client.shoukaku.getNode(); // Gets the Shoukaku Socket
        let data = await node.rest.resolve(args.join(" "), 'youtube'); // Returns an array of possible queries
        if (!data) return;

        const player = await node.joinVoiceChannel({
            guildID: message.guild.id,
            voiceChannelID: message.member.voice.channelID
        }); 
        player.on('error', (error) => {
            console.error(error);
            player.disconnect();
        });
        // Song that has finished will pop from the current queue
        player.on('end', (event) => {
            songQueue.pop();
        });
        for (const event of ['closed', 'nodeDisconnect']) player.on(event, () => player.disconnect());
        data = data.tracks.shift();
        
        songQueue.push(data);

        // I need to create a map that stores in data
        await player.playTrack(data); 
        await message.channel.send("Now Playing: " + data.info.title);

        return player;

        //const res = await client.music.searchAndPlay(client.music.shoukaku.getNode(), args.join(" "), 'youtube', message);

        //message.channel.send(res.isPlaylist ? `Added to the playlist ${res.playlistName} to the queue, which has ${res.tracks.length} songs` : `Loaded ${res.songInfo.title} by ${res.songInfo.author}`);
    }
}