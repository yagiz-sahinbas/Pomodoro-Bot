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

exports.run = async (client, message, args) => {

var veri = args.slice(0).join(' '); 
var _veri = veri.split(" - ")
var sure = Number(_veri[0])
let _sure = Number(_veri[0])
var tekrar = Number(_veri[1])
let tip = "Çalışma"

let _tekrar = tekrar + (tekrar - 1)

var _music; 

if(db.get(`${message.member.id}_noti`) == "1") {_music = "../../hawli_music/best.mp3"}
if(db.get(`${message.member.id}_noti`) == "2") {_music = "../../hawli_music/uzun.mp3"}
if(db.get(`${message.member.id}_noti`) == "3") {_music = "../../hawli_music/elegant.mp3"}
if(db.get(`${message.member.id}_noti`) == "4") {_music = "gizemli.mp3"}
if(db.get(`${message.member.id}_noti`) == "5") {_music = "../../hawli_music/Rose.mp3"}
if(db.get(`${message.member.id}_noti`) == "6") {_music = "../../hawli_music/hababam.mp3"}
if(db.get(`${message.member.id}_noti`) == "7") {_music = "../../hawli_music/gtime.mp3"}
if(db.has(`${message.member.id}_noti`) == false) {_music = "../../hawli_music/hababam.mp3"}
if(db.get(`${message.member.id}_noti`) == undefined) {_music = "../../hawli_music/hababam.mp3"}
console.log(db.get(`${message.member.id}_noti`))
console.log(db.has(`${message.member.id}_noti`))
if (`${sure}` == "NaN") {
    message.channel.send("Sayı türünden veri yazınız."); return;
} else if (sure == 0){
    message.channel.send("Hata"); return;
} else if (sure > 120){
    message.channel.send("En fazla 120 dakika yapabilirsiniz."); return;
} else {message.channel.send(sure + "değerinde pomodoro başlayacak")}

if (`${tekrar}` == "NaN") {
    message.channel.send("Sayı türünden veri yazınız." ); return;
} else if (tekrar == 0){
    message.channel.send("Hata") ; return;
} else if (tekrar > 10){
    message.channel.send("En fazla 10 tekrar yapabilirsiniz."); return;
} else {message.channel.send(tekrar + "değerinde pomodoro başlayacak")}



var countdown = await message.channel.send("Pomodoro Başladı! Kalan " + tip + " süresi: " + sure);

let clock = setInterval(() => {

if(_tekrar % 2 == 1 && _sure == 1) {
    tip = "Mola";
    _sure = 5 + 1
    _tekrar -= 1
    countdown.edit("Kalan " + tip + " süresi " + _sure)
    if(message.member.voice.channel != null) {
        message.member.voice.channel.join().then((vchannel) =>{
            const dispatcher =  vchannel.play('gizemli.mp3' , { volume: 0.9 })            
            dispatcher.on("finish", () => {
                    vchannel.leave();
                }); 
    
} )}}

if (_tekrar % 2 == 0 && _sure == 1) {
    tip = "Çalışma";
    _sure = sure + 1
    _tekrar -= 1
    countdown.edit("Kalan " + tip + " süresi " + _sure)
    if(message.member.voice.channel !== null){
        
    }


} 
 if (_tekrar == 0) {
    clearInterval(clock); 
    countdown.edit("Anneee Bitti")
} else {
    _sure -= 1;
    countdown.edit("Kalan " + tip + " süresi: " + _sure);}

}, 5000);



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