meimport Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].nsfw) ,throw `🚩 El grupo no admite contenido *Nsfw.*\n\n> Para activarlo un *Administrador* debe usar el comando */on nsfw*`;
if (!args[0]) throw, `🚩 Ingresa el enlace del vídeo de Xvideos*`;

let user = global.db.data.users[m.sender]
await m.react('🕓')
try {
let { title, dl_url } = await Starlights.xvideosdl(args[0])
await conn.sendFile(m.chat, dl_url, title + '.mp4', `*» Título* : ${title}`, m, false, { asDocument: user.useDocument })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['xvideosdl *<url>*']
handler.tags = ['downloader', 'nsfw']
handler.command = ['xvideosdl', 'xvideos']
//handler.limit = 200
handler.register = true 
handler.group = true 
export default handler