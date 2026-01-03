process.on('uncaughtException', console.error)
require('./setting')
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageContent,
  generateWAMessage,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = global.baileys
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia,
  downloadMediaMessage,
  URL_REGEX
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const path = require("path");
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const FormData = require('form-data')
const zsExtract = require('zs-extract')
const gtts = require('node-gtts')
const nou = require("node-os-utils"); 
const fetch = require("node-fetch");
const archiver = require('archiver');
const ytdl = require("@vreden/youtube_scraper")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const yts2 = require('./lib/scrape/yt-search')
const yts = require("yt-search")
const scp2 = require('./lib/scrape/scraperr')
const githubstalk = require('./lib/scrape/githubstalk')
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const npmstalk = require('./lib/scrape/npmstalk')
const skyu = require('./lib/scrape/skyuu')
const cheerio = require('cheerio');
const ms = require("ms");
const scpBcl = require('@bochilteam/scraper')
const { stickerTelegram } = require('@bochilteam/scraper')
const { latinToAksara } = require('@bochilteam/scraper')
const { aksaraToLatin } = require('@bochilteam/scraper')
const { chord } = require('@bochilteam/scraper')
const ntilink = JSON.parse(fs.readFileSync("./lib/scrape/antilink.json"))
const crypto = require('crypto')
const https = require('https')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const tkApi = require('@tobyg74/tiktok-api-dl')
const moment = require('moment-timezone')
const dann = require('d-scrape')
const {
  fileTypeFromBuffer
} = require('file-type')
const {
  exec,
  spawn,
  execSync
} = require("child_process")
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList
} = require('./lib/scrape/addlist');
const {
  searchBokepindo,
  ChatBotz,
  gptPictures,
  tiktokdl,
  aioall,
  streamBokepindo,
  generateGpt,
  hentaivid,
  hentai,
  generateImages,
  pixivDl,
  Draw,
  bingimage,
  bingsearch,
  lookup,
  streamToBuffer,
  ephoto,
  processing,
  igdl3,
  GoogleBardApi,
  sfileDl,
  checkWeb,
  html2img,
  GoogleBard,
  spek,
  speklengkap,
  moewallsSearch,
  txt2imgApi,
  moewallsUrl,
  formatUptime,
  formatBytes,
  rmbg,
  igstalk,
  igdl2,
  stickersearch,
  amv1,
  amv2,
  sfileSearch,
  rexdldownload,
  dafontSearch,
  dafontDown,
  remini2,
  jarakkota,
  generateRandomPassword,
  googleImage
} = require('./src/func')
const {
  smsg,
  tanggal,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  formatp,
  parseMention,
  getRandom,
  getGroupAdmins
} = require('./lib/myfunc')
const {
  FajarNews,
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");
const { remini, pinterest } = require('./lib/scraper');
const { animeHandler, nsfwAnimeHandler } = require('./lib/scrape/listanime')
const {
MalSearchAnime,
  MalSearchCharacter,
  MalSearchManga,
  MalTopAiring,
  MalUpcoming
} = require('./lib/scrape/anime')
const {
  scrapKiryuuSearch,
  scrapKiryuuGet,
  scrapMangatoonSearch,
  scrapMangatoonGet,
  scrapMangatoonRead,
  scrapKusonime,
  animeIdLatest,
  animeIdSr,
  animeIdGet,
  manga,
  chara,
  Otakudesu
} = require('./lib/scrape/scrapeAnime')

//=================================================//
module.exports = trinity = async (trinity, m, chatUpdate, store) => {
  const {
    sender,
    isGroup
  } = m
  try {
    if (global.db.data == null) await loadDatabase()
    require('./src/schema')(m);
    var chats = global.db.data.chats[m.chat],
        users = global.db.data.users[m.sender]
        settings = global.db.data.settings
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const isCreator = [trinity.decodeJid(trinity.user.id), ...global.rowner.map(([number]) => number), ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
    //=================================================//
    function getFormattedDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
    }
    var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
trinity.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var zass = [
`${pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️'])}`,
`${pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])}`,
]
let { key } = await trinity.sendReact(m.chat, `${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`, m.key)//Pengalih isu

for (let i = 0; i < zass.length; i++) {
await sleep(65)
await trinity.sendReact(m.chat, zass[i], m.key)
//PESAN LEPAS
}
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function monospace(string) {
return '```' + string + '```'
}

    
    //=================================================//
let prefix = "."
let command = body.startsWith(prefix)
  ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  : '';
    const args = body.trim().split(/ +/).slice(1)
    const botNumber = await trinity.decodeJid(trinity.user.id)
    const text = q = args.join(" ")
    const pushname = m.pushName || "No Name"
    const {
      type,
      quotedMsg,
      mentioned,
      now,
      fromMe
    } = m
    const nomore = m.sender.replace(/[^0-9]/g, '')
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const from = mek.key.remoteJid
    const groupMetadata = m.isGroup ? await trinity.groupMetadata(from).catch(e => {}) : ''
    const warnings = db.data.chats[m.chat].warnings || {};
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
    const qtod = m.quoted? "true":"false"
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
    //=========================================\\
    //Users
    const isPrem = users.premium
    const isRegistered = users.registered
    //Chats
    
    const isBan = chats.banned
    const isNsfw = chats.nsfw
    const isAutoDlGc = chats.autodl ? true : false
    //Setting
    const isAutobio = settings.autobio ? true : false
    const isAutoread = settings.autoread ? true : false
    //=========================================\\
    // Image
    const tqtd = global.tqto
    const hst = global.hstt
    const thumbs = global.thumb
    const trinityThumb = thumbs[Math.floor(Math.random() * thumbs.length)]
    //=========================================\\
    
    // DATABASE RPG GAMES
    
let _limit = JSON.parse(fs.readFileSync('./src/rpg/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./src/rpg/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/rpg/darah.json'))
let balance = JSON.parse(fs.readFileSync('./lib/balance.json'));
let _petualang = JSON.parse(fs.readFileSync('./src/rpg/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./src/rpg/darah.js')
const { cekInventoryAdaAtauGak } = require('./src/rpg/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./src/rpg/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./src/rpg/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./src/rpg/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./src/rpg/rpg.js')
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
//const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const isPetualang = checkPetualangUser(m.sender)
// SETTING USER RPG
let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'



// FANGSIEN RPG
if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)}

// AUTO SAVE PETUALANG

if(!isPetualang&&!prefix){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./src/rpg/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
}
// BATAS RPG
    
    
    //=========================================\\
if (isAutobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await trinity.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${trinity.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
if (isAutoread) {
trinity.readMessages([m.key])
        }

    
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


    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
    const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
    const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
    if (time2 < "23:59:00") {
      var stime = Styles(`Good Night`)
    }
    if (time2 < "19:00:00") {
      var stime = Styles(`Good Evening`)
    }
    if (time2 < "18:00:00") {
      var stime = Styles(`Good Evening`)
    }
    if (time2 < "15:00:00") {
      var stime = Styles(`Good Afternoon`)
    }
    if (time2 < "11:00:00") {
      var stime = Styles(`Good Morning`)
    }
    if (time2 < "05:00:00") {
      var stime = Styles(`Good Morning`)
    }
    const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
    const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
    const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
    //=================================================//

    if (m.message) {
      trinity.sendPresenceUpdate('available', m.chat)
      console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m Trinity - Log \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat'), 'args :', chalk.white(args.length))
    }
    //==================================\\
    const getBuffer = async (url) => {
  try {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return res.data;
  } catch (err) {
    console.error(`Gagal ambil buffer dari ${url}:`, err);
    return null;
  }
};

    const fverif = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    ...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}),
  },
  message: {
    extendedTextMessage: {
      text: body,
      title: `Hmm`,
      jpgThumbnail: await (await fetch(trinityThumb)).buffer(),
    },
  },
};
    
    const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
    
    const kenzaki = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: global.idch,
    newsletterName: 'Trinity Multi Device',
    caption: body
}}
}


    async function reply(teks) {
            const po = {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `Trinity Multi Device`,
                            body: '',
                            thumbnailUrl: global.img,
                            sourceUrl: '',
                            mediaType: 1,
                            renderLargerThumbnail: false
                    }
                },
                text: teks
            };
            return trinity.sendMessage(m.chat, po, { quoted: kenzaki }
            );
        };
        
    const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
    
    const reply2 = async(teks) => {trinity.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:kenzaki})}
    
    const reply3 = async (teks) => {
  trinity.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"), // Tetap file lokal
    fileName: 'Trinity MD',
    mimetype: 'application/msword',
    jpegThumbnail: await getBuffer(global.thumbdoc),
    caption: `\n${teks}`,
  }, { quoted: kenzaki, ephemeralExpiration: 86400 });
};

const sendmes = async (hua, teks) => {
  trinity.sendMessage(hua, {
    document: fs.readFileSync("./lib/scrape/jomok.js"), // Tetap file lokal
    fileName: `${stime}`,
    caption: teks,
    mimetype: 'application/html',
    headerType: 9,
    jpegThumbnail: await getBuffer(global.thumbdoc),
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: Styles('Trinity MD'),
        body: Styles('YT NeoShiroko Labs'),
        thumbnailUrl: trinityThumb,
        showAdAttribution: true,
        renderLargerThumbnail: true,
        mediaType: 1,
        MediaUrl: gr,
        sourceUrl: '',
      }
    }
  }, { quoted: kenzaki, ephemeralExpiration: 86400 });
};

const sendres = async (huhu, teks) => {
  const thumb = await getBuffer(global.thumbdoc);
  trinity.sendMessage(huhu, {
    document: thumb, // jika ini PNG/IMG bisa langsung sebagai dokumen
    fileName: `${stime}`,
    mimetype: "image/png",
    fileLength: 99999999999,
    jpegThumbnail: trinityThumb,
    description: '© YT NeoShiroko Labs',
    caption: teks,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      businessMessageForwardInfo: {
        businessOwnerJid: global.owner
      },
      forwardedNewsletterMessageInfo: {
        newsletterName: `Update Information Trinity MD`,
        newsletterJid: global.idsal
      },
      externalAdReply: {
        title: `trinity Botz`,
        body: `Online On ${runtime(process.uptime())}`,
        jpegThumbnail: thumb,
        sourceUrl: `${global.saluran}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fcall });
};

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
if (!users) continue
let afkTime = users.afkTime
if (!afkTime || afkTime < 0) continue
let reason = users.afkReason || ''
reply2(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (users.afkTime > -1) {
reply2(`
Telah Kembali Dari Afk ${users.afkReason ? ' dengan alasan ' + users.afkReason : ''}
Selama ${clockString(new Date - users.afkTime)}
`.trim())
users.afkTime = -1
users.afkReason = ''
}

msToDate = (ms) => {
  let years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let weeks = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
  );
  let days = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  return `${years} tahun ${months} bulan ${weeks} minggu ${days} hari`;
};

msToDay = (ms) => {
  let temp = ms;
  let years = Math.floor(temp / (365 * 24 * 60 * 60 * 1000));
  temp = temp % (365 * 24 * 60 * 60 * 1000);
  let months = Math.floor(temp / (30 * 24 * 60 * 60 * 1000));
  temp = temp % (30 * 24 * 60 * 60 * 1000);
  let weeks = Math.floor(temp / (7 * 24 * 60 * 60 * 1000));
  temp = temp % (7 * 24 * 60 * 60 * 1000);
  let days = Math.floor(temp / (24 * 60 * 60 * 1000));
  temp = temp % (24 * 60 * 60 * 1000);
  let hours = Math.floor(temp / (60 * 60 * 1000));
  temp = temp % (60 * 60 * 1000);
  let minutes = Math.floor(temp / (60 * 1000));
  temp = temp % (60 * 1000);

  let result = "";
  if (years > 0) {
    result += years + (years > 1 ? " tahun " : " tahun ");
  }
  if (months > 0) {
    result += months + (months > 1 ? " bulan " : " bulan ");
  }
  if (weeks > 0) {
    result += weeks + (weeks > 1 ? " minggu " : " minggu ");
  }
  if (days > 0) {
    result += days + (days > 1 ? " hari " : " hari ");
  }
  if (hours > 0) {
    result += hours + (hours > 1 ? " jam " : " jam ");
  }
  if (minutes > 0) {
    result += minutes + (minutes > 1 ? " menit " : " menit ");
  }
  return result.trim();
};

    async function checkBandwidth() {
      let ind = 0;
      let out = 0;
      for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
      }
      return {
        download: formatp(ind),
        upload: formatp(out),
      };
    }
    async function dellCase(filePath, caseNameToRemove) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Terjadi kesalahan:', err);
          return;
        }
        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error('Terjadi kesalahan saat menulis file:', err);
            return;
          }
          console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
      });
    }
const downloadMp3 = async (Link, Quality = 128) => {
	try {
		if (!isUrl(Link)) return reply("Url Kamu Bermasalah, Try Again!")
		let data = await ytdl.ytmp3(Link, Quality);
		await trinity.sendMessage(m.chat, {
			audio: {
				url: data.download.url
			},
			mimetype: 'audio/mpeg',
			contextInfo: {
				forwardingScore: 9999999,
				isForwarded: true,
				externalAdReply: {
					title: `YTMP3 - ${data.download.quality}`,
					body: data.metadata.title,
					mediaType: 1,
					previewType: 0,
					renderLargerThumbnail: true,
					thumbnailUrl: data.metadata.thumbnail,
					sourceUrl: Link
				}
			}
		}, {
			quoted: kenzaki
		});
	} catch (error) {
    await reply('Maaf, audio tidak bisa didownload.');
}
}
const downloadMp4 = async (Link, Quality = 360) => {
	try {
		if (!isUrl(Link)) return reply("Url Kamu Bermasalah, Try Again!")
		let data = await ytdl.ytmp4(Link, Quality);
		const caption = `*${data.metadata.title}*
*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Quality* : ${data.download.quality}
*⌬ Channel* : ${data.metadata.author.name}`;

		await trinity.sendMessage(m.chat, {
			video: {
				url: data.download.url
			},
			caption: caption,
			gifPlayback: false
		}, {
			quoted: kenzaki
		});
	} catch (error) {
    await reply('Maaf, audio tidak bisa didownload.');
}
}

const hitsnya = () => {
                settings.hitstat += 1
            }
            hitsnya()
 
const hituser = () => {
                users.hit += 1
            }
            hituser()           
try {
ppuser = await trinity.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

// Anti Link
let teksjpm = `*MASUK MAS, SERING BAGI BAGI VPS*\n\n${gr}`;
if (chats.autojpm) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply2(`${teksjpm}_`)
let gclink = (`https://chat.whatsapp.com/`+await trinity.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return trinity.sendMessage(m.chat, {text: `${teksjpm}`})
if (isAdmins) return trinity.sendMessage(m.chat, {text: `${teksjpm}`})
await trinity.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
}) 
}
}
// Sologo sessions 
if (global.logoSession && m.sender === global.logoSession.from && /^\d+$/.test(body)) {
  let index = parseInt(body) - 1;
  let logos = global.logoSession.data;

  if (index < 0 || index >= logos.length) return reply(`Nomor tidak valid! Hanya tersedia 1 - ${logos.length}`);

  let selected = logos[index];
  await trinity.sendMessage(m.chat, {
    image: { url: selected.thumb },
    caption: `*Logo Pilihan ke-${index + 1}*\n📝 ${selected.title}\n${selected.desc}`
  }, { quoted: m });
}
// FUNCTION ANTILINK
if (chats.antilink && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await trinity.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`hem hem izin dulu atmin (っ˘̩╭╮˘̩)っ`)
}
if (chats.antilink && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`https`)) {
await trinity.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`upps tidak ada link ಠ︵ಠ`)
}
// ANTI TAG STATUS WHATSAPP
if (chats.antitagsw && m.mtype === "groupStatusMentionMessage") {
    if (!m.key.fromMe && !isAdmins && !isCreator && isBotAdmins) {
        warnings[m.sender] = (warnings[m.sender] || 0) + 1;

        await trinity.sendMessage(m.chat, { delete: m.key });

        if (warnings[m.sender] >= 5) {
            reply("Dah ah cape ngingetin, out aja sono");
            await trinity.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            delete warnings[m.sender];
        } else {
            reply(`Peringatan ${warnings[m.sender]}/5 ❗ Jangan spam tag, nanti di-kick.`);
        }

        db.data.chats[m.chat].warnings = warnings;
    }
}

if (isCreator || isPrem) {
    } else {
      if (opts['pconly'] && m.chat.endsWith('g.us')) {
        return reply(`@${m.sender.split('@')[0]} Maaf kak bot sedang di set pconly silahkan chat di private message`);
    }
      if (opts['gconly'] && !m.chat.endsWith('g.us')) {
        return reply(`@${m.sender.split('@')[0]} Maaf kak bot sedang di set gconly silahkan join group bot`);
      }
    }

 if (chats.antibot && !isCreator && !isAdmins) {
    if (m.isBaileys && m.fromMe == false){
        if (!isAdmins || !isBotAdmins){		  
        } else {
          reply(`*[ System Notice ]* bot detected`)
    return await trinity.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
}


function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}




//GAME
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

// GAME TEBAK GAMBAR BY DARWIN

if ((from in tebakgambar2)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar2[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar2[from].jawaban}*`);
delete tebakgambar2[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
trinity.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.balance += 150
clearTimeout(waktu);
delete tebakgambar2[from];
} else trinity.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME BY SURYA
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
users.balance += 200
trinity.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else trinity.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU BY SURYA
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebaklagu[from];
}
}

// GAME KUIS BY SURYA
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete kuis[from];
}
}

// GAME SIAPAKAH AKU BY SURYA
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete siapakahaku[from];
}
}

// GAME TEBAK KALIMAT BY SURYA
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakkalimat[from];
}
}

// GAME TEBAK KATA BY SURYA
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakkata[from];
}
}

// GAME TEBAK LIRIK BY SURYA
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebaklirik[from];
}
}

// GAME TEBAK KIMIA BY SURYA
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakkimia[from];
}
}

// GAME TEBAK BENDERA BY SURYA
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
}
}

// GAME ASAH OTAK BY SURYA
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete asahotak[from];
}
}

// GAME SUSUN KATA BY SURYA
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete susunkata[from];
}
}

// GAME CAK LONTONG BY SURYA
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete caklontong[from];
}
}

// GAME KUIS MATH BY SURYA
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (body.includes(jawaban)) {
reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${soal}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete kuismath[from];
}
}

// GAME FAMILY 100 BY SURYA
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users.balance += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}



// FUNCTION PETAK BOMB BY SURYA
let pilih = "✅️", bomb = "💥";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !prefix) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
trinity.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
let bombend = `*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`;
trinity.sendMessage(m.chat, {
text: bombend,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | B O M B`,
body: '',
thumbnailUrl: "https://telegra.ph/file/287cbe90fe5263682121d.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
trinity.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
users.balance -= 100
delete petakbom[sender];
} else await reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
trinity.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.balance += 250
delete petakbom[sender];
} else reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// FUNCTION SUIT PVP POLLING BY DARWIN
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
users.balance -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await trinity.sendText(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await trinity.sendText(from, ggy, kenzaki)
if (!roof.pilih) await trinity.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await trinity.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await trinity.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
users.balance -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await trinity.sendText(from, sffp, kenzaki)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await trinity.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:kenzaki})
if (!roof.pilih2) await trinity.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await trinity.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await trinity.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await trinity.sendText(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : '+roof.hadiah+' balance'}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? global.db.data.users[roof.p].balance += roof.hadiah : global.db.data.users[roof.p].balance -= roof.hadiah
} else if (roof.p2 == win) {
roof.p2 == win ? global.db.data.users[roof.p2].balance += roof.hadiah : global.db.data.users[roof.p2].balance -= roof.hadiah
}
delete suit[roof.id]
}
}

// FUNCTION TICTACTOE BY SURYA
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
trinity.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users.balance -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
trinity.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
trinity.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
trinity.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
trinity.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
trinity.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
trinity.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
trinity.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

// ChatSimi
if (chats.simichat) {
let res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${budy.toLowerCase()}&badword=true`)
reply(res.result)
}

// AutoDl
if (chats.autodl) {
    try {
        if (budy.match(`instagram.com`)) {
            reply(`*「 LINK INSTAGRAM TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let anu = await igdl2(budy);
            trinity.sendMessage(m.chat, { video: { url: anu[0].url }, caption: `Done Sayang >///<`}, { quoted: kenzaki });
        } else if (budy.match(`tiktok.com`)) {
            reply(`*「 LINK TIKTOK TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let old = new Date()
const dlt = require('./lib/scrape/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(budy)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await trinity.sendMessage(m.chat, { image: { url: k }}, { quoted: kenzaki });
})
} else {
trinity.sendMessage(m.chat, { video: { url: tiktuk.result.video }, caption: `${gris}[ T I K T O K - D O W N L O A D E R ]${gris}\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: fverif })
}
        } else if (budy.match(`facebook.com|fb.watch`)) {
            reply(`*「 LINK FACEBOOK TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let dat = await fetchJson(`https://aemt.me/download/fbdl?url=${budy}`);
            var urlp = dat.result;
            trinity.sendMessage(m.chat, { video: { url: urlp.HD }, mimetype: 'video/mp4' });
            trinity.sendMessage(m.chat, { audio: { url: url.audio }, mimetype: 'audio/mp4' }, { quoted: kenzaki });
        } else if (budy.match(`youtube.com|youtu.be`)) {
            reply(`*「 LINK YOUTUBE TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            downloadMp4(budy);
            downloadMp3(budy);
        } else if (budy.match(`threads.net`)) {
            reply(`*「 LINK THREADS TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            const json = await fetchJson(`https://aemt.me/download/threads?url=${text}`);
            trinity.sendMessage(m.chat, { video: { url: json.result.video_urls[0].download_url }, caption: mess.done }, { quoted: kenzaki });
        } else if (budy.match(`twitter.com`)) {
            reply(`*「 LINK TWITTER TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let json = await chApi.twitter(budy);
            trinity.sendMessage(m.chat, { video: { url: json.HD }, caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅" }, { quoted: kenzaki });
        } else if (budy.match(`xnxx.com`)) {
            reply(`*「 LINK XNXX TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let anu = await chApi.xnxxdl(budy);
            const cpt = anu.result.title;
            const nick = anu.result.info;
            const dr = anu.result.duration;
            trinity.sendMessage(m.chat, { video: { url: anu.result.files.high }, caption: `乂 X N X X - D L\n\n   ◦  Judul : ${cpt}\n   ◦  Durasi : ${dr}\n   ◦  Info : ${nick}\n\n${footer}` }, { quoted: kenzaki });
        } else if (budy.match(`xvideos.com`)) {
            reply(`*「 LINK XVIDEOS TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let anu = await dylux.xvideosdl(budy);
            let tks = `乂 X V I D E O S - D L\n\n   ◦  Judul : ${anu.title}\n   ◦  Views : ${anu.views}\n   ◦  Likes : ${anu.likes}\n   ◦  Size : ${anu.size}\n\n${footer}`;
            trinity.sendMessage(m.chat, { video: { url: anu.url_dl }, caption: tks }, { quoted: kenzaki });
        } else if (budy.match(`mediafire.com`)) {
            reply(`*「 LINK MEDIAFIRE TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            const { mediafireDl } = require('./lib/scrape/mediafire.js');
            const baby1 = await mediafireDl(budy);
            if (parseFloat(baby1[0].size.split('MB')[0]) >= 50) {
                return reply('😅 Waduh Filenya Terlalu Besar...');
            }
            trinity.sendMessage(m.chat, { document: { url: baby1[0].link }, fileName: baby1[0].nama, mimetype: baby1[0].mime }, { quoted: kenzaki });
        }
    } catch (err) {
        console.log(err);
        reply("Emmm anu om, error hehe:v");
    }
}

//─────「 Kumpulan Kata-Kata Quotes 」─────//
const quotesList = {
  galau: [
    "Aku senyum, tapi bukan berarti aku bahagia.",
    "Sendiri bukan berarti sepi, kadang bersama pun terasa sunyi.",
    "Mereka pergi tanpa pamit, aku bertahan tanpa alasan.",
    "Kadang rindu hadir tanpa diundang, tapi pergi tanpa peringatan.",
    "Kesepian paling menyakitkan adalah saat kamu dikelilingi orang tapi tetap merasa sendiri."
  ],
  katabijak: [
    "Semua bisa dimulai ulang, kecuali waktu yang telah hilang.",
    "Kesabaran adalah kunci dari ketenangan batin.",
    "Lebih baik gagal mencoba, daripada gagal karena tidak pernah mencoba.",
    "Setiap orang punya waktu suksesnya masing-masing. Jangan bandingkan waktumu dengan orang lain.",
    "Jangan remehkan prosesmu hanya karena belum terlihat hasilnya."
  ],
  katacinta: [
    "Cinta adalah ketika kamu melihat kekurangannya, tapi tetap ingin bersamanya.",
    "Tak perlu kata sempurna untuk mencintai, cukup ketulusan untuk bertahan.",
    "Kamu tahu kamu jatuh cinta saat kamu tak ingin tidur, karena kenyataan lebih indah dari mimpi.",
    "Aku mencintaimu diam-diam, seperti malam mencintai bintang.",
    "Cinta itu sederhana, yang ribet ekspektasi manusianya."
  ],
  katahacker: [
    "Jangan serang sistem, pelajari dan perkuat sistemmu.",
    "Hacker bukan kriminal. Hacker adalah pemikir.",
    "Di dunia maya, yang kuat adalah yang tahu celahnya.",
    "Exploit tidak berbahaya jika digunakan untuk memperbaiki, bukan menghancurkan.",
    "Bug terburuk adalah manusia yang tak mau belajar."
  ],
  katailham: [
    "Setiap langkah kecil adalah bagian dari perjalanan besar.",
    "Hari ini mungkin sulit, tapi kamu bertahan. Itu sudah luar biasa.",
    "Gagal bukan akhir, itu awal dari cara yang lebih baik.",
    "Kamu gak harus hebat untuk mulai. Tapi kamu harus mulai untuk jadi hebat.",
    "Jangan menunggu motivasi, ciptakan motivasi dari tindakanmu."
  ],
  katasenja: [
    "Senja tak pernah ingkar janji, ia selalu datang meski tak lama.",
    "Kita seperti senja dan malam, dekat tapi tak pernah benar-benar bersatu.",
    "Senja mengingatkanku padamu, indah tapi sementara.",
    "Di bawah langit jingga, aku menulis namamu di dalam doa.",
    "Senja adalah jeda, antara harapan dan kenyataan."
  ],
  katasindiran: [
    "Kalau udah nggak penting, nggak usah sok sibuk pura-pura peduli.",
    "Senyum palsu bisa terlihat dari matanya.",
    "Ngomong di belakang? Hebat juga, kirain cuma bisa depan kamera.",
    "Kadang diam adalah sindiran terbaik untuk orang yang tak paham kata.",
    "Jangan bangga jadi toxic, racun juga bisa dibasmi."
  ],
  motivasi: [
    "Jangan berhenti hanya karena lelah, berhentilah ketika selesai.",
    "Bukan keajaiban yang membuatmu sukses, tapi usaha dan konsistensi.",
    "Setiap hari adalah kesempatan untuk jadi versi terbaik dirimu.",
    "Semangat bukan datang dari luar, tapi dari keputusanmu sendiri untuk tidak menyerah.",
    "Bangkit bukan soal seberapa kuat kamu, tapi seberapa niat kamu mau mencoba lagi."
  ],
  quotesanime: [
    "A lesson without pain is meaningless. - Edward Elric",
    "The world isn’t perfect. But it’s there for us, doing the best it can. - Roy Mustang",
    "It’s not the face that makes someone a monster; it’s the choices they make with their lives. - Naruto",
    "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own. - Jiraiya",
    "Fear is not evil. It tells you what your weakness is. - Gildarts"
  ],
  quotesdilan: [
    "Aku rindu, tapi aku tak ingin mengganggumu.",
    "Kamu tahu kenapa aku suka kamu? Karena cuma kamu yang bisa bikin aku senyum saat lagi sedih.",
    "Jarak bukan alasan kalau cinta memang kuat.",
    "Aku bukan orang baik, tapi kalau kamu jatuh aku yang paling panik.",
    "Cinta itu bukan logika, tapi perasaan."
  ],
  quotesislamic: [
    "Sabar itu bukan diam, tapi menerima dengan lapang dan tetap melangkah.",
    "Shalat bukan hanya kewajiban, tapi kebutuhan.",
    "Tuhan tidak pernah mengecewakan, hanya manusia yang tidak sabar.",
    "Bersyukur dalam sempit, bersabar dalam luas.",
    "Allah melihat usaha, bukan hasil semata."
  ],
  pantun: [
    "Burung elang terbang tinggi,\nMembawa ranting dari rimba.\nJika kamu terus menghindar,\nCinta ini takkan bernyawa.",
    "Pergi ke kota naik kereta,\nBawa bekal dari nenek.\nKalau kamu tetap begitu,\nAku mundur aja deh.",
    "Ke taman bunga naik sepeda,\nHati senang tak terkira.\nKalau kamu beneran suka,\nJangan cuma janji aja."
  ],
  puisi: [
    "Hujan sore ini,\nMengingatkanku pada kamu yang pernah pergi.\nRintiknya seperti sisa kata,\nYang tak sempat diucap saat perpisahan tiba.",
    "Di langit malam, aku menulis harapan.\nBersama bintang, aku kirimkan rindu.\nMeskipun jauh dalam nyata,\nDalam doa kita tetap satu.",
    "Langit biru bersaksi,\nAtas rasa yang tak selesai.\nAku menulis tentang kamu,\nPada halaman yang tak pernah tuntas."
  ],
  faktaunik: [
    "Kucing tidak bisa merasakan rasa manis.",
    "Otak manusia memiliki lebih banyak koneksi daripada jumlah bintang di galaksi.",
    "Lebah bisa mengenali wajah manusia.",
    "Pisang adalah berry, sedangkan stroberi bukan.",
    "Lumba-lumba tidur dengan satu mata terbuka."
  ],

  // Tambahan baru:
  quotesgacha: [
    "Berdoa dulu sebelum gacha, walau tahu hasilnya tetap nyesek.",
    "10x pull, dapat semua weapon. Gacha = Sakit tapi candu.",
    "Rate up is a lie, tapi harapan tetap hidup.",
    "Setiap pity ada cerita, dan tiap skip ada luka.",
    "Semua orang pernah menjadi budak banner limited."
  ],
  quoteswibu: [
    "Lebih baik nonton anime daripada mikirin yang gak pasti.",
    "Waifu bukan sekadar karakter, tapi pelipur lara dalam sunyi.",
    "Realita menyakitkan, anime menyembuhkan.",
    "Kalo kamu nggak bisa jadi hero, jadilah support kayak Megumin.",
    "Anime bukan pelarian, tapi pelindung dari realita."
  ],
  quotessad: [
    "Tersenyum di depan orang, menangis saat sendiri.",
    "Aku ingin dilupakan, tapi tetap dikenang.",
    "Lelah menjadi kuat, tapi tak ada tempat untuk lemah.",
    "Duka kadang tak butuh alasan, hanya datang dan menetap.",
    "Bukan tak ingin sembuh, hanya belum tahu caranya."
  ],
  quotesrandom: [
    "Kalau kopi saja bisa pahit, apalagi realita.",
    "Orang sabar tempatnya di surga, tapi sebelum itu, banyak diuji di dunia.",
    "Pura-pura kuat adalah kelemahan terindah.",
    "Hidup ini seperti sinyal Wi-Fi, kadang kuat kadang hilang.",
    "Kalau semua gampang, level up-nya di mana?"
  ],
  quotesdev: [
    "Code lebih jujur daripada manusia.",
    "Debugging adalah proses membuat bug baru secara perlahan.",
    "Programmer: Mengubah kopi menjadi bug.",
    "Error bukan musuh, tapi guru paling tegas.",
    "Behind every great developer is a stack of failed deploys."
  ]
}

//─────「 Fungsi Umum Quotes 」─────//
async function handleQuote(cmd, m, reply, reply2, db, isCreator, isPrem) {
  const list = quotesList[cmd]
  if (!list) return reply2("Fitur quotes tidak ditemukan!")
  if (db.data.users[m.sender].limit < 1) return reply('Limit pemakaian tercapai.')
  reply2(list[Math.floor(Math.random() * list.length)])
  if (!isCreator && !isPrem) db.data.users[m.sender].limit -= 1
  db.data.users[m.sender].exp += await randomNomor(20)
}

    const totalFitur = () =>{
            var mytext = fs.readFileSync("./trinity-z.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
        let bdw = await checkBandwidth()

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        
        let timestamp = speed()
        let latensii = speed() - timestamp
    //=================================\\
    if (body.startsWith('>')) {
      if (!isCreator) return false
      try {
        let evaled = await eval(body.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
      } catch (err) {
        reply(String(err))
      }
    }
    if (body.startsWith('$')) {
      if (!isCreator) return false
      qur = body.slice(2)
      exec(qur, (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) {
          reply(stdout)
        }
      })
    }
    if (body.startsWith('=>')) {
      if (!isCreator) return false
      try {
        return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
      } catch (e) {
        reply(e)
      }
    }
    //
    if (!body.startsWith(prefix)) {
      return;
    }
    
    //=================================\\
    switch (command) {
    // M A I N - M E N U
case 'menu': {
  let listmenu1 = `⧉ Hello, ${pushname }
I am a system-based WhatsApp bot connected to modular AI service, available 24/7 for command access and data flow.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name* : ${botname}
┃ ◦ *Library* : @whiskeysockets/baileys
┃ ◦ *Speed*   : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*  : ${runtime(process.uptime())}
┃ ◦ *Modules* : ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

╭─⧉ 𝗠𝗘𝗡𝗨 𝗧𝗥𝗘𝗘
│ • .allmenu
│ • .animemenu
│ • .mainmenu
│ • .nsfwmenu
│ • .ownermenu
│ • .groupmenu
│ • .stickermenu
│ • .downloadmenu
│ • .gamemenu
│ • .aimenu
│ • .rpgmenu
│ • .toolsmenu
│ • .convertmenu
│ • .ephotomenu
│ • .funmenu
│ • .saluranmenu
│ • .stalkmenu
│ • .searchmenu
│ • .panelmenu
│ • .quotesmenu
╰─────────────────

╭─⧉ 𝗜𝗡𝗙𝗢 & 𝗟𝗜𝗡𝗞
│ • .owner  → Developer Info
│ • .totalfitur→ Command Count
│ • .runtime → Bot Uptime
│ • .disk    → Storage Monitor
│ • .ping    → Latency Test
│ • .server   → Host Info
│ • .sc      → Source Code
│ • .tqto    → Credits
│
│ ◉ *Web:* https://neolabsofficial.my.id
│ ◉ *YT:* https://youtube.com/@ZassOnee
╰─────────────────

『 © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛʀɪɴɪᴛʏ ɴᴇᴛ 』
`

  await trinity.sendMessage(m.chat, {
  document: fs.readFileSync("./lib/scrape/jomok.js"),
  fileName: `${stime} ${pushname}`,
  caption: listmenu1,
  mimetype: "application/javascript",
  jpegThumbnail: await getBuffer(trinityThumb),
  contextInfo: {
    isForwarded: true,
    forwardingScore: 9999,
    mentionedJid: [m.sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idch,
      newsletterName: global.saluran
    },
    externalAdReply: {
      title: global.footer,
      body: global.footer2,
      thumbnail: await getBuffer(trinityThumb),
      renderLargerThumbnail: true,
      mediaType: 1,
      sourceUrl: global.yt
    }
  }
}, {
  quoted: kenzaki,
  ephemeralExpiration: 86400
});
    await trinity.sendMessage(m.chat, {
        audio: { url: global.vn },
        mimetype: 'audio/mpeg',
        ptt: true
    }, { quoted: kenzaki });
}
break

case 'allmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to modular AI service, available 24/7 for command access and data flow.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*Zass Onee* is a WhatsApp bot developed using NodeJS and Baileys library. This bot was created to provide a better user experience in interacting on the platform.

╭─⧉ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
│ • .set
│ • .setbotbio
│ • .setbio
│ • .setquoted
│ • .setimage
│ • .setbotname
│ • .setowner
│ • .setdac
│ • .setexif
│ • .setppbot
│ • .setppgroup
│ • .setppgrup
│ • .setppgc
│ • .autodl
│ • .self
│ • .public
│ • .block 
│ • .unblock
│ • .restart
│ • .autobio 
│ • .autoread
│ • .backup
│ • .onlypc 
│ • .onlygc
│ • .addcase 
│ • .getcase 
│ • .delcase 
│ • .listcase
│ • .cekdrive 
│ • .bandwidth
│ • .listpc 
│ • .listgc
│ • .bcimg 
│ • .bcimg2 
│ • .bcgc
│ • .listown
│ • .delsesi 
│ • .creategc 
│ • .cekidgc
│ • .join 
│ • .getcontact
╰─────────────────

╭─⧉ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨
│ • .daftar
│ • .disk
│ • .hitday
│ • .hapusakun
│ • .claim
│ • .tes
│ • .server
│ • .unreg
│ • .ping
│ • .owner
│ • .runtime
│ • .registrasi
│ • .scriptl
│ • .tqto
│ • .totalfitur
╰─────────────────

╭─⧉ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
│ • .brat
│ • .bratvid
│ • .s 
│ • .sticker 
│ • .sgif 
│ • .stickergif
│ • .qc 
│ • .qc2 
│ • .stickmeme 
│ • .smeme 
│ • .qcimg
│ • .wm 
│ • .wmvideo
╰─────────────────

╭─⧉ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
│ • .add 
│ • .antilink 
│ • .antibot
│ • .antitagsw
│ • .buka
│ • .closetime 
│ • .cekasalmember
│ • .delppgc 
│ • .demote 
│ • .demoteall
│ • .editdesk 
│ • .editgroup 
│ • .editinfo
│ • .editsubjek 
│ • .ephemeral 
│ • .demote
│ • .hidetag
│ • .inspect 
│ • .invite 
│ • .kick 
│ • .kickall
│ • .leave 
│ • .linkgroup 
│ • .mute
│ • .opentime 
│ • .promote 
│ • .promoteall
│ • .resetlinkgc 
│ • .sendlinkgc
│ • .setdesk
│ • .setppgc 
│ • .setname
│ • .sider
│ • .tutup
│ • .tagall 
│ • .totag 
│ • .welcome
╰─────────────────

╭─⧉ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨
│ • .capcut
│ • .gdrive
│ • .igdl
│ • .mediafire
│ • .twitdl
│ • .tiktok
│ • .tiktok2
│ • .tiktok3
│ • .tiktokslide
│ • .tiktokaudio
│ • .tiktoksearch
│ • .ttsearch
│ • .terabox
│ • .ytmp4
│ • .ytmp3
│ • .yts
│ • .play
│ • .pin
│ • .spotifyplay
│ • .spotifymp3
│ • .spotify
│ • .git
│ • .gitclone
│ • .get
│ • .lirik
│ • .videy
│ • .xnxx
│ • .xnxxdl
╰─────────────────

╭─⧉ 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨
│ • .modegame 
│ • .werewolf 
│ • .casino
│ • .suit 
│ • .tictactoe 
│ • .dare 
│ • .petakbom
│ • .delpetakbom 
│ • .tebakgambar 
│ • .tebakanime
│ • .tebakkabupaten 
│ • .tebaklagu 
│ • .kuis
│ • .tebakkalimat 
│ • .tebakkata 
│ • .tebaklirik
│ • .tebakkimia 
│ • .tebakbendera 
│ • .susunkata
│ • .slot 
│ • .asahotak 
│ • .siapakahaku
│ • .caklontong 
│ • .math 
│ • .family100
╰─────────────────

╭─⧉ 𝗔𝗜 𝗠𝗘𝗡𝗨
│ • .ai 
│ • .animegen
│ • .createimg
│ • .gimage 
│ • .aiphotolabs 
│ • .photoleap
╰─────────────────

╭─⧉ 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨
│ • .me 
│ • .inventory 
│ • .mining
│ • .buy 
│ • .sell 
│ • .heal 
│ • .hunt 
│ • .adventure
│ • .luckyday 
│ • .killslime 
│ • .killgoblin 
│ • .killdevil
│ • .killbehemoth 
│ • .killdemon 
│ • .killdemonking
│ • .joinrpg 
│ • .sellikan 
│ • .sellbesi 
│ • .sellemas
│ • .jelajah 
│ • .mancing 
│ • .jualikan 
│ • .jualcoal
│ • .jualstone 
│ • .jualingot 
│ • .jualkayu 
│ • .jualbahankimia
│ • .lebur 
│ • .nebang 
│ • .goplanet 
│ • .ojek
╰─────────────────

╭─⧉ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨
│ • .bluearchivelogo
│ • .createqr
│ • .niggafy
│ • .hitamkan
│ • .hd
│ • .removebg
│ • .bukavn
│ • .rvo
│ • .ustadz
│ • .translate
│ • .tr
│ • .githubrepo
│ • .npmjs
╰─────────────────

╭─⧉ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨
│ • .tolatin 
│ • .toaksara 
│ • .tohuruf
│ • .toqr 
│ • .tovid 
│ • .toimage 
│ • .toimg
│ • .tomp4 
│ • .tomp3 
│ • .tovn 
│ • .togif 
│ • .tourl
│ • .tourl2
╰─────────────────

╭─⧉ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨
│ • .anjing  
│ • .apakah [text]  
│ • .asu  
│ • .babi  
│ • .bajingan  
│ • .bangke  
│ • .bangsat  
│ • .bego  
│ • .bodoh  
│ • .cacat  
│ • .cekcantik
│ • .cekganteng
│ • .cekgay
│ • .ceklesbi
│ • .ceksange
│ • .dakjal  
│ • .gay  
│ • .gaycek
│ • .goblok  
│ • .horny  
│ • .iblis  
│ • .jancok  
│ • .janda  
│ • .jomokcek
│ • .lesbicek
│ • .lesby  
│ • .mastah  
│ • .monyet  
│ • .newbie  
│ • .ngentod  
│ • .ngentot  
│ • .ustadz
│ • .pantek  
│ • .pantex  
│ • .peak  
│ • .perawan  
│ • .piatu  
│ • .pintar  
│ • .pinter  
│ • .puki  
│ • .sange  
│ • .sangean  
│ • .setan  
│ • .tolol  
│ • .wibu  
│ • .wangy
│ • .yatim
╰─────────────────

╭─⧉ 𝗦𝗔𝗟𝗨𝗥𝗔𝗡 𝗠𝗘𝗡𝗨
│ • .reactch 
│ • .chatch 
│ • .cekidch
╰─────────────────

╭─⧉ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨
│ • .1gb
│ • .2gb
│ • .3gb
│ • .4gb
│ • .5gb
│ • .6gb
│ • .7gb
│ • .8gb
│ • .9gb
│ • .10gb 
│ • .unlimited
│ • .listpanel 
│ • .listadmin
│ • .delpanel 
│ • .deladmin
╰─────────────────

╭─⧉ 𝗤𝗨𝗢𝗧𝗘𝗦 𝗠𝗘𝗡𝗨
│ • .galau
│ • .katabijak
│ • .katacinta
│ • .katahacker
│ • .katailham
│ • .katasenja
│ • .katasindiran
│ • .motivasi
│ • .quotesanime
│ • .quotesdilan
│ • .quotesislamic
│ • .quotesgacha
│ • .quoteswibu
│ • .quotessad
│ • .quotesrandom
│ • .quotesdev
│ • .pantun
│ • .puisi
│ • .faktaunik
╰─────────────────

╭─⧉ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨
│ • .animeinfo [judul]
│ • .ayaka
│ • .bluearchive
│ • .cosplay
│ • .character [nama]
│ • .chika
│ • .darkness
│ • .ei
│ • .hinata
│ • .ichika
│ • .itachi
│ • .itsuki
│ • .konachan
│ • .kanna
│ • .kiryuu [judul]
│ • .kiryuuget [url]
│ • .loli
│ • .lumine
│ • .marin
│ • .megumin
│ • .miku
│ • .mikuqq
│ • .mikasa
│ • .manga [judul]
│ • .mangatoon [judul]
│ • .mangatoonget [url]
│ • .mangaread [url]
│ • .mori
│ • .naruto
│ • .neko
│ • .nino
│ • .picre
│ • .raiden
│ • .ram
│ • .rem
│ • .sakura
│ • .sasha
│ • .shinobu
│ • .topanime
│ • .upcominganime
│ • .waifu
│ • .yandere
│ • .yotsuba
│ • .yor
│ • .yui
│ • .zerotwo
╰─────────────────

╭─⧉ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 (𝟭𝟴+)
│ • .animegen
│ • .blowjob
│ • .boobs
│ • .feet
│ • .hentai
│ • .lewd
│ • .lewdk
│ • .lewdn
│ • .neko2 (NSFW)
│ • .nsfwneko
│ • .randomnsfw
│ • .rule34
│ • .solo
│ • .trap
│ • .waifu2 (NSFW)
│ • .yuri
╰─────────────────

╭─⧉ 𝗦𝗧𝗔𝗟𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
│ • .tiktokstalk
│ • .githubstalk
│ • .githubrepo 
│ • .npmstalk
│ • .npmjs
╰─────────────────

╭─⧉ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨
│ • .tiktoksearch
│ • .ttsearch
│ • .xnxxsearch
│ • .ytsearch
│ • .yts
│ • .apksearch
│ • .apk4free
│ • .apkcombo
│ • .modapk
│ • .playstore
╰─────────────────

╭─⧉ 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨
│ • .american-flag-text
│ • .advanced-glow
│ • .bluearchivelogo
│ • .balogo
│ • .carbonify
│ • .3d-underwater-text
│ • .3d-hologram-text
│ • .1917-style-text
│ • .digital-glitch-text
│ • .cartoon-style-graffiti-text
│ • .blackpink-style-logo
│ • .blackpink-style-logo-v2
│ • .bear-logo
│ • .gradient-text
│ • .glowing-text
│ • .galaxy-wallpaper
│ • .galaxy-style-logo
│ • .hitamkan
│ • .eraser-deleting-text
│ • .nigeria-flag-text
│ • .neon-light-text
│ • .neon-glitch-text
│ • .niggafy
│ • .sologo
│ • .ustadz
│ • .luxury-gold-text
│ • .light-green-neon
│ • .watercolor-text
│ • .typography-text-on-pavement
│ • .text-clouds-in-the-sky
│ • .royal-text
│ • .pixel-glitch-text
│ • .write-text-on-wet-glass
│ • .write-in-sand-summer-beach
│ • .write-in-sand-summer-beach-v2
╰─────────────────

> 『 © Powered by Trinity Net 』
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'ownermenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets
│ •baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library. It was designed to enhance user experience with seamless, intelligent automation.

╭─⧉ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
│ • .set
│ • .setbotbio 
│ • .setbio      
│ • .setquoted
│ • .setimage                 
│ • .setbotname
│ • .setowner                 
│ • .setdac
│ • .setexif                  
│ • .setppbot
│ • .setppgroup 
│ • .setppgc    
│ • .autodl
│ • .self 
│ • .public           
│ • .block 
│ • .unblock
│ • .restart                  
│ • .autobio 
│ • .autoread
│ • .backup                   
│ • .onlypc 
│ • .onlygc
│ • .addcase 
│ • .getcase       
│ • .delcase 
│ • .listcase
│ • .cekdrive 
│ • .bandwidth    
│ • .listpc 
│ • .listgc
│ • .bcimg 
│ • .bcimg2          
│ • .listown
│ • .bcgc                     
│ • .delsesi 
│ • .creategc
│ • .cekidgc 
│ • .join          
│ • .getcontact
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'mainmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨
│ • .daftar
│ • .disk
│ • .hitday
│ • .hapusakun
│ • .claim
│ • .tes
│ • .server
│ • .unreg
│ • .ping
│ • .owner
│ • .runtime
│ • .registrasi
│ • .scriptl
│ • .tqto
│ • .totalfitur
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'stickermenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
│ • .brat
│ • .bratvid
│ • .s 
│ • .sticker
│ • .sgif 
│ • .stickergif
│ • .qc 
│ • .qc2
│ • .qcimg
│ • .stickmeme 
│ • .smeme
│ • .wm
│ • .wmvideo
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'groupmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
│ • .add 628xx
│ • .kick 628xx
│ • .promote 
│ • .demote 628xx
│ • .getid
│ • .promoteall
│ • .demoteall
│ • .tagall [text] 
│ • .hidetag [text] 
│ • .totag [reply media]
│ • .antilink on/off
│ • .antibot on/off
│ • .antitagsw on/off
│ • .welcome on/off
│ • .closetime [jam] 
│ • .opentime [jam] 
│ • .buka
│ • .tutup
│ • .editgroup close/open
│ • .editinfo on/off
│ • .editdesk [text]
│ • .editsubjek [text]
│ • .setdesk 
│ • .setname
│ • .linkgroup
│ • .resetlinkgc
│ • .sendlinkgc 628xx
│ • .sider
│ • .inspect [link]
│ • .invite 628xx
│ • .cekasalmember
│ • .delppgc
│ • .ephemeral on/off
│ • .leave
│ • .mute [reply user]
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'downloadmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨
│ • .capcut
│ • .gdrive
│ • .igdl
│ • .mediafire
│ • .twitdl
│ • .tiktok
│ • .tiktok2
│ • .tiktok3
│ • .tiktokslide
│ • .tiktokaudio
│ • .tiktoksearch
│ • .ttsearch
│ • .terabox
│ • .ytmp4
│ • .ytmp3
│ • .yts
│ • .play
│ • .pin
│ • .spotifyplay
│ • .spotifymp3
│ • .spotify
│ • .git
│ • .gitclone
│ • .get
│ • .lirik
│ • .videy
│ • .xnxx
│ • .xnxxdl
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'gamemenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨
│ • .modegame
│ • .werewolf
│ • .casino
│ • .suit
│ • .tictactoe
│ • .delttt
│ • .dare
│ • .petakbom
│ • .delpetakbom
│ • .tebakgambar
│ • .tebakanime
│ • .tebakkabupaten
│ • .tebaklagu
│ • .kuis
│ • .tebakkalimat
│ • .tebakkata
│ • .tebaklirik
│ • .tebakkimia
│ • .tebakbendera
│ • .susunkata
│ • .slot
│ • .asahotak
│ • .siapakahaku
│ • .caklontong
│ • .math
│ • .family100
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'aimenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗔𝗜 𝗠𝗘𝗡𝗨
│ • .ai
│ • .createimg
│ • .gimage
│ • .aiphotolabs
│ • .photoleap
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'rpgmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨
│ • .me
│ • .inventory
│ • .mining
│ • .buy
│ • .sell
│ • .heal
│ • .hunt
│ • .adventure
│ • .luckyday
│ • .killslime
│ • .killgoblin
│ • .killdevil
│ • .killbehemoth
│ • .killdemon
│ • .killdemonking
│ • .joinrpg
│ • .sellikan
│ • .sellbesi
│ • .sellemas
│ • .jelajah
│ • .mancing
│ • .jualikan
│ • .jualcoal
│ • .jualstone
│ • .jualingot
│ • .jualkayu
│ • .jualbahankimia
│ • .lebur
│ • .nebang
│ • .goplanet
│ • .ojek
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'toolsmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨
│ • .createqr
│ • .niggafy
│ • .hitamkan
│ • .hd
│ • .removebg
│ • .bukavn
│ • .rvo
│ • .translate
│ • .tr
│ • .githubrepo [username/repo]
│ • .npmjs [package-name]
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'convertmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am an automated WhatsApp bot system designed to help you search, retrieve, and interact with data or features—entirely through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*Zass Onee* is built using NodeJS and the Baileys library to improve user experience and feature access through WhatsApp.

╭─⧉ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨
│ • .tolatin [aksara]
│ • .toaksara [text]
│ • .tohuruf [angka]
│ • .toqr [text]
│ • .tovid [sticker]
│ • .toimage 
│ • .toimg [sticker]
│ • .tomp4 
│ • .togif [gif/webp]
│ • .tomp3 
│ • .tovn [audio/video]
│ • .tourl [media]
│ • .tourl2 [media]
╰──────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'funmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am an automated WhatsApp bot system designed to help you search, retrieve, and interact with data or features—entirely through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*Zass Onee* is built using NodeJS and the Baileys library to improve user experience and feature access through WhatsApp.

╭─⧉ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨
│ • .anjing  
│ • .apakah [text]  
│ • .asu  
│ • .babi  
│ • .bajingan  
│ • .bangke  
│ • .bangsat  
│ • .bego  
│ • .bodoh  
│ • .cacat  
│ • .cekcantik
│ • .cekganteng
│ • .cekgay
│ • .ceklesbi
│ • .ceksange
│ • .dakjal  
│ • .gay  
│ • .gaycek
│ • .goblok  
│ • .horny  
│ • .iblis  
│ • .jancok  
│ • .janda  
│ • .jomokcek
│ • .lesbicek
│ • .lesby  
│ • .mastah  
│ • .monyet  
│ • .newbie  
│ • .ngentod  
│ • .ngentot  
│ • .ustadz
│ • .pantek  
│ • .pantex  
│ • .peak  
│ • .perawan  
│ • .piatu  
│ • .pintar  
│ • .pinter  
│ • .puki  
│ • .sange  
│ • .sangean  
│ • .setan  
│ • .tolol  
│ • .wibu  
│ • .wangy
│ • .yatim
╰──────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'saluranmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am an automated WhatsApp bot system designed to help you search, retrieve, and interact with data or features—entirely through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*Zass Onee* is built using NodeJS and the Baileys library to improve user experience and feature access through WhatsApp.

╭─⧉ 𝗦𝗔𝗟𝗨𝗥𝗔𝗡 𝗠𝗘𝗡𝗨
│ • .reactch [channel-link]
│ • .chatch [channel-link]
│ • .cekidch [channel-id]
╰──────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'panelmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am an automated WhatsApp bot system designed to help you search, retrieve, and interact with data or features—entirely through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*Zass Onee* is built using NodeJS and the Baileys library to improve user experience and feature access through WhatsApp.

╭─⧉ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨
│ • .1gb
│ • .2gb
│ • .3gb
│ • .4gb
│ • .5gb
│ • .6gb
│ • .7gb
│ • .8gb
│ • .9gb
│ • .10gb
│ • .unlimited
│ • .listpanel
│ • .listadmin
│ • .delpanel
│ • .deladmin
╰──────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'quotesmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗤𝗨𝗢𝗧𝗘𝗦 𝗠𝗘𝗡𝗨
│ • .animequotes
│ • .animequote
│ • .galau
│ • .katabijak
│ • .katacinta
│ • .katahacker
│ • .katailham
│ • .katasenja
│ • .katasindiran
│ • .motivasi
│ • .quotesanime
│ • .quotesdilan
│ • .quotesislamic
│ • .quotesgacha
│ • .quoteswibu
│ • .quotessad
│ • .quotesrandom
│ • .quotesdev
│ • .pantun
│ • .puisi
│ • .faktaunik
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'animemenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨
│ • .animeinfo [judul]
│ • .ayaka
│ • .bluearchive
│ • .cosplay
│ • .character [nama]
│ • .chika
│ • .darkness
│ • .ei
│ • .hinata
│ • .ichika
│ • .itachi
│ • .itsuki
│ • .konachan
│ • .kanna
│ • .kiryuu [judul]
│ • .kiryuuget [url]
│ • .loli
│ • .lumine
│ • .marin
│ • .megumin
│ • .miku
│ • .mikuqq
│ • .mikasa
│ • .manga [judul]
│ • .mangatoon [judul]
│ • .mangatoonget [url]
│ • .mangaread [url]
│ • .mori
│ • .naruto
│ • .neko
│ • .nino
│ • .picre
│ • .raiden
│ • .ram
│ • .rem
│ • .sakura
│ • .sasha
│ • .shinobu
│ • .topanime
│ • .upcominganime
│ • .waifu
│ • .yandere
│ • .yotsuba
│ • .yor
│ • .yui
│ • .zerotwo
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'nsfwmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.


╭─⧉ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 (𝟭𝟴+)
│ • .animegen
│ • .blowjob
│ • .boobs
│ • .feet
│ • .hentai
│ • .lewd
│ • .lewdk
│ • .lewdn
│ • .neko2 (NSFW)
│ • .nsfwneko
│ • .randomnsfw
│ • .rule34
│ • .solo
│ • .trap
│ • .waifu2 (NSFW)
│ • .yuri
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'stalkmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.


╭─⧉ 𝗦𝗧𝗔𝗟𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
│ • .tiktokstalk
│ • .githubstalk
│ • .githubrepo 
│ • .npmstalk
│ • .npmjs
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'searchmenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨
│ • .tiktoksearch
│ • .ttsearch
│ • .xnxxsearch
│ • .ytsearch
│ • .yts
│ • .apksearch
│ • .apk4free
│ • .apkcombo
│ • .modapk
│ • .playstore
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break
case 'ephotomenu': {
if (isBan) return reply2(mess.ban)
let teks = Styles(`Hello, ${pushname}  
I am a system-based WhatsApp bot connected to a modular AI service, available 24/7 to assist you with commands and data access directly through WhatsApp.

┏━━〔 SYSTEM INFO 〕
┃ ◦ *Bot Name*   : ${botname}
┃ ◦ *Library*    : @whiskeysockets/baileys
┃ ◦ *Speed*      : ${latensii.toFixed(4)}s
┃ ◦ *Uptime*     : ${runtime(process.uptime())}
┃ ◦ *Total Fitur*: ${totalFitur()} commands
┗━━━━━━━━━━━━━━━

*ZassOnee* is a WhatsApp bot developed using Node.js and the Baileys library.  
It was designed to enhance user experience through seamless, intelligent automation.

╭─⧉ 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨
│ • .american-flag-text
│ • .advanced-glow
│ • .bluearchivelogo
│ • .balogo
│ • .carbonify
│ • .3d-underwater-text
│ • .3d-hologram-text
│ • .1917-style-text
│ • .digital-glitch-text
│ • .cartoon-style-graffiti-text
│ • .blackpink-style-logo
│ • .blackpink-style-logo-v2
│ • .bear-logo
│ • .gradient-text
│ • .glowing-text
│ • .galaxy-wallpaper
│ • .galaxy-style-logo
│ • .hitamkan
│ • .eraser-deleting-text
│ • .nigeria-flag-text
│ • .neon-light-text
│ • .neon-glitch-text
│ • .niggafy
│ • .sologo
│ • .ustadz
│ • .luxury-gold-text
│ • .light-green-neon
│ • .watercolor-text
│ • .typography-text-on-pavement
│ • .text-clouds-in-the-sky
│ • .royal-text
│ • .pixel-glitch-text
│ • .write-text-on-wet-glass
│ • .write-in-sand-summer-beach
│ • .write-in-sand-summer-beach-v2
╰─────────────────
`)
trinity.sendMessage(m.chat, {
document: fs.readFileSync("./lib/scrape/jomok.js"),
fileName: `${stime}`,
caption: teks,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail: await getBuffer(trinityThumb),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: global.footer,
body: global.footer2,
thumbnailUrl: trinityThumb,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": gr,
sourceUrl: '',
}}}, { quoted: kenzaki,ephemeralExpiration: 86400});
}
break

// Panel Menu
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@zass.id"
let name = username + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*ID Server (${server.id})* 
*Username :* ${user.username}
*Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await trinity.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break
case "listadmin": {
if (!isCreator) return reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await trinity.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break
case "listpanel": case "listp": case "listserver": {
if (!isCreator) return reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break
case "delpanel": {
if (!isCreator) return reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return reply("Server panel tidak ditemukan!")
reply(`Berhasil menghapus server panel *${nameSrv}*`)
}
break
case "deladmin": {
if (!isCreator) return reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return reply("Akun admin panel tidak ditemukan!")
await reply(`Berhasil menghapus akun admin panel *${getid}*`)
}
break

// Saluran Menu
case "reactch": {
if (!text) return reply(".reactch linkpesansaluran 📢")
if (!args[0] || !args[1]) return reply("Wrong Format")
if (!args[0].includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await trinity.newsletterMetadata("invite", result)
await trinity.newsletterReactMessage(res.id, serverId, args[1])
reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;
case 'chatch':{
 if (!text) return await reply("Example : .chatch trinity Botz")
 //reply("contoh\n.chat selamat siang semuanya")
 const Kalender00011 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `trinity Botz`
await trinity.sendMessage(m.chat, {
 react: {
 text: '🕐',
 key: m.key,
 }})
trinity.sendMessage(`120363399703324402@newsletter`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `Update Information trinity`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: trinity.decodeJid(trinity.user.id) },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `Chat :${pushname}`,
 body: `Form: ${m.isGroup ? `${groupMetadata.subject}` : !m.isGroup ? "chat" : "Free User"}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await delay(150)
trinity.sendMessage(m.chat, {
 react: {
 text: '⚡',
 key: m.key,
 }})
 //reply(`sukses mengirim pesan ke channel.`)
 trinity.sendMessage(m.chat, {
 react: {
 text: '✅',
 key: m.key,
 }})
}
break
case 'cekidch': case 'idch': {
if (!text) return reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await trinity.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return reply(teks)
}
break

// Fun Menu
case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break

case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break 
case 'jomokcek': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'jarak': {
var [me, to] = text.split`|`
	if (!(from && to)) return reply(`example ${prefix + command} Tangerang|Jakarta`)
	reply(mess.search)
	var data = await jarakkota(me, to)
	if (data.img) return trinity.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: kenzaki })
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu': {
      if (!m.isGroup)return reply(mess.group)
      let member = participants.map(u => u.id).filter(v => v !== trinity.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      trinity.sendMessage(m.chat, { text: `Anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: kenzaki })
      }
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'apakah': {
if (!q) return reply(`Penggunaan ${prefix + command} text\n\nContoh : ${prefix + command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Kagak tau gw 🗿','mungkin','Kenapa tanya gw?🗿','Maleslah mau makan dulu']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ceksange': 
case 'gaycek': 
case 'cekgay': 
case 'lesbicek': 
case 'ceklesbi': {
if (db.data.users[m.sender].limit < 1) return reply(`Limit kamu telah tercapai, ketik *.claim* untuk claim limit harian`)
if (!q) return reply(`Penggunaan ${prefix + command} Nama\n\nContoh : ${prefix + command} Kenzaki`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu': {
if (db.data.users[m.sender].limit < 1) return reply(`Limit kamu telah tercapai, ketik *.claim* untuk claim limit harian`)
if (!m.isGroup)return reply(mess.group)
let member = participants.map(u => u.id).filter(v => v !== trinity.user.jid)
let org = member[Math.floor(Math.random() * member.length)];
trinity.sendMessage(m.chat, { text: `Anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: kenzaki })
      }
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'wangy': {
if (db.data.users[m.sender].limit < 1) return reply(`Limit kamu telah tercapai, ketik *.claim* untuk claim limit harian`)
if (!q) return reply(`Contoh : ${prefix}wangy kenzaki`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
      
// Owner Menu
case 'setbotbio': case 'setbio': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Dimana Textnya Tuan?\nExample: ${prefix + command} trinity`)
    await trinity.updateProfileStatus(text)
    reply(`Berhasil Mengubah Bio Nomor Bot Tuan✅`)
    }
    break
case 'setquoted': {
if (isBan) return reply2(mess.ban)
                if (!isCreator) return reply(mess.owner)
                let delb = await trinity.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/mamak.jpg')
                fs.unlinkSync(delb)
                reply(mess.done)
                }
            break
case 'setimage': {
if (isBan) return reply2(mess.ban)
                if (!isCreator) return reply(mess.owner)
                let delb = await trinity.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/mamak.jpg')
                fs.unlinkSync(delb)
                reply(mess.done)
                }
            break
case 'set': {
  if (!isCreator) return reply(`Khusus owner!`)

  const [tipe, ...rest] = text.split('|')
  const isi = rest.join('|').trim()
  const lower = (tipe || '').toLowerCase()
  const quotedImage = m.quoted && /image/.test(mime)
  const media = quotedImage ? await trinity.downloadAndSaveMediaMessage(m.quoted) : null

  const validList = `
*Daftar opsi .set yang tersedia:*
• owner
• yt
• ig
• web
• email
• ap
• region
• ownername
• botname
• store
• saluran
• idch
• gr
• img
• thumb
• tumburl
• hstt
• tqto
• tqto
• vn
• bio
• ppbot (balas gambar)
• exif pack|auth
• dac domain|api|captcha
• image / quoted (balas gambar)
`.trim()

  if (!lower) return reply(`⚠️ Contoh: *${prefix}set yt https://youtube.com/@namamu*\n\n${validList}`)

  switch (lower) {
    case 'owner': global.owner = [isi]; reply(`✅ Owner set ke: ${isi}`); break
    case 'yt': global.yt = isi; reply(`✅ YouTube set ke: ${isi}`); break
    case 'ig': global.ig = isi; reply(`✅ Instagram set ke: ${isi}`); break
    case 'web': global.web = isi; reply(`✅ Website set ke: ${isi}`); break
    case 'email': global.email = isi; reply(`✅ Email set ke: ${isi}`); break
    case 'ap': global.ap = isi; reply(`✅ Kontak WA set ke: ${isi}`); break
    case 'region': global.region = isi; reply(`✅ Region set ke: ${isi}`); break
    case 'ownername': global.ownername = isi; global.ownerStore = isi; reply(`✅ Nama Owner/Toko: ${isi}`); break
    case 'botname': global.botname = isi; reply(`✅ Nama Bot: ${isi}`); break
    case 'store': global.namaStore = isi; reply(`✅ Nama Store: ${isi}`); break
    case 'saluran': global.saluran = isi; reply(`✅ Nama Saluran: ${isi}`); break
    case 'idch': global.idch = isi; reply(`✅ ID Channel: ${isi}`); break
    case 'gr': global.gr = isi; reply(`✅ Link Grup/Channel: ${isi}`); break
    case 'img': global.img = isi; reply(`✅ URL img diubah.`); break
    case 'thumb': global.thumb = isi; reply(`✅ Thumbnail diubah.`); break
    case 'tumburl': global.tumburl = isi; reply(`✅ tumburl diubah.`); break
    case 'hstt': global.hstt = isi; reply(`✅ hstt diubah.`); break
    case 'tqto': global.tqto = isi; reply(`✅ tqto diubah.`); break
    case 'vn': global.vn = isi; reply(`✅ VN diubah.`); break

    case 'bio':
      if (!isi) return reply(`Contoh: ${prefix + command} bio ini bot Zass`)
      await trinity.updateProfileStatus(isi)
      reply(`✅ Bio bot diubah ke: ${isi}`)
      break

    case 'ppbot':
      if (!quotedImage) return reply(`Balas gambar dengan command: ${prefix + command} ppbot`)
      await trinity.updateProfilePicture(botNumber, { url: media })
      fs.unlinkSync(media)
      reply(`✅ Foto profil bot berhasil diganti.`)
      break

    case 'exif':
      if (!isi.includes('|')) return reply(`Contoh: ${prefix + command} exif Trinity|Zass`)
      global.packname = isi.split("|")[0]
      global.author = isi.split("|")[1]
      reply(`✅ Exif:\n• Packname: ${global.packname}\n• Author: ${global.author}`)
      break

    case 'dac':
      if (!isi.includes('|')) return reply(`Contoh: ${prefix + command} dac domain.com|apikeymu|capikeymu`)
      global.domain = isi.split("|")[0]
      global.apikey2 = isi.split("|")[1]
      global.capikey2 = isi.split("|")[2]
      reply(`✅ Domain/API:\n• Domain: ${global.domain}\n• APIKey: ${global.apikey2}\n• Captcha: ${global.capikey2}`)
      break

    case 'image':
    case 'quoted':
      if (!quotedImage) return reply(`Balas gambar dengan command: ${prefix + command} image`)
      await fsx.copy(media, './media/mamak.jpg')
      fs.unlinkSync(media)
      reply(`✅ Gambar mamak.jpg berhasil diganti.`)
      break

    default:
      reply(`❌ Tipe pengaturan *${lower}* tidak dikenali!\n\n${validList}`)
  }
}
break
case 'setdac': {
if (isBan) return reply2(mess.ban)
                if (!isCreator) return reply('kusus owner')
                if (!text) return reply(`Contoh : ${prefix + command} domain|apikey|capikey`)
                global.domain = text.split("|")[0]
                global.apikey2 = text.split("|")[1]
                global.capikey2 = text.split("|")[2]
                reply(`Exif berhasil diubah menjadi\n\n• domain : ${global.domain}\n• apikey : ${global.apikey2}\n• capikey : ${global.capikey2}`)
        }
        break
case 'setexif': {
if (isBan) return reply2(mess.ban)
                if (!isCreator) return reply('kusus owner')
                if (!text) return reply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
        }
        break
case 'setppbot': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
await loading()
reply2(mess.wait)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await trinity[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await trinity[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await trinity[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid',mess.success,'downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
if (!m.isGroup) return reply2(mess.group)
if (!isAdmins) return reply2(mess.admin)
await loading()
reply2(mess.wait)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await trinity['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await trinity[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await trinity['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess[mess.success]);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
case 'autodl':{
if (!isCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAutoDlGc) return reply(`activated`)
chats.autodl = true
reply('Successfully Activate Auto Downloader')
} else if (args[0] === "off") {
if (!isAutoDlGc) return reply(`it's deactivated`)
chats.autodl = false
reply('Successfully Disabling Auto Downloader')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'public': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner) 
trinity.public = true
reply('*_Sukse Change To Public_*')
}
break
case 'self': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner) 
trinity.public = false
reply('*_Sukses Change To Self_*')
}
break    
case 'block': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trinity.updateBlockStatus(users, 'block').then((res) => reply2(jsonformat(res))).catch((err) => reply2(jsonformat(err)))
}
break
case 'unblock': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trinity.updateBlockStatus(users, 'unblock').then((res) => reply2(jsonformat(res))).catch((err) => reply2(jsonformat(err)))
}
break
case 'restart': 
if (!isCreator) return reply('wuuu')
reply(`_Restarting trinity Bot . . ._`)
await sleep(3000)
process.exit()
break
case 'autobio': 
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
settings.autobio = true
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'off') {
settings.autobio = false
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break   
case 'autoread': 
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
settings.autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
settings.autoread = false
reply(`Berhasil mengubah autoread ke ${q}`)
}
break
case 'backup': {
if (!isCreator) return reply(mess.owner)
await reply("Sabar Om Lagi Backup!!!");
const { execSync } = require("child_process");
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
);
const exec = await execSync(`zip -r trinity.zip ${ls.join(" ")}`);
await trinity.sendMessage(
m.chat,
{
document: await fs.readFileSync("./trinity.zip"),
mimetype: "application/zip",
fileName: "trinity.zip",
},
{ quoted: kenzaki }
);
await execSync("rm -rf trinity.zip");
}
break
case 'onlypc': {
if (isBan) return reply2(mess.ban)
if (!isCreator && isPrem) return reply(mess.prem);
if (args[0] == 'on' || args[0] == 'off') {
const status = args[0] == 'on';
if (global.opts["pconly"] !== status) {
global.opts["pconly"] = status;
reply(`Success Change To ${status ? 'ON' : 'OFF'}`);
} else {
reply(`Already ${status ? 'ON' : 'OFF'}`);
}
} else {
reply(`Status : ${global.opts["pconly"] ? 'ON' : 'OFF'}`);
}
}
break
case 'onlygc': {
if (isBan) return reply2(mess.ban)
if (!isCreator && isPrem) return reply(mess.prem);
if (args[0] == 'on' || args[0] == 'off') {
const status = args[0] == 'on';
if (global.opts["gconly"] !== status) {
global.opts["gconly"] = status;
reply(`Success Change To ${status ? 'ON' : 'OFF'}`);
} else {
reply(`Already ${status ? 'ON' : 'OFF'}`);
}
} else {
reply(`Status : ${global.opts["gconly"] ? 'ON' : 'OFF'}`);
}
}
break
case 'addcase': {
if (isBan) return reply2(mess.ban)
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'trinity-z.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'getcase': {
if (isBan) return reply2(mess.ban)
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./trinity-z.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return reply('ngapain')
if (!q) return reply(`contoh : ${prefix + command} antilink`)
let nana = await getCase(q)
reply(nana)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
}
break 
case 'delcase': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./trinity-z.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By Trinity')
}
break
case 'listcase': {
if (isBan) return reply2(mess.ban)
let { listCase } = require('./lib/scrape/scrapelistCase.js')
reply(listCase())
}
break
case 'cekdrive': {
if (isBan) return reply2(mess.ban)
var result = await nou.drive.info();
let tks = `*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`
trinity.sendMessage(m.chat, {
text: tks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `D R I V E`,
body: '',
thumbnailUrl: global.tqto,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break
case 'bandwidth': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(mess.owner)
reply(mess.search)
json = await checkBandwidth()
txt = `乂 B A N D W I D T H

   ◦  *Download* : ${json.download}
   ◦  *Upload* : ${json.upload}

${footer}`
reply(txt)
}
break
case 'listpc': {
if (isBan) return reply2(mess.ban)
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 trinity.sendTextWithMentions(m.chat, teks, m)
             }
             break
case "listgc":{
if (!isCreator) return (`Ngapain ? Khusus Owner Aja !!`)
let getGroups = await trinity.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await trinity.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case 'bcimg2': {
if (isBan) return reply2(mess.ban)
if (!isCreator) throw mess.owner;
if (!text) return reply2(`Reply foto dengan caption ${prefix + command} Tes`)
if (!/image/.test(mime)) return reply(`Reply foto dengan caption ${prefix + command} Tes`)
let getGroups = await trinity.groupFetchAllParticipating();
let groups = Object.entries(getGroups)
.slice(0)
.map((entry) => entry[1]);
let anu = groups.map((v) => v.id);
let media = await trinity.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `\n${text}`
trinity.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: kenzaki})
}
reply('Sukses Broadcast')
}
break
case "bcimg": {
if (!isCreator) return reply(`Lu Owner Kah?`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await trinity.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await trinity.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(media)
await trinity.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await trinity.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'listown': 
if (isBan) return reply(mess.ban)
const lown = global.rowner
 teksooo = '*List Owner*\n\n'
for (let i of lown) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${lown.length}*`
trinity.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:kenzaki, contextInfo: { "mentionedJid": owner } })
break
case 'delsesi': {
if (isBan) return reply2(mess.ban)
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./TrinitySession", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./TrinitySession/${file}`)
                    });
                    await sleep(2000)
                    reply("Berhasil menghapus semua sampah di folder session")
                });
            }    
            break
case 'bcgc': case 'bcgroup': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await trinity.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
trinity.sendMessage(i, {text: `${text}`}, {quoted:kenzaki})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case "creategc":{

if (!isCreator) return reply2(mess.owner)
if (!text) return reply2("Nama groupnya?")
let cret = await trinity.groupCreate(text, [])
let response = await trinity.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
trinity.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
trinity.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case "cekidgc": {
if (!isCreator) return reply(mess.premium)
let getGroups = await trinity.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await trinity.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'join': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await trinity.groupAcceptInvite(result).then((res) => reply2(jsonformat(res))).catch((err) => reply2(jsonformat(err)))
}
break
case 'getcontact': case 'getkontak': 
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
huhuhs = await trinity.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: kenzaki, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
trinity.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

// Main Menu
case 'daftar': case 'registrasi': {
 if (db.data.users[m.sender].registered) return reply2(`Kamu sudah terdaftar sebelumnya!`)

 let [nama, kota, umur] = text.split('.')
 if (!nama || !kota || !umur) {
   return reply2(`*Masukan ${!nama ? "nama" : !kota ? "kota" : "umur"} dengan benar!*\n\nContoh:\n${prefix + command} zass.Jakarta.17`)
 }
 if (isNaN(umur)) return reply2(`Umur harus berupa angka!\n\nContoh:\n${prefix + command} zass.Jakarta.17`)
 umur = Number(umur)
 if (umur < 10) return reply2(`*Kamu terlalu kecil, minimal 10 tahun*`)
 if (umur > 50) return reply2(`*Sudah terlalu tua untuk main bot ini 😅*`)

 let user = db.data.users[m.sender]
 let usernomor = m.sender.split("@")[0]

 user.name = nama
 user.askot = kota
 user.umur = umur
 user.registered = true
 user.balance += 5000
 user.limit += 20

 reply(`🟢 *Verifikasi Berhasil!*\n\n📦 *Data Pengguna*\n- Nama : ${nama}\n- Umur : ${umur}\n- Kota : ${kota}\n- Nomor : ${usernomor}\n\n🎁 *Bonus:*\n+ Rp 5000\n+ 20 Limit\n`)

 user.exp += await randomNomor(20)
}
break
case 'unreg': case 'hapusakun': {
 if (!db.data.users[m.sender].registered) return reply(`Kamu belum daftar.`)

 db.data.users[m.sender].banned = false
 db.data.users[m.sender].name = "anomali"
 db.data.users[m.sender].askot = ""
 db.data.users[m.sender].umur = 0
 db.data.users[m.sender].limit = 0
 db.data.users[m.sender].balance = 0
 db.data.users[m.sender].exp = 0
 db.data.users[m.sender].level = 0
 db.data.users[m.sender].registered = false
 db.data.users[m.sender].premium = false
 db.data.users[m.sender].afkTime = -1
 db.data.users[m.sender].afkReason = ""

 reply(`✅ *Akun kamu berhasil dihapus dari database!*\nKetik *${prefix}daftar nama.kota.umur* untuk daftar lagi.`)
}
break
case "disk": {
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
case 'hitday': {
if (isBan) return reply2(mess.ban)
reply(Styles(`Total Hits: *${settings.hitstat}*`))
}
break
case 'claim': {
if (isBan) return reply2(mess.ban)
let timeClaim = 3600000
let claimed = new Date(users.lastclaim + timeClaim)
let timeout = claimed - new Date()
let balance = Func.randomInt(1, 5000)
if (new Date - users.lastclaim >= timeClaim) {
reply(`🎉 Congratulations!, you got +${Func.formatNumber(balance)} points.`)
users.balance += balance
users.lastclaim = new Date() * 1
} else {
reply(`*You have claimed, you can reclaim in the next hour.*\n\n*Timeout : [ ${Func.toTime(timeout)} ]*`)
}
}
break
case 'tes': {
if (isBan) return reply2(mess.ban)
reply('Nandeo Bakaaaa!');
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'server': {
if (isBan) return reply2(mess.ban)
    const response = await axios.get('http://ip-api.com/json/');
    const serverInfo = response.data;

    let serverMessage = `*S E R V E R - I N F O*\n\n`;
    const osInfo = Styles(os.platform(), 1);
    const totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
    const freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
    const uptime = os.uptime();
    const uptimeFormatted = formatUptime(uptime);
    const processor = Styles(os.cpus()[0].model, 1);
    const totalCores = os.cpus().length;

    serverMessage += `┌  ◦  *OS :* ${osInfo}\n`;
    serverMessage += `│  ◦  *RAM :* ${freeRAM} GB / ${totalRAM} GB\n`;
    serverMessage += `│  ◦  *Country :* ${serverInfo.country}\n`;
    serverMessage += `│  ◦  *CountryCode :* ${serverInfo.countryCode}\n`;
    serverMessage += `│  ◦  *Region :* ${serverInfo.region}\n`;
    serverMessage += `│  ◦  *RegionName :* ${serverInfo.regionName}\n`;
    serverMessage += `│  ◦  *City :* ${serverInfo.city}\n`;
    serverMessage += `│  ◦  *Zip :* ${serverInfo.zip}\n`;
    serverMessage += `│  ◦  *Lat :* ${serverInfo.lat}\n`;
    serverMessage += `│  ◦  *Lon :* ${serverInfo.lon}\n`;
    serverMessage += `│  ◦  *Timezone :* ${serverInfo.timezone}\n`;
    serverMessage += `│  ◦  *Isp :* ${serverInfo.isp}\n`;
    serverMessage += `│  ◦  *Org :* ${serverInfo.org}\n`;
    serverMessage += `│  ◦  *As :* ${serverInfo.as}\n`;
    serverMessage += `│  ◦  *Query :* ${serverInfo.query}\n`;
    serverMessage += `│  ◦  *Uptime :* ${uptimeFormatted}\n`;
    serverMessage += `└  ◦  *Processor :* ${processor} (${totalCores} Cores)`;
trinity.sendMessage(m.chat, {
text: serverMessage,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `乂 S E R V E R`,
body: '',
thumbnailUrl: global.tqto,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
  }
break
case 'owner': {
  if (isBan) return reply2(mess.ban)
  if (isBan) return reply(mess.banned)

  const kontakUtama = {
    displayName: 'My Owner',
    vcard: `BEGIN:VCARD
VERSION:3.0
N:;;;; 
FN:${global.ownername}
item1.TEL;waid=6285298027445:6285298027445
item1.X-ABLabel:Developer
item2.TEL;waid=${global.owner}:${global.owner}
item2.X-ABLabel:My Owner
EMAIL;type=INTERNET:${global.email}
ORG:Owner Trinity MultiDevice
END:VCARD`
  }
  await trinity.sendMessage(from, {
    contacts: { contacts: [kontakUtama] },
    contextInfo: {
      forwardingScore: 999,
      isForwarded: false,
      mentionedJid: [sender],
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: true,
        title: Styles(`My Owner Trinity MD`),
        containsAutoReply: true,
        mediaType: 1,
        jpegThumbnail: await getBuffer(global.img),
        mediaUrl: `https://youtube.com/@ZassOnee`,
        sourceUrl: `https://youtube.com/@ZassOnee`
      }
    }
  }, { quoted: kenzaki })
}
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return reply2(mess.ban)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(Styles(respon))
            }
            break
case 'runtime': 
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await trinity.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'script': case 'sc':{
  if (isBan) return reply2(mess.ban);

  let pesan = `
*─── 「 FREE SCRIPT 」 ───*

This WhatsApp bot was created by me for learning, experimentation, and fun.  
It's shared here freely to help you build your own bot or just explore.

🚀 *Want to support or get the full source code?*  
Please contact the owner directly:  
*WhatsApp:* +6285298027445

🔗 *Watch tutorial & updates here:*  
https://youtube.com/@ZassOnee

© *Trinity Multi Device*
`;

  reply2(pesan);
}
break
case 'tqto': {
if (isBan) return reply2(mess.ban)

let teksTQ = `*─────── 「 THANK YOU 」 ───────*

Special thanks to everyone who has contributed, supported, and inspired the development of *Trinity Botz*.

> 👑 *Zass Onee* – Creator & Developer
> ⚙️ *OpenAI* – For the AI capabilities
> 💻 *IkyJs & Team* – For the early structure and guidance
> ⚡ *@whiskeysockets/baileys* – WhatsApp Web API
> 🔥 *Community Devs* – For shared knowledge & inspiration
> ❤️ *Users & Testers* – For the valuable feedback

──────────────
*© 2025 Trinity MD By Zass Onee*`

let cp = Styles(teksTQ)

trinity.sendMessage(m.chat, {
  text: cp,
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      title: `© 2025 | ${botname}`,
      body: 'Thanks to all contributors!',
      thumbnailUrl: global.tqto, // Ganti dengan banner TQTO jika punya
      sourceUrl: global.web, // Ganti dengan link YouTube atau situs jika mau redirect
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
})
}
break
case 'totalfitur': {
  if (isBan) return reply2(mess.ban)

  let thumbBuffer = await (await axios.get(global.img, { responseType: 'arraybuffer' })).data

  let pepe = generateWAMessageFromContent(m.from, {
    orderMessage: {
      itemCount: `${totalFitur()}`,
      status: 500,
      surface: 999,
      message: `${totalFitur()} Features`,
      description: '^^',
      orderTitle: 'Haloo',
      token: '9',
      currencyCode: 'IDR',
      totalAmount1000: '1000000',
      sellerJid: '6285298027445@s.whatsapp.net',
      thumbnail: thumbBuffer
    }
  }, { contextInfo: null, quoted: fverif })

  trinity.relayMessage(m.chat, pepe.message, { messageId: pepe.key.id })
}
break

// sticker Menu
case "brat": {
    if (!text) return reply('mana teks');
    try {
        await trinity.sendMessage(m.chat, {
            react: { text: "✨", key: m.key }
        });

        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
        const response = await axios.get(url, { responseType: "arraybuffer" });

        await trinity.sendImageAsSticker(m.chat, response.data, m, {
            packname: global.packname,
            author: global.author
        });} catch (err) {
        console.error("Error brat:", err);
        await trinity.sendMessage(m.chat, {
            text: "Maaf, gagal membuat stiker brat. Coba lagi nanti."
        }, { quoted: m });}}
break;
case "bratvid": {
    if (!text) return reply('mana teks');
    try {
        await trinity.sendMessage(m.chat, {
            react: { text: "✨", key: m.key }
        });
        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
        const response = await axios.get(url, { responseType: "arraybuffer" });
        await trinity.sendVideoAsSticker(m.chat, response.data, m, {
            packname: global.packname,
            author: global.author
        });
    } catch (err) {
        console.error("Error bratvid:", err);
        await trinity.sendMessage(m.chat, {
            text: "Maaf, gagal membuat stiker brat video. Coba lagi nanti."
        }, { quoted: m });}}
break;
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return reply2(mess.ban)
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await trinity.sendImageAsStickerAV(from, media, kenzaki, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply2('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await trinity.sendVideoAsSticker(from, media, kenzaki, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'qc2': {
if (isBan) return reply2(mess.ban)
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await trinity.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
trinity.sendImageAsSticker(m.chat, buffer, kenzaki, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'qc': {
if (isBan) return reply2(mess.ban)
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await trinity.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
trinity.sendImageAsSticker(m.chat, buffer, kenzaki, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'stickmeme': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  try {
  let mee = await trinity.downloadAndSaveMediaMessage(quoted)
  let mem = await UploadFileUgu(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await trinity.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
case 'smeme': 
if (isBan) return reply2(mess.ban)
await loading()
 if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
reply2(mess.wait)
mee = await trinity.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
trinity.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
case 'qcimg': 
            const { quote } = require('./lib/scrape/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await trinity.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/11a0f6b2f39c9a6023b25.jpg')
            const rest = await quote(q, pushname, ppuser)
            reply(mess.wait)
            trinity.sendMessage(m.chat, { image: { url: rest.result }, caption: `Done?`}, { quoted: kenzaki })
            .catch(console.error)
            break
case 'wm': {
if (isBan) return reply2(mess.ban)
if (!q) return reply("Reply sticker dengan nama Punya|Gw")
if (isMedia || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${botName}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await trinity.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await xm.sendMessage(from,{sticker: nah},{quoted: kenzaki})
trinity.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,jpegThumbnail: hst,sourceUrl: `https://wa.me/${owner}`
}}, sticker: nah }, { quoted: kenzaki })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
}
break
case 'wmvideo':{
if (isBan) return reply2(mess.ban)
await loading()
let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return reply2('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await trinity.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
}
break

// Group Menu
case'getid': case 'getidgrup': case 'getidgc': case 'cekidgc': {
if (isBan) return reply2(mess.ban)
if (!m.isGroup) return reply(mess.OnlyGrup)
let tod = `*GET ID GRUB*\n${groupMetadata.id}\n`
reply(tod)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'del': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.')
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                trinity.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'invite': {
if (isBan) return reply2(mess.ban)
	if (!m.isGroup) return reply(mess.group)
	if (!isBotAdmins) return reply(`khusus admin bang`)
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return reply(`Enter the number together without *+*`)
if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await trinity.groupInviteCode(group)
      await trinity.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
break
case 'cekasalmember': {
if (isBan) return reply2(mess.ban)
  if (!m.isGroup) return reply(mess.group)
  const participants = await trinity.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  }
  break;
case 'mute': {
if (isBan) return reply2(mess.ban)
                if (!m.isGroup) throw 'kusus group'
                if (!isBotAdmins) throw 'kusus BotAdmin'
                if (!isAdmins) throw 'kusus admin'
                if (args[1] === "on") {
                if (chats.mute) return reply(`Sudah Aktif Sebelumnya`)
                chats.mute = true
                reply(`${pushname} telah di mute di group ini !`)
                } else if (args[1] === "off") {
                if (!chats.mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                chats.mute = false
                reply(`${pushname} telah di unmute di group ini !`)
                }
             }
             break
case 'cekmember': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
if (!text) return reply2("Id Nya Mana Kak?")
let cekmd = await trinity.groupMetadata(text)
let txrk = `乂 *C E K - M E M B E R*\n\n   ◦  *Nama Group :* ${cekmd.subject}\n   ◦  *Member :* ${cekmd.participants.length} Orang\n\n${footer}`
trinity.sendMessage(m.chat, {
                        text: txrk,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: '',
                                thumbnailUrl: global.tqto,
                                sourceUrl: hariini,
                                mediaType: 1,
                                renderLargerThumbnail: true
			}}
			})
}
break   
case 'inspect': {
if (isBan) return reply2(mess.ban)
if (isBan) return reply2(mess.ban)
await loading()
if (!args[0]) return reply2("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply2("Link Invalid")
trinity.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await trinity.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
trinity.sendFile(from, pp, "", m, { caption: tekse, mentions: await trinity.parseMention(tekse) })

})
}
break
case 'totag': {
if (isBan) return reply2(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
trinity.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break       
case 'linkgroup': case 'linkgc': {
if (isBan) return reply2(mess.ban)
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
let response = await trinity.groupInviteCode(from)
trinity.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc': 
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
trinity.groupRevokeInvite(from)
break
case 'sendlinkgc': {
if (isBan) return reply2(mess.ban)
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
if (!args[0]) return reply2(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await trinity.groupInviteCode(from)
trinity.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
case 'sider': case 'gcsider': {
var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return m.reply(`*Digrup ini tidak terdapat sider.*`)
    reply(`*${total}/${sum}* anggota grup *${groupName}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kick': {
if (isBan) return reply2(mess.ban)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (!isAdmins && !isCreator) return reply2(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trinity.groupParticipantsUpdate(from, [users], 'remove')
reply2(mess.done)
}
break
case 'add': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trinity.groupParticipantsUpdate(from, [users], 'add')
reply2(mess.done)
}
break
case 'promote': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trinity.groupParticipantsUpdate(from, [users], 'promote')
reply2(mess.done)
}
break
case 'demote': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await trinity.groupParticipantsUpdate(from, [users], 'demote')
reply2(mess.done)
}
break
case 'hidetag': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
trinity.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:kenzaki})
}
break
case 'leave': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(`Khusus Owner Aja`)
                await trinity.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case 'setname': case 'setsubject': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (!text) throw 'Text ?'

await trinity.groupUpdateSubject(m.chat, text).then((res) => reply2(mess.success)).catch((err) => reply2(jsonformat(err)))

}

break
case 'setdeskgc': case 'setdesk': {
if (isBan) return reply2(mess.ban)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'

await trinity.groupUpdateDescription(m.chat, text).then((res) => reply2(mess.success)).catch((err) => reply2(jsonformat(err)))

}

break
case 'kickall': 
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
var groupe = await trinity.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
trinity.groupParticipantsUpdate(from, mems, 'remove')
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
    await trinity.removeProfilePicture(from)
    }
    break
case 'buka': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
  await loading()

  await trinity.groupSettingUpdate(from, 'not_announcement')
    .then(() => reply2(`✦ Grup telah *dibuka*\nSekarang semua member dapat mengirim pesan.`))
    .catch((err) => reply2(jsonformat(err)))
}
break

case 'tutup': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
  await loading()

  await trinity.groupSettingUpdate(from, 'announcement')
    .then(() => reply2(`✦ Grup telah *ditutup*\nSekarang hanya *admin* yang dapat mengirim pesan.`))
    .catch((err) => reply2(jsonformat(err)))
}
break
case 'opentime': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
trinity.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case 'closetime': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
trinity.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'ephemeral': {
if (isBan) return reply2(mess.ban)
                if (!m.isGroup) return reply('kusus group')
                if (!isBotAdmins) return reply('kusus botAdmin')
                if (!isAdmins) return reply('kusus admin')
                if (!text) return reply('Enter the value on/off')
                if (args[0] === 'on') {
                    await trinity.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await trinity.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
case 'editgroup': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
if (args[0] === 'close'){
await trinity.groupSettingUpdate(from, 'announcement').then((res) => reply2(`Sukses Menutup Group`)).catch((err) => reply2(jsonformat(err)))
} else if (args[0] === 'open'){
await trinity.groupSettingUpdate(from, 'not_announcement').then((res) => reply2(`Sukses Membuka Group`)).catch((err) => reply2(jsonformat(err)))
} else {
trinity.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:kenzaki}) 
 }
}
break
case 'editinfo': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
 if (args[0] === 'open'){
await trinity.groupSettingUpdate(from, 'unlocked').then((res) => reply2(`Sukses Membuka Edit Info Group`)).catch((err) => reply2(jsonformat(err)))
 } else if (args[0] === 'close'){
await trinity.groupSettingUpdate(from, 'locked').then((res) => reply2(`Sukses Menutup Edit Info Group`)).catch((err) => reply2(jsonformat(err)))
 } else {
 trinity.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:kenzaki}) 

}
}
break
case 'editsubjek': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (!text) throw 'Text nya ?'
await loading()
await trinity.groupUpdateSubject(from, text).then((res)).catch((err) => reply2(jsonformat(err)))
}
break
case 'editdesk':{
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (!text) throw 'Text Nya ?'
await loading()
await trinity.groupUpdateDescription(from, text).then((res)).catch((err) => reply2(jsonformat(err)))
}
break
case 'tagall': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
trinity.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:kenzaki })
}
break
case'demoteall': 
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
var groupe = await trinity.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
trinity.groupParticipantsUpdate(from, mems, 'demote')
break
case 'promoteall': 
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
await loading()
var groupe = await trinity.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
trinity.groupParticipantsUpdate(from, mems, 'promote')
break
case "welcome": {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return reply('Sudah Aktif')
wlcm.push(from)
var groupe = await trinity.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
trinity.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted: kenzaki})
} else if (args[0] === "off") {
if (!welcm) return reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'antibot': 
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (args[0] == 'on'){
if (chats.antibot) return reply('UDAH ON!')
chats.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!chats.antibot) return reply('UDAH OFF!')
chats.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break
case 'antilink': 
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
if (args[0] == 'on'){
if (chats.antilink) return reply('UDAH ON!')
chats.antilink = true
reply('Fitur antilink telah di aktifkan')
} else if (args[0] == 'off'){
if (!chats.antilink) return reply('UDAH OFF!')
chats.antilink = false
reply('Fitur antilink telah di matikan')
} else reply('on / off')
break
case 'antitagsw': {
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)

    const setting = db.data.chats[m.chat]

    if (args[0] === "on") {
        if (setting.antitagsw) return m.reply("Anti Tag Status WhatsApp sudah aktif sebelumnya.")
        setting.antitagsw = true
        m.reply("Anti Tag SW berhasil diaktifkan di grup ini.")
    } else if (args[0] === "off") {
        if (!setting.antitagsw) return m.reply("Anti Tag SW sudah nonaktif sebelumnya.")
        setting.antitagsw = false
        m.reply("Anti Tag SW berhasil dinonaktifkan di grup ini.")
    } else {
        m.reply(`Gunakan format:\n• *${prefix + command} on* — untuk mengaktifkan\n• *${prefix + command} off* — untuk menonaktifkan`)
    }

    db.data.users[m.sender].exp += await randomNomor(20)
}
break
case 'getidgc': 
if (isBan) return reply2(mess.ban)
if (!isCreator && !isAdmins) return reply2(mess.admin)
if (!m.isGroup) return reply2(mess.group)
if (!isBotAdmins) return reply2(mess.badm)
ewe = `${m.chat}`
await trinity.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

// Download Menu
case 'mediafire': {
  if (!text) return reply(`${prefix + command} linknya`);
  try {
    const res = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(text)}`);
    const result = await res.json();

    if (!result?.status || !result?.data?.downloadLink) {
      throw new Error(`Respons API gagal atau format tidak sesuai:\n${JSON.stringify(result)}`);
    }

    const {
      fileName,
      fileSize,
      downloadLink,
      mimeType,
      fileType
    } = result.data;

    await trinity.sendMessage(m.chat, {
      document: { url: downloadLink },
      fileName: fileName,
      mimetype: mimeType || 'application/octet-stream',
      caption:
        `乂 M E D I A F I R E- DOWNLOAD\n` +
        `   ◦  *Nama:* ${fileName}\n` +
        `   ◦  *Ukuran:* ${fileSize}\n` +
        `   ◦  *Tipe:* ${fileType}`
    }, { quoted: m });

  } catch (e) {
    console.error('MEDIAFIRE ERROR', e);
    reply(`[ x ] Gagal: ${e.message}`);
  }
}
break
case 'sfile': {
if (isBan) return reply2(mess.ban)
if (text.match(/(https:\/\/sfile.mobi\/)/gi)) {
let res = await sfileDl(args[0])
if (!res) throw 'Error :/'
reply(mess.search)
trinity.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: kenzaki })
} else if (text) {
let [query, page] = text.split`|`
let res = await sfileSearch(query, page)
if (!res.length) throw `Query "${text}" not found :/`
res = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
reply(res)
} else throw 'Masukan Pencarian/Linknya'
}
break
case 'gdrive': {
if (isBan) return reply2(mess.ban)
if (!args[0]) return reply(`Enter the Google Drive link`)
reply(mess.search)
const fg = require('api-dylux')
try {
let res = await fg.GDriveDl(args[0])
gdr = `乂 G O G L E - D R I V E

   ◦  *Nama:* ${res.fileName}
   ◦  *Size:* ${res.fileSize}
   ◦  *Type:* ${res.mimetype}
   
${footer}`
trinity.sendMessage(m.chat, {
text: gdr,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `G O G L E  D R I V E - D O W N L O A D`,
body: '',
thumbnailUrl: global.tqto,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
trinity.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: kenzaki })
} catch (err) {
console.log(err)
return reply('Error: Check link or try another link')
}
}
break
case 'igdl': {
if (isBan) return reply2(mess.ban)
if (!text) return reply(`sertakan link instagram`)
await loading()
let ig = await igdl3(text)
trinity.sendMessage(m.chat, { video: { url: ig[0].url }, caption: mess.success }, { quoted: fverif })
}
break
case 'twitdl':{
if (!text) return reply2('Link nya kak?\n\nContoh : .twitter https://twitter.com/FCBarcelona_es/status/1615392117026586628?s=20&t=Djtl01fwdxTX1I5g-tm72A')
await loading()
reply(mess.search)
let json = await chApi.twitter(text)
trinity.sendMessage(from, {video:{url: json.HD },caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"}, {quoted:kenzaki})
}
break
case 'tiktokslide':{
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} url tiktok`)
await loading()
let anu = await chApi.tiktokdl(text)
anu.result.map((v, i) => {
trinity.sendMessage(m.chat, { image: { url: v }, caption: mess.success }, { quoted: kenzaki })
sleep(1500)
})
trinity.sendMessage(m.chat, { audio: { url: anu.audio }, mimetype: 'audio/mp4' }, { quoted: kenzaki })
}
break
case 'tiktok3': {
if (isBan) return reply2(mess.ban)
if (!text) throw 'Masukkan Query Link!'
let tiktok = require('./lib/scrape/tiktok2')
let old = new Date()
         let json = await tiktok.getMeta(text)
         let caption = `${gris}[ T I K T O K - D O W N L O A D ]${gris}\n\n`
         caption += `	◦  *Id* : ${json.id}\n`
         caption += `	◦  *Username* : ${json.author.name}\n`
         caption += `	◦  *Signature* : ${(json.author.signature)}\n`
         caption += `	◦  *Like* : ${(json.stats.likeCount)}\n`
         caption += `	◦  *Comments* : ${(json.stats.commentCount)}\n`
         caption += `	◦  *Share* : ${(json.stats.shareCount)}\n`
         caption += `	◦  *Play* : ${(json.stats.playCount)}\n`
         caption += `	◦  *Save* : ${(json.stats.saveCount)}\n`
         caption += `	◦  *Caption* : ${json.title || '-'}\n\n`
         caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
trinity.sendMessage(m.chat,{video:{url: json.video.noWatermark }, caption: caption },{quoted:kenzaki})
trinity.sendMessage(m.chat, { audio: { url: json.music.play_url }, mimetype: 'audio/mp4' })
}
break
case 'tt': case 'tiktok': {
if (isBan) return reply2(mess.ban)
if (!text) throw 'Masukkan Query Link!'
let data = await dylux.tiktok(text)
let old = new Date()
         let json = data.result
         let caption = `${gris}[ T I K T O K - D O W N L O A D ]${gris}\n\n`
         caption += `	◦  *Id* : ${json.id}\n`
         caption += `	◦  *Username* : ${json.author.nickname}\n`
         caption += `	◦  *Title* : ${(json.title)}\n`
         caption += `	◦  *Like* : ${(json.digg_count)}\n`
         caption += `	◦  *Comments* : ${(json.comment_count)}\n`
         caption += `	◦  *Share* : ${(json.share_count)}\n`
         caption += `	◦  *Play* : ${(json.play_count)}\n`
         caption += `	◦  *Created* : ${json.create_time}\n`
         caption += `	◦  *Size* : ${json.size}\n`
         caption += `	◦  *Duration* : ${json.duration}\n`
         caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
if (json.images) {
json.images.forEach(async (k) => {
await trinity.sendMessage(m.chat, { image: { url: k }}, { quoted: fcall });
})
} else {
trinity.sendMessage(m.chat,{video:{url: json.play }, caption: caption },{quoted:kenzaki})
await sleep(2000)
trinity.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mp4' })
}
}
break
case 'tiktokaudio':{
if (!text) return reply2( `Example : ${prefix + command} link`)
let data = await tkApi.Downloader(text)
let json = data.result
trinity.sendMessage(m.chat, { audio: { url: json.music.playUrl }, mimetype: 'audio/mp4' })
}
break
case 'ytmp3': case 'youtubemp3': {
if (isBan) return reply2(mess.ban)
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply(mess.getdata)
downloadMp3(text)
}
break
case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.getdata)
downloadMp4(text)
}
break
case 'yts': case 'ytsearch': {
if (isBan) return reply2(mess.ban)
if (!text) throw `Example : ${prefix + command} story wa anime`
reply(mess.search)
let search = await yts2(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
trinity.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: kenzaki })
}
break
case 'play': {
  if (isBan) return reply2(mess.ban)
  if (!text) return reply(`Example : ${prefix + command} mendua`)
  db.data.users[m.sender].limit -= 3
  const yts = require('yt-search')
  let search = await yts(text)
  let res = search.all[0]
  if (!res) return reply("Tidak ditemukan hasil untuk query tersebut.")
  let linknya = res.url
  let caption = `*──「 YOUTUBE PLAY 」──*

*Title:* ${res.title}
*Views:* ${res.views}
*Duration:* ${res.timestamp}
*Uploaded:* ${res.ago}
*Url:* ${linknya}

*Sedang mengunduh audio...*
`
  await trinity.sendMessage(m.chat, {
    image: { url: res.thumbnail },
    caption,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: res.title,
        body: "Hasil YouTube",
        mediaType: 1,
        thumbnailUrl: res.thumbnail,
        renderLargerThumbnail: true,
        sourceUrl: linknya
      }
    }
  }, { quoted: m })
downloadMp3(linknya)
}
break
case 'spotify':
case 'spotifymp3':
case 'spotifyplay': {
  if (!text) return reply(`Contoh: ${prefix + command} kamin`);
  reply2(`Mencari lagu dari Spotify...`);

  try {
    const res = await fetchJson(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    if (!res.status || !res.result || !res.result.downloadUrl) return reply('❌ Gagal mengambil lagu.');

    const { title, artist, duration, cover, url } = res.result.metadata;
    const audioUrl = res.result.downloadUrl;

    const teks = `🎵 *Spotify Audio Found!*\n\n` +
      `📝 *Judul* : ${title}\n` +
      `🎤 *Artis* : ${artist}\n` +
      `⏱ *Durasi* : ${duration}\n` +
      `🔗 *Link* : ${url}`;

    await trinity.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: artist,
          mediaType: 1,
          thumbnailUrl: cover,
          sourceUrl: url,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengunduh audio dari Spotify.');
  }
}
break
case "pin": case "pinterest": {
if (!text) return reply(example("anime dark"))
await trinity.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest(text)
if (pin.length > 10) await pin.splice(0, 100)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: trinity.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: kenzaki})
await trinity.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await trinity.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'git': case 'gitclone': {
if (isBan) return reply2(mess.ban)
if (!args[0]) return reply2(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply2(`Link invalid!!`)
reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
trinity.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kenzaki }).catch((err) => reply('emror'))
}
break 
case 'get': 
if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://';
const ajg = await fetch(text);
if (ajg.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
throw `Content-Length: ${ajg.headers.get('content-length')}`;
}
const contentType = ajg.headers.get('content-type');
if (contentType.startsWith('image/')) {
return trinity.sendMessage(m.chat, { image: { url: text } }, 'imageMessage', text, m);
}
if (contentType.startsWith('video/')) {
return trinity.sendMessage(m.chat, { video: { url: text } }, 'videoMessage', text, m);
}
if (contentType.startsWith('audio/')) {
return trinity.sendMessage(m.chat, { audio: { url: text } }, 'audioMessage', text, m);
}
let alak = await ajg.buffer();
try {
alak = util.format(JSON.parse(alak + ''));
} catch (e) {
alak = alak + '';
} finally {
reply2(alak.slice(0, 65536));
}
break          
case 'xnxx':
case 'xnxxdl': {
  if (!isCreator && !isPrem) return reply(mess.premium)
  if (!text) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-13bn5929/sexiest_pussy_i_have_ever_fucked_in_india`);
  reply2('Mengunduh video dari XNXX...');

  try {
    const api = `https://cikaa-rest-api.vercel.app/download/xnxx?url=${encodeURIComponent(text)}`;
    const res = await fetchJson(api);
    if (!res.status || !res.result) return reply('❌ Gagal mengambil data video.');

    const { title, duration, files } = res.result;
    const durasi = (Number(duration) / 60).toFixed(1) + " menit";

    await trinity.sendMessage(m.chat, {
      video: { url: files.high },
      caption: `🔞 *XNXX Video Downloader*\n\n📌 *Title:* ${title}\n🕒 *Duration:* ${durasi}`,
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat mengunduh video. Pastikan link valid!');
  }
}
break
case 'terabox': {
  if (isBan) return reply2(mess.ban)
  if (!text) return reply(`Example: ${prefix + command} https://www.terabox.com/wap/share/filelist?surl=8PZrrTx3MTMX_fc1A-56fQ`)

  reply2('Sedang memproses link TeraBox...')
  const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/terabox?url=${encodeURIComponent(text)}`)
    const json = await res.json()

    if (!json.status || !json.result || !json.result.url) {
      return reply('❌ Gagal mengambil data dari TeraBox. Pastikan link valid atau coba lagi nanti.')
    }

    const data = json.result
    const info = `📦 *TeraBox Download*

📁 *Nama:* ${data.name || '-'}
📦 *Ukuran:* ${data.size || '-'}
🕒 *Upload:* ${data.date || '-'}
🔗 *Link:* ${data.url || '-'}
`

    await trinity.sendMessage(m.chat, {
      document: { url: data.url },
      fileName: data.name || 'file-terabox',
      mimetype: 'application/octet-stream',
      caption: info,
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    reply('❌ Terjadi kesalahan saat mengakses API TeraBox.')
  }
}
break
case 'capcut': {
  if (isBan) return reply2(mess.ban)
  if (!text) return reply(`Example: ${prefix + command} https://www.capcut.com/template-detail/7520895815682919741`)

  reply2('Sedang mengambil data template CapCut...')
  const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/capcut?url=${encodeURIComponent(text)}`)
    const json = await res.json()

    if (!json.status || !json.result || !json.result.videoUrl) {
      return reply('❌ Gagal mengambil data dari CapCut. Coba cek link kamu.')
    }

    const cap = `🎬 *CapCut Template Downloader*\n\n`
      + `📌 *Judul:* ${json.result.title || '-'}\n`
      + `👤 *Author:* ${json.result.author?.name || '-'}\n`
      + `🔗 *Link:* ${text}`

    await trinity.sendMessage(m.chat, {
      video: { url: json.result.videoUrl },
      caption: cap,
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    reply('❌ Terjadi kesalahan saat mengakses API CapCut!')
  }
}
break
case 'videy': {
 if (isBan) return reply2(mess.ban)
 if (!isPrem && !isCreator) return reply2(mess.premium)
 if (!text) return reply(`Example: ${prefix + command} https://videy.co/v/?id=uo9Ebi2w1`)
 reply2('Sedang memproses link Videy...')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
 try {
 const res = await fetch(`https://cikaa-rest-api.vercel.app/download/videy?url=${encodeURIComponent(text)}`)
 const json = await res.json()

 if (!json.status || !json.result) return reply('❌ Gagal mengambil video dari Videy!')

 const cap = `🎬 *Videy Downloader*\n\n`
 + `📎 *Link Asli:* ${text}\n`
 + `📥 *Download:* ${json.result}`

 await trinity.sendMessage(m.chat, {
 video: { url: json.result },
 caption: cap
 }, { quoted: m })

 } catch (e) {
 console.error(e)
 reply('❌ Terjadi kesalahan saat mengambil video dari Videy!')
 }
}
break

// Search Menu
case 'tiktoksearch':
case 'ttsearch': {
  if (!text) return reply(`Gunakan dengan cara ${prefix + command} *query*\n\n_Contoh_\n\n${prefix + command} jj epep`)
  let anu = await dann.search.tiktoks(text)
  let old = new Date()

  const caption = Styles(`${gris}「 T I K T O K  -  S E A R C H 」${gris}`) + '\n\n' +
  `${hiasan} *Author* : ${anu.author}\n` +
  `${hiasan} *Caption* : ${anu.title}\n` +
  `${hiasan} *Fetching* : ${((new Date - old) * 1)} ms\n\n` +
  `Ketik *.tiktoksearch ${text}* lagi untuk hasil berikutnya.\n\n` +
  `${footer2}`

  await trinity.sendMessage(m.chat, {
    video: { url: anu.no_watermark },
    caption,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      externalAdReply: {
        showAdAttribution: true,
        title: 'TikTok Video',
        body: anu.author,
        mediaType: 2,
        thumbnailUrl: trinityThumb,
        sourceUrl: anu.no_watermark,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}
break
case 'xnxxsearch': {
  if (!isPrem && !isCreator) return reply(mess.premium);
if (!text) return reply(`Example: ${prefix + command} indo`);

  reply2('🔍 Sedang mencari video di XNXX...');

  try {
    const res = await fetchJson(`https://cikaa-rest-api.vercel.app/search/xnxx?q=${encodeURIComponent(text)}`);
    if (!res.status || !res.result || res.result.length === 0)
      return reply('❌ Tidak ditemukan hasil video.');

    let teks = `*🔞 Hasil Pencarian XNXX untuk:* _${text}_\n\n`;
    const list = res.result.slice(0, 5);

    list.forEach((v, i) => {
      teks += `*${i + 1}. ${v.title}*\n`;
      teks += `📊 ${v.info.trim()}\n`;
      teks += `🔗 ${v.link}\n\n`;
    });

    reply(teks.trim());

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil hasil dari XNXX.');
  }
}
break
case 'playstore':
case 'apksearch': {
  if (!text) return reply(`Example: ${prefix + command} alight motion`)
  reply2('📱 Mencari aplikasi di Play Store...')

  try {
    const res = await fetchJson(`https://cikaa-rest-api.vercel.app/search/playstore?q=${encodeURIComponent(text)}`)
    if (!res.status || !res.result || res.result.length === 0) return reply('❌ Tidak ada aplikasi ditemukan.')

    const hasil = res.result.slice(0, 3)
    let teks = `🧩 *Top 3 Aplikasi dari PlayStore*\n🔍 _Hasil untuk:_ *${text}*\n\n`
    hasil.forEach((v, i) => {
      teks += `*${i + 1}. ${v.nama}*\n`
      teks += `👨‍💻 Developer : ${v.developer}\n`
      teks += `⭐ Rating    : ${v.rate2} (${v.rate})\n`
      teks += `🔗 Link      : ${v.link}\n\n`
    })

    await trinity.sendMessage(m.chat, {
      image: { url: hasil[0].img },
      caption: teks.trim(),
      contextInfo: {
        externalAdReply: {
          title: hasil[0].nama,
          body: hasil[0].developer,
          thumbnailUrl: hasil[0].img,
          sourceUrl: hasil[0].link,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengambil data dari Play Store.')
  }
}
break
case 'apk4free':
case 'modapk': {
  if (!text) return reply(`Example: ${prefix + command} alight motion`)
  reply('🔍 Mencari aplikasi mod...')

  try {
    const res = await fetchJson(`https://api.nekorinn.my.id/search/apk4free?q=${encodeURIComponent(text)}`)
    if (!res.status || !res.result || res.result.length === 0) return reply('❌ Tidak ada aplikasi MOD ditemukan.')

    const hasil = res.result.slice(0, 3)
    let teks = `🧩 *Top MOD APK from Apk4Free*\n🔍 _Hasil untuk:_ *${text}*\n\n`
    hasil.forEach((v, i) => {
      teks += `*${i + 1}. ${v.title}*\n`
      teks += `👨‍💻 Developer : ${v.developer}\n`
      teks += `📦 Version   : ${v.version}\n`
      teks += `⭐ Rating    : ${v.rating}\n`
      teks += `🔗 Link      : ${v.url}\n\n`
    })

    await trinity.sendMessage(m.chat, {
      image: { url: hasil[0].icon },
      caption: teks.trim(),
      contextInfo: {
        externalAdReply: {
          title: hasil[0].title,
          body: hasil[0].developer,
          thumbnailUrl: hasil[0].icon,
          sourceUrl: hasil[0].url,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengambil data dari Apk4Free.')
  }
}
break
case 'apkcombo': {
  if (!text) return reply(`Example: ${prefix + command} alight motion`)
  reply('🔍 Sedang mencari aplikasi di APKCombo...')

  try {
    const res = await fetchJson(`https://api.nekorinn.my.id/search/apkcombo?q=${encodeURIComponent(text)}`)
    if (!res.result || res.result.length === 0) return reply('❌ Aplikasi tidak ditemukan di APKCombo.')

    const hasil = res.result.slice(0, 10)
    let teks = `📱 *APK Combo Search*\n🔍 _Hasil untuk:_ *${text}*\n\n`
    hasil.forEach((v, i) => {
      teks += `*${i + 1}. ${v.name}*\n`
      teks += `👨‍💻 Developer : ${v.author}\n`
      teks += `⭐ Rating    : ${v.rating}\n`
      teks += `📥 Downloads : ${v.downloaded}\n`
      teks += `💾 Size      : ${v.size}\n`
      teks += `🔗 Link      : ${v.url}\n\n`
    })

    trinity.sendMessage(m.chat, { text: teks.trim() }, { quoted: m })

  } catch (err) {
    console.error(err)
    reply('❌ Gagal mengambil data dari APKCombo.')
  }
}
break

// Game Menu
case 'modegame': 
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
settings.game = true
reply(`Berhasil Mengubah ModeGame Ke ${q}`)
} else if (q == 'off') {
settings.game = false
reply(`Berhasil Mengubah ModeGame Ke ${q}`)
}
break   

case 'slot': {
if (isBan) return reply2(mess.ban)
let reward = Func.randomInt(global.bmin, global.bmax)
      let emojis = ["🍃", "🍟", "🐱"]
      let a = Math.floor(Math.random() * emojis.length)
      let b = Math.floor(Math.random() * emojis.length)
      let c = Math.floor(Math.random() * emojis.length)
      let x = [],
         y = [],
         z = []
      for (let i = 0; i < 3; i++) {
         x[i] = emojis[a]
         a++
         if (a == emojis.length) a = 0
      }
      for (let i = 0; i < 3; i++) {
         y[i] = emojis[b]
         b++
         if (b == emojis.length) b = 0
      }
      for (let i = 0; i < 3; i++) {
         z[i] = emojis[c]
         c++
         if (c == emojis.length) c = 0
      }
      let end
      if (a == b && b == c) {
         end = `JACKPOT! *+${Func.formatNumber(reward)} point*`
         users.balance += reward
      } else if (a == b || a == c || b == c) {
         end = `Hampir Beruntung! *+1 Limits*`
         users.limit += 1
      } else {
         end = `LOSE! *-${Func.formatNumber(reward)} point*`
         if (reward > users.balance) {
            users.balance = 0
         } else {
            users.balance -= reward
         }
      }
      let teks = `乂  *S L O T S*\n\n`
      teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
      teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
      teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
      teks += `\n${end}`
      reply(teks)
   }
   if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break

case 'dare': {
if (isBan) return reply2(mess.ban)
let dar = require('./lib/scrape/truthdare')
let dare = dar.dare
let teks = `乂  *D A R E*\n\n`;
teks += Func.random(dare);
trinity.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | D A R E`,
body: '',
thumbnailUrl: "https://telegra.ph/file/bf492ed7bd8241ca43289.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break

case 'truth': {
if (isBan) return reply2(mess.ban)
let tru = require('./lib/scrape/truthdare')
let truth = tru.truth
let teks = `乂  *T R U T H*\n\n`;
teks += Func.random(truth);
trinity.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | T R U T H`,
body: '',
thumbnailUrl: "https://telegra.ph/file/dc203f860ca55723913cd.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break

case 'tebakgambar':
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
//if(!isGroup) return reply(mess.group)
if (from in tebakgambar2) return reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await trinity.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: kenzaki})
tebakgambar2[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar2[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar2[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'petakbom': case 'bomb': {
if (isBan) return reply2(mess.ban)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (sender in petakbom) return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delpetakbom': case 'delbomb': {
if (isBan) return reply2(mess.ban)
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (!(sender in petakbom)) return reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
trinity.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
reply(`Petakbom di akhiri, hadiah Rp. 0`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break


case 'wwpc': case 'ww': case 'werewolf': {
if (isBan) return reply2(mess.ban)
try {
let jimp = require('jimp')
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    trinity.werewolf = trinity.werewolf ? trinity.werewolf : {};
    const ww = trinity.werewolf ? trinity.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        trinity.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: kenzaki
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(trinity. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(trinity. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(trinity. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${trinity.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await trinity.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${trinity.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await trinity.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${trinity.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await trinity.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${trinity.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await trinity.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${trinity.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await trinity.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await trinity.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: `${global.sgc}`,
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(trinity. chat, ww);
    } else      if (value === "kill") {
    let byId = getPlayerById2(sender, parseInt(target), ww); 
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") {
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                trinity.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: kenzaki
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        trinity.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: kenzaki
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        trinity.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: kenzaki
            }
        );
    }
    } catch (err) {
console.log(util.format(err))
}
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break




case 'suit': {
if (isBan) return reply2(mess.ban)
if(!isGroup) return reply(mess.group)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
let mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await trinity.sendText(from, `@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\n*Kirim (gas/gamau)* untuk bermain\n\nHadiah : ${hadiah} balance`, m),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) trinity.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox': 
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
var hadiah = randomNomor(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delttt': case 'delttc': 
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`)
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break

case 'tebakanime': 
//if(!isGroup) return reply(mess.group)
if (from in tebakanime) return reply('Masih ada game yang belum diselesaikan');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await trinity.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: kenzaki})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebaklagu': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in tebaklagu) return reply('Masih ada game yang belum diselesaikan');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await trinity.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: kenzaki}).then(res => {trinity.sendText(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kuis': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in kuis) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakkalimat': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in tebakkalimat) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakkata': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`)
if (from in tebakkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebaklirik': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in tebaklirik) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakkimia': 
//if(!isGroup) return reply(mess.group)
if (from in tebakkimia) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakbendera': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in tebakbendera) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'susunkata': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in susunkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'asahotak': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in asahotak) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'siapakahaku': case 'sa': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in siapakahaku) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'caklontong': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in caklontong) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'math': case 'kuismath': 
//if(!isGroup) return reply(mess.group)
if (!settings.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.modegame* lalu click on`) 
if (from in kuismath) return reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./assets/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'family100': case 'f100': 
//if(!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

if (!isCreator && !isPrem) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break //Powered By alice & Darwin
 
case 'casino': {
if (isBan) return reply2(mess.ban)
let buatall = 1
    trinity.casino = trinity.casino ? trinity.casino : {}
    if (m.chat in trinity.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
    else trinity.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(users.balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return reply(`${prefix}Casino <jumlah>\n${prefix}Casino 1000`)
        if (users.balance >= count * 1) {
            users.balance -= count * 1
            //await reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Uang`)
            } else if (Aku < Kamu) {
                users.balance += count * 2
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} uang`)
            } else {
                users.balance += count * 1
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} uang`)
            }
        } else reply(`Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
    } catch (e) {
        console.log(e)
        reply('Error!!')
        } finally {
        delete trinity.casino[m.chat]
    }
}
break


// Ai Menu
case 'createimage': case 'createimg': {
if (isBan) return reply2(mess.ban)
if (!text) return reply(`Example: ${prefix + command} a boy with ball`)
await loading()
let old = new Date()
const json = await generateImages(text)
for (let i = 0; i < 6; i++) {
var rand = Math.floor(json.length * Math.random())
trinity.sendMessage(m.chat, { image: { url: json[rand] }, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: kenzaki })
await sleep(2000)
}
}
break
case 'ai': {
if (isBan) return reply2(mess.ban)
if (!text) return reply(`Example: ${prefix + command} Siapa Kah Zass Onee`)
            reply(mess.search)
            let dat = await fetchJson(`https://api.siputzx.my.id/api/ai/blackboxai?content=${text}`)
            trinity.sendMessage(m.chat, {
text: dat.data.response,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'C H A T - G P T',
body: '',
thumbnailUrl: 'https://telegra.ph/file/3bbc0d84dd5a4b0e1330e.jpg',
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break        
case 'chatbase':
case 'cb': {
  if (isBan) return reply2(mess.ban)
  if (!text) return reply(`Example: ${prefix + command} Siapa penulis buku Laskar Pelangi?`)
  reply(mess.search)

  const { ChatBase } = require('./lib/scrape/chatBase')
  const chat = new ChatBase()
  await chat.constructor() // inisialisasi apiKey dan personalityId kalau butuh

  try {
    const res = await chat.chat(text)
    let answer = res?.answer || res?.text || 'Tidak ada jawaban dari ChatBase.'

    trinity.sendMessage(m.chat, {
      text: answer,
      contextInfo: {
        externalAdReply: {
          title: 'C H A T B A S E',
          body: 'AI dari sumber Chatbase.co',
          thumbnailUrl: 'https://telegra.ph/file/f601a502a0204a43a4764.jpg',
          sourceUrl: 'https://chatbase.co/',
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m })
  } catch (e) {
    reply(`❌ Error: ${e.message}`)
  }
}
break

// HD Menu
case 'removebg':{
	    if (!text) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (!/image/.test(mime)) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (/webp/.test(mime)) return reply `Kirim/Reply Image Dengan Caption ${command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await trinity.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    trinity.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success }, { quoted : kenzaki })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
break
case "tohd": case "hd": case "remini": {
if (!quoted) throw 'Reply Image and command .hd'
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let foto = await trinity.downloadAndSaveMediaMessage(quoted)
let result = await remini(await fs.readFileSync(foto), "enhance")
await trinity.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

// Rpg Menu
case 'me': {
if (isBan) return reply2(mess.ban)
let caption = `乂  *U S E R - P R O F I L E*\n\n`
caption += `	◦ *Name* : ${users.name}\n`
caption += `	◦ *Umur* : ${users.umur}\n`
caption += `	◦ *Region* : ${users.askot}\n`
caption += `	◦ *Banned* : ${users.banned}\n` 
caption += `	◦ *Balance* : ${users.balance}\n`
caption += `	◦ *Limit* : ${users.limit}\n`
caption += `	◦ *LastClaim* : ${msToDate(users.lastclaim)}\n`
caption += `	◦ *Exp* : ${users.exp}\n`
caption += `	◦ *Premium* : ${users.premium}\n`
caption += `	◦ *Verified* : ${users.registered}\n`
caption += `	◦ *Hitstat* : ${users.hit}\n`
caption += `	◦ *Expired* : ${users.expired == 0 ? '-' : msToDate(users.expired - new Date() * 1)}\n\n`
caption += global.footer
trinity.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2025 | ${botname}`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'joinrpg':{
if (!m.isGroup) return reply("Khusus Group")
if (isPetualang) return reply('Kamu Telah join sebelumnya')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./src/rpg/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
trinity.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'mancing':{
if (!m.isGroup) return reply('[ System Notice ] Only for group')
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
setTimeout( () => {
const fishing = Math.ceil(Math.random() * 10)
addIkan(m.sender, fishing)
 reply(`*FISH FISHED* kamu mendapatkan *${fishing}* Ikan selama 1 menit`)
}, 60000); //2 minute
setTimeout( () => {
 reply('Ikannya Terpancing!..' )
}, 20000) // 1000 = 1s,
setTimeout( () => {
 reply('🎣 Menarik Kail. . .' )
}, 7000) // 1000 = 1s,
setTimeout( () => {
let mancingnya = 'https://telegra.ph/file/4cc0b6bd2827a9b23a189.mp4'
trinity.sendMessage(from, {video: {url:mancingnya}, caption: 'mulai memancing', gifPlayback: true},{quoted:m})
}, 0) // 1000 = 1s,
}
break
case 'inv': case 'inventori': case 'inventory': case 'profile':{
if(!isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*\n\n
 *📝 Name* : ${pushname}\n
 *📱 Number* : ${nomore}\n
 *🎟️ Limit* : ${users.limit}\n
 *👩‍⚕️ Premium* : ${isPrem ? 'Premium':'Free'}\n
 *🕺🏻 Petualang* : ${isPetualang ? 'Petualang':'Bukan Petualang'}\n\n
 *RPG USER*\n\n
 *❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n
 *◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n
 *🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n
 *🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n
 *💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n
 *⏺️ Limit* : ${isCreator ? 'Unlimited' : isPrem ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}\n
 *💰 Money* : $${users.balance}\n
 *💵 Saldo* : Rp. ${toRupiah(users.balance)}\n
 *🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n
 *HUNT RESULT*\n
 *🐟 Fish* : ${getIkan(m.sender)}\n
 *🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n
 *🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n
 *🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n
 *🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n
 *🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n
 🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n
 🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n
 ❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n
 🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n
 🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
await trinity.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {
title: `${pushname} PROFILE & BAG`, 
body: 'Play RPG Games With Your Friends',
thumbnailUrl: ppuser,
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: kenzaki})
}
break
case 'mining': case 'mine':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await trinity.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: kenzaki})
}, 7000)
setTimeout( async () => {
await trinity.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break
case 'buy': {
  if (!m.isGroup) return reply("Khusus Group")
  if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg. Silakan ketik *.joinrpg* dulu ya')
  if (!text) return reply(`Mau buy apa lu?\n\n1. potion\n2. baitfood\n3. limit\n\nContoh: ${prefix + command} baitfood 2`)

  let users = global.db.data.users[m.sender]
  let item = args[0]?.toLowerCase()
  let jumlah = parseInt(args[1])
  if (!jumlah || isNaN(jumlah) || jumlah <= 0) return reply(`Contoh: ${prefix + command} ${item} 2`)

  if (item === 'potion') {
    let harga = 100000 * jumlah
    if (users.balance < harga) return reply(`Uang kamu kurang! 1 Potion = 100000\nSisa uangmu: ${users.balance}`)
    users.balance -= harga
    addPotion(m.sender, jumlah)
    setTimeout(() => {
      reply(`✅ Transaksi berhasil!\n• Sisa uang: ${users.balance}\n• Potion: ${getPotion(m.sender)}`)
    }, 1500)
  } 
  
  else if (item === 'baitfood') {
    let harga = 5000 * jumlah
    if (users.balance < harga) return reply(`Uang kamu kurang! 1 Baitfood = 5000\nSisa uangmu: ${users.balance}`)
    users.balance -= harga
    addUmpan(m.sender, jumlah)
    setTimeout(() => {
      reply(`✅ Transaksi berhasil!\n• Sisa uang: ${users.balance}\n• Baitfood: ${getUmpan(m.sender)}`)
    }, 1500)
  }

  else if (item === 'limit') {
    let harga = 3500 * jumlah
    if (users.balance < harga) return reply(`Uang kamu kurang! 1 Limit = 35000\nSisa uangmu: ${users.balance}`)
    users.balance -= harga
    users.limit += jumlah
    setTimeout(() => {
      reply(`✅ Transaksi berhasil!\n• Sisa uang: ${users.balance}\n• Limit: ${users.limit}`)
    }, 1500)
  } 
  
  else {
    reply(`❌ Item tidak ditemukan!\n\nYang tersedia:\n1. potion\n2. baitfood\n3. limit\n\nContoh: ${prefix + command} potion 2`)
  }
}
break
case 'sell': case 'sel': case 'jual':{
 if(!isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 1500 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 2500 * anu
 users.balance += monaynya
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 3000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
let monaynya = 5000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 10000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 15000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 16000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 50000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 100000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi berhasil ✅\n*Sisa uang* : ${users.balance}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
 reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break
case 'heal':{
 
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!isCekDarah < 1) return reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
if (isCekDarah > 100) return reply('Darahmu Penuh')
if (isPotion < 1) return reply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
reply('Done! Darah mu dah full')
 }
 break
case 'hunt': case 'hunting': {
if (isBan) return reply2(mess.ban)
if(!isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return reply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
 teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
await trinity.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: kenzaki})
}, 5000)
 setTimeout( () => {
trinity.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'adventure':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
trinity.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})
}, 7000)
setTimeout( () => {
 reply(`Awass`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
 reply(`Tiba-tiba Ada ${sesuatu}`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
 reply(`${pushname} On an Adventure`)
}, 0) // 1000 = 1s,
users.exp += adven
users.balance += money
}
break
case 'ojek': case 'ngojek':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `
*—[ Hasil Ngojek ${pushname} ]—*
 ➕ 💹 Uang = [ ${money} ]
 ➕ ✨ Exp = [ ${adven} ] 
 ➕ 😍 Order Selesai = +1
`
 reply(hg)
}, 10000)
setTimeout( () => {
 reply(`
➕ 💹Menerima gaji....
`)
}, 9000)
setTimeout( () => {
 reply(`
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️


➕ Sampai di tujuan...
`)
}, 7000)
setTimeout( () => {
 reply(`
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️


➕ Mengantar ke tujuan....
`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
 reply(`
Mendapatkan Orderan...
`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
 reply(`Mencari Pelanggan...`)
}, 0) // 1000 = 1s,
users.exp += adven
users.balance += money
}
break
case 'luckyday':
case 'luckytime':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
users.balance += b
users.exp += ez
addEmas(m.sender, a)
addBesi(m.sender, c)
 reply(`🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break
case 'slime':
case 'killslime':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 400)
users.exp += ez
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
trinity.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break
case 'goblin':
case 'killgoblin':{
 
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 500)
users.exp += ez
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
trinity.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break
case 'devil':
case 'killdevil':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 600)
users.exp += ez
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
trinity.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break
case 'behemoth':
case 'killbehemoth':{
 
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 700)
users.exp += ez
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
trinity.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break
case 'demon':
case 'killdemon':{
 
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 850)
users.exp += ez
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
users.exp += ez
users.balance += b
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
trinity.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break
case 'demonking':
case 'killdemonking':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 1000)
users.exp += ez
users.balance += 1999
addEmas(m.sender, 99)
addBesi(m.sender, 99)
addDm(m.sender, 99)
bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
trinity.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
}
break
case 'sellikan':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return reply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
users.balance += rp
 reply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellbesi':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return reply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
users.balance += rp
 reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellemas':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return reply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
users.balance += rp
 reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break 
case 'jelajah': {
if (isBan) return reply2(mess.ban)
var tempsa = args.join(" ")
if (tempsa == 'corbiens river') {
var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
setTimeout( async () => {
const vio = Math.ceil(Math.random() * 70) 
const pikan = Math.ceil(Math.random() * 15)
addStone(m.sender, vio)
addIkan(m.sender, pikan)
trinity.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) 
} else if (tempsa === 'chiltawa woods') {
let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
setTimeout( async () => {
const tesaaq = Math.ceil(Math.random() * 110) // batu
const ise = Math.ceil(Math.random() * 20)
addStone(m.sender, tesaaq)
addKayu(m.sender, ise)
trinity.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else if (tempsa === 'cochher sea') { 
let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
setTimeout( async () => {
const feds = Math.ceil(Math.random() * 65)
addIkan(m.sender, feds)
trinity.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else if (tempsa === 'limingstall mountains') {
let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
setTimeout(() => {
const fads = Math.ceil(Math.random() * 50)
const fids = Math.ceil(Math.random() * 80)
addOre(m.sender, fads)
addStone(m.sender, fids)
trinity.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'chade mountain') {
let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
setTimeout( () => {
const pore = Math.ceil(Math.random() * 40)
const pone = Math.ceil(Math.random() * 60)
addOre(m.sender, pore)
addStone(m.sender, pone)
trinity.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 3000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'gerbil woods') {
let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
setTimeout( async () => {
const tzys = Math.ceil(Math.random() * 90) // batu
const isue = Math.ceil(Math.random() * 45)
addStone(m.sender, tzys)
addKayu(m.sender, isue)
trinity.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'moobiens grassland') {
let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
setTimeout( () => {
const awqu = Math.ceil(Math.random() * 200) // batu
const usui = Math.ceil(Math.random() * 20)
addStone(m.sender, awqu)
addKayu(m.sender, usui)
trinity.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else {
let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river
`
trinity.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: kenzaki}) 
}
}
break
case 'jualikan':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIkan = 10000
const hasil1 = bayar * hargaIkan
if ( getMancingIkan(m.sender) <= 1 ) return reply(`Maaf ${pushname} ikan kamu belum cukup, minimal 2 ikan`)
if ( getMancingIkan(m.sender) >= 1 ) {
jualIkan(m.sender, bayar)
users.balance += hasil1
awaitreply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah ikan dijual:* ${bayar}${enter}*Uang didapat:* ${hasil1}${enter}${enter}*Sisa ikan:* ${getMancingIkan(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualcoal':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaCoal = 15000
const hasil2 = bayar * hargaCoal
if ( getMiningcoal(m.sender) <= 1 ) return reply(`Maaf ${pushname} kamu tidak punya coal`)
if ( getMiningcoal(m.sender) >= 1 ) {
jualcoal(m.sender, bayar)
users.balance += hasil2
awaitreply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'lebur':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaOre = 2
const hasil3 = bayar * hargaOre
if ( getMiningore(m.sender) <= 1 ) return reply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
if ( getMiningore(m.sender) >= 1 ) {
jualore(m.sender, bayar)
addIngot(m.sender, hasil3)
awaitreply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
}
}
break
case 'jualstone':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return reply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
users.balance += hasil4
awaitreply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualingot':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIngot = 35000
const hasil5 = bayar * hargaIngot
if ( getMiningingot(m.sender) <= 1 ) return reply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
if ( getMiningingot(m.sender) >= 1 ) {
jualingot(m.sender, bayar)
users.balance += hasil5
awaitreply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualkayu':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaKayu = 18000
const hasil6 = bayar * hargaKayu
if ( getNebangKayu(m.sender) <= 1 ) return reply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
if ( getNebangKayu(m.sender) >= 1 ) {
jualkayu(m.sender, bayar)
users.balance += hasil6
awaitreply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
}
}
break
case 'nebang':{
setTimeout( () => {
const oreo = Math.ceil(Math.random() * 20)
addKayu(m.sender, oreo)
 reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}* kayu selama 2 menit`)
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang menebang, silahkan tunggu...')
}, 0) //1sec
}

break
case 'goplanet':{
setTimeout( () => {
const bertualang = Math.ceil(Math.random() * 100)
const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
addPlanet(m.sender, bertualang)
 reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${bertualang} bahan kimia dari ${planetari}* selama 2 tahun`)
}, 2000); //2 minute
setTimeout( () => {
 reply('Sedang meroket 😱, silahkan tunggu... 2 tahun')
}, 0) //1sec
}

break
case 'jualbahankimia':{
if (!m.isGroup) return reply("Khusus Group")
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
buayar= args.join(" ")
const hargakimia = 1000
const dapetin = buayar * hargakimia
if ( getBertualangPlanet(m.sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya bahankimia`)
if ( getBertualangPlanet(m.sender) >= 1 ) {
jualbahankimia(m.sender, buayar)
users.balance += dapetin
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}${enter}${enter}`)
}
}
break

// Viewone Menu
case 'bukavn': {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!isQuotedViewonce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "audioMessage" ? "audio" : "image")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/audio/.test(type)) {
await trinity.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: kenzaki})}
}
break
case "rvo": case "readviewonce": {
if (isBan) return reply2(mess.ban)
if (!isCreator) return reply2(mess.owner)
if (!m.quoted) return reply("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return trinity.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return trinity.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return trinity.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

// Tools Menu
case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Biiofc`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
trinity.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: kenzaki })
}
break
case "translate": case "tr": {
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m.quoted && m.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m.quoted.text
} else return reply(`Ex: ${prefix + command} id hello i am robot`)
const trans = require('@vitalets/google-translate-api')
await loading()
let res = await trans.translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
case 'githubrepo': {
if (isBan) return reply2(mess.ban)	
if(!text) return reply2(`${command} sanzy`)
let po = await skyu.githubRepo(text)
let txt = `*L I S T - R E P O*\n\n`
for (let rep of po.result) {
txt += `   ◦  *Id :* ${rep.id}\n`
txt += `   ◦  *Name :* ${rep.name_repo}\n`
txt += `   ◦  *FullName :* ${rep.full_name_repo}\n`
txt += `   ◦  *UrlRepo :* ${rep.url_repo}\n`
txt += `   ◦  *Description :* ${rep.description}\n`
txt += `   ◦  *Git Url:* ${rep.git_url}\n`
txt += `   ◦  *Clone Url :* ${rep.clone_url}\n`
txt += `   ◦  *Homepage :* ${rep.homepage}\n`
txt += `   ◦  *StarGazers* : ${rep.stargazers}\n`
txt += `   ◦  *Watchers* : ${rep.watchers}\n`
txt += `   ◦  *Forks* : ${rep.forks}\n`
txt += `   ◦  *Language* : ${rep.language}\n`
txt += `   ◦  *Created* : ${rep.created_at}\n`
txt += `   ◦  *Update* : ${rep.update_at}\n\n`
}
txt += `${footer}`
reply2(txt)
}
break
case 'npmjs': { 
if (isBan) return reply2(mess.ban)
if (!text) return reply('Input Package Name')
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) throw `Query "${text}" not found :/`
let txt = objects.map(({ package: pkg }) => {
return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
}).join`\n\n`
trinity.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `乂 N P M J S`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

// Convert Menu
case 'tolatin': { 
if (isBan) return reply2(mess.ban)
if (!text) throw `[ ! ] *example:* ${prefix + command} ꦲꦭ꧀ꦭꦺꦴ​ꦫꦺꦏ꧀`
reply(mess.search)
let anu = await aksaraToLatin(text)
reply(`*Hasil :*\n${anu}`)
}
break
case 'toaksara': { 
if (isBan) return reply2(mess.ban)
if (!text) throw `Ubah Latin ke Aksara Jawa\n\nContoh :\n*${prefix + command} halo rek*`
	try {
		let anu = await latinToAksara(`${text}`)
		reply(`*Hasil :*\n${anu}`)
	} catch (e) {
		console.log(e)
		reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
	}
	break
case "tohuruf": {
if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await angkaTerbilang(quere)
reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
reply("Error")
}
}
break
case 'toqr':{
  if (!q) return reply(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await trinity.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: kenzaki })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'tovid': { 
                if (!quoted) return reply('Reply Image')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await trinity.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await trinity.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: kenzaki })
                await fs.unlinkSync(media)
            }
            break
case 'toimage': case 'toimg': { 
if (isBan) return reply2(mess.ban)
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await trinity.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
trinity.sendMessage(from, { image: buffer }, {quoted:kenzaki})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': { 
if (isBan) return reply2(mess.ban)
await loading()
if (!quoted) throw `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await trinity.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await trinity.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:kenzaki})
await fs.unlinkSync(media)
}
}
break
case 'tomp3': { 
if (isBan) return reply2(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
await loading()
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await trinity.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
trinity.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${trinity.user.name}.mp3`}, { quoted : kenzaki })
}
break
case 'toaud': case 'audio': { 
if (isBan) return reply2(mess.ban)
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await trinity.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
trinity.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : kenzaki })
}
break
case 'tovn': case 'voice': { 
if (isBan) return reply2(mess.ban)
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply2(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
trinity.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285298027445',
title: `Zass Onee`,
sourceUrl: `https://wa.me/6285298027445`, 
thumbnailUrl: tumburl
}
}})
}
break
case 'togif': { 
if (isBan) return reply2(mess.ban)
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./lib/uploader')
let media = await trinity.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await trinity.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:kenzaki})
await fs.unlinkSync(media)
}
break
case 'tourl': {
if (!quoted) throw 'Reply Image and command .tourl'
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let media = await trinity.downloadAndSaveMediaMessage(quoted)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Zass Onee.png');

let teks = directLink.toString()
await trinity.sendMessage(m.chat, {text: teks}, {quoted: kenzaki})
await fs.unlinkSync(media)
}
break
case 'tourl2': {
  const qmsg = m.quoted || m;
  const mime = (qmsg.msg || qmsg).mimetype || '';
  const allowed = /image|video|audio|application|sticker/;

  if (!allowed.test(mime)) {
    return balas(`[ ! ] Kirim atau balas media (foto, video, dokumen, audio, stiker, dll) dengan perintah *${prefix + command}*`);
  }

  let media = await qmsg.download();
  if (!media) return balas("[ x ] Gagal mengunduh media!");

  try {
    if (!fs.existsSync('./media/image')) fs.mkdirSync('./media/image');

    const extension = mime.split('/')[1] || 'bin';
    const fileName = `zassci_${Date.now()}.${extension}`;
    const filePath = `./media/image/${fileName}`;
    fs.writeFileSync(filePath, media);

    const form = new (require('form-data'))();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(filePath));

    const res = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    });

    fs.unlinkSync(filePath);

    const url = res.data.trim();
    if (!url.includes('https://')) return balas("[ x ] Gagal upload ke Catbox!");

    const sizeKb = (media.length / 1024).toFixed(2);
    const caption = `✅ *Upload Berhasil!*\n\n` +
      `📦 *Nama:* ${fileName}\n` +
      `📁 *Ukuran:* ${sizeKb} KB\n` +
      `🧩 *Tipe:* ${mime}\n` +
      `🔗 *Link:* ${url}`;

    await reply(caption);

  } catch (err) {
    console.error(err);
    reply2("Terjadi kesalahan saat upload ke Catbox!");
  }
}
break

// Jadibot Menu
case "jadibot": {
wek = `${gris}</> CLONE BOT </>${gris}`

let sections = [{
title: 'Selection',
rows: [{
title: 'Start',
description: `Getting started as a bot`, 
id: `${prefix}startjadibot`
},
{
title: 'Stop',
description: `Stop being a bot`, 
id: `${prefix}stopjadibot`
},
{
title: 'List',
description: `Displays a list of bot users`, 
id: `${prefix}listjadibot`
}]
}]

let listMessage = {
    title: 'Selection', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: saluran,
 newsletterJid: idsal,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: trinity.decodeJid(trinity.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: "",
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/4235b63388255ea893327.png" } }, { upload: trinity.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await trinity.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "startjadibot":{
  //if (m.isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(trinity, m, from)
  await sleep(4000)
  //reply(`mess.wait`)
  const jsonData = JSON.parse(fs.readFileSync(`./session/${m.sender.split("@")[0]}/creds.json`));
// Membaca pairingCode dari file JSON
const pairingCode = jsonData.pairingCode;
// Membagi pairingCode menjadi kelompok-kelompok berisi empat karakter
let formattedPairingCode = '';
for (let i = 0; i < pairingCode.length; i += 4) {
  if (i > 0) {
    formattedPairingCode += '-';
  }
  formattedPairingCode += pairingCode.substring(i, i + 4);
}
// Mengirimkan Pesan
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `You Pairing Code : *${formattedPairingCode}*\n\n*How To Install*\n1. Enter the *linked device*\n2. Click *link device*\n3. Click enter *with phone number only*\n4. Enter your *code*"\n\nYour code will *expire* in *20* seconds`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({ 
                  title: ``,
                  gifPlayback: true,
                  subtitle: `test`,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy code",
                "copy_code": `${formattedPairingCode}`
                })
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterName: saluran,
				  newsletterJid: idsal,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await trinity.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case "stopjadibot":{
  //if (m.isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(trinity, from)
}
break
case "listjadibot":{
  //if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(trinity, m)
}
break

// QUOTES MENU
case 'galau':
case 'katabijak':
case 'katacinta':
case 'katahacker':
case 'katailham':
case 'katasenja':
case 'katasindiran':
case 'motivasi':
case 'quotesanime':
case 'quotesdilan':
case 'quotesislamic':
case 'pantun':
case 'puisi':
case 'faktaunik':
case 'quotesgacha':
case 'quoteswibu':
case 'quotessad':
case 'quotesrandom':
case 'quotesdev': {
  await handleQuote(command, m, reply, reply2, db, isCreator, isPrem)
}
break
case 'animequote':
case 'animequotes': {
  try {
    const res = await fetchJson('https://api.nekorinn.my.id/random/anime-quote');
    if (!res.status || !Array.isArray(res.result)) return reply('❌ Gagal mengambil quote.');

    // ambil random dari array result
    const quoteData = res.result[Math.floor(Math.random() * res.result.length)];

    const teks = `🗯️ *Anime Quote* 🗯️

❝ ${quoteData.quote} ❞

👤 *Character:* ${quoteData.char}
📺 *Anime:* ${quoteData.from_anime}
🎞️ *Episode:* ${quoteData.episode}`;

    await trinity.sendMessage(m.chat, { text: teks }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Terjadi kesalahan saat mengambil data quote.');
  }
}
break

// ANIME MENU
case 'waifu':
case 'neko':
case 'megumin':
case 'shinobu':
case 'miku':
case 'raiden':
case 'kanna':
case 'marin':
case 'mori':
case 'yotsuba':
case 'nino':
case 'mikuqq':
case 'ichika':
case 'itsuki':
case 'darkness':
case 'yui':
case 'ayaka':
case 'lumine':
case 'ei':
case 'chika':
case 'yor':
case 'zerotwo':
case 'rem':
case 'ram':
case 'sasha':
case 'mikasa':
case 'hinata':
case 'sakura':
case 'naruto':
case 'itachi': {
  await animeHandler(command, m, reply, trinity)
}
break
case 'loli': {
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/loli');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);
    const buffer = await res.buffer();
    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🍰 *Here is your loli image!*'
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    reply('❌ Terjadi kesalahan saat mengambil gambar dari API.');
  }
}
break
case 'yandere': {
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/yandere');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🔪 *Random Yandere Girl*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar yandere.');
  }
}
break
case 'cosplay': {
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/cosplay');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🧸 *Random Cosplay*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar cosplay.');
  }
}
break
case 'picre': {
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/picre');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🧁 *Random Picre Girl*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar Picre.');
  }
}
break
case 'bluearchive': {
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/bluearchive');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🎓 *Random Blue Archive Girl*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar Blue Archive.');
  }
}
break
case 'konachan': {
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/konachan');

    if (!res.ok) throw new Error(`Gagal mengambil gambar (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🌸 *Konachan Image*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar dari API Konachan.');
  }
}
break
case 'animeinfo': {
  if (!text) return reply(`Contoh: ${prefix + command} oshi no ko`)
  const res = await MalSearchAnime(text)
  if (!res || res.length === 0) return reply('Anime tidak ditemukan.')

  let teks = `📺 *Hasil Pencarian Anime: ${text}*\n\n`
  for (let i = 0; i < res.length; i++) {
    teks += `🎞️ *${res[i].title}*\n📦 Type: ${res[i].type}\n📺 Episode: ${res[i].episode}\n⭐ Score: ${res[i].score}\n🔗 Link: ${res[i].url}\n\n`
  }

  await trinity.sendMessage(m.chat, {
    image: { url: res[0].thumbnail },
    caption: teks.trim()
  }, { quoted: kenzaki })
}
break

case 'character':
case 'char': {
  if (!text) return reply(`Contoh: ${prefix + command} nakano`)
  const res = await MalSearchCharacter(text)
  if (!res || res.length === 0) return reply('Karakter tidak ditemukan.')

  let teks = `👤 *Hasil Pencarian Karakter: ${text}*\n\n`
  for (let i = 0; i < res.length; i++) {
    teks += `🎭 *${res[i].name}* (${res[i].alias_name})\n🌐 Anime: ${res[i].anime}\n📚 Manga: ${res[i].manga}\n🔗 Link: ${res[i].url}\n\n`
  }

  await trinity.sendMessage(m.chat, {
    image: { url: res[0].thumbnail },
    caption: teks.trim()
  }, { quoted: kenzaki })
}
break

case 'manga': {
  if (!text) return reply(`Contoh: ${prefix + command} tokyo ghoul`)
  const res = await MalSearchManga(text)
  if (!res || res.length === 0) return reply('Manga tidak ditemukan.')

  let teks = `📚 *Hasil Pencarian Manga: ${text}*\n\n`
  for (let i = 0; i < res.length; i++) {
    teks += `📖 *${res[i].title}*\n📦 Type: ${res[i].type}\n📚 Volume: ${res[i].vol}\n⭐ Score: ${res[i].score}\n🔗 Link: ${res[i].link}\n\n`
  }

  await trinity.sendMessage(m.chat, {
    image: { url: res[0].thumbnail },
    caption: teks.trim()
  }, { quoted: kenzaki })
}
break

case 'topanime': {
  const res = await MalTopAiring()
  if (!res || res.length === 0) return reply('Tidak bisa mengambil daftar anime.')

  let teks = `🏆 *Top Airing Anime Saat Ini*\n\n`
  for (let i = 0; i < res.length; i++) {
    teks += `#${res[i].rank} - *${res[i].title}*\n⭐ Score: ${res[i].score}\n🔗 ${res[i].link}\n\n`
  }

  await trinity.sendMessage(m.chat, {
    image: { url: res[0].thumbnail },
    caption: teks.trim()
  }, { quoted: kenzaki })
}
break

case 'upcominganime': {
  const res = await MalUpcoming('upcoming')
  if (!res || res.length === 0) return reply('Tidak bisa mengambil data.')

  let teks = `📅 *Top Upcoming Anime*\n\n`
  for (let i = 0; i < res.length; i++) {
    teks += `#${res[i].rank} - *${res[i].title}*\n⭐ Score: ${res[i].score}\n🔗 ${res[i].link}\n\n`
  }

  await trinity.sendMessage(m.chat, {
    image: { url: res[0].thumbnail },
    caption: teks.trim()
  }, { quoted: kenzaki })
}
break

case 'kiryuu': {
  if (!text) return reply(`Contoh: ${prefix + command} one piece`)
  const data = await scrapKiryuuSearch(text)
  if (!data.length) return reply(`Tidak ditemukan.`)
  let teks = `📚 Hasil Pencarian Kiryuu:\n\n`
  for (let x of data.slice(0, 5)) {
    teks += `📖 Judul: ${x.name}
📌 Type: ${x.type}
⭐ Rating: ${x.rating}
📑 Chapter: ${x.chapter}
🔗 URL: ${x.url}\n\n`
  }
  await reply(teks)
}
break

case 'kiryuuget': {
  if (!text.includes('kiryuu.id')) return reply(`Masukkan link dari kiryuu.id!\nContoh: ${prefix + command} https://kiryuu.id/manga/one-piece/`)
  const data = await scrapKiryuuGet(text)
  let caption = `📘 *${data.title}*\n\n`
  caption += `🔄 Judul Alternatif: ${data.alter_title}\n`
  caption += `📌 Tipe: ${data.type}\n📚 Genre: ${data.genre}\n📈 Status: ${data.progress}\n👨‍💼 Author: ${data.author}\n📅 Update: ${data.update_on}\n📅 Upload: ${data.posted_on}\n\n📖 Chapter:\n`
  data.result.slice(0, 5).forEach(x => {
    caption += `• ${x.name} (${x.update})\n🔗 ${x.url}\n\n`
  })
  await trinity.sendMessage(m.chat, { image: { url: data.thumb }, caption }, { quoted: m })
}
break

case 'mangatoon': {
  if (!text) return reply(`Contoh: ${prefix + command} solo leveling`)
  const data = await scrapMangatoonSearch(text)
  if (!data.length) return reply('Tidak ditemukan.')
  let teks = `📚 Hasil Pencarian MangaToon:\n\n`
  for (let x of data.slice(0, 5)) {
    teks += `📖 Judul: ${x.title}
📚 Genre: ${x.genre}
🔗 URL: ${x.url}\n\n`
  }
  await reply(teks)
}
break

case 'mangatoonget': {
  if (!text.includes('mangatoon.mobi')) return reply(`Masukkan link dari mangatoon.mobi!\nContoh: ${prefix + command} https://mangatoon.mobi/id/detail/2074`)
  const data = await scrapMangatoonGet(text)
  let caption = `📘 *${data.title}*\n\n`
  caption += `📚 Genre: ${data.genre}\n👨‍💼 Author: ${data.author}\n⭐ Skor: ${data.score}\n❤️ Likes: ${data.like_count}\n👁️ Views: ${data.view_count}\n\n📖 Episode:\n`
  data.result.slice(0, 5).forEach(x => {
    caption += `• ${x.episode}\n🔗 ${x.url}\n\n`
  })
  await trinity.sendMessage(m.chat, { image: { url: data.thumb }, caption }, { quoted: m })
}
break

case 'mangaread': {
  if (!text.includes('mangatoon.mobi')) return reply(`Masukkan link baca dari mangatoon!\nContoh: ${prefix + command} https://mangatoon.mobi/id/watch/2074/6933`)
  const data = await scrapMangatoonRead(text)
  if (!data.status) return reply(data.message)
  await reply(`📘 *${data.title}*\n📖 Episode: ${data.episode}\n📄 Total Halaman: ${data.result.length}\n\nMengirim gambar...`)
  for (let img of data.result.slice(0, 5)) {
    await trinity.sendMessage(m.chat, { image: { url: img } }, { quoted: m })
  }
}
break

// NSFW MENU
case 'randomnsfw': {
if (isBan) return reply2(mess.ban)
if (!isPrem && !isCreator) return reply2(mess.premium)

  reply('🔞 Mengambil Hentai GIF...');

  try {
    const gifUrl = "https://cikaa-rest-api.vercel.app/random/nsfw";

    await trinity.sendMessage(m.chat, {
      image: { url: gifUrl },
      caption: `🔞 *NSFW INTI (yg pake pasti otaku tua kesepian😏)*`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('❌ Gagal mengambil hentai gif!');
  }
}
break
case 'hentai': {
  if (!isPrem && !isCreator) return reply("astaghfirullah tobat sono dek sebelum terlambat ☝️");
  try {
    const res = await fetch('https://api.nekorinn.my.id/nsfwhub/hentai');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🔞 *Random hentai (NSFW)*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply(' Tobat tobat sono tar mandul.');
  }
}
break
case 'rule34': {
  if (!isPrem && !isCreator) return reply(mess.premium);
  try {
    const res = await fetch('https://api.nekorinn.my.id/random/rule34');
    if (!res.ok) throw new Error(`Gagal fetch (${res.status})`);

    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: '🔞 *Random Rule34 (NSFW)*'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar Rule34.');
  }
}
break
case 'waifu2':
case 'neko2':
case 'trap':
case 'blowjob':
case 'boobs':
case 'lewd':
case 'nsfwneko':
case 'solo':
case 'feet':
case 'lewdk':
case 'lewdn':
case 'yuri': {
if (isBan) return reply2(mess.ban)
if (!isPrem && !isCreator) return reply2(mess.premium)
  await nsfwAnimeHandler(command, m, reply, trinity)
}
break
case 'animegen': {
    if (isBan) return reply2(mess.ban)
    if (!isPrem && !isCreator) return reply2(mess.premium)
    if (!text) return reply('Contoh: .animegen  anime style red hair girl character (Support nsfw & English only)');
    
    await trinity.sendMessage(m.chat, {
    react: { text: "⏱️", key: m.key }
});
await new Promise(resolve => setTimeout(resolve, 500));

await trinity.sendMessage(m.chat, {
    react: { text: "🤨", key: m.key }
});
await new Promise(resolve => setTimeout(resolve, 500));

await trinity.sendMessage(m.chat, {
    react: { text: "😑", key: m.key }
});
await new Promise(resolve => setTimeout(resolve, 500));

await trinity.sendMessage(m.chat, {
    react: { text: "😂", key: m.key }
});
await new Promise(resolve => setTimeout(resolve, 500));

await trinity.sendMessage(m.chat, {
    react: { text: "🤫", key: m.key }
});
await new Promise(resolve => setTimeout(resolve, 500));

await trinity.sendMessage(m.chat, {
    react: { text: "⏱️", key: m.key }
});

    try {
        const axios = require('axios');
        const apiUrl = `https://flowfalcon.dpdns.org/ai/kivotos?prompt=${encodeURIComponent(text)}`;

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        };

        const res = await axios.get(apiUrl, {
            responseType: 'arraybuffer',
            headers: headers
        });

        await new Promise(resolve => setTimeout(resolve, 5000));
await trinity.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
    });
        await trinity.sendMessage(m.chat, {
            image: Buffer.from(res.data),
            caption: `✅ Hasil AI Image untuk prompt: *${text}*`
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        await trinity.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
    });
        reply(`❌ Gagal membuat gambar. Pastikan API aktif dan prompt benar.\nError: ${err.message}`);
    }
}
break

// STALK MENU
case 'ttstalk':
case 'tiktokstalk': {
  if (!text) return reply(`Example: ${prefix + command} zass.id`);

  reply2('🔍 Mencari informasi akun TikTok...');

  try {
    const res = await fetchJson(`https://cikaa-rest-api.vercel.app/stalk/tiktok?user=${encodeURIComponent(text)}`);
    if (!res.status || !res.result) return reply('❌ Gagal mendapatkan data TikTok!');

    const r = res.result;
    const txt = `── 「 *TIKTOK STALK* 」 ──

👤 *Username:* @${r.uniqueId}
📛 *Nickname:* ${r.nickname}
📍 *Region:* ${r.region}
📝 *Bio:* ${r.signature}
🔗 *Link:* ${r.bioLink?.link || '-'}
✅ *Verified:* ${r.verified ? 'Yes' : 'No'}

👥 *Followers:* ${r.followerCount}
👣 *Following:* ${r.followingCount}
❤️ *Likes:* ${r.heart || 0}

🆔 *ID:* ${r.id}
🔐 *Private:* ${r.privateAccount ? 'Yes' : 'No'}
🌐 *Language:* ${r.language?.toUpperCase() || '-'}

📎 https://www.tiktok.com/@${r.uniqueId}
`;

    await trinity.sendMessage(m.chat, {
      image: { url: r.avatarLarger },
      caption: txt,
      contextInfo: {
        externalAdReply: {
          title: `TIKTOK: @${r.uniqueId}`,
          body: `Stalk dari ${r.nickname}`,
          thumbnailUrl: trinityThumb,
          sourceUrl: `https://www.tiktok.com/@${r.uniqueId}`,
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Terjadi kesalahan saat stalk TikTok.');
  }
}
break
case 'npminfo':
case 'npmstalk': {
  if (!text) return reply(`Example: ${prefix + command} zassio`);

  reply('📦 Sedang mencari info paket NPM...');

  try {
    const res = await fetchJson(`https://cikaa-rest-api.vercel.app/stalk/npm?q=${encodeURIComponent(text)}`);
    if (!res.status || !res.result) return reply('Ganemu anjir, npm anomali ga diajak!');

    const r = res.result;
    const formatDate = (date) => {
      const d = new Date(date);
      return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    };

    const txt = `── 「 *NPM PACKAGE INFO* 」 ──

📦 *Name:* ${r.name}
📌 *Latest Version:* ${r.versionLatest}
📤 *First Publish Version:* ${r.versionPublish}
🔄 *Total Updates:* ${r.versionUpdate}

📚 *Dependencies (Latest):* ${r.latestDependencies}
📚 *Dependencies (Published):* ${r.publishDependencies}

🗓️ *Published On:* ${formatDate(r.publishTime)}
🆕 *Latest Update:* ${formatDate(r.latestPublishTime)}

🔗 https://www.npmjs.com/package/${r.name}
`;

    await trinity.sendMessage(m.chat, {
      text: txt,
      contextInfo: {
        externalAdReply: {
          title: `NPM Package: ${r.name}`,
          body: `Versi terbaru ${r.versionLatest}`,
          thumbnailUrl: trinityThumb,
          sourceUrl: `https://www.npmjs.com/package/${r.name}`,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Terjadi kesalahan saat mencari package.');
  }
}
break
case 'ghstalk':
case 'githubstalk': {
  if (!text) return reply(`Example: ${prefix + command} ZassOnee`);

  reply2('🐱 Mencari akun GitHub...');

  try {
    const res = await fetchJson(`https://cikaa-rest-api.vercel.app/stalk/github?user=${encodeURIComponent(text)}`);
    if (!res.status || !res.result) return reply('❌ Akun GitHub tidak ditemukan!');

    const r = res.result;
    const toDate = (iso) => new Date(iso).toLocaleString('id-ID');

    const teks = `── 「 *GITHUB INFO* 」 ──

👤 *Username:* ${r.username}
🆔 *ID:* ${r.id}
👥 *Followers:* ${r.followers}
👤 *Following:* ${r.following}
📦 *Public Repo:* ${r.public_repo}
📝 *Gists:* ${r.public_gists}

🕒 *Created At:* ${toDate(r.ceated_at)}
🛠 *Updated At:* ${toDate(r.updated_at)}

🔗 *Link:* ${r.url}`;

    await trinity.sendMessage(m.chat, {
      image: { url: r.profile_pic },
      caption: teks,
      contextInfo: {
        externalAdReply: {
          title: `GitHub User: ${r.username}`,
          body: `Total Repo: ${r.public_repo}`,
          thumbnailUrl: trinityThumb,
          sourceUrl: r.url,
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil data GitHub.');
  }
}
break

// EPHOTO MENU
case 'american-flag-text':
case 'advanced-glow':
case '3d-underwater-text':
case '3d-hologram-text':
case '1917-style-text':
case 'digital-glitch-text':
case 'cartoon-style-graffiti-text':
case 'blackpink-style-logo':
case 'blackpink-style-logo-v2':
case 'bear-logo':
case 'gradient-text':
case 'glowing-text':
case 'galaxy-wallpaper':
case 'galaxy-style-logo':
case 'eraser-deleting-text':
case 'nigeria-flag-text':
case 'neon-light-text':
case 'neon-glitch-text':
case 'luxury-gold-text':
case 'light-green-neon':
case 'watercolor-text':
case 'typography-text-on-pavement':
case 'text-clouds-in-the-sky':
case 'royal-text':
case 'pixel-glitch-text':
case 'write-text-on-wet-glass':
case 'write-in-sand-summer-beach':
case 'write-in-sand-summer-beach-v2': {
  if (!text) return reply(`Example: ${prefix + command} ZassOnee`);
  try {
    const res = await fetch(`https://api.nekorinn.my.id/ephoto/${command}?text=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error(`Gagal mengambil gambar (${res.status})`);
    
    const buffer = await res.buffer();

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: `🖼 *Ephoto Effect Generator: ${command.replace(/-/g, ' ')}*`
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal membuat gambar efek teks.');
  }
}
break
case 'balogo':
case 'bluearchivelogo': {
  if (!text.includes('|')) return reply(`Example: ${prefix + command} text1|text2`);

  let [textL, textR] = text.split('|');
  if (!textL || !textR) return reply(`Example: ${prefix + command} Zassciii|whiaa`);

  reply2('🌈 Membuat logo Blue Archive...');

  try {
    const res = `https://api.nekorinn.my.id/maker/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`;

    await trinity.sendMessage(m.chat, {
      image: { url: res },
      caption: `✅ *Berhasil membuat Blue Archive Logo*\n\n• Text Kiri: ${textL}\n• Text Kanan: ${textR}`,
      contextInfo: {
        externalAdReply: {
          title: 'Blue Archive Logo Generator',
          body: 'Generated by Trinity MD Powered @nekorinn',
          thumbnailUrl: trinityThumb,
          sourceUrl: res,
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal membuat logo!');
  }
}
break
case 'niggafy':
case 'hitamkan': {
 if (!isUrl(text) && !m.quoted?.mimetype?.startsWith('image/')) {
 return reply(`Kirim atau reply gambar dengan caption *${prefix + command}* atau *${prefix + command} https://example.com/image.jpg*`);
 }

 try {
 let imageUrl;
const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data')

 if (m.quoted && m.quoted.mimetype?.startsWith('image/')) {
 const media = await trinity.downloadMediaMessage(m.quoted);
 const form = new FormData();
 form.append('reqtype', 'fileupload');
 form.append('fileToUpload', media, {
 filename: 'image.jpg',
 contentType: m.quoted.mimetype
 });

 const upload = await axios.post('https://catbox.moe/user/api.php', form, {
 headers: form.getHeaders()
 });

 imageUrl = upload.data;
 if (!imageUrl.startsWith('http')) throw new Error("Gagal upload gambar");
 } else {
 imageUrl = text.trim();
 }
 const api = `https://api.nekorinn.my.id/tools/niggafy?imageUrl=${encodeURIComponent(imageUrl)}`;
 const { data } = await axios.get(api);

 if (!data.status || !data.result) return reply('❌ Gagal memproses gambar.');

 await trinity.sendMessage(m.chat, {
 image: { url: data.result },
 caption: '🎨 *Niggafy Effect Generated!*'
 }, { quoted: m });

 } catch (e) {
 console.error(e);
 reply('❌ Terjadi kesalahan saat memproses gambar.');
 }
}
break
case 'ustadz': {
  if (!text) return reply(`Example: ${prefix + command} Hai Kak`);

  try {
    const apiUrl = `https://zenzxz.dpdns.org/maker/ustadz2?text=${encodeURIComponent(text)}`;
    
    await trinity.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `🕌 *Ustadz 2 Maker*\n\n🗣️ Text: ${text}`
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil gambar dari server.');
  }
}
break
case 'carbonify': {
  if (!text) return reply(`Example: ${prefix + command} console.log("Halo Ngab!")`);
  reply2('Membuat gambar kode...');

  try {
    const res = await axios.get(`https://api.nekorinn.my.id/maker/carbonify?code=${encodeURIComponent(text)}`, {
      responseType: 'arraybuffer'
    });

    const buffer = Buffer.from(res.data);

    await trinity.sendMessage(m.chat, {
      image: buffer,
      caption: `🖼️ Carbon Image Generated!\n\n📥 Kode:\n\`\`\`${text}\n\`\`\``
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('❌ Gagal membuat gambar dari kode.');
  }
}
break
case 'sologo': {
  if (!text.includes('|')) return reply(`Example:\n${prefix + command} Zass | Shiroko.desu | Hosting`);

  let [title, slogan, industry] = text.split('|').map(v => v.trim());
  if (!title || !slogan || !industry) return reply(`Format salah!\nGunakan: ${prefix + command} Nama | Slogan | Industri`);
  reply2('🧠 Membuat logo dengan AI...');
  try {
    const url = `https://api.nekorinn.my.id/maker/sologo-ai?title=${encodeURIComponent(title)}&slogan=${encodeURIComponent(slogan)}&industry=${encodeURIComponent(industry)}`;
    const res = await fetchJson(url);

    let logos = res.result?.logos?.flatMap(logo => logo.style) || [];
    if (logos.length === 0) return reply('❌ Logo tidak tersedia.');

    global.logoSession = {
      from: m.sender,
      data: logos,
      timeout: setTimeout(() => { delete global.logoSession }, 60 * 1000 * 5)
    }
    let teks = `✅ *Logo AI berhasil dibuat!*\n\nKetik *nomor (1 - ${logos.length})* untuk menampilkan logo.\n\n📦 *Daftar Pilihan:*\n\n`;
    teks += logos.map((v, i) => `*${i + 1}. ${v.title}*\n_${v.desc}_`).join('\n\n');

    reply(teks);
  } catch (e) {
    console.error(e);
    reply('❌ Gagal membuat logo.');
  }
}
break

      default: {}
    }
    //=================================\\
  } catch (err) {
    m.reply(util.format(err))
  }
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})