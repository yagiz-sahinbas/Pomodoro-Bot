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
//SÜRE SONU EMBEDİ // 
var surenizbitti = new Discord.MessageEmbed()
.setColor('#f7d460')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/816285102849916989/1614687875919.png?width=464&height=464')
.setTitle('Pomodoro Bitti!')
.setTimestamp()
.setDescription('Tebrikler pomodoronuzu tamamladınız! Bir dahaki pomodoroda görüşmek üzere!')
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)



//SÜRE SONU EMBEDİ // 

exports.run = async (client, message, args, ) => {


var veri = args.slice(0).join(' '); 
if (veri.indexOf(' - ') == -1 ) {message.channel.send("Lütfen komutu kullanırken `` - `` yazımına dikkat ediniz."); return;}
var _veri = veri.split(" - ")
var sure = Number(_veri[0])
let _sure = Number(_veri[0])
var tekrar = Number(_veri[1])
let tip = "Çalışma"

let _tekrar = tekrar + (tekrar - 1)

var _music; 
var sesli = message.member.voice.channel; 
var oncekipuan = Number(db.get(`${message.member.id}_point`));
var eklentipuan = _sure*tekrar 
var yenipuan = oncekipuan + eklentipuan
if(db.has(`${message.member.id}_point`) == false) {await db.set(`${message.member.id}_point`, `${_sure}`)} else {
await db.set(`${message.member.id}_point`,yenipuan)}
if(db.get(`${message.member.id}_noti`) == "1") {_music = "music_1.mp3"}
if(db.get(`${message.member.id}_noti`) == "2") {_music = "music_2.mp3"}
if(db.get(`${message.member.id}_noti`) == "3") {_music = "music_3.mp3"}
if(db.get(`${message.member.id}_noti`) == "4") {_music = "music_4.mp3"}
if(db.get(`${message.member.id}_noti`) == "5") {_music = "music_5.mp3"}
if(db.get(`${message.member.id}_noti`) == "6") {_music = "music_6.mp3"}
if(db.get(`${message.member.id}_noti`) == "7") {_music = "music_7.mp3"}
if(db.has(`${message.member.id}_noti`) == false) {_music = "music_6.mp3"}
if(db.get(`${message.member.id}_noti`) == undefined) {_music = "music_6.mp3"}
if (`${sure}` == "NaN") {
    message.channel.send("Sayı türünden veri yazınız."); return;
} else if (sure == 0){
    message.channel.send("Hata"); return;
} else if (sure > 120){
    message.channel.send("Süreyi en fazla 120 dakika yapabilirsiniz."); return;}

if (`${tekrar}` == "NaN") {
    message.channel.send("Sayı türünden veri yazınız." ); return;
} else if (tekrar == 0){
    message.channel.send("Hata") ; return;
} else if (tekrar > 10){
    message.channel.send("Tekrar sayısını en fazla 10 tekrar yapabilirsiniz."); return;}

const timeembed = new Discord.MessageEmbed()
.setTitle("POMODORO SAYACI")
.setColor('#f7d460')
.setThumbnail('https://media.discordapp.net/attachments/809859201702559744/816285102849916989/1614687875919.png?width=464&height=464')
.setDescription("Pomodoro başladı! \n \nKalan " + tip + " Süresi: " + sure + "Dakika! \n \nKolay gelsin!")
.setFooter("Pomodoro Sistemi", `https://media.discordapp.net/attachments/828663577992888353/858741229628686356/287a1a6cd7a91afe4b15be1fe3b7b760.png?width=464&height=464`)
.setTimestamp()

var countdown = await message.member.send(timeembed);

let clock = setInterval(async () => {

if(_tekrar % 2 == 1 && _sure == 1) {
    tip = "Mola";
    _sure = 5 + 1
    _tekrar -= 1
    timeembed.setDescription("Kalan " + tip + " süresi: " + _sure)
    countdown.edit(timeembed);
    if(message.member.voice.channel != null) {
        message.member.voice.channel.join().then((vchannel) =>{
            const dispatcher =  vchannel.play(_music , { volume: 0.9 })            
            dispatcher.on("finish", end => {
                    message.member.voice.channel.leave();
                }); 
    
    
        })
    
    } 
}
    

if (_tekrar % 2 == 0 && _sure == 1) {
    tip = "Çalışma";
    _sure = sure + 1
    _tekrar -= 1
    timeembed.setDescription("Kalan " + tip + " Süresi: " + sure + "Dakika! \n \nKolay gelsin!")
    countdown.edit(timeembed);
    if(message.member.voice.channel != null) {
        message.member.voice.channel.join().then((vchannel) =>{
            const dispatcher =  vchannel.play(_music, { volume: 0.9 })            
            dispatcher.on("finish", end => {
                    message.member.voice.channel.leave();
                }); 
    
    
        })
    
    } 
    



} 
 if (_tekrar == 0) {
    clearInterval(clock); 
    timeembed.setDescription("Kalan Süre 0 Dakika! Tebrik Ederim!")
    countdown.edit(timeembed)
    message.member.send(surenizbitti)
} else {
    _sure -= 1;
    timeembed.setDescription("Kalan " + tip + " Süresi: " + sure + "Dakika! \n \nİyi Dinlenmeler!")
    countdown.edit(timeembed);}

}, 60000);



    };

exports.conf = {
  aliases: ["pomo", "pomodo"],
  permLevel: 0,
};

exports.help = {
  name: 'pomodoro',
  description: '',
  usage: 'pomodoro'
};