command = {
  name: "emoted",
  description: "Displays all emotes",
  protocol: function(bot, msg, args, options){
    return "**Current Custom Emotes:** <:CheeseRIP:210176666620657664> & <:Cheeselab:209900006436634624>";
  }
}

module.exports = command;
