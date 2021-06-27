const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const {prefix} = require('../config.json');

module.exports = client => (
    console.log(`${client.user.tag} Bot Hazır! Komutları kullanmaya başlayabilirsiniz.`)
)
