
const Eris = require("eris");
const srequest = require("superagent");
const redis = require("redis");
var db = redis.createClient();
const image = require('imagemagick');
var fs = require('fs');

var packBuild = require('./package.json');

var _VERSION = "v"+packBuild.version;

var options = {
  botVersion: _VERSION,
  gameName: "test-build" + " | " + _VERSION,
  prefix: ".",
  owner: "71323348545576960"
}

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

var chandle = require("./commandhandler.js");

// STORE YOUR TOKEN IN token.json
var token = require('./token.json');  
// CODE FOR TOKEN
var _TOKEN = token.token
// TELLS ERIS TO USE THAT TOKEN
var bot = new Eris("Bot "+ _TOKEN);

/* STARTS THE BOT AND LOGS THOSE MESSAGES, 
YOU CAN CUSTOMISE THIS IF YOU WANT*/
bot.on("ready", () => {
    console.log("Continuity is booting up...");
    console.log("Extracting dank memes...");
    console.log("Done!");
    console.log("Running Bot Version: " + options.botVersion);
    bot.editStatus(true,{
        name: options.gameName
    });
    console.log("Game set to " + options.gameName);
});

bot.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    chandle.exec(msg, bot, options);
});

bot.connect();
