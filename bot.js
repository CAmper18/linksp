const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";


 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 36000,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط :  10 ساعات | عدد استخدامات الرابط : 10 **")
      message.author.sendEmbed(Embed11)
    }
   
}); 


client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "$bala3") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
      
      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
    
     if (message.guild.member(user).roles.has(muteRole.id)) {
   return message.reply("**✅ .. تم اعطاء العضو ميوت**").catch(console.error);
   } else {
       message.guild.member(user).addRole(muteRole).then(() => {
   return message.reply("**✅ .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
   });
     }
   
   };
   
   });

client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "$ahdar") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
     if (message.guild.member(user).removeRole(muteRole.id)) {
   return message.reply("**✅ .. تم فك الميوت عن الشخص **").catch(console.error);
   } else {
       message.guild.member(user).removeRole(muteRole).then(() => {
   return message.reply("**✅ .. تم فك الميوت عن الشخص **").catch(console.error);
   });
     }
   
   };
   
   });




client.on('message', msg => {
    if (msg.content === 'احبك') {
      msg.reply('**لاتحتك يا اخوي لو سمحت**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.reply('**وعليكم السلام **');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'شكرا') {
      msg.reply('**العفو**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ابي رتبة') {
      msg.reply('**اتكلم مع الادارة ما تقولها في الشات**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'الاوامر') {
      msg.reply('**الاوامر في روم بوت**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'كيفكم') {
      msg.reply('**طيبين**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'اسكت') {
      msg.reply('**لا تزعج الاعضاء**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'مبرمج السيرفر') {
      msg.reply('**عبــــــــد الهــــادي**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'مين صنع السيرفر') {
      msg.reply('**برسوفيور**');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'ابي اتواصل مع الادارة ') {
      msg.reply('**استنا حتى يكونو اون لاين **');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ابي كريديت') {
      msg.reply('**روح لامك تعطيك كريديت مافي هون**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'راك كبير') {
      msg.reply('**الكبير ربي **');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'وتف') {
      msg.reply('** احسنWTF هاذي اسمها اغتصاب للغة الاجانب اكبها  **');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'اونر السيرفر') {
      msg.reply('**بروفيسور  **');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'راك كبير') {
      msg.reply('**الكبير ربي **');
    }
  });
   client.on('message', msg => {
    if (msg.content === 'ابي ابلغ عن شخص') {
      msg.reply('**اتكلم مع الادارة بسرعة وصور وش كان يقول  **');
    }
  });








client.login(process.env.BOT_TOKEN);
