// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
client.on('message', msg => {
  if (msg.content === 'patchnotes') {
    msg.reply('here you go: https://thatgamecompany.helpshift.com/a/sky-children-of-the-light/?s=patch-notes');
  }
});
client.on('message', msg=> {
  if (msg.content === 'stars') {
    msg.reply('here you go: https://sky-children-of-the-light.fandom.com/wiki/Winged_Light_(Children_of_Light)');
  }
});
client.on('message', msg=> {
  if (msg.content === 'enchantment price') {
    msg.reply('here you go: https://sky-children-of-the-light.fandom.com/wiki/Season_of_Enchantment?file=Enchantmentpricechart.jpg#Week_5_.28Purple_Light_-_Current_week.29');
  }
});
client.on('message', msg=> {
  if (msg.content === 'current event') {
    msg.reply('In combination with the Days of Healing event, which is a collaboration between Sky and Doctors Without Borders, TGC is launching a Double Heart event between May 18th and May 25th 12:00 PDT (noon PDT). Just like previous Double Heart events, both the Hearts and the Gifts of Light players send to each other will be doubled. ');
  }
});
client.on('message', msg=> {
  if (msg.content === 'oreo') {
    msg.reply('cute doggo!');
  }
});
client.on('message', msg=> {
  if (msg.content === 'krills') {
    msg.reply('Hell no, keep them away from me!');
  }
});
client.on('message', msg=> {
  if (msg.content === 'stars count') {
    msg.reply('\r\nIsle of Dawn: 5 \r\nDaylight Prairie: 13 \r\nHidden Forest: 16 \r\nValley of Triumph: 11 \r\nGolden Wasteland: 16 \r\nVault of Knowledge: 8 \r\nEye of Eden: 10 \r\nOrbit: 1');
  }
});
client.login(process.env.Oqklpbo5_7N39gxze35R52RzWYNCInY8);
