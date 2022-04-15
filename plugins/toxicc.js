let handler = async (m, { conn, text, usedPrefix, command }) => {

let buff = fs.readFileSync('./media/Satzz.mp3')}
conn.sendFile(m.chat, buff, 'tts.opus', null, m, true)
}

handler.customPrefix = /an(j|g)|anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|as(u|w)|tolol/i
handler.command = new RegExp

module.exports = handler
