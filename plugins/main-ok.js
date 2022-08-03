let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/e9f2deab6243e78ec54e3.png', m, { packname: "Amerr", author: "@amirrwibuu01" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
