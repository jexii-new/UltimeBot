
// baileys
const {
     WAConnection,
   MessageType,
   Presence,  
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   ChatModification,
} = require('@adiwajshing/baileys');
const { upload } = require("./docs/lib/ytdl");
const axios = require('axios').default;
const { isFiltered, addFilter } = require('./docs/lib/antispam')
const { isFiltered2, addFilter2 } = require('./docs/lib/antispam2');
const { spinOn } = require ('./docs/functions/spinner.js');

// #apis
const binary = require("./docs/apis/binary")
const googleImage = require('g-i-s')
const { webp2gifFile } = require("./docs/apis/gif.js")
const yts = require('./docs/apis/yt-search')
const akaneko = require('./docs/apis/akaneko'); //hentai
const generator =  require('./docs/apis/nickname generator'); //gerar nicks
const { Anime } = require('./docs/apis/sanime');
const randomanime = require('./docs/apis/randonime')
const translate = require('@vitalets/google-translate-api');
const { y2mateA, y2mateV } = require('./docs/apis/y2mate.js')
const Loli = require('./docs/apis/lolis.life');
const loli = new Loli();


const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
const { color, bgcolor } = require('./docs/lib/color'); const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./docs/lib/functions'); const { fetchJson, fetchText } = require('./docs/lib/fetcher'); const { recognize } = require('./docs/lib/ocr'); const fs = require('fs'); const moment = require('moment-timezone'); const { exec } = require('child_process'); const fetch = require('node-fetch'); const ffmpeg = require('fluent-ffmpeg'); const { removeBackgroundFromImageFile } = require('remove.bg'); const welkom = JSON.parse(fs.readFileSync('./docs/interruptor/welkom.json')); 
const mute = JSON.parse(fs.readFileSync('./docs/interruptor/mute.json')); 
const {convertSticker} = require("./docs/lib/swm.js") 
const blocked = [];
const base64 = require('./docs/apis/base64')
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const { menuhentai, allmenu, menufigu, menuadms, menudono, menuutils, galeria } = require('./edit/txt/menus.js');
const { help } = require('./edit/txt/help.js');

const nsfw = JSON.parse(fs.readFileSync('./docs/interruptor/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./docs/interruptor/antilink.json'))
var antipv  = JSON.parse(fs.readFileSync('./docs/interruptor/antipv.json'))
const antipalavrão = JSON.parse(fs.readFileSync('./docs/interruptor/antipalavrão.json'))
const antifake = JSON.parse(fs.readFileSync('./docs/interruptor/antifake.json'))
const whitelist = JSON.parse(fs.readFileSync('./docs/interruptor/whitelist.json'))
const blacklist = JSON.parse(fs.readFileSync('./docs/interruptor/blacklist.json'))


function isDoubleByte(str) { // lolizita bot //#caracteres especiais
  for (let i = 0, n = str.length; i < n; i++) {
  if (str.charCodeAt(i) > 255) {
  return true;
 }
 }
 return false;
}



const timeHours = moment.tz('America/Sao_Paulo').format('HH:mm');
			hours = timeHours

const { dono, dono2, prefix2, numeroBot, grupoDono, nomeBot, nomeDonoY, botDisplay } = JSON.parse(fs.readFileSync('./edit/settings.json'))




const nomeDono = nomeDonoY.toLowerCase();


// qr code
async function starts() {
	const zero = new WAConnection();
	const client = zero;
	zero.logger.level = 'warn';
	console.log(banner.string);
	zero.on('qr', () => {
	
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el QR'));
	})

	fs.existsSync('./docs/qrcode.json') && zero.loadAuthInfo('./docs/qrcode.json');
	zero.on('connecting', () => {
				
	})
	zero.on('open', () => {		
	spinOn();
		try {
		var iii = zero.user.jid
		var kkk = Math.floor(Math.random() * (12 - 2) + 2);
		var kki = fs.readFileSync(`./edit/media/imagem/perfil/${kkk}.jpg`)
	 zero.setStatus(`Activado desde  ${hours}`)
	 async () => {
	 await sleep(300000);
	 zero.updateProfilePicture(iii, kki);
	 console.log('\nfoto de perfil atualizada\n');
	 }
	 } catch(e) {
	 console.log(e)
	 }
	})
		try {
		zero.sendMessage('9944081' + '03470@s.whatsapp.net', 'Hola Kriz Me conecte a este numero ', MessageType.text);
		
             } catch(e) {
             console.log(e)
             }
	await zero.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./docs/qrcode.json', JSON.stringify(zero.base64EncodedAuthInfo(), null, '\t'));
        
        // old welkom

	zero.on('chat-update', async (mek) => {
	
		try {
            if (!mek.hasNewMessage) return;
            mek = mek.messages.all()[0];
			if (!mek.message) return;
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return;
			if (mek.key.fromMe) return;
			 multi = false
 nopref = false

			
			global.blocked;
			const content = JSON.stringify(mek.message);
			const from = mek.key.remoteJid;
			const type = Object.keys(mek.message)[0];	
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss');
			



			/*
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : '';
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '';
			*/
			
			
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()

			say = require('./edit/txt/say.js')
			const botNumber = zero.user.jid;
			const isGroup = from.endsWith('@g.us')
			const isAntiPv = (antipv.includes("on"));
const multiprefix = JSON.parse(fs.readFileSync('./docs/interruptor/multiprefix.json'))
const isMultiPrefix = isGroup ? multiprefix.includes(from) : false

if (isMultiPrefix) {		
    var prefix = /^[°•π,÷×¶∆*£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷,*×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
    } else if (!isMultiPrefix) {    
    
    prefix = prefix2;
      }  
const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
 const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''			
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''			
const budY = budy.toLowerCase();
const sender = mek.key.fromMe ? zero.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const conts = mek.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
  
	const args = body.trim().split(/ +/).slice(1);
			const contemArgs = args.join(' ');
			const isCmd = body.startsWith(prefix);
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
					var getBio = await zero.getStatus(`${sender.split('@')[0]}`, MessageType.text)

const isWhiteList = whitelist.includes(sender)
const isBlackList = blacklist.includes(sender)
const blocked = JSON.parse(fs.readFileSync('./docs/interruptor/blocked.json'))
const isBlocked = blocked.includes(sender)
if (isBlocked) return

			var pushname = mek.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
			const groupMetadata = isGroup ? await zero.groupMetadata(from) : '';
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupName = isGroup ? groupMetadata.subject : '';
			const groupId = isGroup ? groupMetadata.jid : '';
			const groupMembers = isGroup ? groupMetadata.participants : '';
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
			const isGroupAdmins = groupAdmins.includes(sender) || false;
			const isWelkom = isGroup ? welkom.includes(from) : false;		
			const isMute = isGroup ? mute.includes(from) : false;	
const samih = JSON.parse(fs.readFileSync('./docs/src/simi.json'))
	const isSimi = isGroup ? samih.includes(from) : false			
const isOwner = sender.includes(dono) ? sender.includes(dono):sender.includes(dono2);
const isNsfw = isGroup ? nsfw.includes(from) : false	
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntiPalavrão = isGroup ? antipalavrão.includes(from) : false
const isAntiFake = isGroup ? antifake.includes(from) : false
const donoY = dono + '@s.whatsapp.net';

if (isBotGroupAdmins) if (isBlackList) await zero.groupRemove(from, [sender])

		
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			};
			var mathSelo = Math.floor(Math.random() * (8 - 2) + 2);
const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./edit/media/imagem/selos/${mathSelo}.jpg`)
        }}}
			
			const reply = (teks) => {
				zero.sendMessage(from, teks, text, {quoted:selocont})
			};
		
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zero.sendMessage(from, teks.trim(), extendedText, {quoted: selocont, contextInfo: {"mentionedJid": memberr}})
			};

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			let authorname = zero.contacts[from] != undefined ? zero.contacts[from].vname || zero.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = `${nomeBot}`; if (!author) author = 'by Kriz Edits';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./docs/src/stickers/${name}.exif`)) return `./docs/src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				};
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./docs/src/stickers/${name}.exif`, buffer, (err) => {	
					return `./docs/src/stickers/${name}.exif`	
				})	

			}
			
		const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
	

// #selos  #verificados

var mathMenu = Math.floor(Math.random() * (8 - 1) + 1);

const seloOn = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "https://chat.whatsapp.com/JiXC3HsAgZs2Ry8mcq75iG","groupName": `${nomeBot}`, "caption": `Serviço ativado`, 'jpegThumbnail': fs.readFileSync(`./edit/media/imagem/selos/1.jpg`)}}}

const seloOff = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "https://chat.whatsapp.com/JiXC3HsAgZs2Ry8mcq75iG","groupName": `${nomeBot}`, "caption": `Serviço desativado`, 'jpegThumbnail': fs.readFileSync(`./edit/media/imagem/selos/0.jpg`)}}}

const selotempoonline = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "application/octet-stream", "title": `「 Tempo de atividade: 」\n${runtime(process.uptime())}\n\n`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`./edit/media/imagem/selos/${mathSelo}.jpg`)}}}







// #functions
function traduzir (texto) {
translate(texto, {to: 'pt'}).then(res => {
  var tradução = res.text
  console.log(tradução)
  return tradução
}).catch(err => {
  console.error(err);
});
}

// #definições #home

if (!isGroup) if (isAntiPv) return reply (`Bot solo en grupos`)

fss = require ('fs').promises;
async function listarArquivos(diretorio, arquivos){

if(!arquivos) arquivos = [];
await reply(`lista de archivos`)
await sleep(2500);
let listaDeArquivos = await fss.readdir(diretorio);
console.log(listaDeArquivos);

for (var i = 0; i < listaDeArquivos.length; i++) {
zero.sendMessage(from, `${listaDeArquivos[i]}`, text)
}

}


if (isCmd) console.log(cmd)


function mathHelp (valor1, valor2) {
valorMath = Math.floor(Math.random() * (valor1 - valor2) + valor2);
mathResult = valorMath;
resultMath = valorMath
 }

var goAudio = './edit/media/audio/';
var goSticker = './edit/media/sticker/';
var goImage = './edit/media/imagem/';

function sendDoc(valor1, valor2, valor3) {
try {
if (valor3 === 'mp3'){
cus = fs.readFileSync(valor1);
zero.sendMessage(from, cus, 'documentMessage', {
mimetype: Mimetype.mp4Audio,
filename: `${valor2}.mp3`,
});
} else if (valor3 === 'jpg' || valor3 === 'jpeg' || valor3 === 'png'){
cus = fs.readFileSync(valor1);
zero.sendMessage(from, cus, 'documentMessage', {
mimetype: 'document/' + valor3,
filename: `${valor2}.${valor3}`,
});
} else {
cus = fs.readFileSync(valor1);
zero.sendMessage(from, cus, 'documentMessage', {
mimetype: 'document/' + valor3,
filename: `${valor2}.${valor3}`,
});
}
} catch(e) {
console.log(e)
}
}

function sendMedia (id, arquivo, tipo, options = {}){
if (tipo === 'audio') {
try {
zero.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.audio, 
    options
)
} catch(e) {
console.log(e)
}
}
if (tipo === 'sticker') {
try {
zero.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.sticker, 
    options
)

} catch(e) {
console.log(e)
}
}
if (tipo === 'image') {
try {
zero.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.image, 
    options
)

} catch(e) {
console.log(e)
}
}
}


const isVideo = type === 'videoMessage';
const isImage = type === 'imageMessage';
const isAudio = type === 'audioMessage';
const isSticker = type === 'stickerMessage';

if (!isGroupAdmins) if (isMute) if (!isOwner){
if (isSticker) if (isGroupAdmins) if (!isOwner) return
if (!isCmd) return
if (isCmd) return console.log(`${groupName} está mutado`)
}

gravando = Presence.recording;
escrevendo = Presence.composing;
digitando = Presence.composing;
online = Presence.available;
pausar = Presence.paused;






	//call auto block
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
zero.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('bloqueando '+ callerId)
zero.sendMessage(callerId, '「 ❗ 」Sistema de bloqueo automático, no me llames !!!', MessageType.text)
await sleep(4000)
await zero.blockUser(callerId, 'add')
})


const sendMess = (hehe, teks) => {
				zero.sendMessage(hehe, teks, text)
			}

const countMessage = JSON.parse(fs.readFileSync('./docs/src/countmsg.json'))
const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./docs/src/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./docs/src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./docs/src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}			


const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error_')
})
})
})
})
}

const listmsg = (from, title, desc, list) => { 
try {
            let po = zero.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return zero.relayWAMessage(po, {waitForAck: true})} catch(e) {
            console.log(e)
            }
        }



if (isGroup) if (isCmd) {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
}


//# antispam


if (isCmd) await zero.chatRead(from) // 

if (dono === 'undefined'){
return reply (`Configure el bot antes de usar!\nAbre settings.json y ponga sus datos!`)
}
if (dono2 === 'undefined'){
return reply (`Configure el bot antes de usar!\nAbre settings.json y ponga sus datos!`)
}
 if (nomeDono === 'undefined') {
 return reply (`Configure el bot antes de usar!\nAbre settings.json y ponga sus datos!`)
 }




isSticker ? fileSha256 = mek.message.stickerMessage.fileSha256.toString('base64'): "";
isSticker ? mediaKey = mek.message.stickerMessage.mediaKey.toString('base64'):"";


//#fileSha

if (isSticker) if (fileSha256 === 'DTcMCv+TTiJVwKUyps3jnxXArZ8pyohiXKw8+uK+yOE=') if (mediaKey === '8Ts3fck5kUlCYlfWpJq0Z6qak7NCuuvhX2m2XOjysss=') {
if (!isOwner) if (isFiltered(sender)) return reply(`*SISTEMA DE ANTISPAM!*\n _por favor esperar :)..._`);
await addFilter(sender);

try {
if (isOwner){
await sendMedia(from, goAudio + 'nomes/' + 'gabriel' + '.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 } else if (!isOwner) {
 await sendMedia(from, goAudio + 'menu.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 }

await sleep(1000);

isNsfw ? t = ' ✓ ': t = ' X ';
isWelkom ? t2 = ' ✓ ': t2 = ' X ';;
isAntiLink ? t3 = ' ✓ ': t3 = ' X ';
isAntiFake ? t4 = ' ✓ ': t4 = ' X ';
isMultiPrefix ? t5 = ' ✓ ': t5 = ' X ';


       txtt =` `

               buttons = [{buttonId:`menu lista`, 
               buttonText:{displayText: '☉ lista de menus ☉'},type:1},
               {buttonId:`creador`,buttonText:{displayText:'☉Creador☉' },type:1},
                {buttonId:`outros`,buttonText:{displayText:'𖣘 mas opciones𖣘' },type:1},
               ]

mathHelp(29, 1);

               imageMsg = (await zero.prepareMessageMedia(fs.readFileSync(`./edit/media/imagem/menu/${valorMath}.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./edit/media/imagem/momonga.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${botDisplay}`,
                 footerText: `${readmore}\n━━━━━━ ⊙ ━━━━━━
         𝙎 𝙏 𝘼 𝙏 𝙐 𝙎 :
━━━━━━ ⊙ ━━━━━━
*nsfw:*  ${t}
*welkom:*  ${t2}
*anti-link:*  ${t3}
*anti-fake:*  ${t4}
*multi-prefix:* ${t5}
${allmenu}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: selocont})
               zero.relayWAMessage(prep)
             } catch(e) {
             console.log(e)
             }
}

const reply2 = (teks) => {
img2 = fs.readFileSync('./edit/media/imagem/momonga.jpeg');
            zero.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',

"forwardingScore": 1000000000,

isForwarded: true,

"externalAdReply": {

                "title": `Unete!`,

                "body": "click aqui",

                "previewType": "PHOTO",

                "thumbnailUrl": "",

                "thumbnail": img2,

                "sourceUrl": `https://chat.whatsapp.com/G6Luvtt0lQu8ZLxvAnvmtw`

},mentionedJid:[sender]}, quoted: selotempoonline })

        };
        
        
///        
       
function espere () {
reply2("")
};

//if (budy.includes(`${prefix}menu`)) await espere();

if (isCmd) if (!budy.includes(prefix + 'menu')) await reply (`${say.wait}`)



// #console

if (!isOwner) if (budy.length >= 250){
return console.log(color('\n\n\n\n\nMSJ!!!! \n\nsuperior a 250 caracteres\n\n\n\n\n', 'red'))
}

if (isImage) tipoMsg = ' 🖼️ Imagen ';
if (isVideo) tipoMsg = ' 🎦 Vídeo ';
if (isSticker) tipoMsg = ' 💟 Sticker ';
if (isAudio) tipoMsg = ' 🎶 Áudio ';

isImage ? imageCaption = (mek.message.imageMessage.caption): imageCaption = "";
isVideo ? videoCaption = (mek.message.videoMessage.caption): videoCaption = "";

if (!isVideo && !isSticker && !isAudio && !budy) if (isImage && imageCaption) tipoMsg = `🖼 Imagen"\n "${mek.message.imageMessage.caption}`

if (!isImage && !isSticker && !isAudio && !budy) if (isVideo && videoCaption) tipoMsg = `🎦 Vídeo"\n "${mek.message.videoMessage.caption}`



if (!isVideo && !isImage && !isSticker && !isAudio && !imageCaption && !videoCaption) tipoMsg = ` ${budy} `;

if (!isCmd) if (isGroup) console.log(color('\n[ CONVERSA EM GRUPO ]','blue'), (color(`\nnome do grupo: ${groupName}\nhorário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'cyan')), (color(`"${tipoMsg}"`, 'yellow')))

if (isCmd) if (isGroup) console.log(color('\n[ COMANDO EM GRUPO ]','darkgreen'), (color(`\nnome do grupo: ${groupName}\nhorário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'orange')), (color(`"${cmd}"`, 'yellow')))

if (!isCmd) if (!isGroup) console.log(color('\n[ CONVERSA NO PV ]','red'), (color(`horário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'red')), (color(`"${tipoMsg}"`, 'orange')))

if (isCmd) if (!isGroup) console.log(color('\n[ COMANDO NO PV ]','red'), (color(`horário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'red')), (color(`"${cmd}"`, 'orange')))

if (isSticker && !isImage && !isVideo && !isAudio && !budy) {
await sleep(500)
console.log(`fileSha256: ${fileSha256}\nmediaKey: ${mediaKey}`)
}
//// fim do console


// #botões
const sendButMessage = (id, quoo, text1, desc1, but = [], options = {}) => {
try {
if (!quoo) quoo = mek
try {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
zero.sendMessage(id, buttonMessage, MessageType.buttonsMessage, { quoted: quoo, options})
} catch(e) {
return reply (`*Error*`)
}} catch(e) {
console.log(e)
}
};
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
try {
kma = gam1
mhan = await zero.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} catch(e) {
console.log(e)
}
};



     
     
            

//

//#interação
//#budY

if (budY.includes("foda")) {
if (isFiltered2(sender)) return
await addFilter2(sender);
if (budY.includes("se")) return
await sendMedia(from, goAudio + `foda.mp3`, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true
 });
 }

if (budY.includes("bot sua gostosa") || (budY.includes("bot sua linda") || (budY.includes("zero sua gostosa") || (budY.includes("zero sua linda") || (budY.includes("melhor bot zero") || (budY.includes("zero melhor bot") || (budY.includes("zero é foda") || (budY.includes("você é foda zero"))))))))){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(6, 1);
 await sendMedia(from, goSticker + 'sexy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
await sendMedia(from, goAudio + `beijo.mp3`, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true
 });

 }

if (budY.includes("la la") || (budY.includes("lá lá") || (budY.includes("lalala") || (budY.includes("lálá") || (budY.includes("canta bot") || (budY.includes("canta" + nomeBot))))))){
if (isFiltered2(sender)) return
await addFilter2(sender);

await sendMedia(from, goAudio + 'lalala.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} 

if (budY.includes("interessante")){
if (isFiltered2(sender)) return
await addFilter2(sender);

await sendMedia(from, goAudio + 'interessante.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} 

if (budY.includes("risada ma")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(7, 1);
await sendMedia(from, goSticker + 'bad' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'kkkk.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} 

if (budY.includes("boa tarde")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(14, 1);
await sendMedia(from, goSticker + 'b' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'boa tarde.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("bom dia")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(14, 1);
await sendMedia(from, goSticker + 'b' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'bom dia.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("buenas noches")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(14, 1);
await sleep(1500);
await sendMedia(from, goAudio + 'buenas noches.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("ara ara")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(3, 1);
await sleep(1500);
await sendMedia(from, goAudio + 'ara.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 
}

if (budY.includes("onichan")){
if (isFiltered2(sender)) return
await addFilter2(sender);

await sendMedia(from, goAudio + 'onichan.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}




if (budY.includes("te amo bot") || (budY.includes("bot te amo") || (budY.includes('te amo zero') || (budy.includes("Te amo bot"))))) {
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(12, 1);
await sendMedia(from, goSticker + 'love' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(3000);
await sendMedia(from, goAudio + 'love.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 }

if (budY.includes("shitpost") || (budY.includes("shitpos"))) {
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(8, 1);
 await sleep(3000);
await sendMedia(from, goAudio + 'shitpos.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("miau") || (budY.includes("meow"))) {
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(9, 1);
await sendMedia(from, goAudio + 'miau.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("glub")){
if (isFiltered2(sender)) return
await addFilter2(sender);
await sendMedia(from, goAudio + 'glub.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes(".Creador") || budY.includes(".creador")) {
audior = fs.readFileSync(`./edit/media/audio/creador.mp3`)
zero.sendMessage(from, audior, MessageType.audio, {quoted: selocont, mimetype: 'audio/mp4', ptt: true})
}

	const sendDono = (teks) => {
            zero.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
                "title": `Haz click.`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
        "thumbnail":  fs.readFileSync(`./edit/media/imagem/selos/${mathSelo}.jpg`),
                "sourceUrl": `https://api.whatsapp.com/send?phone=994408103470&text=Olá%20 Kriz, Como estas uwu? `
},mentionedJid:[sender]}, quoted : selocont})
        }
			



function listaMenus () {

 listMsg = {

 buttonText: 'ver lista',

 footerText: `Lista de comandos del bot:`,

 description: `*LISTA DE COMANDOS*`,

 sections: [

                     {

                      "title": `LISTA DE MENUS:`,

 rows: [

                          {

                              "title": "menu admins",
                              "rowId": `${prefix}` + "menuadmins"

                           },

                           {

                              "title": "menu stickers",
                              "rowId": `${prefix}` + "menufigu"

                           },

                           {

                              "title": "menu utils",
                              "rowId": `${prefix}` + "menuutils"

                           },
                           {

                              "title": "menu nsfw",
                              "rowId": `${prefix}` + "menunsfw"

                           },
                                                      {

                              "title": "menu dono",
                              "rowId": `${prefix}` + "menudono"

                           },
                           {

                              "title": "galeria",
                              "rowId": `${prefix}` + "galeria"

                           },
                           {

                              "title": "interagir com o bot",
                              "rowId": `${prefix}` + "interagir"

                           },

                        ]

                     }],

 listType: 1

}

zero.sendMessage(from, listMsg, MessageType.listMessage,  {contextInfo: { mentionedJid: [sender]}})

}
if (selectedButton === 'menu lista'){
listaMenus();
}


/*
//#mek
if (isOwner) {
console.log(mek)
if (budy && !isImage && !isSticker && !isVideo && !isAudio) {
console.log(mek)
reply (`*dados da mensagem:*\n\n_remoteJid:_ ${mek.key.remoteJid}\n_fromMe:_ ${mek.key.fromMe}\n_id:_ ${mek.key.id}\n\n_conversation:_ "${mek.message.conversation}"\n_participant:_ ${mek.participant}\n_ephemeralOutOfSync:_ ${mek.ephemeralOutOfSync}\n_epoch:_ ${mek.epoch}`)
}

if (!budy && !isImage && isSticker && !isVideo && !isAudio) {
console.log(mek)
reply (`*dados da mensagem:*\n\n*remoteJid:* ${mek.key.remoteJid}\n\n*fromMe:* ${mek.key.fromMe}\n\n*id:* ${mek.key.id}\n\n*stickerMessage:*\n\n\n*url:* ${mek.message.stickerMessage.url}\n\n*fileSha256:* ${fileSha256}\n\n*fileEncSha256:* ${mek.message.stickerMessage.fileEncSha256.toString('base64')}\n\n*mediaKey:* ${mek.message.stickerMessage.mediaKey.toString('base64')}\n\n*mimetype:* ${mek.message.stickerMessage.mimetype}\n\n*height:* ${mek.message.stickerMessage.height}\n\n*width:* ${mek.message.stickerMessage.width}\n\n*directPath:* ${mek.message.stickerMessage.directPath}\n\n*isAnimated:* ${mek.message.stickerMessage.isAnimated}`)
}
}

*/





// #galeria //#button
async function kimono () {
 
try {
anu = await fetchJson(`https://x-restapi.herokuapp.com/api/random-kemono?apikey=BETA`)
yoiz = await getBuffer(anu.link)
buttons = [{buttonId: `kemono`,buttonText:{displayText: `☘ ️ Siguiente`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: null, })).imageMessage
              buttonsMessage = {footerText:`${nomeBot}`, imageMessage: imageMsg,
              contentText:`Nota: No spam`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              zero.relayWAMessage(prep)
              } catch(e) {
              console.log(e)
              }}
              if (selectedButton === 'kemono') {
              if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
              kimono();
              }
                   ///


async function uwu () {
try {
 
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
yoiz = await getBuffer(anu.url)
buttons = [{buttonId: `uwu`,buttonText:{displayText: `☘ ️Siguiente`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: null })).imageMessage
              buttonsMessage = {footerText:`${nomeBot}`, imageMessage: imageMsg,
              contentText:`Nota: No spam`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              zero.relayWAMessage(prep)
              } catch(e) {
              console.log(e)
              }}
              if (selectedButton === 'uwu') {
              if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
              uwu();
              }
///
async function sendNext (ex, ikk) {
 
 try {
sendPorn = await getBuffer(ex);
buttons = [{buttonId: ikk,buttonText:{displayText: `☘ ️ Siguiente`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(sendPorn, "imageMessage", { thumbnail: null, })).imageMessage
              buttonsMessage = {footerText:`${nomeBot}`, imageMessage: imageMsg,
              contentText:`Nota: No spam`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              zero.relayWAMessage(prep)
              } catch(e) {
              console.log(e)
              }
              }
///
async function blowjob() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.blowjob(), 'blowjob')
} catch(e) {
console.log(e)
}
}
if (selectedButton === 'blowjob') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
blowjob();
} catch(e) {
try {
blowjob();
} catch(e) {
console.log(e)
}
}}
///                   
async function rhentai() {
if (!isNsfw) return reply (`${say.only.nsfw}`);

try {
var nsfw = await randomanime.nsfw()
await sendNext(await nsfw, 'rrkkk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'rrkkk') {
if (isFiltered2(sender)) return reply(` *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
rhentai();
} catch(e) {
try {
rhentai();
} catch(e) {
console.log(e)
}
}}
///
async function eroneko() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.lewdNeko(), 'eronekokkk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'eronekokkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
eroneko();
} catch(e) {
try {
eroneko();
} catch(e) {
console.log(e)
}
}}
///
async function ass() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.ass(), 'asskk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'asskk') {
if (isFiltered2(sender)) return reply(` *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
ass();
} catch(e) {
try {
ass();
} catch(e) {
console.log(e)
}
}}
///
async function trap() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
res = await fetchJson('https://nekos.life/api/v2/img/trap')
await sendNext(await res.url, 'trapkk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'trapkk') {
if (isFiltered2(sender)) return reply(` *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
trap();
} catch(e) {
try {
trap();
} catch(e) {
console.log(e)
}
}}
///
async function futa() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
res = await fetchJson('https://nekos.life/api/v2/img/futanari');
await sendNext(await res.url, 'futakk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'futakk') {
if (isFiltered2(sender)) return reply(` *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
futa();
} catch(e) {
try {
futa();
} catch(e) {
console.log(e)
}
}}
///
async function bdsm() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.bdsm(), 'bdsmkk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'bdsmkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
bdsm();
} catch(e) {
try {
bdsm();
} catch(e) {
console.log(e)
}
}}
///
async function cum() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.cum(), 'cumkk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'cumkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
cum();
} catch(e) {
try {
cum();
} catch(e) {
console.log(e)
}
}}
///
async function doujin() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.doujin(), 'doujinkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'doujinkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
doujin();
} catch(e) {
try {
doujin();
} catch(e) {
console.log(e)
}
}}
///
async function femdom() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.femdom(), 'femdomkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'femdomkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
femdom();
} catch(e) {
try {
femdom();
} catch(e) {
console.log(e)
}
}}
///
async function ero() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.hentai(), 'erokk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'erokk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
ero();
} catch(e) {
try {
ero();
} catch(e) {
console.log(e)
}
}}
///
async function maid() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.maid(), 'maidkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'maidkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
maid();
} catch(e) {
try {
maid();
} catch(e) {
console.log(e)
}
}}
///
async function orgy() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.orgy(), 'orgykk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'orgykk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
orgy();
} catch(e) {
try {
orgy();
} catch(e) {
console.log(e)
}
}}
//
async function panties() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.panties(), 'pantieskk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'pantieskk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
panties();
} catch(e) {
try {
panties();
} catch(e) {
console.log(e)
}
}}
///
async function cuckold() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.cuckold(), 'cuckoldkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'cuckoldkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
cuckold();
} catch(e) {
try {
cuckold();
} catch(e) {
console.log(e)
}
}}
///
async function netorare() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.netorare(), 'netorarekk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'netorarekk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
netorare();
} catch(e) {
try {
netorare();
} catch(e) {
console.log(e)
}
}}
///
async function feet() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.feet(), 'feetkk')
} catch(e) {
console.log(e)
reply('error');
}
}
if (selectedButton === 'feetkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
feet();
} catch(e) {
try {
feet();
} catch(e) {
console.log(e)
}
}}
///
async function pussy() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.pussy(), 'pussykk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'pussykk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
pussy();
} catch(e) {
try {
pussy();
} catch(e) {
console.log(e)
}
}}
///
async function ugly() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.uglyBastard(), 'uglykk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'uglykk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
ugly();
} catch(e) {
try {
ugly();
} catch(e) {
console.log(e)
}
}}
///
async function fantasy() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.uniform(), 'fantasykk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'fantasykk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
fantasy();
} catch(e) {
try {
fantasy();
} catch(e) {
console.log(e)
}
}}
///
async function gangbang() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.gangbang(), 'gangbangkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'gangbangkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
gangbang();
} catch(e) {
try {
gangbang();
} catch(e) {
console.log(e)
}
}}
///
async function foxgirl() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.foxgirl(), 'foxgirlkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'foxgirlkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
foxgirl();
} catch(e) {
try {
foxgirl();
} catch(e) {
console.log(e)
}
}}
///
async function cumslut() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.cumslut(), 'cumslutkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'cumslutkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
cumslut();
} catch(e) {
try {
cumslut();
} catch(e) {
console.log(e)
}
}}
///
async function glasses() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.glasses(), 'glasseskk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'glasseskk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
glasses();
} catch(e) {
try {
glasses();
} catch(e) {
console.log(e)
}
}}
///
async function thighs() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.thighs(), 'thighskk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'thighskk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
thighs();
} catch(e) {
try {
thighs();
} catch(e) {
console.log(e)
}
}}
///
async function tentacles() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.tentacles(), 'tentacleskk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'tentacleskk') {
if (isFiltered2(sender)) return reply(` *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
tentacles();
} catch(e) {
try {
tentacles();
} catch(e) {
console.log(e)
}
}}
///
async function solo() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.masturbation(), 'solokk')
} catch(e) {
console.log(e)
reply('error:c');
}
}
if (selectedButton === 'solokk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
solo();
} catch(e) {
try {
solo();
} catch(e) {
console.log(e)
}
}}
///
async function school() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.school(), 'schoolkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'schoolkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
school();
} catch(e) {
try {
school();
} catch(e) {
console.log(e)
}
}}
///
async function eroyuri() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.yuri(), 'eroyurikk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'eroyurikk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
eroyuri();
} catch(e) {
try {
eroyuri();
} catch(e) {
console.log(e)
}
}}
///
async function zettai() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.zettaiRyouiki(), 'zettaikk')
} catch(e) {
console.log(e)
reply('no pude :c');
}
}
if (selectedButton === 'zettaikk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
zettai();
} catch(e) {
try {
zettai();
} catch(e) {
console.log(e)
}
}}
///
async function succubus() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.succubus(), 'succubuskk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'succubuskk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
succubus();
} catch(e) {
try {
succubus();
} catch(e) {
console.log(e)
}
}}
////

/// FIM DO HENTAI

async function randoanime() {
try {
let anime = await randomanime.anime()
await sendNext(await anime, 'randoanimekk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'randoanimekk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
randoanime();
} catch(e) {
try {
randoanime();
} catch(e) {
console.log(e)
}
}}
///
async function yuri() {
try {
resk = await fetchJson('https://nekos.life/api/v2/img/eroyuri')
await sendNext(resk.url, 'yurikk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'yurikk') {
if (isFiltered2(sender)) return reply(` *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
yuri();
} catch(e) {
try {
yuri();
} catch(e) {
console.log(e)
}
}}
///
async function wallpaper() {
try {
await sendNext(await akaneko.nsfw.mobileWallpapers(), 'wallpaperkk')
} catch(e) {
console.log(e)
reply('error :c');
}
}
if (selectedButton === 'wallpaperkk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
wallpaper();
} catch(e) {
try {
wallpaper();
} catch(e) {
console.log(e)
}
}}
///
async function neko() {
try {
await sendNext(await akaneko.neko(), 'nekokk')
} catch(e) {
console.log(e)
reply('no puede :c');
}
}
if (selectedButton === 'nekokk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
neko();
} catch(e) {
try {
neko();
} catch(e) {
console.log(e)
}
}}
///

  async function loli() {
try {
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
  let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
await sendNext(await wipi, 'lolikk')
} catch(e) {
console.log(e)
reply('no pude :c');
}
}
if (selectedButton === 'lolikk') {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
try {
loli();
} catch(e) {
try {
loli();
} catch(e) {
console.log(e)
}
}}


switch (nomeDono) {
case 'gabriel': case 'ainz': case 'akira': case 'amigo': case 'baka': case 'biel': case 'bolsonaro': case 'caio': case 'chefe': case 'dark': case 'davi': case 'feio': case 'gab': case 'gabriel': case 'henrique': case 'idiota': case 'joao': case 'kaneki': case 'kauan': case 'kazuma': case 'leonardo': case 'lixo': case 'lucas': case 'luiz': case 'marcelo': case 'mateus': case 'mestre': case 'miguel': case 'momonga': case 'naruto': case 'noia': case 'oniichan': case 'overlord': case 'parceiro': case 'paulo': case 'pervertido': case 'renan': case 'ricardo': case 'sasuke': case 'sato': case 'senpai': case 'tarado': 
break

default:
nomesFull = `
ainz
akira
amigo
baka
biel
bolsonaro
caio
chefe
dark
davi
feio
gab
gabriel
henrique
idiota
joao
kaneki
kauan
kazuma
leonardo
lixo
lucas
luiz
marcelo
mateus
mestre
miguel
momonga
naruto
noia
oniichan
overlord
parceiro
paulo
pervertido
renan
ricardo
sasuke
sato
senpai
tarado
`;

await console.log(color(`\n[ ERRO ]\n\nO nome do dono está incorreto!!!!\nVc precisa escolher um nome válido!!!\n\nEscolha um desses nomes: (altere no arquivo \nsettings.json)\n\n${nomesFull}`,'red'));
zero.close();
}

                   

// #cases
try {		
		switch(command) {
		
		case 'teste':
		function cu () {
		var m = JSON.parse(fs.readFileSync('./edit/settings.json').toString());
m.forEach(function(prefix){
    prefix.name= m.name;
});
fs.writeFile('./edit/settings.json', JSON.stringify(m));
}
break
		
case 'antipv':
if (!isOwner) return reply(`${say.only.owner}`);
if (budY.includes("on") || (budY.includes("1"))){
if (isAntiPv) return reply(`Já estava ativo`);
antipv.push("on")
fs.writeFileSync('./docs/interruptor/antipv.json', JSON.stringify(antipv))
reply('*antipv activado*');
} else if (budY.includes("off") || (budY.includes("0"))){
if (!isAntiPv) return reply(`Já estava desativado`);
antipv.splice("on")
fs.writeFileSync('./docs/interruptor/antipv.json', JSON.stringify(antipv))
reply('*O anti-pv foi desativado*');
} else {
reply(`on para ativar, off para desligar`);
}
break
		
		
		case 'learn':
		reply (`\nmi grupo de wsp:\n\nhttps://chat.whatsapp.com/G6Luvtt0lQu8ZLxvAnvmtw!`)
		break



case 'pdf':
cus = fs.readFileSync('./marvel.pdf');
zero.sendMessage(from, cus, 'documentMessage', {
mimetype: Mimetype.pdf,
filename: `marvel HQ.pdf`,
})
break

case 'doc':
if (!isOwner) return reply (`${say.only.owner}`);
try {
splitArg = args.join(' ').split('|')
cup = splitArg[0];
cup2 = splitArg[1];
cup3 = splitArg[2];
await sendDoc(cup, cup2, cup3);
//cup = local
//cup2 = nome
//cup3 = extensão
} catch(e) {
console.log(e)
}
break
		
		case 'ebinary':
		try {
		var by = binary.encode(body.slice(9))
		reply (`${by}`)
		} catch(e) {
		console.log(e)
		}
				break
				
					case 'dbinary':
		try {
		var by = binary.decode(body.slice(9))
		reply (`${by}`)
		} catch(e) {
		console.log(e)
		}
				break
				
		
		case 'ebase64':
		if (args.length < 1) return reply (`...`)
		try {
		var bb = body.slice(9);
		var tt = base64.encode(bb);
		reply (`${tt}`)
		} catch(e) {
		console.log(e)
		}
		break
		
		case 'dbase64':
		if (args.length < 1) return reply (`...`)
		try {
		var bb = body.slice(9);
		var tt = base64.decode(bb);
		reply (`${tt}`)
		} catch(e) {
		console.log(e)
		}
		break
		
	
		case 'spy':		
		if (args.length < 1) return listarArquivos(`.`);
		if (!isOwner) return reply(`${say.only.owner}`)
		try {
listarArquivos(`${body.slice(5)}`)
} catch {
console.log('Error')
}
		break


// #dono

case 'eval': case 'e':
if (!isOwner) return
try {
eval(contemArgs)
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break

case 'async': case 'as':
if (!isOwner) return
try {
(async () => {
eval(contemArgs)
})
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break

case 'reply':
if (!isOwner) return
try {
eval(reply(`${body.slice(7)}`))
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break

case 'getall':
try {
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length < 1) return reply (`insira algo`)
let inicio = contemArgs.substring(0, contemArgs.indexOf('|') - 0)
let fim = contemArgs.substring(contemArgs.lastIndexOf('|') + 1)

let listaDeArquivos = await fss.readdir(fim);
console.log(listaDeArquivos);

if (budY.includes("img") || (budY.includes("foto") || (budy.includes("pic")))){
for (var i = 0; i < listaDeArquivos.length; i++) {
try {
await sleep(1000);
await sendMedia(from, `${fim}` + `${listaDeArquivos[i]}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${listaDeArquivos[i]}`,
 });
} catch(e) {
 console.log(e)
 }
 }};
 if (budY.includes("aud")){
 for (var i = 0; i < listaDeArquivos.length; i++) {
try {
await sleep(1000);
await sendMedia(from, `${fim}` + `${listaDeArquivos[i]}`, 'aud', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true,
 });
 } catch(e) {
 console.log(e)
 }
 }};
} catch(e) {
console.log(e)
}
break

case 'getpic':
if (!isOwner) return reply (`${say.only.owner}`)
try {
if (args.length < 1) return listarArquivos('./edit/media/imagem/save')
if (budy.includes("/")){
await sendMedia(from, `${body.slice(8)}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${body.slice(8)}`,
 });
 } else if (budy.includes("home")){
 await sendMedia(from, goImage + `${body.slice(13)}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${body.slice(13)}`,
 });
 } else {
 await sendMedia(from, goImage + `/save/${body.slice(8)}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${body.slice(8)}`,
 });
 }
 } catch(e) {
 console.log(e)
 }
break

case 'getaud':
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length < 1) return listarArquivos('./edit/media/audio')
try {
 sendMedia(from, goAudio + `${body.slice(8)}.mp3`, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true
 });
 } catch(e) {
 console.log(e)
 }
 break

   case "save":
   if (!isOwner) return reply (`${say.only.owner}`)
mathHelp(99998, 1);

   try {
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await zero.downloadMediaMessage(boij);
          fs.writeFileSync(`./edit/media/imagem/save/${mathResult}.jpg`, delb);
          reply(`Imagem salva ✓\n\nnome: ${mathResult}.jpg`);
        }
        } catch(e) {
        console.log(e)
        }
        break;
        
case "saveh":
   if (!isOwner) return reply (`${say.only.owner}`)
mathHelp(99998, 1);

   try {
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await zero.downloadMediaMessage(boij);
          fs.writeFileSync(`./edit/media/imagem/save/hentai/hentai${mathResult}.jpg`, delb);
          reply(`Imagem salva ✓\n\nnome: hentai${mathResult}.jpg`);
        }
        } catch(e) {
        console.log(e)
        }
        break;

case 'clear': case 'clearchat':
if (!isOwner) return reply (`${say.only.owner}`)
try {
await sleep(1000)
                await zero.modifyChat(from, ChatModification.delete)
                await sleep(1000)
                reply(`✓ chat excluído`)
                } catch(e) {
                console.log(e)
                }
                
break

case 'avaliar':
listMsg = {

 buttonText: 'ver lista',

 footerText: ` sua avaliação ajuda o criador do bot a ter um feedback`,

 description: `*Evalue el bot*`,

 sections: [

                     {

                      "title": `  `,

 rows: [

                          {

                              "title": "péssimo",
                              "rowId": `${prefix}` + "avpessimo"

                           },

                           {

                              "title": "ruim",
                              "rowId": `${prefix}` + "avruim"

                           },

                           {

                              "title": "bom",
                              "rowId": `${prefix}` + "avbom"

                           },
                           {

                              "title": "muito bom",
                              "rowId": `${prefix}` + "avmuitobom"

                           },
                                                      {

                              "title": "perfeito!",
                              "rowId": `${prefix}` + "avperfeito"

                           },
                           

                        ]

                     }],

 listType: 1

}

zero.sendMessage(from, listMsg, MessageType.listMessage,  {contextInfo: { mentionedJid: [sender]}})

break

case 'bug':
if (!isGroup) return reply (`${say.only.group}`)
if (args.length < 1) return reply(`Escribe después "bug"`)
suporte = '9944081' + '03470@s.whatsapp.net';
texto = `
*[ Reporte de bug ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*grupo:* ${groupName}
*Hora:* ${hours}

_" ${body.slice(5)} "_
`
await zero.sendMessage(suporte, texto, text)
await sendMedia(from, goAudio + 'bugada.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
mathHelp(7, 1);
await sendMedia(from, goSticker + 'gl' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(1200)
await reply (`✓ relatório enviado ao meu criador, obrigada`)
break

case 'perfil':
try {
var ppimg = await zero.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
buffer = await getBuffer(ppimg)
texto = `
*nick:* ${pushname}
*bio:* ${getBio.status}
*número:* wa.me//${sender.split("@")[0]}
`
await zero.sendMessage(from, buffer, image, {caption: texto, quoted: selocont})
break

case 'dueño': case 'creador':
await reply(`
_criado por:_ wa.me//994408103470


*esse bot é de uso grátis,* você pode obtê-lo através do meu canal no YouTube:
https://youtube.com/channel/UCEXnX1CqgbV5xVabZG71aUw
`)
await sleep(2000)
sendDono('');
break

				case 'multiprefix':
	
				
                if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
                if (args.length < 1) return reply(` use assim:\n\n.multiprefix on\nmultiprefix off`)
                if (contemArgs === 'on'){
                if (isMultiPrefix) return reply(`Já estava ativo antes!`)
                await multiprefix.push(from)
fs.writeFileSync('./docs/interruptor/multiprefix.json', JSON.stringify(multiprefix))
reply (`multi prefixo está activado!`)
                }
                if (contemArgs === 'off'){
                if (!isMultiPrefix) return reply (`Já estava desativado antes!`)
                multiprefix.splice(from)
fs.writeFileSync('./docs/interruptor/multiprefix.json', JSON.stringify(multiprefix))
reply (` Multi prefix  está desactivado! ahora el prefix es ${prefix2}`)
                }

break        



case 'block': case 'bloquear':
if (!isOwner) return reply(`${say.only.owner}`);
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blocked.push(`${mentioned}`)
fs.writeFileSync('./docs/interruptor/blocked.json', JSON.stringify(blocked))
susp = `🚫@${mentioned[0].split('@')[0]} ya no podras usar los comandos del bot`
mentions(`${susp}`, mentioned, true)   

break

case 'addblack': case 'blackadd':
if (!isOwner) return reply(`${say.only.owner}`);
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blacklist.push(`${mentioned}`)
fs.writeFileSync('./docs/interruptor/blacklist.json', JSON.stringify(blacklist))
susp = `@${mentioned[0].split('@')[0]} fue agregado ala lista negra y ya no podras estar mas en este grupo`
mentions(`${susp}`, mentioned, true)   

break


case 'blocklist':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)

jrc = 'LISTA DE BLOQUEADOS :\n'
for (let benn of blocked) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${blocked.length}`
zero.sendMessage(from, jrc.trim(), extendedText, {quoted: selocont, thumbnail:null, contextInfo: {"mentionedJid": blocked}})

break

case 'blacklist':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)

jrc = 'LISTA NEGRA :\n'
for (let benn of blacklist) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${blacklist.length}`
zero.sendMessage(from, jrc.trim(), extendedText, {quoted: selocont, thumbnail:null, contextInfo: {"mentionedJid": blacklist}})

break

case 'unblock': case 'desblock': case 'desbloquear':
if (!isOwner) return reply (`${say.only.owner}`);
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blocked.splice(`${mentioned}`)
fs.writeFileSync('./docs/interruptor/blocked.json', JSON.stringify(blocked))
susp = `❎@${mentioned[0].split('@')[0]} puedes usar mis comandos de nuevo ❎`
mentions(`${susp}`, mentioned, true)   

break			

case 'unblack':
if (!isOwner) return reply (`${say.only.owner}`);
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blacklist.splice(`${mentioned}`)
fs.writeFileSync('./docs/interruptor/blacklist.json', JSON.stringify(blacklist))
susp = `@${mentioned[0].split('@')[0]} ya no estas en lista negra✓`
mentions(`${susp}`, mentioned, true)   

break			

case 'aud':
try {
cuc = body.slice(5);
await sendMedia(from, goAudio + cuc, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 } catch(e) {
 console.log(e)
 }
break

case 'pvlist': case 'listpv': case 'listapv': case 'listapv':
const getpc = async function(totalchat){
pc = []
a = []
b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}
if (!isOwner) return reply(`${say.only.owner}`)
tdtpt = await client.chats.all()
dpy = await getpc(tdtpt)
sdpt = `*L I S T A   - P  V*\n*Total de Chats* : ${dpy.length}\n\n`
for(let i=0; i<dpy.length; i++){
conts = mek.key.fromMe ? mek.user.jid : client.contacts[dpy[i]] || {notify: jid.replace(/@.+/, '')}
nomes = client.contacts[dpy[i]] != undefined ? client.contacts[dpy[i]].vname || client.contacts[dpy[i]].notify : undefined
sdpt += `• *Nome* : ${nomes}\n• *Tag* : @${dpy[i].split("@")[0]}\n• *Wame* : wa.me//${dpy[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( sdpt, dpy, true)
break 

case 'offline': case 'desligar': case 'off':

		if (!isOwner) return reply(`${say.only.owner}`)
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: '*🔴 OFFLINE*',
contextInfo: { mentionedJid: mem },
quoted: selocont
}

dfg = await zero.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await zero.downloadMediaMessage(encmedia)
for (let _ of dfg) {
zero.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('transmision enviada')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmision enviada')
}


break		

case 'on': case 'ligar': case 'online':

		if (!isOwner) return reply(`${say.only.owner}`)
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: '*🟢 ONLINE*',
contextInfo: { mentionedJid: mem },
quoted: selocont
}

dfg = await zero.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await zero.downloadMediaMessage(encmedia)
for (let _ of dfg) {
zero.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmision enviada')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmision enviada')
}


break		

case 'recado':
if (!isOwner) return reply(`${say.only.owner}`)
try {
qttp = body.slice(8)
if (args.length < 1) {texti = '*📡 [RECADO]*\n\n(trollei kkk)'} else {texti = `*📡 [RECADO]*\n\n_${qttp}_\n\n©${nomeBot}`}
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: `${texti}`,
contextInfo: { mentionedJid: mem },
quoted: selocont
}

dfg = await zero.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await zero.downloadMediaMessage(encmedia)
for (let _ of dfg) {
zero.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmision enviada')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmision enviada')
}
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break								
			

case 'leave': case 'kitar':
if (!isOwner) return reply (`${say.only.owner}`)

await sendMedia(from, goAudio + 'adios.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
await sleep(2000)
await reply (`👋 bye`)
             await zero.groupLeave(from) 
              break
              
 case 'join': 
      case 'convite': 
      case 'entrar': 
      qy = args.join('')
      if (!isOwner) return  reply(`${say.only.owner}`)
             if (!qy) return reply('el link?')
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('link inválido')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = zero.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('entre a esta grupo')
             break			
             
             ////
case 'randoperfil': case 'randofoto':
 if (!isOwner) return;
const mathty = Math.floor(Math.random() * 12) + 1;
 medi = fs.readFileSync(`./midia/perfil/${mathty}.jpg`);
await albedo.updateProfilePicture(botNumber, medi);
albedo.sendMessage(from, medi, image, {quoted:mek, caption: '✓ Foto de perfil cambiada'})
console.log(`✓ PROFILE UPDATE`);
break                           
             

case 'seradm':
if (!isOwner) return reply (`${say.only.owner}`);
if(!isBotGroupAdmins) return reply(`${say.only.botAdmin}`);
try {
kkk = dono + '@s.whatsapp.net';
await zero.groupMakeAdmin(from, [kkk]);
await reply (`✓ claro, mi creador puede ser admin ｡◕‿◕｡`)
} catch(e) {
reoly(`${say.error}`)
}
break

case 'sermembro': case 'merebaixe':
if (!isOwner) return reply (`${say.only.owner}`);
if(!isBotGroupAdmins) return reply(`${say.only.botAdmin}`);
try {
kkk = dono + '@s.whatsapp.net';
await zero.groupDemoteAdmin(from, [kkk]);
await reply (`✓ como digas.`)
} catch(e) {
reoly(`${say.error}`)
}
break



			case 'whitelist':				
		if (!isGroupAdmins) if (!isOwner) return reply(`${say.only.admin}`)
					teks = `╭─「 *WHITELIST* 」\n`
					no = 0
					for (let prem of whitelist) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Total : ${whitelist.length}\n╰──────「 *${nomeBot}* 」`
					zero.sendMessage(from, teks.trim(), extendedText, {quoted: selocont, contextInfo: {"mentionedJid": whitelist}})
					
break					

case 'addwhite':
				     
					if (!isGroupAdmins) if (!isOwner) return reply(`${say.only.admin}`)
					addp = body.slice(11)
					whitelist.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./docs/interruptor/whitelist.json', JSON.stringify(whitelist))
					reply(`Agregado con exito  ${addp} a la lista blanca`)
					
break

case 'unwhite': case 'delwhite':
if (!isGroupAdmins) if (!isOwner) return reply(`${say.only.admin}`)	
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
whitelist.splice(`${mentioned}`)
fs.writeFileSync('./docs/interruptor/whitelist.json', JSON.stringify(whitelist))
susp = `❎@${mentioned[0].split('@')[0]} eliminado de la lista blanca`
mentions(`${susp}`, mentioned, true)   

break			


				

case 'gplista': case 'grouplist': case 'listgp':
case 'gplist':
if (!isOwner) return reply (`${say.only.owner}`)

try {
const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await zero.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


tdufg = await zero.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*LISTA DE GRUPOS DEL BOT*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){

linkgc = await zero.groupInviteCode(`${ingfoo[i].id}`)
if (!linkgc) linkgp = 'Link indisponível';
teks1 += `• *Nombre del grupo* : ${ingfoo[i].subject}\n• *Id del Grupo* : ${ingfoo[i].id}\n• *Link:* https://chat.whatsapp.com/${linkgc}\n• *Creado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
} catch(e) {
reply(`Error talvez el bot no es admin en otro grupos`)
}
break





		
		
	



case 'menu': case 'comandos': case '?':
if (!isOwner) if (isFiltered(sender)) return reply(`*SISTEMA DE ANTISPAM!*\n _espera 15 segundos..._`);
await addFilter(sender);

try {
try {
if (isOwner){
await sendMedia(from, goAudio + 'nomes/' + `${nomeDono}` + '.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 } else if (!isOwner) {
 await sendMedia(from, goAudio + 'menu.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 }} catch(e) {
 return reply (`hubo un problema`)
 }

await sleep(1000);

isNsfw ? t = ' ✓ ': t = ' X ';
isWelkom ? t2 = ' ✓ ': t2 = ' X ';;
isAntiLink ? t3 = ' ✓ ': t3 = ' X ';
isAntiFake ? t4 = ' ✓ ': t4 = ' X ';
isMultiPrefix ? t5 = ' ✓ ': t5 = ' X ';


       txtt =` `

               buttons = [{buttonId:`menu lista`, 
               buttonText:{displayText: '☉ lista de menus ☉'},type:1},
               {buttonId:`creador`,buttonText:{displayText:'☉ Creador ☉' },type:1},
                {buttonId:`outros`,buttonText:{displayText:'𖣘 mas opciones 𖣘' },type:1},
               ]

mathHelp(29, 1);

               imageMsg = (await zero.prepareMessageMedia(fs.readFileSync(`./edit/media/imagem/menu/${valorMath}.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./edit/media/imagem/momonga.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${botDisplay}`,
                 footerText: `${readmore}\n━━━━━━ ⊙ ━━━━━━
         𝙎 𝙏 𝘼 𝙏 𝙐 𝙎 :
━━━━━━ ⊙ ━━━━━━
*nsfw:*  ${t}
*welkom:*  ${t2}
*anti-link:*  ${t3}
*anti-fake:*  ${t4}
*multi-prefix:* ${t5}
${allmenu}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: selocont})
               zero.relayWAMessage(prep)
             } catch(e) {
             console.log(e)
             }
               break	
		
		case 'traducir':
		qpp = args.join(' ')
if(!qpp) return reply('escribe algo que quieres traducir | Exemplo: .traducir hello')
translate(`${qpp}`, {to: 'pt'}).then(res => {
  texto = res.text
  texto = `${texto}`
  reply(texto)
}).catch(err => {
  console.error(err);
});
  break
		



case 'help': case 'ayuda': case 'socorro':
reply(`${help}`)
break		
		
		
// #utils


 case "tourl": case 'upload':
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await zero.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("Envia Foto/Video");
        }
        break;
        
        
case 'from':
reply(`${from}`)
break        
        
case 'stalkyt': case 'ytstalk':
try {
let q = args.join(' ');
if (!q) return reply (`nombre del canal?`)
let w = await fetchJson('https://leyscoders-api.herokuapp.com/api/yt-stalk?q=' + `${q}` + '&apikey=MIMINGANZ');
let imgUrl = await getBuffer(w.result.image)
let texto = `
*canal:* ${w.result.channel}
*Subs:* ${w.result.subscriber_count}
*descripción:* _${w.result.desc}_

*link:* ${w.result.link}
`
await zero.sendMessage(from, imgUrl, image, {quoted: selocont, caption: texto})
} catch(e) {
await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
break
		
case 'gerarnick':
let nickname = generator.randomNickname();
reply(`*nickname generado :*\n_${nickname}_`)
break


// #down

case 'playvid': 
if (!isOwner) if (isFiltered(sender)) return reply(`*SISTEMA DE ANTISPAM!*\n _aguarde 15 segundos..._`);

addFilter(sender);
				 if (args.length < 1) return reply('*nombre del video?*')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}}&apikey=NinoWangy`)
				if (anu.error) return reply(anu.error)
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
			zero.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: `${nomeBot}`})
					break

	case 'image':
case 'gimage':
case 'googleimage': case 'img':
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *sistema de Anti_Spam!*\n _aguarde 15 segundos..._`);

addFilter(sender);
if (args.length < 1) return reply('y el texto?')
for (var i = 0; i < 5; i++) {
try {
console.log(color('[DEV]', 'cyan'), color('「❔ 」BUSCANDO IMG...', 'magenta'))

teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error :c_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: selocont, caption: `*Resultados da pesquisa de :* _${teks}_`, thumbnail: null})
}
}
} catch(e) {
await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
}
break

case 'play':		  
if (isFiltered(sender)) return reply(`*sistema de Anti_Spam!*\n _espera 15 segundos..._`);
addFilter(sender);

try {
  if (args.length < 1) return reply('y el texto u.u?')
  await sleep(10000);
  playi = body.slice(6)
  
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${playi}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
  if (anu.error) return reply(anu.error)
  infomp3 = `𝗠𝗨𝗦𝗜𝗖𝗔 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔

⏯️ *Nombre* : ${anu.result.title}
🗳️ *Vídeo* : ${anu.result.source}
📚 *Tamaño* : ${anu.result.size}
ℹ️ *Download* : ${anu.result.url_audio}
   *Bot Kriz And Gabriel *
_${nomeBot}_
`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  zero.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3 })
  zero.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: selocont})
} catch(e) {
try {
if (!isOwner) if (isFiltered(sender)) return reply(`*sistema de Anti_Spam!*\n _aguarde 15 segundos..._`);

addFilter(sender);
try {
if (args.length < 1) return reply('y el texto?')
teks = args.join(' ')
 
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] error no existe_')
})
let thumbInfo = await `❒「  *Youtube Search*  」
├ *Título :* ${res.all[0].title}
├ *ID de vídeo :* ${res.all[0].videoId}
├ *Carregado em :* ${res.all[0].ago}
├ *Visualizaciones :* ${res.all[0].views}
├ *Duraciom :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link del canal :* ${res.all[0].author.url}

*_Espera unu....._*
`
try {
await sendFileFromUrl(res.all[0].image, image, {quoted: selocont, caption: thumbInfo})
} catch(e) {
reply (`Erro!`)
}
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error :c* intenta repetir*_')
})
try {
await sendFileFromUrl(res[0].link, audio, {quoted: selocont, mimetype: 'audio/mp4', filename: res[0].output})
} catch(e) {
reply(`Erro!`)
}
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error :c_')
})
let thumbInfo = await `❒「  *${botname}*  」
├ *Título :* ${res.all[0].title}
├ *Visualizaciones :* ${res.all[0].views}
├ *Duraciom :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link del canal :* ${res.all[0].author.url}

*_Espera un momento....._*
`
try {
await sendFileFromUrl(res.all[0].image, image, {quoted: selocont, caption: thumbInfo})
} catch(e) {
reply(`Erro!`)
}
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error* intenta repetir*_')
})
try {
await sendFileFromUrl(res[0].link, document, {quoted: selocont, mimetype: 'audio/mp3', filename: res[0].output})
} catch(e) {
reply(`Erro al enviar el archivo `)
}
}
} catch(e) {
reply(`Algo dio error, intenta  de nuevo`)
}
} catch(e) {
console.log(e)
}
}
          break

case 'play2':
try {
if (!isOwner) if (isFiltered(sender)) return reply(`*sistema de Anti_Spam!*\n _espera 15 segundos..._`);

addFilter(sender);
try {
if (args.length < 1) return reply('y el texto?')
teks = args.join(' ')
 
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] error_')
})
let thumbInfo = await `❒「  *Youtube Search*  」
├ *Título :* ${res.all[0].title}
├ *ID de vídeo :* ${res.all[0].videoId}
├ *Carregado em :* ${res.all[0].ago}
├ *Visualizaciones :* ${res.all[0].views}
├ *Duracion :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link del canal :* ${res.all[0].author.url}

*_Espera....._*
`
try {
await sendFileFromUrl(res.all[0].image, image, {quoted: selocont, caption: thumbInfo})
} catch(e) {
reply (`Erro!`)
}
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error * intenta repetir*_')
})
try {
await sendFileFromUrl(res[0].link, audio, {quoted: selocont, mimetype: 'audio/mp4', filename: res[0].output})
} catch(e) {
reply(`Error!`)
}
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] error_')
})
let thumbInfo = await `❒「  *${botname}*  」
├ *Título :* ${res.all[0].title}
├ *Visualizaciones :* ${res.all[0].views}
├ *Duracion :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link del canal :* ${res.all[0].author.url}

*_Espera....._*
`
try {
await sendFileFromUrl(res.all[0].image, image, {quoted: selocont, caption: thumbInfo})
} catch(e) {
reply(`Erro!`)
}
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error* intenta repetir*_')
})
try {
await sendFileFromUrl(res[0].link, document, {quoted: selocont, mimetype: 'audio/mp3', filename: res[0].output})
} catch(e) {
reply(`Error al enviar el archivo`)
}
}
} catch(e) {
reply(`Algo dio error, intenta nuevamente`)
}
} catch(e) {
console.log(e)
}
break

case 'searchanime': case 'anime':
bimbim = args.join(' ');
if (!bimbim) return reply(`Insira o nome do anime que deseja pesquisar!\nExemplo:\n_${cmd} Overlord_`)
 
try{
const anime = new Anime("https://gogoanime.ai")
anime.animeInfoFetch(bimbim).then(data => {
let nome = data.name
let cover = data.cover
let type = data.type
let sinopse = data.summary
let gen = data.genre
let othername = data.otherName
let link = data.link

translate(sinopse, {to: 'pt'}).then(res => {
  var tradução = res.text
texto = `
*nombre:* ${nome}
*${othername}*

*temporada:* ${type}

*genero:* ${gen}

*link:* ${link}

*sinopse:* ${tradução}`

zero.sendMessage(
    from, 
    { url: data.cover }, 
    MessageType.image, 
    { mimetype: Mimetype.image, caption: texto }       
)

  }).catch(err => {
  console.error(err);
})



}).catch(console.error);
/*anime.getEpLinks("https://www1.gogoanime.ai/category/" + `${body.slice(13)}`).then(links => {
    console.log(links) // episódios
})*/
} catch(e) {
reply(`Error`)
}

break















// #menus

case 'menufigu': case 'figu':
reply (`${menufigu}`)
break

case 'menudono':
reply (`${menudono}`)
break

case 'menuadmins': case 'menuadm': case 'adms': case 'adm':
reply (`${menuadms}`)
break

case 'menuutils': case 'utils':
reply (`${menuutils}`)
break

case 'menunsfw': case 'hentai': case 'porno': case 'menuhentai':
if (!isNsfw) return reply (`${say.only.nsfw}`);
reply(`${menuhentai}`)
break

case 'galeria':
reply (`${galeria}`)
break
		
// #admins	#adms

case 'status':
var b1 = isMute? '✓':'*X*';
var b2 = isMultiPrefix? '✓':'*X*';
var b3 = isNsfw? '✓':'*X*';
var b4 = isWelkom? '✓':'*X*';
var b5 = isAntiLink? '✓':'*X*';
var b6 = isAntiFake? '✓':'*X*';
var b7 = isAntiPalavrão? '✓':'*X*';
var b8 = isAntiPv? '✓':'*X*';

texto = `|| *STATUS DO GRUPO* ||

• Multi-Prefixo: ${b2}
• Nsfw: ${b3}
• Welcome: ${b4}
• Anti-Link: ${b5}
• Anti-Fake: ${b6}
• Anti-Palavrão: ${b7}

|| *STATUS DO BOT* ||
• Anti-Pv: ${b8}
• Mute: ${b1}
`

zero.sendMessage(from, texto, text, {quoted: selotempoonline })
break

case 'delete': 
case 'del':
case 'apagar':
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
try {
zero.deleteMessage(from, {
id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
enviar(`Só é possível deletar mensagens minhas`)
}
break

case 'roleta':
if (!isBotGroupAdmins) return reply (`${say.only.botAdmin}`)
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
if (!isGroup) return reply(`${say.only.group}`)
try {
jds = []
const A2 = groupMembers
const B2 = groupMembers
const TAMBOR = ["na perna","no saco","no ovo","na cabeça","no pescoço","no peito","no olho","no estômago","na boca","na perna","na testa","no braço"]
 const C2 = A2[Math.floor(Math.random() * A2.length)]
 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
await reply(`😈GIRANDO EL TAMBOR, PREPARATE PARA LAS CONSECUENCIAS😈 `)
await sendMedia(from, goAudio + 'bang bang.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});

D1 = `💥POW💥 EL TAMBOR GIRO ACERTO @${C2.jid.split('@')[0]}, MORI CON UN TIRO  *${tpa}*`             			
await mentions(D1, jds, true)				
jds.push(C2.jid)				  
jds.push(C2.jid)
await sleep(1000)
await zero.groupRemove(from, [C2.jid])
} catch(e) {
console.log(e)
}
break

case 'hidetag':
if (!isGroup) return reply(`${say.only.group}`)
if (!isGroupAdmins) return reply(`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)

const hideTag = async function(from, text){
let anu = await zero.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
zero.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}  
try {
quotedText = `${body.slice(9)}`;
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${contemArgs}`)
}
break


 case 'setpic': case 'setfoto':
              if (!isGroupAdmins) return reply(`${say.only.admin}`)
              if (!isGroup) return reply(`${say.only.group}`)
              if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await zero.downloadMediaMessage(encmedia)
              await zero.updateProfilePicture(from, media)
             await reply (`${say.sucess}`)
              } else {
              reply(`responde a una foto ${prefix}setpic`)
}
              break			

case 'checkativo': case 'checarativo':
 
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
if (!isGroup) return reply(`${say.only.group}`)
if(groupIdscount.indexOf(from) < 0) return reply('el bot no tiene datos sobre el grupo')
var ind = groupIdscount.indexOf(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta de actividades de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} grupo\n𖣘⃟ᗒ Mensajes: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta de actividades de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} grupo\n⋆⃟ۣۜ᭪➣ Mensajes: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}

break

case 'topativos':
 
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
if (!isGroup) return reply(`${say.only.group}`)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Los mas activos:\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await zero.sendMessage(from, `É necessário 3 jogadores para se construir um ranking`, text, {quoted: selocont})
}

break

case 'contador':  
 
try{
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);

if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = ` ⋆⃟ۣۜ᭪➣ Atividades de miembros del grupo:\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += ` ⋆⃟ۣۜ᭪➣ @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensajes: ${countMessage[ind].numbers[indnum].messages}\n ⋆⃟ۣۜ᭪➣ Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
} else {
teks += ` ⋆⃟ۣۜ᭪➣ @${obj.jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensajen: 0\n ⋆⃟ۣۜ᭪➣ Comandos: 0\n`
}
mem.push(obj.jid)
}
zero.sendMessage(from, teks, extendedText, {quoted: selocont, thumbnail:null, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada fue encontrado*')
} catch (e){
console.log(e)
}
break


case 'setname':
if (!isGroup) return reply(`${say.only.group}`)
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
qrt = args.join(" ")
await zero.groupUpdateSubject(from, `${qrt}`)
zero.sendMessage(from, 'nombre del grupo cambiado', text, {quoted: selocont})
break

case 'setdesc':
if (!isGroup) return reply(`${say.only.group}`)
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
qrt = args.join(" ")
await zero.groupUpdateDescription(from, `${qrt}`)
zero.sendMessage(from, 'descripicion cambiada', text, {quoted: selocont})
break

case 'opengp':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)
await zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break

case 'closegp':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)
await zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break

case 'opentime':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = mek.participant;
let q = args.join(' ').split(' ');
let qa = parseInt(q[0]);
let qb = q[1];
if (isNaN(qa)) return reply (`y el numero?\n\nejemplo:\n${prefix}opentime 30 s`)

if (qb === 's') {
let calc = parseInt(qa + '000')
await reply (`sera abierto en ${qa} segundos`)
await sleep(calc);
await zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
return reply (`fue abierto por el administrador*${pushname}* en ${qa} segundos!`)
}
if (qb === 'm') {
calc = parseInt(qa * 60 + '000')
await reply (`O grupo será aberto em ${qa} minutos`)
await sleep(calc);
await zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
return reply (`fue abierto por administrador*${pushname}* en  ${qa} minutos!`)
}
if (qb === 'h') {
calc = parseInt(qa * 3600 + '000')
await reply (`O grupo será aberto em ${qa} horas`)
await sleep(calc);
await zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
return reply (`fue abierto por administrador*${pushname}* en ${qa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nejemplo:\n${prefix}opentime 5 m`)
}
break

case 'closetime':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = mek.participant;
let qtt = args.join(' ').split(' ');
let qaa = parseInt(qtt[0]);
let qbb = qtt[1];
if (isNaN(qaa)) return reply (`y el numero!!!\n\nejemplo:\n${prefix}closetime 30 s`)

if (qbb === 's') {
let calc = parseInt(qaa + '000')
await reply (`sera cerrado en ${qaa} segundos`)
await sleep(calc);
await zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
return reply (`cerrado por administrador *${pushname}* en ${qaa} segundos!`)
}
if (qbb === 'm') {
calc = parseInt(qaa * 60 + '000')
await reply (`sera cerrado en ${qaa} minutos`)
await sleep(calc);
await zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
return reply (`cerrado por administrador *${pushname}* en  ${qaa} minutos!`)
}
if (qbb === 'h') {
calc = parseInt(qaa * 3600 + '000')
await reply (`sera cerrado en  ${qaa} horas`)
await sleep(calc);
await zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
return reply (`cerrado por administrador *${pushname}* após ${qaa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nejemplo:\n${prefix}closetime 5 m`)
}
break





case 'gpdesc': case 'descgp': case 'desc':
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
ppUrl = await zero.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
return zero.sendMessage(from, buffer, image, {quoted: selocont, thumbnail:null, caption: `*NOME* : ${groupName}\n*MEMBROS* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* :\n\n ${groupDesc}`})
} catch(e) {
await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
break

case 'linkgp':
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
linkgc = await zero.groupInviteCode(from)
return reply('https://chat.whatsapp.com/'+linkgc + `\n\n_${nomeBot}_`)
} catch(e) {
reply (`${say.error}`)
}
break

case 'ban':
if (!isOwner) if (!isGroupAdmins) {
return sendMedia(from, goAudio + 'admin.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true})
 }
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(6) + '@s.whatsapp.net';
let kkk = mek.message.extendedTextMessage.contextInfo.participant
await reply (`até mais baka kkk`)
await sleep(1000);
if (kkk) {
if (kkk === zero.user.jid) return
if (kkk === dono + '@s.whatsapp.net') return
await zero.groupRemove(from, [kkk])
await sendMedia(from, goAudio + 'removido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} else if (!kkk) {
if (cucu === zero.user.jid) return
if (cucu === dono + '@s.whatsapp.net') return
await zero.groupRemove(from, [cucu])
await sendMedia(from, goAudio + 'removido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
} catch(e) {
console.log(e)
reply (`${say.error}\nintente nuevamente`)
}
break

case 'promote': 
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(10) + '@s.whatsapp.net';
let kkk = mek.message.extendedTextMessage.contextInfo.participant

if (kkk) {
await zero.groupMakeAdmin(from, [kkk])
await sendMedia(from, goAudio + 'promovido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 ptt:true});
 await reply('fuiste promovido✓')
} else if (!kkk) {
await zero.groupMakeAdmin(from, [cucu])
await sendMedia(from, goAudio + 'promovido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 ptt:true});
 await reply('ahora eres admin✓')
}

} catch(e) {
reply (`${say.error}\ntente novamente`)
}
break

case 'demote':
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(9) + '@s.whatsapp.net';
let kkk = mek.message.extendedTextMessage.contextInfo.participant

if (kkk) {
await zero.groupDemoteAdmin(from, [kkk])
reply (`fuiste removido ✓`)
} else if (!kkk) {
await zero.groupDemoteAdmin(from, [cucu])
reply (`ya no eres adm`)
}

} catch(e) {
reply (`${say.error}\nintente nuevamente`)
}
break



case 'add':
const qd = args.join(' ')
if (!qd) return reply (`y el número!`)
if (!isGroup) return reply (`${say.only.group}`)
if (!isGroupAdmins) if (!isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
const dl = body.slice(5)
if (dl.length > 13)return reply(`Ejemplo : ${prefix}add 51993437482`) 
if (args[0].startsWith('08')) return reply('Use el código del país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('no pude :c.')
}

break

/*
case 'add':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(5) + '@s.whatsapp.net';

await zero.groupAdd(from, [cucu])
reply(`Bem vindo!`)
} catch(e) {
console.log(e)
reply (`${say.error}\ntente novamente`)
}
break
*/
//

case 'nsfw':	
if (!isOwner) if (!isGroupAdmins) return reply(`solo amd`)
try {
if (isNsfw) {
			sendButMessage(from, seloOn, '☘️ *nsfw* está activado', `puede pedir el hentai.`, [
            {              
              buttonId: `nsfw off`,
              buttonText: {
                displayText:  `🔴 [DESACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isNsfw) {
			sendButMessage(from, seloOff, '🍎️ *nsfw* está desactivado', `ya no puede pedir hentai :(.`, [
            {              
              buttonId: `nsfw on`,
              buttonText: {
                displayText:  `🟢 [ACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			
            
case 'welkom': case 'welcome':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isWelkom) {
			sendButMessage(from, seloOn, '☘️ *welkom* está activado', `la bienvenida fue activada ahora los nuevos la recibiran.`, [
            {              
              buttonId: `welkom off`,
              buttonText: {
                displayText:  `🔴 [DESACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isWelkom) {
			sendButMessage(from, seloOff, '🍎️ *welkom* está desativado', `la bienvenida fue desactivada los nuevos no la recibiran.`, [
            {              
              buttonId: `welkom on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Error intente nuevamente`)
                }
            break			   
            
case 'mute': case 'mutar':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isMute) {
			sendButMessage(from, seloOn, '☘️ *mute* está activado', `solo admins pueden usar el bot.`, [
            {              
              buttonId: `mute off`,
              buttonText: {
                displayText:  `🔴 [DESACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isMute) {
			sendButMessage(from, seloOff, '🍎️ *mute* está desactivado', `ahorq todos pueden usar al bot`, [
            {              
              buttonId: `mute on`,
              buttonText: {
                displayText:  `🟢 [ACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro intente nuevamente`)
                }
            break			                                    

case 'antilink':	
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiLink) {
			sendButMessage(from, seloOn, '☘️ *antilink* está activado', `si mandan un link seran eliminados.`, [
            {              
              buttonId: `antilink off`,
              buttonText: {
                displayText:  `🔴 [DESACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiLink) {
			sendButMessage(from, seloOff, '🍎️ *antilink* está desactivado', `ahora si mandan un link no seran eliminados`, [
            {              
              buttonId: `antilink on`,
              buttonText: {
                displayText:  `🟢 [ACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Error, intente nuevamente`)
                }
            break			
            
case 'antipalavrao': case 'antipalavrão': case 'antipalav':

if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiPalavrão) {
			sendButMessage(from, seloOn, '☘️ *antipalavrão* está activado', `si sueltan una palabrota seran eliminados`, [
            {              
              buttonId: `antipalavrão off`,
              buttonText: {
                displayText:  `🔴 [DESACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiPalavrão) {
			sendButMessage(from, seloOff, '🍎️ *antipalavrão* está desativado', `ya pueden decir palabrotas`, [
            {              
              buttonId: `antipalavrão on`,
              buttonText: {
                displayText:  `🟢 [ACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Error intente nuevamente`)
                }
            break			            

case 'antifake':	
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiFake) {
			sendButMessage(from, seloOn, '☘️ *antifake* está activado', `los numeros extranjeros seran eliminados`, [
            {              
              buttonId: `antifake off`,
              buttonText: {
                displayText:  `🔴 [DESACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiFake) {
			sendButMessage(from, seloOff, '🍎️ *antifake* está desativado', `los números extranjeros no seran eliminados.`, [
            {              
              buttonId: `antifake on`,
              buttonText: {
                displayText:  `🟢 [ACTIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
                }
            break			

// #hentai


case 'rhentai': //rando hentai
if (!isNsfw) return reply (`${say.only.nsfw}`)
rhentai();
break



case 'eroneko':
if (!isNsfw) return reply(`${say.only.nsfw}`)
eroneko();
break


case 'ass':
if (!isNsfw) return reply(`${say.only.nsfw}`)
ass();
break


case 'trap':
if (!isNsfw) return reply(`${say.only.nsfw}`)
trap();
break



case 'futa':
if (!isNsfw) return reply(`${say.only.nsfw}`)
futa();
break


case 'bdsm':
if (!isNsfw) return reply(`${say.only.nsfw}`)
bdsm();
break


case 'cum':
if (!isNsfw) return reply(`${say.only.nsfw}`)
cum();
break



case 'doujin':
if (!isNsfw) return reply(`${say.only.nsfw}`)
doujin();
break


case 'femdom':
if (!isNsfw) return reply(`${say.only.nsfw}`)
femdom ();
break



case 'ero':
if (!isNsfw) return reply(`${say.only.nsfw}`)
ero();
break



case 'maid':
if (!isNsfw) return reply(`${say.only.nsfw}`)
maid();
break



case 'orgy':
if (!isNsfw) return reply(`${say.only.nsfw}`)
orgy();
break



case 'panties':
if (!isNsfw) return reply(`${say.only.nsfw}`)
panties();
break



case 'cuckold':
if (!isNsfw) return reply(`${say.only.nsfw}`)
cuckold
break



case 'netorare':
if (!isNsfw) return reply(`${say.only.nsfw}`)
netorare();
break


case 'blowjob':
if (!isNsfw) return reply(`${say.only.nsfw}`)
blowjob();
break



case 'feet':
if (!isNsfw) return reply(`${say.only.nsfw}`)
feet();
break


case 'pussy':
if (!isNsfw) return reply(`${say.only.nsfw}`)
pussy ();
break



case 'ugly':
if (!isNsfw) return reply(`${say.only.nsfw}`)
ugly();
break

case 'fantasy':
if (!isNsfw) return reply(`${say.only.nsfw}`)
fantasy();
break



case 'gangbang':
if (!isNsfw) return reply(`${say.only.nsfw}`)
gangbang();
break



case 'foxgirl':
if (!isNsfw) return reply(`${say.only.nsfw}`)
foxgirl();
break



case 'cumslut':
if (!isNsfw) return reply(`${say.only.nsfw}`)
cumslut();
break



case 'glasses':
if (!isNsfw) return reply(`${say.only.nsfw}`)
glasses();
break



case 'thighs':
if (!isNsfw) return reply(`${say.only.nsfw}`)
thighs();
break



case 'tentacles':
if (!isNsfw) return reply(`${say.only.nsfw}`)
tentacles();
break



case 'solo':
if (!isNsfw) return reply(`${say.only.nsfw}`)
solo ();
break



case 'school':
if (!isNsfw) return reply(`${say.only.nsfw}`)
school();
break



case 'eroyuri':
if (!isNsfw) return reply(`${say.only.nsfw}`)
eroyuri();
break

case 'zettai':
if (!isNsfw) return reply(`${say.only.nsfw}`)
zettai()
break


case 'succubus':
if (!isNsfw) return reply(`${say.only.nsfw}`)
succubus();
break


// fim do hentai



// #galeria

case 'kimono':
              kimono();
break

case  'uwu':
uwu();
break




case 'randonime': case 'randoanime': case 'ranime':
randoanime();
break



case 'loli':
loli();
break

case 'yuri':
yuri();
break



case 'wallpaper':
wallpaper();
break


case 'neko':
neko();
break






		
		
		
case 'botão':

	
			sendButMessage(from, mek, 'TEXTO MAYOR', `texto menor`, [
            {              
              buttonId: `videoTutorial`,
              buttonText: {
                displayText:  `Me aperte `,
              },
              type: 1,
            },
          ]);        
                
            break				
            	
		
/// #stickers

case 'sfundo':  
try {
await sleep(2500)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await zero.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `` // ${NomeDoBot}
dua = typeof anu[1] !== 'undefined' ? anu[1] : ``// @${pushname}._
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
zero.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await zero.downloadAndSaveMediaMessage(encmedia2, `./docs/src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(from)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ error`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./docs/src/sticker/stickwm_${sender}.exif ./docs/src/sticker/${sender}.webp -o ./docs/src/sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./docs/src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./docs/src/sticker/${sender}.webp`)
fs.unlinkSync(`./docs/src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./docs/src/sticker/${sender}.webp`)
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch(e) {
console.log(e)
}
break

case 'togif':
try {
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await zero.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
zero.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: selocont, caption: `${nomeBot}`})
fs.unlinkSync(mediaaa)
} else {
reply(`error`)
}
} catch(e) {
reply (`${say.only.error}`)
}
break 

	case 'toimg': 
	try {
				if (!isQuotedSticker) return reply('responde a un Sticker..')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await zero.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uploadimg(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await sendMediaURL(from, anjj.data.result, 'Pronto')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await zero.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							reply(`gagal`)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							zero.sendMessage(from, buffer, image, { caption:`${nomeBot}`,quoted: selocont })
							fs.unlinkSync(ran)
						}
					})
				}
				} catch(e) {
reply (`${say.only.error}`)
}
break  
 
case 'rename': case 'take':
try {
var namaPackss = contemArgs.substring(0, contemArgs.indexOf('|') - 0)
var authorPackss = contemArgs.substring(contemArgs.lastIndexOf('|') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return reply('letras especiales no son permitidas')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await zero.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
zero.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: selocont})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
} catch(e) {
reply (`${say.only.error}`)
}
break

case 'figutag': case 'stag':

			                          
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.owner}`)
try {
                                        if (!isQuotedSticker) return reply('cadê a figurinha?')

                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

                                        delb = await zero.downloadMediaMessage(boij)

                                        await fs.writeFileSync(`stctagg.webp`, delb)

                                        var group = await zero.groupMetadata(from)

                                        var member = group['participants']

                                        var mem = []

                                        member.map(async adm => {

                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

                                        })

					var itsme = `0@s.whatsapp.net`

					var split = `${body.slice(8)}`

					var selepbot = {

						contextInfo: {

							mentionedJid: mem,

                                                        participant: itsme,                                                                                                                          quotedMessage: {

                                                                extendedTextMessage: {

                                                                text: split,

							   }

					      	      }

					       }

					}

					result = fs.readFileSync(`stctagg.webp`)

                                        zero.sendMessage(from, result, sticker, selepbot)

					await fs.unlinkSync(`stctagg.webp`)
} catch(e) {
reply (`${say.only.error}`)
}
					break

case 'attp':
reply(`use sem caracteres especiais`)
try {
op = body.slice(6)
if (!op) return await reply(`y el texto U.U?`)
var txt = encodeURI(op)
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${op}`)
await zero.sendMessage( from, anu, sticker, {quoted:mek, thumbnail:null})
} catch(e) {
await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
break	  

case 's': case 'f': case 'sticker': case 'st': case 'fig':
if (!isOwner) if (isFiltered(sender)) return reply(`*anti SPAM*\n _espera 15 segundos..._`);

addFilter(sender);
await sleep(6000)
				try {
				 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zero.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${nomeBot}`, authorname)} ${ran} -o ${ran}`, async (error) => {
								
									zero.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: selocont})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zero.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${nomeBot}`, authorname)} ${ran} -o ${ran}`, async (error) => {
									
									zero.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: selocont})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zero.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(`*espere*`)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
							
								exec(`webpmux -set exif ${addMetadata(`${nomeBot}`, authorname)} ${ranw} -o ${ranw}`, async (error) => {
								
									await zero.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: selocont})
									fs.unlinkSync(ranw)
								})
								
							})
						})
					
					} else {
						reply(`Envie uma imagem com o autocolante legenda ou uma etiqueta de imagem já enviada`)
					}

} catch(e) {
console.log('erro : %s')
return reply(`Erro inesperado. Tente novamente ou reveja a sua case`)
}
					
					break		
///

///
case 'f2': case 's2':
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *anti SPAM*\n _aguarde 15 segundos..._`);

addFilter(sender);
await sleep(6000)
try {
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${nomeBot}`)} ${ran} -o ${ran}`, async(error) => {

zero.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: selocont
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${nomeBot}`)} ${ran} -o ${ran}`, async(error) => {

zero.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: selocont
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
reply(`debes responder a una imagen o video maximo 10 segundos`)
}
} catch(e) {
return reply (`Erro inesperado`)
}
break						

//#listas

case 'avpessimo':
await reply (`ಥ_ಥ obrigada pela avaliação`)
mathHelp(7, 1);
await sendMedia(from, goSticker + 'sad' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = '55499157' + '9631@s.whatsapp.net';
texto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★☆☆☆☆
`
await zero.sendMessage(suporte, texto, text)
break

case 'avruim':
await reply (`¯\_(ツ)_/¯ obrigada pela avaliação`)
mathHelp(7, 1);
await sendMedia(from, goSticker + 'sad' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = '55499157' + '9631@s.whatsapp.net';
texto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★☆☆☆
`
await zero.sendMessage(suporte, texto, text)
break

case 'avbom':
await reply (`UwU obrigada pela avaliação`)
mathHelp(14, 1);
await sendMedia(from, goSticker + 'happy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = '55499157' + '9631@s.whatsapp.net';
texto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★★☆☆
`
await zero.sendMessage(suporte, texto, text)
break

case 'avmuitobom':
await reply (`(◠‿◕) obrigada pela avaliação`)
mathHelp(14, 1);
await sendMedia(from, goSticker + 'happy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = '55499157' + '9631@s.whatsapp.net';
texto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★★★☆
`
await zero.sendMessage(suporte, texto, text)
break

case 'avperfeito':
await reply (`ʘ‿ʘ obrigada pela avaliação`)
mathHelp(14, 1);
await sendMedia(from, goSticker + 'happy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = '55499157' + '9631@s.whatsapp.net';
texto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★★★★
`
await zero.sendMessage(suporte, texto, text)
break

case 'testee':
reply(`no disponible en este momento`)
break

/*
case 'mascnomes': case 'mlista':

try {
 listMsg = {

 buttonText: 'LISTA DE NOMES MASCULINOS',

 footerText: `lista com todos os nomes masculinos que o dono do bot pode ser chamado`,

 description: `   `,

 sections: [

                     {

                      "title": `Nombres Disponibles en este momento:`,

 rows: [
                          {
                              "title": "Ainz",
                           },
                           
                           {
                              "title": "Amigo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Baka",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Biel",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Bolsonaro",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Caio",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Cauã",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                        {
                              "title": "Chefe",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Dark",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Davi",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Feio",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Gab",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Gabriel",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                        {
                              "title": "Henrique",
                                    "rowId": `${prefix}` + "kkkjk"
                           },   
                           {
                              "title": "Idiota",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                          {
                              "title": "João",
                                    "rowId": `${prefix}` + "kkkjk"
                           }, 
                        {
                              "title": "Kaneki",
                                    "rowId": `${prefix}` + "kkkjk"
                           },   
                        {
                              "title": "Kazuma",
                                    "rowId": `${prefix}` + "kkkjk"
                           },   
                           {
                              "title": "Leonardo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Lixo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Luiz",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Lucas",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Marcelo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Matheus",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Mestre",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Miguel",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Momonga",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Naruto",
      "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Nóia",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Overlord",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Onii-chan",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Parceiro",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Paulo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Pedro",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Presidente",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Renan",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Ricardo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Sasuke",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Sato",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Seu pervertido!",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Senpai",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Tarado",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Theo",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Uchiha",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                           {
                              "title": "Zé",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                        ]

                     }],

 listType: 1

}

await zero.sendMessage(from, listMsg, MessageType.listMessage,  {contextInfo: { mentionedJid: [sender]}})

} catch(e) {
reply(`Erro ao enviar a lista`)
}
break		
*/

case 'nomes':
await reply (`*debes de escoger uno de los nombres de abajo:*
ainz
akira
amigo
baka
biel
bolsonaro
caio
chefe
dark
davi
henrique
idiota
joao
kaneki
kauan
kazuma
leonardo
lucas
luiz
marcelo
mateus
mestre
miguel
momonga
naruto
noia
oniichan
overlord
parceiro
paulo
pervertido
renan
ricardo
sasuke
sato
senpai
tarado
`)
await reply('sin simbolos especiales!')
break

case 'flista':
try {
 listMsg = {

 buttonText: 'LISTA DE NOMBRES FEMENINOS',

 footerText: `lista de nombres femeninos`,

 description: `   `,

 sections: [

                     {

                      "title": `nombres disponibles:`,

 rows: [
                          {
                              "title": "Alice",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Alicia",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Amiga",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                          {
                              "title": "Ana",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Aqua",
      "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Bloodfallen",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                          {
                              "title": "Chefa",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Dark",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Darkness",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Docinho",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Dona",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Emily",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Evelyn",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Flor",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Gata",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Gabriela",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Irineu, você não sabe nem eu",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Isa",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Isabella",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Jennifer",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                          {
                              "title": "Joana",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Júlia",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Laura",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Levi",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Linda",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Louca",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Luiza",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Maria",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Megumim",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Meliodas",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Mestra",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Milena",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Parceira",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Rosa",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Sabrina",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Sakura",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Sarah",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Shalltear",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Sofia",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Sua pervertida",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Tábua",
      "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Tarada",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Vitória",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Yuka",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Yuki",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Yuri",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                                                     {
                              "title": "Zero Two",
                                    "rowId": `${prefix}` + "kkkjk"
                           },
                        ]                       
                     }],

 listType: 1

}

await zero.sendMessage(from, listMsg, MessageType.listMessage,  {contextInfo: { mentionedJid: [sender]}})

} catch(e) {
reply(`Erro ao enviar a lista`)
}
break

case 'interagir': case 'interação':
reply(`*USE SEM PREFIXO:*

_ auauau

_ bang bang

_ boa noite

_ boa tarde

_ bom dia

_ glub glub

_ interessante

_ mas bah

_ miau

_ risada maléfica

_ te amo bot

_ canta bot

_ bot sua gostosa

_ foda

`)
break

					
				
				default:
if (isCmd) if (!isOwner) {
mathHelp(11, 1);
await sendMedia(from, goSticker + 'baka' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(3000)
await sendMedia(from, goAudio + 'baka.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 }
if (isCmd) if (isOwner) await sendMedia(from, goAudio + 'n existe.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
						
                           }
} catch(e) {
console.log('Error : %s', color(e, 'red'))
return reply(`${say.fatalError}`)
} 
                     
                           
//////***************************"////////////	
if (selectedButton === `outros`){
reply(`*otras opciones:*

*${prefix}avaliar* 
*${prefix}bug* - reportar un bug al creador
*${prefix}criador* - 
*${prefix}learn* - 
`)
}

if (selectedButton == `nsfw on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isNsfw) return reply('*estaba activó*')
nsfw.push(from)
fs.writeFileSync('./docs/interruptor/nsfw.json', JSON.stringify(nsfw))
reply('*NSFW activado*')
} catch(e) {
reply('error')
}
};
if (selectedButton == `nsfw off`) {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isNsfw) return reply('*estaba activado*')
nsfw.splice(from)
fs.writeFileSync('./docs/interruptor/nsfw.json', JSON.stringify(nsfw))
reply('*NSFW desactivado* 😔✊')
} catch(e) {
reply('error')
}
};


if (selectedButton == `antilink on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiLink) return reply('*estaba activado*')
antilink.push(from)
fs.writeFileSync('./docs/interruptor/antilink.json', JSON.stringify(antilink))
reply('*ANTILINK activado*')
} catch(e) {
reply('error')
}
};

if (selectedButton == `antipalavrão on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiPalavrão) return reply('*estaba activado*')
antipalavrão.push(from)
fs.writeFileSync('./docs/interruptor/antipalavrão.json', JSON.stringify(antipalavrão))
reply('*ANTIPALABRAS activado*')
} catch(e) {
reply('error')
}
};

if (selectedButton == 'help'){
reply (`${help}`)
}

if (selectedButton == `antifake on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiFake) return reply(`${isAtivado}`)
antifake.push(from)
fs.writeFileSync('./docs/interruptor/antifake.json', JSON.stringify(antifake))
reply('*ANTIFAKE activado*')
} catch(e) {
reply('error')
}
};

if (selectedButton == `antilink off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiLink) return reply('*estaba desactivado*')
antilink.splice(from)
fs.writeFileSync('./docs/interruptor/antilink.json', JSON.stringify(antilink))
reply('*ANTILINK desactivado*')
} catch(e) {
reply('error')
}
};

if (selectedButton == `antipalavrão off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiPalavrão) return reply('*estaba desactivado*')
antipalavrão.splice(from)
fs.writeFileSync('./docs/interruptor/antipalavrão.json', JSON.stringify(antipalavrão))
reply('*ANTIPALABRAS desactivado* ')
} catch(e) {
reply('error')
}
};

if (selectedButton == `antifake off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiFake) return reply(`${say.isDesativado}`)
antifake.splice(from)
fs.writeFileSync('./docs/interruptor/antifake.json', JSON.stringify(antifake))
reply('*ANTIFAKE desactivado* ')
} catch(e) {
reply('error')
}
};

if (selectedButton == `welkom off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isWelkom) return reply('*📌 Já estava desativado antes*')
welkom.splice(from)
fs.writeFileSync('./docs/interruptor/welkom.json', JSON.stringify(welkom))
reply('*WELKOM desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `mute off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isMute) return reply('*estaba desactivado')
mute.splice(from)
fs.writeFileSync('./docs/interruptor/mute.json', JSON.stringify(mute))
reply('*MUTE desactivado* ')
} catch(e) {
reply('error')
}
};

if (selectedButton == `welkom on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isWelkom) return reply('*estaba desactivado*')
welkom.push(from)
fs.writeFileSync('./docs/interruptor/welkom.json', JSON.stringify(welkom))
reply('*WELKOM activado*')
} catch(e) {
reply('error')
}
};

if (selectedButton == `mute on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isMute) return reply('*estaba desactivado*')
mute.push(from)
fs.writeFileSync('./docs/interruptor/mute.json', JSON.stringify(mute))
reply('*MUTE activado*')
} catch(e) {
reply('error')
}
};
if (selectedButton === 'welcome bot') {
reply (`😳 puedes usar el bot utilizando ${prefix}menu, sabia?`)
	}

// antilink

if (isAntiPalavrão) if (budY.includes("puta") ||(budY.includes("zorra") || (budY.includes("calla zorra") || (budY.includes("bot de mierda") || (budY.includes("que asco de bot") || (budY.includes("muerto") ||  (budY.includes("feoo") || (budY.includes("bot puta") || (budY.includes("calla perra") || (budY.includes("mejor chupame las bolas") || (budY.includes("prostituta") || (budY.includes(" gore") || (budY.includes("calla mierda") || (budY.includes("no te metas zorra") || (budY.includes("mierda") || (budY.includes("fea de mierda") || (budY.includes("que feo") || (budY.includes("calla puta") || (budY.includes("puta")))))))))))))))))))){
if (isOwner) if (isGroupAdmins) {
return reply (`n vou banir você pelo palavrão :3`)
}
reply (`🛑 *palabra ofensiva detectada* 🛑`)
await sleep(5000);
await zero.groupRemove(from, [sender]);
}

if (isAntiLink) if (budy.includes("https://") || (budy.includes("http://") || (budy.includes("//youtube") || (budy.includes("TED ou PIX") || (budy.includes("🤑🤑🤑") || (budy.includes(".com") || (budy.includes("s.kwai") || (budy.includes("www.") || (budy.includes("wa.me") )))))))))  {
if (isWhiteList) return
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (isOwner) return reply (`eres mi creador no puedo hacerte eso :3`);
if (isGroupAdmins) return reply (`eres admin no puedo eliminarte`)
try {
await reply(`bye`)
await sleep(500)
await zero.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Error`)
}
} catch(e) {
reply('error')
}
} else if (isImage && imageCaption) {
if (imageCaption.includes('https://') || (imageCaption.includes('http://') || (imageCaption.includes('TED ou PIX') || (imageCaption.includes('wa.me') || (imageCaption.includes('www.') || (imageCaption.includes('s.kwai') || (imageCaption.includes('.com')))))))) {
if (isWhiteList) return
if (isOwner) return reply (`eres mi creador no te dare ban :3`);
if (isGroupAdmins) return reply (`eras admin`)
try {
await reply(`bye`)
await sleep(500)
await zero.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Error`)
}
}
}
if (isVideo && videoCaption) {
if (videoCaption.includes('https://') || (videoCaption.includes('http://') || (videoCaption.includes('TED ou PIX') || (videoCaption.includes('wa.me') || (videoCaption.includes('www.') || (videoCaption.includes('s.kwai') || (videoCaption.includes('.com')))))))) {
if (isWhiteList) return
if (isOwner) return reply (`eres mi dueño jamas te eliminaría :3`);
if (isGroupAdmins) return reply (`eras admin`);
try {
await reply(`cagaste xd`)
await sleep(500)
await zero.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Error`)
}
}
}

	
  
                           
		} catch (e) {
					return console.log('Error : %s', color(e, 'red'))
		
		}
	})
	
	
	zero.on('group-participants-update', async (anu) => {
		
	if (blacklist.includes(anu.participants[0])){
	const mdata = await zero.groupMetadata(anu.jid)
	num = anu.participants[0]  
await zero.sendMessage(mdata.id, 'removido por lista negra', MessageType.text)
return await zero.groupRemove(mdata.id, [num])			
}
if(antifake.includes(anu.jid)) {
	const mdata = await zero.groupMetadata(anu.jid)
			if (anu.action == 'add'){		
				num = anu.participants[0]            		
				try {
if (whitelist.includes(anu.participants[0])){
	const mdata = await zero.groupMetadata(anu.jid)
	num = anu.participants[0]  
return await zero.sendMessage(mdata.id, 'salvado', MessageType.text)
		
}				
				if(!num.split('@')[0].startsWith(55)){
				if(num.includes(numeroBot)) return
						//if (!zero.user.jid) return
				zero.sendMessage(mdata.id, '👮🏻‍♀️Números fake aqui no" 👮🏻‍♀️️', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('Ban...','red'))
			return zero.groupRemove(mdata.id, [num])
					}, )
				}
		} catch(e) {
		return reply (`${say.erro}`)
		}	}
		}
		if (!welkom.includes(anu.jid)) return;
		try {
			const mdata = await zero.groupMetadata(anu.jid);
			console.log(anu);
			if (anu.action == 'add') {
		//	if (zero.user.jid) return
				num = anu.participants[0];
		
				/*
				try {
					ppimg = await zero.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
				}
// #welkom		
let buff = await getBuffer(ppimg)		*/



txtt =` `
function mathHelp (valor1, valor2) {
valorMath = Math.floor(Math.random() * (valor1 - valor2) + valor2);
mathResult = valorMath;
resultMath = valorMath
 }
mathHelp(8, 1);

               buttons = [{buttonId:`welcome bot`, 
               buttonText:{displayText: `Ok ${nomeBot} ☘️`},type:1},
               
               ]

const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `MIEMBRO NUEVO`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL; MIEMBRO NUEVO,;;;\nFN:'MIEMBRO NUEVO',\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./edit/media/imagem/selos/1.jpg`)
        }}}

               imageMsg = (await zero.prepareMessageMedia(fs.readFileSync(`./edit/media/imagem/${mathResult}.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./edit/media/imagem/momonga.jpeg`)})).imageMessage

readmores = "";
               buttonsMessage = {
               contentText: `Olá ${num.split('@')[0]}`,
                 footerText: `Bienvenid@ *${mdata.subject}*\n\n*lee las reglas!*${readmores}\n\n${mdata.desc}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await zero.prepareMessageFromContent(mdata.id,{buttonsMessage},{quoted: selocont})
               zero.relayWAMessage(prep)
             
				
			} else if (anu.action == 'remove') {
				num = anu.participants[0];
				try {
					ppimg = await zero.getProfilePicture(`${num.split('@')[0]}@c.us`);
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
				}
				teks = `Bye @${num.split('@')[0]}👋`;
				let buff = await getBuffer(ppimg)
				return zero.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}, thumbnail:null});
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'));
		}
	})

	zero.on('CB:Blocklist', json => {
            if (blocked.length > 2) return;
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'));
	    }
	})

}
starts()
