// MODÜL TANIMLAMALARI //

const Discord = require('discord.js');
const Database = require("easy-json-database");
const db = new Database("./database/db.json", {
    snapshots: {
        enabled: true,
        interval: 24 * 60 * 60 * 1000
    }
});

// MODÜL TANIMLAMALARI SON //

exports.run = async (client, message, args) => {

var no = args[0]


if (no == "1" || no == "2" || no == "3" || no == "4" || no == "5") {
    db.set(`${message.member.id}_noti`, `${no}`)
    message.channel.send("Çalışma ve mola alarmınız" + no + "numaralı ses olarak ayarlandı.")
} else if (db.has(`${message.member.id}_noti`) == true) {
    db.set(`${message.member.id}_noti`, `${no}`)
    message.channel.send("Çalışma ve mola alarmınız" + no + "numaralı ses ile değiştirildi.")
} else {
    message.channel.send("Lütfen geçerli bir ses numarası giriniz.")
}
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
  name: 'müzik',
  description: '',
  usage: 'müzik'
};