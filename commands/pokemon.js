const { Message } = require('discord.js');

module.exports = {
    name: `pokemon`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args[0]) message.channel.send('Welcome to Pokemon! +pokedex');
        console.log(typeof args + " " + args[0])
        switch(args[0]) {
            case 'pokedex':
                const msg = await message.channel.send('🔃 Gathering data...');
                const avalNames = await client.runQuery(`SELECT name FROM aval_poke`);
                await msg.edit(`**Available Pokemon**\n${avalNames.slice(0, 10).map( (pokemon, i) => {
                    return `${i+1}. ${pokemon.name}`;
                }).join('\n')}`);
            break;
            default:
                message.channel.send('not a command!');
        }
    }
};