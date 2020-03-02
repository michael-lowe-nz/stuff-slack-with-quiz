const { WebClient } = require('@slack/web-api')

require('dotenv').config()
const getQuizUrl = require('./lib/getQuizUrl')

const web = new WebClient(process.env.SLACK_TOKEN)

const quizBlock =  require('./blocks/quiz')

const maxScore = 15

exports.handler = async (event, context, callback) => {
    try {
        const url = await getQuizUrl()
        return await web.chat.postMessage({
            channel: '#quiz-test',
            text: url,
            blocks: quizBlock(url, 15)
        });
    } catch (e) {
        throw e
    }
}