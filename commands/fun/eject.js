const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "eject",
    aliases: ["ejec"],
    category: "fun",
    description: "Eject someone like among us.",
    usage: "eject <Mention Member>",
    accessableby: "everyone",
      run: async (client, message, args) => {

        //Start

        let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!Member) return message.channel.send(`Please Mention A Valid User!`);
      
        let Colors = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"];

        let Colord = Colors[Math.floor(Math.random() * Colors.length)];

        let Imposter = [true, false];

        let Impost = Imposter[Math.floor(Math.random() * Imposter.length)];

        let Link = `https://vacefron.nl/api/ejected?name=${Member.user.username.replace("  ", "").split(" ").join("+")}&impostor=${Impost}&crewmate=${Colord}`;

        let Embed = new MessageEmbed()
        .setColor(Colord.toUpperCase())
        .setTitle(`${message.author.username} Decided To Eject ${Member.user.username}`)
        .setImage(Link)
        .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};
