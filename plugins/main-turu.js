let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/c98503d281e1e251211a0.jpg', m, { packname: "Amerr", author: "@amirrwibuu_01" })
}

handler.customPrefix = /^(turu)$/i
handler.command = new RegExp

module.exports = handler
