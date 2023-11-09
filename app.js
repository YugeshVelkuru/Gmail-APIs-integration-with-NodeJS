const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '388502867406-8fg7j849uavpmmsdpbl8d5h7tfltb1kf.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URL = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04rWQl_EAn3w_CgYIARAAGAQSNgF-L9IrpalL0I9b1TQJEYrAu93IfCS2D-X88lqga5oNzQF1yp0HYvAVWsnqjfSUnAagao2QHg'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})


 async function sendMail(){
    try{
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'yugeshbunny@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken

            }
        })

        const mailOptions = {
            from: 'yugeshbunny@gmail.com0',
            to: 'velkuruyugesh@gmail.com',
            subject: 'email through nodejs',
            text: 'hi this mail is sent by yugesh through nodejs.'
        };

        const result = await transport.sendMail(mailOptions)
        return result

    }catch (error){
        return error

    }
}

sendMail().then(result=>console.log('email sent',result))
.catch((error)=> console.log(error.message));