

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'sanzychan01',
}

// Other
global.owner = ['923087880256']
global.packname = 'Ari'
global.prefix= ['.']
global.author = 'Ani'
global.sessionName = 'Aku'
global.reac = {
            cry:'Cried with',
            kiss: 'Kissed',
            bully:'Bullied',
            hug:'Hugged',
            lick:'Licked',
            cuddle:'Cuddled with',
            pat: 'Patted',
            smug: 'Smugged at',
            highfive: 'High-fived',
            bonk:'Bonked',
            yeet: 'Yeeted',
            blush: 'Blushed at',
            wave: 'Waved at',
            smile: 'Smiled at',
            handhold: 'is Holding Hands with',
            nom: 'is Eating with',
            bite:'Bit',
            glomp:'Glomped',
            kill: 'Killed',
            slap: 'Slapped',
            cringe: 'Cringed at',
            kick: 'Kicked',
            wink: 'Winked at',
            happy: 'is Happy with',
            awoo: 'is idk',
            poke: 'Poked',
            dance:'is Dancing with'
        }
global.mess = {
    success: '*Here you go...*',
    admin: '*Oops!! sorry dude this is only for admins*',
    botAdmin: '*To use this command make me admin if u trust me...*',
    owner: '*Sorry!! this command is for my darling developers*',
    group: '*Leave me here alone please...*',
    wait: '*Loading... please wait goshujin sama*',
}
global.thumb = fs.readFileSync('./src/info.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
