# FCC_DiscordBotJS

#Luna Bot
A discord bot! Simply for kicks and giggles! A music bot that accepts URLs from YouTube, Spotify, Twitch, and Soundcloud. Plays podcasts... and the yugioh is for myself...


### Music Commands
Command | Description
------- | -----------
&play [URL|Keyword] | Will play a song when given a URL from YouTube; Can search up on YouTube if link is not provided. 
&podcast [Artist] | Will give options to play your favorite podcast. Still in the works! 
&volume [0-100] | Raise/Lower the music! *Current volume is always 50
&pause | To pause current music
&resume | Resumes music
&np | Shows what is currently playing
&queue | Prints out the current queue 
&skip [0-10] | Skips the current song; If given an integer, skips to that index in queue
&disconnect | Disconnects the bot from voice chat
&clear | Clears the queue

### Other Commands
Command | Description
------- | -----------
&say [Phrase] | Will repeat the phrase that you passed
&yugioh [Name] | Outputs an image of the Yugioh card mentioned. Not case-sensitive, but strict in name

#### Resources I used
Introduction Tutorial to make a simple bot: [FreeCodeCamp YouTube](https://www.youtube.com/watch?v=8o25pRbXdFw).\
Introduction to MusicBot: [Create a Discord.JS music bot!](https://youtu.be/LeH2R-UIx0s) * Although I did follow this at first, I only used the basics of it.<br\>
Refence for emojis??? [Unicode List](https://unicode.org/emoji/charts/full-emoji-list.html)<br\>
For the Spotify URL, I had to use [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track).<br\>
Server runs on Java thanks to [Lavalink](https://github.com/Frederikam/Lavalink).<br\>
Lavalink Wrapper is provided by [Shoukaku](https://github.com/Deivu/Shoukaku).<br\>
Podcast API done by [podcast-index-api](https://github.com/comster/podcast-index-api).<br\>
The APIs were used to get the URLs or information to send in to Lavalink. 🎶<br\>
As for the Yugioh API, [yugioh api](https://db.ygoprodeck.com/api-guide/)<br\>

#### NPMs Used
discord.js<br\>
dotenv<br\>
mariadb<br\>
mysql<br\>
node-fetch<br\>
nodemon<br\>
podcast-index-api<br\>
shoukaku<br\>
sqlite3<br\>