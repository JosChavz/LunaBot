# FCC_DiscordBotJS

#Luna Bot
A discord bot! Simply for kicks and giggles! A music bot that accepts URLs from YouTube, Spotify, Twitch, and Soundcloud. 


### Music Commands
Command | Description
------- | -----------
&play [URL|Keyword] | Will play a song when given a URL from YouTube; Can search up on YouTube if link is not provided. 
&podcast [Artist] | Will give options to play your favorite podcast. Still in the works! 
&volume [0-100] | Raise/Lower the music! *Current volume is always 50
&pause | To pause
&resume | Resumes music
&np | Shows what is currently playing
&queue | Prints out the current queue 
&skip [0-10] | Skips the current song; If given an integer, skips to that index in queue
&disconnect | Disconnects from voice chat
&clear | Clears the queue

#### Resources I used
Introduction Tutorial to make a simple bot: [FreeCodeCamp YouTube](https://www.youtube.com/watch?v=8o25pRbXdFw). 
Introduction to MusicBot: [Create a Discord.JS music bot!](https://youtu.be/LeH2R-UIx0s) * Although I did follow this at first, I only used the basics of it
Refence for emojis??? [Unicode List](https://unicode.org/emoji/charts/full-emoji-list.html)
For the Spotify URL, I had to use [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track).
Server runs on Java thanks to [Lavalink](https://github.com/Frederikam/Lavalink).
Lavalink Wrapper is provided by [Shoukaku](https://github.com/Deivu/Shoukaku).
Podcast API done by [podcast-index-api](https://github.com/comster/podcast-index-api).
The APIs were used to get the URLs or information to send in to Lavalink. 🎶