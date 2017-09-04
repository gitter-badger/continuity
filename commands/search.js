var needle = require('needle');

command = {
  name: "search",
  description: "Look for resources in the Cheese.lab API",
  protocol: function(bot, msg, args, options){
    needle.get(`api.cheeselab.space/resources/search/${args.join(" ")}`, (err, response, body) => {
    if (!err && response.statusCode == 200) {
    if (!body.length) {
    return bot.createMessage(msg.channel.id, "⛔ `\""+args+"\" doesn't exist and returned no results...`");
    };
    if (body.length > 15) {
    return bot.createMessage(msg.channel.id, "⛔ `Too many results to display. Please be more specific.`");
    };
    var results = `**__Showing ${body.length} result(s) :mag_right:__**\n\n`;
    for (var result of body) {
      var resdes = "";
       if(result.description!=undefined){ resdes = result.description+"\n" }
      results += "**"+result.name+"** `"+result.type+"` | <"+result.url+"> \n"
      +resdes;
    }
    bot.createMessage(msg.channel.id, results);
    } else {
    console.log("The cheeses are now sad.. An error occured");
    }
    });
  }
}

module.exports = command;
