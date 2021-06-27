const Discord = require('discord.js');
const Database = require("easy-json-database");
const db = new Database("./database/db.json", {
    snapshots: {
        enabled: true,
        interval: 24 * 60 * 60 * 1000,
        folder: './database/'
    }
});
exports.run = async (client, message, args) => {

  var kullanıcı =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if(!kullanıcı){
    var kullanıcı = message.member 
  }

var puanım = Number(db.get(`${kullanıcı.id}_point`));
if(`${puanım}` == 'NaN'){
  puanım = 'Henüz hiç çalışma yapmadınız. Şu anki süreniz ``0`` Lütfen çalışma yaptıktan sonra tekrar deneyiniz.'
}
var embed = new Discord.MessageEmbed()
.setColor("#FE804E")
.setThumbnail(`https://media.discordapp.net/attachments/828663577992888353/858713580110610462/1614795154247.png?width=430&height=430`)
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)
.setTimestamp()
.setTitle(' Toplam Çalışma Süresi ⏰')
.setDescription("Bugüne dek toplamda ``" + puanım + "`` dakika çalıştınız. Çalışmalarınızın devamını diliyoruz!")
message.channel.send(embed)


};


exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'puan',
  description: 'Şimdiye Kadar Kaç Dakika Çalıştığınızı Gösterir',
  usage: 'puan'
};