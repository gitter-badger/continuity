command = {
  name: "optin",
  description: "Acess specific activity zones.",
  protocol: function(bot, msg, args, options){
      if (args[0] === "diy"){
      bot.addGuildMemberRole("81812480254291968", msg.author.id, "443589359715745813", "Member has been added to DIY.");
      bot.createMessage(msg.channel.id, ":ok: `You have now have access to Cheese.lab DIY.`");
      }
      else if (args[0] === "gaming"){
      bot.addGuildMemberRole("81812480254291968", msg.author.id, "443590269242441738", "Member has been added to GAMING.");
       bot.createMessage(msg.channel.id, ":ok: `You have now have access to Cheese.lab Gaming.`");
      }
      else {
        bot.createMessage(msg.channel.id, "`.optin [diy|gaming]`");
      }
    }
  }
module.exports = command;
