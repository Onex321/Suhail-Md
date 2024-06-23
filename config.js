const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038210801";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmMmlZc2sxSVcyMXYxNTVxZCtWZE9iSjRIUXZ2anlLNjAzU1ZOY3RhOVh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrOGhsNnhhRFRmMm1DTDVucXB2TDNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkMmU2MjdjLTYxZjAtNDA4Mi05NGRmLTljMTBhMWQ3ZTg2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAxODQsXG4gICAgICA4NixcbiAgICAgIDgsXG4gICAgICAzLFxuICAgICAgMjU1LFxuICAgICAgMTksXG4gICAgICAxNDksXG4gICAgICAxMDAsXG4gICAgICAyMTUsXG4gICAgICAxMTUsXG4gICAgICAxNzMsXG4gICAgICAzLFxuICAgICAgMTIzLFxuICAgICAgMTM3LFxuICAgICAgMTk2LFxuICAgICAgMTE5LFxuICAgICAgMjAwLFxuICAgICAgNDEsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgNzYsXG4gICAgICAyMzMsXG4gICAgICAxNDcsXG4gICAgICA1MSxcbiAgICAgIDE3OSxcbiAgICAgIDE3MCxcbiAgICAgIDI0MixcbiAgICAgIDU4LFxuICAgICAgMTU3LFxuICAgICAgMTY0LFxuICAgICAgNTIsXG4gICAgICAxMzMsXG4gICAgICAyMTQsXG4gICAgICAyMjEsXG4gICAgICAxNTMsXG4gICAgICAxMDgsXG4gICAgICAxNTEsXG4gICAgICAxNjMsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5WTFMTTg0MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzODIxMDgwMToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9ueWVrYSBUcmFkaW5nXCIsXG4gICAgXCJsaWRcIjogXCIxOTAxNTk3NDQxNTk4MjM6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJlditJRUVMdXIzN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxOFRoekU5bm4wdE5TUW9GWTJ0RWRVMzBjek9NaTcva3c1MGlrbnAzeGpRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhwRGpiaEhDSHBuV1pQdWY0TGtDZElPRlJmVnpySU0wRHM1eWtNSndOZUNKaENzd1NVUmRIUkh2L25vTFhidTU3SEJMTXZwbTIwdXh2ZmRNN1JrcURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVkYjRSMzRMcEdkcTRDV3dZRk9acFBIeVdFa0k4TUxsdFZMbDFrNmp1UjUxRFpvRERyTGljSDlYbTArQXBVUmF3d3ZCc0tHNGtzMmRxZEI0OE9vK0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzgyMTA4MDE6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTEyOTUzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0= "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
