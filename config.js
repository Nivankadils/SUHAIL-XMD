const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789215779";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_27_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhSXg5SEZzTlhkUXgydUJJY2MvaThtcHNUR2JQcVB0dW5CNlRQNHd0aVpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5QkxtRWhTQ1NPLVc3VWljVldZVTh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEwZmRhY2NiLTNiMzItNGIwMS1hMjZmLTE3OWQxOTM4MjFhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMzAsXG4gICAgICAzNSxcbiAgICAgIDE4OCxcbiAgICAgIDM3LFxuICAgICAgMTc3LFxuICAgICAgMjA2LFxuICAgICAgOTcsXG4gICAgICAyOCxcbiAgICAgIDE4MixcbiAgICAgIDE5MixcbiAgICAgIDMyLFxuICAgICAgMTQsXG4gICAgICAxODIsXG4gICAgICAxMCxcbiAgICAgIDE3NixcbiAgICAgIDE1NCxcbiAgICAgIDEyOSxcbiAgICAgIDI0OCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDI0MCxcbiAgICAgIDIwNixcbiAgICAgIDIzNCxcbiAgICAgIDE5NCxcbiAgICAgIDU3LFxuICAgICAgMTY5LFxuICAgICAgOTksXG4gICAgICAxNTIsXG4gICAgICAyMTksXG4gICAgICAxODksXG4gICAgICAyMjMsXG4gICAgICA5MixcbiAgICAgIDIxNixcbiAgICAgIDQ0LFxuICAgICAgNzcsXG4gICAgICA5NyxcbiAgICAgIDQ0LFxuICAgICAgMTE5LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFIODJGTTlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4OTIxNTc3OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzU4MDUzMTE5MTk0NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDeCtMRUNFTnFHL2JrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVRBN0J5M09RV3VKcExKc2lPZzNJUmlxUDN1T3V5a29EeE1FTHJOcFcxZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsVnZ0M09Nc1FoN0trUDArNGlFc3FNS1BEdDI3ZkxBbTV6TTBnMzM0TCtObEkyQ2dWdy9kaTRlQWpPWGhRRmhGT0hxTFNGb2JJVU1qWEtGTnc4aHRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDTHJYSHhMU3lOWmJsRi9aYTJDSmlaTE5xK1JzZTByL1RBS3FlWnJFL2o5aDlMOTFhWVIyTENiSXdoOVFqUGh5MDJXbHdkVG8xaDB0M1NiMEx4aHhqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTIxNTc3OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxOTkyNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIeVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh5VS5qc29uIjogIntcImtleURhdGFcIjpcImEzZHZCc085U3NuRWRIeEtGbnRCWjR6VG9Zd0dXNnFiQWNOK3d5ZlkwdzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQxNjAzNzEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIxODgxMjI4NTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nivanka-XMD",
  ownername:process.env.OWNER_NAME|| "Nivanka-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
