export async function all(m, conn) {
   
  if (!m.isGroup)
  return
  let chats = global.db.data.chats[m.chat]
  if (!chats.expired)
  return !0
  if (+new Date() > chats.expired) {
  
  await m.reply(`Всем пока! бот выходит из группы, срок аренды бота истек`)
  await this.groupLeave(m.chat)
  chats.expired = null
  }}