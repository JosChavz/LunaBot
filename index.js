const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN } = require('./bot_token');
const MusicClient = require('./structures/Client.js');
const musicbot = new MusicClient();

musicbot.start(TOKEN, './commands');

//const MusicClient = require('./structures/Client');
//const musicbot = new MusicClient();
//musicbot.start(TOKEN, './commands');

/* 
client.on('ready', ()=> {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity('or something...', {type: "COMPETING"});

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel)=> {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
        });
        // General channel id: 727338261202337876
        // General voice id: 727338261202337878
    });
 
    let generalChannel = client.channels.cache.get('727338261202337876');
    //generalChannel.send("Hozay is building me.", {files: ["https://pa1.narvii.com/6880/775c0e8a8f57f1fb09c3aa279d6dd11ca32465b8r1-480-270_hq.gif"]});
}); */

/* client.on('message', (receivedMessage)=> {
    if (receivedMessage.author == client.user) return;
    //receivedMessage.channel.send(receivedMessage.author.toString() + "Y-Yes master... I will repeat what you said... " + receivedMessage.content);

    //receivedMessage.react("🥰"); // Will react to the message, not the message the bot outputs
    if(receivedMessage.content.startsWith("~")) {
        processCommand(receivedMessage);
    }
});

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    console.log(typeof primaryCommand);
    console.log(primaryCommand.toLowerCase())

    switch(primaryCommand.toLowerCase()) {
        case 'help':
            helpCommand(arguments, receivedMessage);
        break;
        case 'multiply':
            multiplyCommand(arguments, receivedMessage);
        break;
        case 'joinvc':
            joinVoiceCommand();
        break;
        default:
            receivedMessage.channel.send("I SAID, I DON'T KNOW THIS COMMAND DAWG");   
    }
}

function helpCommand(arguments, receivedMessage) {
    if(arguments.length == 0) {
        let outPrint = "Here is a list of the available commands:\n```\n";
        availableCommands.forEach((command) => {
            outPrint += `${command}\n`;
        });
        outPrint += "```\nTo learn more about the command, write `~help <command>` 🥰"
        receivedMessage.channel.send(outPrint);
        return;
    }
 */
    // TO-DO: Write instructions of the commands
/*     
}

function multiplyCommand(arguments, receivedMessage) {
    if(arguments.length < 2) { 
        receivedMessage.channel.send("Not enough numbers...");
        return;
    }
    let product = 1;
    arguments.forEach((value) => {
        product *= parseFloat(value);
    });
    receivedMessage.channel.send(`tis ${product}`);
}

function joinVoiceCommand() {
    const channel = client.channels.cache.get('727338261202337878');
    if(!channel) return console.error('The channel does not exist!');
    channel.join()
        .then(connection => console.log('Connected!'))
        .catch(console.error);
}

client.login(TOKEN);     */