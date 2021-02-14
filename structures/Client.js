const { clear } = require('console');
const { Collection, Client, MessageEmbed, Message } = require('discord.js');
const { Shoukaku, ShoukakuPlayer } = require('shoukaku');
const { APPLICATION_CONFIG } = require('../bot_token'); 
const Database = require('./Database');

const LavalinkServer = [{ 
    name: APPLICATION_CONFIG.name, 
    host: APPLICATION_CONFIG.host, 
    port: APPLICATION_CONFIG.port, 
    auth: APPLICATION_CONFIG.auth 
}];

const ShoukakuOptions = { 
    moveOnDisconnect: false, 
    resumable: false, 
    resumableTimeout: 300, 
    reconnectTries: 2, 
    restTimeout: 5000 
};

class MusicClient extends Client {

    constructor() {
        super();
        this.commands = new Collection();
        this.discord = require('discord.js');
        this.path = require('path');
        this.fs = require('fs'); // File System
        this.shoukaku = new Shoukaku(this, LavalinkServer, ShoukakuOptions);
	this.shoukaku.on('error', console.error);
        this.musicplayer = null;
        this.nowPlaying = null;
        this.songQueue = [];
        this.skipTo = null;
    }

    /**
     * Initializes the available commands in Collection by
     * iterating the pathToDir location where all commands 
     * reside.
     * @param {String} pathToDir 
     */
    commandHandler(pathToDir) {
        this.fs.readdirSync( this.path.normalize(pathToDir) )
            .map((commandFileName) => {
                const CommandFile = require( this.path.join(__dirname, `..`, pathToDir, commandFileName) );
                this.commands.set(CommandFile.name, CommandFile);
            });
    };
    
    /**
     * Returns whether the command passed by user exists
     * or not
     * @param {String} cmd 
     */
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false;
    };

    async start(token, path) {
        this.commandHandler(path);
        this.login(token);
        this.on('ready', ()=> {
            console.log(`I'm now online!`);
        });
        this.prefix = '~';
        this.on('message', async(message) => {
            if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(this.prefix)) return;

            const [cmd, ...args] = message.content.slice(this.prefix.length).trim().split(/ +/g);
            const command = this.getCommand(cmd.toLowerCase());
            if(!command) return message.channel.send('Command not found, baaaka!!!!');

            command.run(this, message, args).catch(console.error);
        });
    };
    /**
     * @param {MessageEmbed} data
     * @param {Message} message
     */
    embed(data, message) {
        return new MessageEmbed({...data, color: 'Random'}).setFooter(message.author.tag, message.author
            .displayAvatarURL({ 
                dynamic: true,
                format: 'png'
            }) );
    }

    /**
     * Will clear anything regarding the music feature, including the musicplayer
     */
    clearMusicCache() {
        this.musicplayer.disconnect();
        this.musicplayer = null;
        this.nowPlaying = null;
        this.songQueue = [];
    }

    async runQuery(query) {
        const db = new Database();
        let results = "";
        //db.query(`INSERT INTO aval_poke (name, id, hp, attack, defense) VALUES ('Bulbasaur', '1', '45', '49', 49)`);
        await db.query(query)
            .then(success => {
                results = success;
            })
            .catch(err => console.log(err));
        db.close();
        return results;
    };
};
module.exports = MusicClient;
