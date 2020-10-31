const { Message } = require('discord.js');

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

        // Initializes the music player
        if (!client.musicplayer) {
            client.musicplayer = await node.joinVoiceChannel({
                guildID: message.guild.id,
                voiceChannelID: message.member.voice.channelID
            }); 
            client.musicplayer.on('error', (error) => {
                console.error(error);
                player.disconnect();
            });
            // EVENT: Song that has finished will pop from the current queue
            client.musicplayer.on('end', (event) => {
                console.log('Song has ended! Finished song: ' + client.nowPlaying.info.title);
                client.nowPlaying = client.songQueue.shift();
                if(!client.nowPlaying) return message.channel.send("That's it for today folks!");

                // Assuming there is a next song in the queue
                console.log('Next song is: ' + client.nowPlaying.info.title);
                client.musicplayer.playTrack(client.nowPlaying);
                message.channel.send("Now Playing: " + client.nowPlaying.info.title);
            });
        }
        //for (const event of ['closed', 'nodeDisconnect']) player.on(event, () => player.disconnect());
        data = data.tracks.shift();
        
        client.songQueue.push(data);

        // In case musicplayer is not playing anything at the moment
        if(client.musicplayer.track == null || client.musicplayer.track == "") {
            client.nowPlaying = client.songQueue.pop();
            if(!client.nowPlaying) return message.channel.send('There was an error, H.');
            console.log(client.nowPlaying.info.title);
            client.musicplayer.playTrack(client.nowPlaying); 
            message.channel.send("Now Playing: " + client.nowPlaying.info.title);
        } 
        else await message.channel.send("Added to the queue: " + data.info.title);
    }
}