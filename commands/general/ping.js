const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
    name: "ping",
    aliases: null,
    category: "utility",
    description: "Pong!",
    usage: "Ping",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        const embed = new MessageEmbed()
        .setDescription('`Pinging...`')
        .setColor(message.guild.me.displayHexColor);    
      const msg = await message.channel.send(embed);
      const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp;
      const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
      const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
      embed.setDescription('')
        .addField('Latency', latency, true)
        .addField('API Latency', apiLatency, true)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
      msg.edit(embed);
    }
  };
  
        