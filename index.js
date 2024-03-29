const { Client, Intents } = require('discord.js');
var bot_token = require('./bot_token');
const MusicClient = require('./structures/Client.js');
const musicbot = new MusicClient();
const fetch = require("cross-fetch");

(async ()=> {
    const url = "https://accounts.spotify.com/api/token";
    
    const options = {
        method: "POST",
        body: `grant_type=client_credentials&client_id=${bot_token.CLIENT_ID}&client_secret=${bot_token.CLIENT_SECRET}`,
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        }
    };

    // Retrieves a JSON object from the given Spotify URL
    await fetch(url, options)
    .then( (res, err) => {
        if(err) console.log(err);
        return res.json()
    } )
    .then(data => bot_token.SPOTIFY_TOKEN = data['access_token']);
    //.then(()=> console.log(jsonObj));


    musicbot.start(bot_token.TOKEN, './commands');
})();
