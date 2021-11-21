const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES
] });
const prefix = "$";
const token = "discord_token";

client.on('ready', () => {
    console.log('Logged in as' + client.user.tag);
    client.user.setActivity('DCX Bot Beta', ({ type: "STREAMING" }));
});


/*set message handler*/
client.on('messageCreate', msg => {

    /*user command*/
    if (msg.content === `${prefix}kickUser`) {
        if (!msg.member.roles.cache.find(r => r.name ==="Party Technician"))
            return;
        const taggedUser = msg.mentions.user.first();
        taggedUser.kick().then((member) => {
            msg.channel.send(":wave:" + member.displayName + "has been successfully kicked out!");
        }).catch(() => {
            msg.channel.send("Access Denied");
        });
        console.log('Readable');
    }

    if (msg.content === `${prefix}banUser`) {
        if (!msg.member.roles.cache.find(r => r.name ==="Party Technician"))
            return;
        const taggedUser = msg.mention.user.first();
        taggedUser.ban().then((member) => {
            msg.channel.send(":wave:" + member.displayName + "has been successfully baned out!");
        }).catch(() => {
            msg.channel.send("Access Denied");
        });
        console.log('Readable');
    }
    
    if (msg.content === `${prefix}TestCommand`) {
        msg.channel.send("Flawlessly if other command is not appeard is might have some bugs");
        console.log("Readable");
    }
    if(msg.content === `${prefix}help`) {
        const helpEmbed01 = new MessageEmbed()
            .setColor('#ffc900')
            .setTitle('Help Menus')
            .setDescription('Beta v1.0.0')
            .addFields(
                {name: "lists all command", value: "$help listAllCommand", inline: true},
                {name: "settings", value: "$settings", inline: true},
                {name: "Functions - Music", value: "Temporary Unavailable", inline: true},
                {name: "Functions - Moderator", value: "Under Developing", inline: true},
                {name: "Functions - Entertainment", value: "temporary Unavailable", inline: true},
                {name: "Functions - Welcomer", value: "--Running--", inline: true},
                {name: "Functions - Additional Knowledge", value: "Temporary Unavailable", inline: true}
            )
            .setTimestamp()
            .setFooter('DeltCrosXBot', 'https://th.bing.com/th/id/OIP.DNoqWYQyw-4_laSr8w4oGgHaEo?pid=ImgDet&rs=1');
        msg.channel.send({ embeds: [helpEmbed01] });
        console.log('Readable');
    }
    if(msg.content === `${prefix}help listAllCommand`) {
        const helpEmbed02 = new MessageEmbed()
            .setColor('#ffc900')
            .setTitle('All Command List')
            .setDescription('All of DeltCrosXBot Command')
            .addFields(
                {name: "commandlist1", value: "Unavailable", inline: true}
            )
            .setTimestamp()
            .setFooter('DeltCrosXBot', 'https://th.bing.com/th/id/OIP.DNoqWYQyw-4_laSr8w4oGgHaEo?pid=ImgDet&rs=1');
        msg.channel.send({ embeds: [helpEmbed02] });
    }
    if(msg.content === `${prefix}settings`) {
        const settings = new MessageEmbed()
            .setColor('#55e59c')
            .setTitle('Settings Menu')
            .setDescription('Setting The Bot')
            .addFields(
                {name: "Setting 1", value: "temporary Unavailable", inline: true},
            )
            .setTimestamp()
            .setFooter('DeltCrosXBot', 'https://th.bing.com/th/id/OIP.DNoqWYQyw-4_laSr8w4oGgHaEo?pid=ImgDet&rs=1');
        msg.channel.send({ embeds: [settings]});
    }

    const canvacord = require('canvacord');
    
    if(msg.content === `${prefix}settings prefix`) {
        msg.channel.send('Please Enter you prefx that you prefer to use.');
    }
});

client.login(token);