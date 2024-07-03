

const handler = async (m, {usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.rpg_balance

  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
спроларнгдешгд`);
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['все', 'diamantes', 'diamond', 'balance'];
export default handler;
