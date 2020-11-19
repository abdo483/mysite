const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
    name: "emergency",
    aliases: ["اجتماع"],
    category: "fun",
    description: "Emergency with you custom text like among us.",
    usage: "Emegency <Custom text>",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        if (Text.length > 500) return message.channel.send(`Text Limit - 500`);

        let Link = `https://vacefron.nl/api/emergencymeeting?text=${Text}`;

        let Embed = new MessageEmbed()
        .setColor(Color)
        .setImage(Link)
        .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};
