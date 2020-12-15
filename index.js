const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzg3MjM3MDc3MjA5MTg2MzE1.X9SBqQ.3S8hFdmepITC1xFVKVNcFon6luI';

client.on('ready', () => {
  console.log('logbot on');
});

client.on('messageDelete', async message => {
  
    message.channel.send(`<@!${message.author.id}> 님이 \`${message.content}\`를(을) 삭제하셨습니다`)
  })

client.login(token);