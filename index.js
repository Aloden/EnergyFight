const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');

const client = new Discord.Client();
//const config = require('./config.json')
//Pas mit en place.

fs.readdir('./events/', (err, files) => {
  if(err) return console.error(err)
)}