// MODÜL TANIMLAMALARI //

const Discord = require('discord.js');

// MODÜL TANIMLAMALARI SON //

exports.run = async (client, message, args) => {

    const help = new Discord.MessageEmbed()
    .setTitle("YARDIM MENÜSÜ 🚀")
    .setColor("#FFFFFF")
    .setThumbnail(`https://cdn.discordapp.com/attachments/809859201702559744/816736756526219294/1614795577005.png`)
    .setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)
    .setTimestamp()
    .addField('!pomodoro [Süre] - [Tekrar Sayısı]' , 'Bir pomodoro çalışması başlatırsınız. Süre en fazla ``120`` & tekrar sayısı en fazla ``10`` olabilir.')
    .addField('!puan (ID | Etiket)' , 'Kendinizin veya başka bir kişinin toplamda ne kadar süre çalıştığını öğrenirsiniz.')
    .addField('!müzik [1-7]' , 'Pomodoro esnasında bir seste bulunuyorsanız bot sese girerek çalışma ya da mola süresinin bittiğini size hatırlatmak için zil çalmaktadır. Bu komut ile çalacak olan zil sesini 1\'den 7\'ye kadar herhangi birini seçerek belirleyebilirsiniz. ')
    .addField('!müziktest [1-7]' , 'Elimizde olan bildirim seslerini test edebilmenize yardımcı olurlar 1 ile 7 arasındaki (Bu sayılar dahil) istediğiniz sayıyı yazarak deneyebilirsiniz')
    message.channel.send(help)


};

exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Komutlara bakarsınız.',
  usage: 'yardım'
};