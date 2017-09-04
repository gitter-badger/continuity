command = {
  name: "about",
  description: "about",
  protocol: function(bot, msg, args, options){
     /*guildMembers = "There are currently **"+msg.channel.guild.memberCount+" members** on this guild.";
     msgDate = new Date(msg.channel.guild.createdAt);
     guildAvatar = "https://discordapp.com/api/guilds/"+msg.channel.guild.id+"/icons/"+msg.channel.guild.icon+".jpg";*/
    return bot.createMessage(msg.channel.id, {
            embed: {
                content: "[]()",
                description:
                "**<:bottag:352070466384560128> Version: **" + options.botVersion
                + "\n You can get help on the server by typing `"+options.prefix+"help`",
                author: { // Author property
                    name: "Continuity",
                    icon_url: "https://cdn.discordapp.com/avatars/"+bot.user.id+"/"+bot.user.avatar+".jpg"
                },
                color: 15515667, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "**Currently connected to**", // Field title
                        value: bot.guilds.map(guild => guild.name).length+" server(s)",
                        inline: true
                    },
                    {
                        name: "**Current server:**",
                        value: "`"+msg.channel.guild.name+"`",
                        inline: true
                    },
                    {
                        name: "**Global prefix**",
                        value: "`"+options.prefix+"`",
                        inline: true
                    },
                    {
                        name: "**Current game:**",
                        value: "`"+options.gameName+"`"+" Only the owner can set this.",
                        inline: true
                    }, 
                    {
                        name: "**Members:**",
                        value: "There are **"+msg.channel.guild.memberCount+" members** on this guild.",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Coded with 💛 by the "+msg.channel.guild.name+" community.",
                    icon_url: "https://discordapp.com/api/guilds/"+msg.channel.guild.id+"/icons/"+msg.channel.guild.icon+".jpg"
                }
            }
        });
    }
}

module.exports = command;