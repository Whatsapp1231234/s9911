let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    let caption = `*Здравствуйте. Имеется бот:
 _*Хулиган*_бот-админ
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
*Присутствуют маты*.
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
 _*Хулиган*_ вызывает всю группу через @ , удаляет за ссылки, сносит арабов и индусов,  закрывает и открывает группу по команде. 
╔════════
╠══ *ЦЕНА БОТА*
╠  Хулиган - 500₽  месяц 
╚════════
Ответственность за работу бота я не несу. Так как бот это программа и бывает виснет, на сервере перегруз, перебой. Так же ватсап блокирует номера и бот не исключение. В случае блокировки бота, деньги не возвращаю, другого не предоставляю, так как это не моя вина.
Если вас все устраивает, скидывайте ссылку на группу.
╔════════
╠══ *Оплата*
╠   https://www.sberbank.com/sms/pbpn?requisiteNumber=79384030507
╠ 
╠ 
╠ 
╠══ *Свяжитесь с создателем*
╠ #создатель
╠ 
╚════════*`
    conn.sendButton(m.chat, caption, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m)
    
}
handler.help = ['delexpired']
handler.tags = ['owner']
handler.command = /^(сбросить|delbottemporal|delbotemporal)$/i
handler.owner = true
handler.group = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *Día(s)* ☀️\n" + hours + " *Hora(s)* ⏳\n" + minutes + " *Minuto(s)* ⏰\n" + sec + " *Segundo(s)* 🕐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}




