var async = require('async');
var superagent = require('superagent');

command = {
  name: "news",
  description: "Add news to the news feed.",
  protocol: function(bot, msg, args, options){
    if (msg.member && msg.channel.guild.id == "81812480254291968") {
    var memberAvatar = "https://cdn.discordapp.com/avatars/"+msg.member.user.id+"/"+msg.member.user.avatar+".jpg";
    var n = msg.member.nick
    if(msg.member.nick===null){ n = msg.member.user.username }
    if(msg.member.permission.has("kickMembers")){
      superagent.post('https://canary.discordapp.com/api/webhooks/231636297020735488/aZE4I6rLQuVxrebiKnqhv10A0arirH9KPOmoxeK5Qa9-7nunb42w1Rf61Pm8HOCFg6wL/slack')
      .send({
      "username": "News Bulletin",
      "icon_url": "",
      "text": "[]()",
      "attachments": [
        {
          "pretext": args.join(" "),
          "color": "#face00",
          "footer_icon": memberAvatar,
          "footer":"Posted by "+n+" ",
          "ts": new Date().getTime() / 1000
        }
      ]
      })
      .end((err, res)=>{
      });
      }
    }
  }
}

module.exports = command;
