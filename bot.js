const Discord = require('discord.js');
const client = new Discord.Client();


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

const Eris = require("eris");
var Acura = new Eris("NTE2MDIzNjY0ODk5MjYwNDE5.DttoRg.bI9W_U-_iSqB-i00-ERm0kxCnMc");
Acura.on("ready", () => {
    console.log("tm");
    onstart();
});
Acura = "505075875771842571";
nick = "Steylight";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
varAcura 2 = ' ';
  var Acura =   setInterval(function(){

     if (i == v1.length){
     clearInterval(Acura);
     onstart()
      return;
     }
     var v2 = v1[i];
   Acura  += v2;
    Acura.editNickname(Acura);
 
        i++;

     }, 1000);
}
Acura.connect();


client.login(process.env.BOT_TOKEN);
