command = {
  name: "optout",
  description: "Removes specific activity zones.",
  protocol: function(bot, msg, args, options){
      if (args[0] === "diy"){
      bot.removeGuildMemberRole("81812480254291968", msg.author.id, "443589359715745813", "Member has been removed from DIY.");
      bot.createMessage(msg.channel.id, ":ok: `You no longer have access to Cheese.lab DIY.`");
      }
      else if (args[0] === "gaming"){
      bot.removeGuildMemberRole("81812480254291968", msg.author.id, "443590269242441738", "Member has been removed from GAMING.");
       bot.createMessage(msg.channel.id, ":ok: `You have no longer have access to Cheese.lab Gaming.`");
      }
      else {
        bot.createMessage(msg.channel.id, "`.optout [diy|gaming]`");
      }
    }
  }
module.exports = command;
