const Meme = require("memer-api")
const memer = new Meme();
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'tweet',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user1 = message.member;

        const avatar = user1.user.displayAvatarURL({ dynamic: false })

        const text = args.join(' ');

        if (!text) return message.reply(`Please provide a text.`);

        const username = user1.user.username;

        memer.tweet(avatar, text, username).then(image => {
            const attachment = new MessageAttachment(image, "tweet.png")
            message.channel.send(attachment)
        })
    }
}