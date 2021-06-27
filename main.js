const Discord = require('discord.js'); 
const client = new Discord.Client();
const config = require("./config.json");
var prefix  = config.prefix
const offical_will = require("./config.json");
const fs = require("fs");
const AsciiTable = require ('ascii-table');
const ms = require('ms');


require('./util/eventHandler.js')(client);


client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()


fs.readdirSync("./commands").forEach(dir=> {
  const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles){
  const komutcuklar = require(`./commands/${dir}/${file}`)
  var table = new AsciiTable("Komutlar")
  table.setHeading("Command","Status","Aliases")
  if (komutcuklar.help.name){
    client.commands.set(komutcuklar.help.name,komutcuklar);
    table.addRow(komutcuklar.help.name,"✔",komutcuklar.conf.aliases)
  } else{
    table.addRow(komutcuklar.help.name,"❌")
    continue
  }
  komutcuklar.conf.aliases.forEach(alias => {
    client.aliases.set(alias, komutcuklar.help.name);
  });
  console.log(table.toString())
}
})


client.elevation = message => {
  if(!message.guild){
  return;}
  let permlvl = 0;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
}



client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'Çalışan İnsanları' , type: 'WATCHING' }, status: 'dnd' });
})

client.on('message' , message => {
    if(message.content.toLowerCase() === "Ping") {
        message.channel.send('Pong!')
    }
})







client.login(config.token); 