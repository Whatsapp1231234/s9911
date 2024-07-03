

const handler = async (m, {conn}) => {
  вуероьапглапрь
};
handler.help = ['berburu'];
handler.tags = ['rpg'];
handler.command = /^(все|berburu|caza(r)?)$/i;
handler.group = true;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}

