command = {
  name: "optin",
  description: "Acess specific channels.",
  protocol: function(bot, msg, args, options){
      var currentRoles = msg.member.roles;
      if (args[0] === "webhooks"){
      currentRoles.push("231687727551217664");
      bot.editGuildMember(msg.channel.guild.id, msg.author.id, {roles: currentRoles});
      bot.createMessage(msg.channel.id, ":ok: `You have been added to the #webhooks channel and assigned with the Webhooks role.`");
      }
    }
  }
module.exports = command;
