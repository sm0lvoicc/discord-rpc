const rpc = require('discord-rpc');
const Discord = require('discord.js-light');
const { token } = require('./token.json');

const bot = new Discord.Client();
const client = new rpc.Client({transport: 'ipc'});


bot.on('ready', () => {
    client.login({clientId: bot.user.id});
    rpc.register(bot.user.id)
    client.on('ready', () => {
        console.log('RPC something');
        client.request('SET_ACTIVITY', {
            pid: 9999,
            activity: {
                details: 'hemlo',
                state: `no i cannot hack your crush's instagram or fix your washing machine`,
                assets: {
                    large_image: "two_yes",
                    large_text: `this me :) not really, its wumpus`,
                    small_image: "sm0l",
                    small_text: `${bot.guilds.cache.size} servers`
                },
                buttons: [
                    {
                        label: "INVITE SM0L",
                        url: "https://discord.com/api/oauth2/authorize?client_id=760426095563767818&permissions=4294967287&scope=bot%20applications.commands"
                    },
                    {
                        label: "JOIN MY SERVER",
                        url: "https://discord.gg/PG9Ahke"
                    }
                ]
            }
        });
    });
});

bot.login(token);