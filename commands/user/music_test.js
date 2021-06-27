// MODÜL TANIMLAMALARI //

const Discord = require('discord.js');
const ms = require('ms');
const Database = require("easy-json-database");
const db = new Database("./database/db.json", {
    snapshots: {
        enabled: true,
        interval: 24 * 60 * 60 * 1000,
        folder: './database/'
    }
});

// MODÜL TANIMLAMALARI SON //

//UYARI MESAJLARI TANIMALARI //
var sayıhata = new Discord.MessageEmbed()
.setColor('#c36565')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/817074083476668426/1614875993340.png?width=464&height=464')
.setTitle('Hatalı Sayı')
.setDescription('Lütfen sadece 1 ile 7 arasındaki sayıları girin')
.setTimestamp()
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)

var sestebulunma = new Discord.MessageEmbed()
.setColor('#c36565')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/817074083476668426/1614875993340.png?width=464&height=464')
.setTitle('Lütfen bir seste bulunun')
.setDescription('Ne yazık ki siz bir sese geçmeden size örnek alarm seslerimizi dinletemem')
.setTimestamp()
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)


var degerverin = new Discord.MessageEmbed()
.setColor('#c36565')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/817074083476668426/1614875993340.png?width=464&height=464')
.setTitle('Lütfen bir değer verin')
.setDescription('Bir değer vermeniz geremektedir ne yazık ki')
.setTimestamp()
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)

//UYARI MESAJLARI TANIMALARI //

exports.run = async (client, message, args, ) => {
if(!message.member.voice.channel){
    message.channel.send(sestebulunma)
}else{
    if(!args[0]) return message.channel.send(degerverin); 
    if(Number(args[0]) > 7 || Number(args[0]) < 1) return message.channel.send(sayıhata);
    message.member.voice.channel.join().then((vchannel) => {
        var music = 'music_' + args[0] + '.mp3'
        const dispatcher = vchannel.play(music)
        dispatcher.on("finish", end => {
            message.member.voice.channel.leave();
        }); 
    })
}
    };

exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'müziktest',
  description: '',
  usage: 'müziktest'
};