const { Message } = require('discord.js');

module.exports = {
    name: 'play',
    timeOut: () => {
        console.log('Is in timeout...');
    },
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('Bro, tf you want me to play???? omg ur capping rn!!!');
        else if(!message.member.voice.channel) return message.channel.send('Are you really not in a VC? lmao tf?');

        const node = client.shoukaku.getNode(); // Gets the Shoukaku Socket
        var data = null;

        // If it is a URL, it will search it; Otherwise, search the keywords into Youtube
        if(args.join(" ").includes("http")) data = await node.rest.resolve(args.join(" ")); 
        else data = await node.rest.resolve(args.join(" "), "youtube");
        if (!data) return;

        // Initializes the music player
        if (!client.musicplayer) {
            client.musicplayer = await node.joinVoiceChannel({
                guildID: message.guild.id,
                voiceChannelID: message.member.voice.channelID
            }); 
            client.musicplayer.setVolume(50);
            // EVENT: When an error is thrown
            client.musicplayer.on('error', (error) => {
                console.error(error);
                client.musicplayer.disconnect();
            });
            // EVENT: Song that has finished will pop from the current queue
            client.musicplayer.on('end', (event) => {
                console.log('Song has ended! Finished song: ' + client.nowPlaying.info.title);
                client.nowPlaying = client.songQueue.shift();

                if(!client.nowPlaying) {
                    client.clearMusicCache();
                    return message.channel.send("👋 Adios!");
                }

                // Assuming there is a next song in the queue
                console.log('Next song is: ' + client.nowPlaying.info.title);
                client.musicplayer.playTrack(client.nowPlaying);
                message.channel.send("🎵 ***Now Playing:*** " + client.nowPlaying.info.title);
            });
            // EVENT: When a bot leaves the voice chat, all instances regarding the music will become null
            client.musicplayer.on('nodeDisconnect', (event) => {
                console.log('is in here when disconnected');
                client.musicplayer = null;
                client.nowPlaying = null;
                client.songQueue = [];
            });
            client.musicplayer.on('closed', (event) => {
                message.channel.send('😞 I was kicked out!');
                client.clearMusicCache();
            })
        }
        //for (const event of ['closed', 'nodeDisconnect']) player.on(event, () => client.musicplayer.disconnect());
        data = data.tracks.shift();
        
        client.songQueue.push(data);

        // In case musicplayer is not playing anything at the moment
        if(client.musicplayer.track == null || client.musicplayer.track == "") {
            client.nowPlaying = client.songQueue.pop();
            if(!client.nowPlaying) return message.channel.send('There was an error, H.');
            console.log(client.nowPlaying.info.title);
            client.musicplayer.playTrack(client.nowPlaying); 
            message.channel.send("**🎵 Now Playing: **`" + client.nowPlaying.info.title + "`!");
        } 
        else await message.channel.send("📝 Added to the queue: " + data.info.title);
    }
}