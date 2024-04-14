// Base by DGXeon
// Recode bg Dimxz

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'
//api create web
global.createweb = ""
//owmner v card
global.ytname = "YT : Dimxz" //ur yt chanel name
global.socialm = "Insta : @dimx.z_" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'ARV - BOT [MD] v5.0.0' //ur bot name
global.ownernumber = '6285813519476' //ur owner number
global.ownername = 'Dimxz' //ur owner name
global.websitex = "https://dimxz.my.id"
global.wagc = "https://chat.whatsapp.com/H7Wsp7EFbdy1iozetY1cpN"
global.themeemoji = '🪀'
global.wm = "ARV - BOT [MD]."
global.botscript = 'https://dimxz.my.id' //script link
global.packname = "ARV - BOT"
global.author = "By Dimxz"
global.creator = "6285813519476@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285813519476"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Limit mu abis!',
	nsfw: 'NSFW dimatikan di grup ini, minta ke admin untuk mengaktifkan.',
    done: 'Done✓',
    error: 'Error!',
    success: 'Nih cuy!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`[!] ${__filename} Diupdate `))
	delete require.cache[file]
	require(file)
})