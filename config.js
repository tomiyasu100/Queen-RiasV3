require('dotenv').config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || '.', // Command prefix
    ownerName: process.env.OWNER_NAME || 'Toxxic', // Owner name
    ownerNumber: process.env.OWNER_NUMBER || '2348061212348', // Your WhatsApp number
    mode: process.env.MODE || 'public', // Bot mode: 'public' or 'private'
    region: process.env.REGION || 'Nigeria', // Region
    botName: process.env.BOT_NAME || 'Rias Gremory V3', // Bot name
    exifPack: process.env.EXIF_PACK || 'RIAS V3 LOVES', // Sticker pack name
    exifAuthor: process.env.EXIF_AUTHOR || 'Toxxic', // Author of the sticker pack
    timeZone: process.env.TIME_ZONE || 'Africa/Lagos', // Time zone
    presenceStatus: process.env.PRESENCE_STATUS || 'recording', // Bot presence status
    autoRead: process.env.AUTO_READ === 'true', // Auto-read messages (true or false)
    autoViewStatus: process.env.AUTO_VIEW_STATUS === 'true', // Auto-view statuses (true or false)
    autoReact: process.env.AUTO_REACT === 'true', // Auto-react (true or false)
    sessionId: process.env.SESSION_ID || ''// Add Your Session ID here
};
