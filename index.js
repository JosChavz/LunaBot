const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require('./bot_token');
const MusicClient = require('./structures/Client.js');
const musicbot = new MusicClient();

musicbot.start(TOKEN, './commands');