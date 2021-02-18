const { Message } = require('discord.js');
const fs = require('fs'); // File System

module.exports = {
    name: 'help',
    description: "Lists available commands!",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        var fullMessage = "__**MY COMMANDS**__\n\n";

        fs.readdir("./commands/", (err, files) => {
            if(err) console.error(err);
    
            let jsfiles = files.filter(f => f.split(".").pop() === "js");
            if(jsfiles.length <= 0) {
                console.log("No commands to load!");
                return;
            }

            jsfiles.forEach((f, i) => {
                let props = require(`./${f}`);  
                fullMessage += `**${props.name}**: ${props.description}\n`;
            });

            // send help text
            message.author.send(fullMessage);
        });
        message.reply("DM Sent! 😘");
    }

}