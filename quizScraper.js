const { WebClient } = require('@slack/web-api')

require('dotenv').config()
const getQuizUrl = require('./lib/getQuizUrl')

const web = new WebClient(process.env.SLACK_TOKEN)

exports.handler = async (event, context, callback) => {
    try {
        const url = await getQuizUrl()
        console.log("URL:", url)
        return await web.chat.postMessage({
            channel: '#quiz-test',
            text: url,
        });
    } catch (e) {
        throw e
    }
}