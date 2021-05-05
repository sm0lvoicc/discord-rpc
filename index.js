const rpc = require('discord-rpc');
const Discord = require('discord.js-light');
const { token } = require('./token.json'); //import the token of the bot from token.json or whatever you have saved it in, the different between {} and () is that, {} is the same as token.token, if you get what i mean

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
                details: 'hemlo', /*first text from the top of the rpc*/
                state: `no i cannot hack your crush's instagram or fix your washing machine`, /*this is the description, the 2nd text from top*/
                assets: {
                    large_image: "two_yes", /*the name of big image (it should be same as you have saved in the dev portal*/
                    large_text: `this me :) not really, its wumpus`, /*this is what will be shown when you hover your cursor over it*/
                   //small image is optional, not really important, you can have it if you want and not have it if you don't
                    small_image: "sm0l", /*the name of the small image (it should be same as you have saved in the dev portal*/
                    small_text: `${bot.guilds.cache.size} servers` /*the text you want to be shown when one hovers cursor over the small image*/
                },
                //buttons are also optional
                buttons: [
                    {
                        label: "INVITE SM0L", /*what you want to be shown on the 1st button's text*/
                        url: "https://discord.com/api/oauth2/authorize?client_id=760426095563767818&permissions=4294967287&scope=bot%20applications.commands" /*the link or anything where it redirects*/
                    },
                    //you can also only just have 1 button 
                    {
                        label: "JOIN MY SERVER", /*text for 2nd button*/
                        url: "https://discord.gg/PG9Ahke" /*the link or stuff*/
                    }
                ]
            }
        });
    });
});

bot.login(token);
