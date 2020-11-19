const { MessageEmbed } = require('discord.js');
const { Color, Prefix } = require("../../config.json");

module.exports = {
  name: "server",
  aliases: null,
  category: "general",
  description: "Get all server information!",
  usage: "Server",
  accessableby: "everyone",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setColor(process.env.COLOR)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .setDescription('Here is some information I found for this server.')
    .addField('Server ID', message.guild.id,true)
    .addField('Server owner', `<@${message.guild.ownerID}>`,true)
    .addField("Total members | Humans | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
    .addField('Text channels | Voice channels', `${message.guild.channels.cache.filter(channel => channel.type === 'text').size} | ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`,true)
    .addField('Roles', message.guild.roles.cache.size,true);

return message.channel.send(embed).catch(err => console.error(err));
}
}