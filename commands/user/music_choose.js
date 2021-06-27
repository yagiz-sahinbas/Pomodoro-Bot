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

var sayıhata = new Discord.MessageEmbed()
.setColor('#c36565')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/817074083476668426/1614875993340.png?width=464&height=464')
.setTitle('Hatalı Sayıhata')
.setDescription('Lütfen sadece 1 ile 7 arasındaki sayıları girin')
.setTimestamp()
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)

exports.run = async (client, message, args) => {

var no = args[0]
//KABUL ENBEDİ //
var kabulembed = new Discord.MessageEmbed()
.setColor('#799451')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/816354342650249296/1614704354641.png?width=464&height=464')
.setTitle('Alarm Seçimi')
.setDescription("Çalışma ve mola alarmınız " + no + " numaralı ses olarak ayarlandı.")
.setTimestamp()
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)
//KABUL ENBEDİ //


if (Number(args[0]) < 8 &&  Number(args[0]) > 0) {
    db.set(`${message.member.id}_noti`, `${no}`)
    message.channel.send(kabulembed)
} else {
    message.channel.send(sayıhata)
}
};

exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'müzikseç',
  description: '',
  usage: 'müzikseç'
};