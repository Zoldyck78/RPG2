let handler = async (m, { conn, text, usedPrefix, command }) => {

m.reply(`
عَنْ أَبِي الدَّرْدَاءِ، أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللَّهَ لَيُبْغِضُ الفَاحِشَ البَذِيءَ

Dari Abu Ad-Darda’ radhiallahu ‘anhu bahwasanya Rasulullah ﷺ bersabda, “Sungguh Allah benci dengan orang yang lisannya kotor dan kasar.”`)
}

handler.customPrefix = /an(j|g)|anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|as(u|w)|olol/i
handler.command = new RegExp

module.exports = handler
