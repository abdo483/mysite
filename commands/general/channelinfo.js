const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "channelinfo",
    aliases: ["ci","cinfo"],
    category: "general",
    description: "Get All Commands Information!",
    usage: "Help | <Command Name>",
    accessableby: "everyone",
      run: async (client, message, args) => {
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");

        let channelembed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**Channel Name**", channel.name, true) 
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**Channel ID**", channel.id, true)
            .addField("**Channel Type**", channel.type, true)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`,true)
            .setColor("GREEN")
        message.channel.send(channelembed);
    }
}
