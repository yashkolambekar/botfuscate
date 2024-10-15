require('dotenv').config()

const constructUrl = (ending : String) : String => {
    const botToken = process.env.BOT_TOKEN
    const apiUrl = process.env.API_URL
    const url = `${apiUrl}${botToken}/${ending}`;
    return url;
}

export {constructUrl};