let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    let caption = `
    *Здравствуйте. Имеется бот:
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
╚════════*
    
    
    `
    conn.sendButton(m.chat, caption, wm, null, [['Основное меню ☘️', `/меню`]], m)
    
}
handler.customPrefix = /з|@/i;
handler.tags = ['anonymous'];
handler.command = ['аказать'];
handler.private = true;
export default handler;




