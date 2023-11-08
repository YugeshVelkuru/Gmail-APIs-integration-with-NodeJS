require('dotenv');

const auth = {
    type: 'OAuth2',
    user: 'yugeshbunny@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientsecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,

}


const mailOption = {
    from: 'yugeshbunny@gmail.com',
    to: 'velkuruyugesh@gmail.com',
    subject: 'Gmail API using nodejs',

}

module.exports = {
    auth,
    mailOption
}