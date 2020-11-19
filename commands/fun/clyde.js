const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Random = require("srod-v2");

module.exports = {
    name: "clyde",
    aliases: null,
    category: "utility",
    description: "Pong!",
    usage: "Ping",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        if (!args[0]) return message.channel.send(`\`\`\`css\n Write an example like clyde Shadow \`\`\``);

        let Data = await Random.Clyde(args.join(" "), Color);

        return message.channel.send(Data);

        //End

    }
};
  
        