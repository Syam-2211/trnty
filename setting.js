const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const renSc = new require('./lib/scrape/noapi')
const Fichan = new require('./lib/functions')
const renSc2 = new require('./lib/scrape/scraperf')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const ab = '`'
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true

//—————「 Set Link 」—————//
global.saluran = 'Trinity Information Channels'
global.idch = "120363417526801494@newsletter" // ID saluran
global.gr = 'https://whatsapp.com/channel/0029Vb615brAzNbywHCyRc1w'
global.yt = 'https://youtube.com/@ZassOnee'
global.ig = 'https://instagram.com/szass.id' // ubah aja
global.web = "https://www.neolabsofficial.my.id"
global.email = 'officialardytc@zass.id' //serah
global.ap = 'https://wa.me/6285298027445'
global.region = 'Isekai' // serah

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Zass Onee' //ubah jadi nama mu
global.namaStore = 'Zass Onee'
global.ownerStore = 'Zass Onee'
global.rowner = [["6285298027445", "ZassOnee", true], ["-", "-", false]];
global.owner = ["6285298027445"] // GLOBAL NOMOR 
global.botname = 'Trinity Multi Device' //ubah jadi nama bot mu

//—————「 Set Media & Thumb Bot 」—————//
global.img = "https://img1.pixhost.to/images/5821/600109116_imgtmp.jpg"
global.tumburl = 'https://img1.pixhost.to/images/5821/600109116_imgtmp.jpg'
global.hstt = "https://img1.pixhost.to/images/5821/600109116_imgtmp.jpg"
global.tqto = "https://files.catbox.moe/aqsl82.jpg"
global.vn = "https://files.catbox.moe/uixt8r.mp4"

global.thumb = [
    "https://files.catbox.moe/nttd7o.jpg",
    "https://img1.pixhost.to/images/6904/617542582_zass-onee.jpg",
    "https://img1.pixhost.to/images/6904/617542583_zass-onee.jpg",
    "https://img1.pixhost.to/images/6904/617542578_zass-onee.jpg",
    "https://files.catbox.moe/31u6rt.jpeg"
]
// Sisanya di folder media

//—————「 Set Pack Sticker 」—————//
global.packname = 'Trinity V2 By zass.id' // ubah aja ini nama sticker
global.author = `YT NeoShiroko Labs` // ubah aja ini nama sticker


global.keyopenai = `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`
global.hiasan = `	◦  `
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.themeemoji = "乂"
global.tTeks = '      ◦‎‎‎  .'
global.tTeks2 = '> '
global.gris = '`'
global.wm = `Zass Onee`
global.footer = Styles(`${themeemoji} Trinity Multi Device`)
global.footer2 = Styles(`YT NeoShiroko Labs`)

//—————「 Apikeys 」—————//
global.netlify = `nfp_wixfsScxSsSP1aboRhX3XnekctaRyyova03f`
global.xfarApi = `OYi6LEZ6QY`
global.caliph = `MyBiibotz`
global.KayBii = `BiiXKayy`
global.zenzkey = `zenzkey_41b4fe7a5d` // ZahwaZein
global.btbApi = `w4SYozNA`
global.ApiNx = `kceScM`
global.skizo = `Twelve`
global.skizo2 = `kyuu`
global.beta = 'zassbtz' // https://api.betabotz.org
global.kimz = `kayy`
global.ziro = `ojbSxpdBb4`
global.xyro = `4OfcqDtWMj`
global.rose = 'Aliciazyn'
global.arif = `AR-xQWGNiqhwVaJ`
global.arifyn = `AR-eS8sE0ShK48c`
global.ibeng = `j8a2H4Tly6`
global.ibeng3 = `a5wXu8gj58`
global.ibeng2 =`uYmf6Sgjxl`
global.xeonApi = `976b505f`
global.rbot = `punyaku`
global.miftah = `free`
global.qyuApi = `XjEycutl8w`
global.ApiNeko = `7198c803`
global.ramz = `kayydev`
global.pitu = `3aa275992a`
global.yanzApi = `kyuurzy`
global.ifung = `sCbXLTDebA`
global.alya = `muzan23`
global.zoner = `6D0979`
global.koi = `tWQaPXtQH8`
global.rdnApi = `5o7fzt6nir2`
global.ouzen = `zenzkey_a3ac079e820f` //https://api.ouzen.xyz/
global.kicode = `KC-euHoZ2JgkOhs`
global.maelyn = `SvbxiWHTmt`
global.apikey = `XingYuEmperor`

//—————「 Selected 」—————//
global.trash = fs.readFileSync('./process.json')
global.document = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.link = ""
global.select = 2

//—————「 Trap Message 」—————//
global.scrap = renSc2
global.chApi = renSc
global.Func = Fichan
global.tag = `© 2025 | ${botname}`
global.systemN = `*[ System Notice ]*`
global.mess = {
    ban: Styles('*[ System Access Failed ]* you are banned by the owner'),
    badm: Styles('*[ System Notice ]* please add bot *admin*'),
    regis: Styles(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar*`),
    premium: Styles('*[ System Notice ]* this only premium user'),
    search: Styles('🔍 *Search for server. . .*'),
    done: Styles('Done Ga Bang?? Done...'),
    success: Styles('*[ Loaded Success ]*'),
    admin: Styles('*[ System Notice ]* for *admin!* not *npc*'),
    owner: Styles('*[ System Access Failed ]* Access Denied'),
    group: Styles('*[ System Notice ]* Use this in group chat!'),
    private: Styles('*[ System Notice ]* Use this in private chat!'),
    bot: Styles('*[ System Notice ]* Only Bot user'),
    wait: Styles('*[ Loading ]* Please Wait'),
    getdata: Styles('Scraping metadata . . .'),
    fail: Styles('Can\'t get metadata!'),
    error: Styles('*[ System Failed ]* Error, please contact the owner'),
    errorF: Styles('*[ System Failed ]* Sorry this feature is in error.'),
}


//—————「 Set Game 」—————//
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 10000 // Balance maksimal
//Gausah Juga

//—————「 Database Game 」—————//

global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})