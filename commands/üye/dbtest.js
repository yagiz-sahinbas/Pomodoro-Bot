// MODÜL TANIMLAMALARI //

const Discord = require('discord.js');
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

  db.set("array", [ "apple" ]);

};

exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'db',
  description: '',
  usage: 'db'
};