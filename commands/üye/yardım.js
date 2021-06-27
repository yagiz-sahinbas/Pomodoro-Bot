// MODÜL TANIMLAMALARI //

const Discord = require('discord.js');

// MODÜL TANIMLAMALARI SON //

exports.run = async (client, message, args) => {

    const help = new Discord.MessageEmbed()
    .setTitle("YARDIM MENÜSÜ ⌛")
    .setColor("#BF6C0C")
    .setThumbnail(`https://cdn.discordapp.com/attachments/823946126222557214/825742612333854720/1616942730904.png`)
    .setFooter("Pomodoro Sistemi", `https://cdn.discordapp.com/attachments/828663577992888353/858344508038316043/1624715657514.png`)
    .setTimestamp()

message.channel.send(help)


};

exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};