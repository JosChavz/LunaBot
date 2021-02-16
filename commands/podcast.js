const { Message, User } = require('discord.js');
const api = require('podcast-index-api')("RWFKUK2Q8HNQYHLQBDYW", "bEeNh798BwSyZ84BtKdrJa5e8c8x#pXFvwPTqC7W");

// NOTE: I still need to add in a NEXT, PREVIOUS option for the podcasts. Any potential errors?
// Also, a great way to delete the bot's message after sending the next embedded message?? [prevMess, podcastID] something likethat?

module.exports = {
    name: `podcast`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send("Please add in a title name.")

        // A complete list of search query
        const terms = await api.searchByTerm(args[0]);
        
        const podcastID = await trimArray(terms, client, message, true);

        // Sends report of episodes
        const episodes = await api.episodesByFeedId(podcastID);

        const podcastURL = await trimArray(episodes, client, message, false);
        episodeURL = [podcastURL];

        playCommand = client.getCommand('play');
        playCommand.run(client, message, episodeURL).catch(console.error);
    }
};

// forID: true => returns ID of podcast; false => returns URL for podcast episode
async function trimArray(terms, client, message, forID) {
    var choice = null;
    let contentList = (forID)? terms.feeds: terms.items;

    // Only cut down to 6 
    const options = (terms.count > 6) ? contentList.slice(0, 6): contentList;
    // Podcast titles from the search query
    const list = `${options.map((podcast, i) => {
        return `**${i+1}** => *${podcast.title}*`
    }).join('\n')}`;

    let msg = await message.channel.send(
        client.embed({
            title: "Podcast List:",
            description: list
        }, message)
    );

    emojiList = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];

    // Message is reacted to its respected choices for user input
    for(i = 0; i < options.length; i++){
        msg.react(emojiList[i])
            .catch(console.error);
    }

    const filter = (reaction, user) => emojiList.includes(reaction.emoji.name) && user.id === message.author.id;

    // Waits 30s for an emoji reaction from user
    await msg.awaitReactions(filter, {max: 1, time: 30000, errors: ['time']})
    .then(collected => {
        emojiOption = collected.keyArray()[0];
        if(1 <= emojiOption <= 6) {
            choice = (forID) ? options[parseInt(emojiOption) - 1].id : options[parseInt(emojiOption) - 1].enclosureUrl;
        }
    })
    .catch(() => {
        msg.delete();
        message.reply('Terminated action. 🤖 No options chosen. You\'re such a bot 💀');
    });

    return choice;
}