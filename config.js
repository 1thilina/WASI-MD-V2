//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkwyeTE0UzgxaUVuWUtsSTBJcVQ5eTZKTnQweWtBZEdlS25yVjFWeXhVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXRieWlrS3MzcGhpQ3M2MFhRWDJDYnJ4Um1UcmtYTllNUGxScGp4ZjUwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRXpZZG80TE9CUlB2N3duNTRCQXFuZkJzbmU0M0k1WmpwSzVLaUoyS21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYb1R4VlRnZ3BaTCttWDUxQnlaUjc5Y0lmTmZLRzRoTG05WXZuL2dQMndRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPbExtRnZFR1MvbGFGTDRkSEUvOTVOejhiQkdoQ0tQN2RlZ0FXeTFPblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im41Tk90bC9mdzhqZVpCVnNuOU5aNXlpSXg4UlFEZ2RyQ0FJeTM0NktTRUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0YvVTY0Q0ZsTzhQdGM1UHdFamNzeG5xaUdPOE1aNWZZRFFLaWdhRWZYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkVoOGw3VG83YTBYdEVhcnJYUlZlVWdkallBTEJYalZJSHRVOXdESkgwWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJtMjM2akg5Q0RmZmFvUytPTzFrWUdGcjVXclJWWW1NNEFIOVo4NUg3b1NzSVB1U2lsSzRLUEJodmJTSHdFSno3c3htVFozekVnQi9lVktKSWNKQmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJablI1dW9Gb3AyRjVuUVE4QWNIWGZiUTl1bG1Ka3ZqRkpDOHl2c2ZHdXFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3NDcyNDE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkwQ0JGNEFCOTBFN0E0RTNEM0Q3OURGQ0U5RkY2Mzg4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjExNzYwMDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3NDcyNDE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZDMDMwQzlGQTJDOUJENDVFQjI4RDE5NjJGRUUzMUNGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjExNzYwMTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3NDcyNDE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlCNjkxRjAzOEIyNUUyQTlGNjA3REEyQTEyRjQ1MDU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjExNzYwMTF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3NDcyNDE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQwMTQ1RTUxMTQxODZCRThCOEExQUUyNTdCRTlBRDcwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjExNzYwMTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJfbnYtODZkUzNtWWx1Q2JNMWItbUEiLCJwaG9uZUlkIjoiMjIxM2ZjYjktNmU4ZC00OGFiLWFlY2UtNTNjNjQ1NDg0NzY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR4TnJCa25tL2ZqYXVZREIxV0FBNmFhb0Zucz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENjlOV240QmtRY0RaRGx3a3g2V29ObTBxNjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzM5RlhRVlAiLCJtZSI6eyJpZCI6Ijk0NzE3NDcyNDE4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhpbGFf8J+SlCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHVVbE1RRkVMcWYzTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiLzhXN1psdlRldTFBTnl6Tm1MQ2pLcjhrdElRRzZvblVYU3JUSE9YVFAxST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRGE0dGVhbkFzcFRPT2dGL0xnOENDTGttbGlpTmI5aCtZRTRiTEhwWUs3SlZHalE2OUdXYmpwMkJGaG0ybTFNOFBtbTNSWU1LdnhMRjN6aWNFMzdLQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Im1rTkJ3L2lWRlh2ZVJ2MklXODJCOTFYenRvWFZjRXFMMXFNTTZhNjRFUWRrZVVEK0V5d1o2eU5iKy9WZ1V2WFp6bksyQlB1Y0xULyt3aGdRUnl3WmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTc0NzI0MTg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmL0Z1MlpiMDNydFFEY3N6Wml3b3lxL0pMU0VCdXFKMUYwcTB4emwwejlTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMTc2MDA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9aTyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
