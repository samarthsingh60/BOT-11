const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../reconDB');
module.exports = {
    name: 'autorole-check',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const check = await db.has(`autorole-${message.guild.id}`);
        if(check === false) return message.reply('There is no autorole set for this guild!');
        const role = await db.get(`autorole-${message.guild.id}`);
        message.reply(`The autorole is <@&${role}>`);
    }
}