var async = require('async');
var superagent = require('superagent');

command = {
  name: "duty",
  description: "Changes available/unavailable duty.",
  protocol: function(bot, msg, args, options){
    if (msg.member && msg.channel.guild.id == "81812480254291968") {
    var memberAvatar = "https://cdn.discordapp.com/avatars/"+msg.member.user.id+"/"+msg.member.user.avatar+".jpg";
    var reasonVar = args.slice(1).join(" ");
    var n = msg.member.nick
    if(msg.member.nick===null){ n = msg.author.username }
    if(msg.member.permission.has("kickMembers")){
      var currentRoles = msg.member.roles;
      if (args[0] === "on"){
      currentRoles.push("226843141733351424");
      currentRoles.splice(currentRoles.indexOf("226840328429109248"), 1,currentRoles.indexOf("251170075141210112"), 1);
      bot.editGuildMember(msg.channel.guild.id, msg.author.id, {roles: currentRoles});
      //bot.createMessage(msg.channel.id, ":ok: `Duty status has been changed to available. Remember to clock off, "+n+"!`");
      msg.channel.createMessage("",{},{
      "color": 0x1f9e4a,
      "fields": [{name: "🆗 `Duty status has been changed to available.`", value: "`Remember to clock off, "+n+"!`"}]
      });
      superagent.post('https://canary.discordapp.com/api/webhooks/232008185052004354/owRfhvFC-zSDM_lqt2kQRk07wjYla1MhYOvh8M3Vzx4ZnOOlra-KieeA9hK5eADu5eL5/slack')
      .send({
      "username": "Duty Monitor",
      "icon_url": memberAvatar,
      "text": "[](invisible)",
      "attachments": [
        {
          "color": "#1f9e4a",
          "pretext": "**"+n+"** `("+msg.author.username+"#"+msg.member.user.discriminator+")` is now on duty!",
          "thumb_url": memberAvatar,
          "fields": [
            {
              "title": "**Note:** ",
              "value": reasonVar == "" ? "`No note attached.`" : reasonVar,
              "short": false
            }
        ],
          "footer": "Timestamp ",
          "ts": new Date().getTime() / 1000
        }
      ]
      })
      .end((err, res)=>{
      });
      }
     if (args[0] === "off"){
      currentRoles.push("226840328429109248");
      currentRoles.splice(currentRoles.indexOf("226843141733351424"), 1, currentRoles.indexOf("251170075141210112"), 1);
      bot.editGuildMember(msg.channel.guild.id, msg.author.id, {roles: currentRoles});
      //bot.createMessage(msg.channel.id, ":ok: `Duty status has been changed to unavailable. Remember to clock on when you return, "+n+"!`");
      msg.channel.createMessage("",{},{
      "color": 0xf33838,
      "fields": [{name: "🆗 `Duty status has been changed to unavailable.`", value: "`Remember to clock on when you return, "+n+"!`"}]
      });
      superagent.post('https://canary.discordapp.com/api/webhooks/232008185052004354/owRfhvFC-zSDM_lqt2kQRk07wjYla1MhYOvh8M3Vzx4ZnOOlra-KieeA9hK5eADu5eL5/slack')
      .send({
      "username": "Duty Monitor",
      "icon_url": memberAvatar,
      "text": "[](invisible)",
      "attachments": [
        {
          "color": "#f33838",
          "pretext": "**"+n+"** `("+msg.author.username+"#"+msg.member.user.discriminator+")` is no longer on duty!",
          "thumb_url": memberAvatar,
          "fields": [
            {
              "title": "**Reason:** ",
              "value": reasonVar == "" ? "`unspecified`" : reasonVar,
              "short": false
            }
        ],
          "footer": "Timestamp ",
          "ts": new Date().getTime() / 1000
        }
      ]
      })
      .end((err, res)=>{
      });
      }
    }
    if (args < 1){
        var avresult = "";
        var unresult = "";
        var membersAvailable = msg.channel.guild.members.filter(m => ~m.roles.indexOf("226843141733351424"));
        var avCount = msg.channel.guild.members.filter(m => ~m.roles.indexOf("226843141733351424")).length;
        var membersUnavailable = msg.channel.guild.members.filter(m => ~m.roles.indexOf("226840328429109248"));
        var unCount = msg.channel.guild.members.filter(m => ~m.roles.indexOf("226840328429109248")).length;
        async.each(membersAvailable, (item, cb) => {
        avresult += `🎓 **${item.user.username}**#${item.user.discriminator} - \`.id ${item.user.id}\`\n`
        cb()
        }, () => {
        bot.createMessage(msg.channel.id,
          "**__<:available:230111586189180928> STAFF ON DUTY__ ("+avCount+")** `⭐ Pro-Tip: Only ping staff if you absolutely need assistance.`\n"+avresult);
        });
        async.each(membersUnavailable, (item, cb) => {
        unresult += `🎓 **${item.user.username}**#${item.user.discriminator} - \`.id ${item.user.id}\`\n`
        cb()
        }, () => {
        bot.createMessage(msg.channel.id,
          "**__:red_circle: STAFF OFF DUTY__ ("+unCount+")** `⭐ Pro-Tip: Do not ping staff who are off-duty.`\n"+unresult);
        });
      }
    }
  }
}
module.exports = command;
