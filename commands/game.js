command = {
  name: "game",
  description: "game",
  protocol: function(bot, msg, args, options){
    var gameChange = args.join(" ");
    if (msg.author.id === options.owner){  // options.owner is changeable via bot.js
        if (gameChange){
          bot.editGame({name: gameChange});
          bot.createMessage(msg.channel.id, ":ok: Game has been changed to `"+gameChange+"`.");
        }
        else if (args < 1) {
          bot.editGame({name: options.gameName});
          bot.createMessage(msg.channel.id, ":ok: Game has been changed back to default.");
        }
    }else{
      bot.createMessage(msg.channel.id, "Only owner can set game.");
    }
  }
}
module.exports = command;
