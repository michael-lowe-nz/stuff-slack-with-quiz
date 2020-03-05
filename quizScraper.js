const { WebClient } = require('@slack/web-api')

require('dotenv').config()
const getQuizUrl = require('./lib/getQuizUrl')
const quizIsMorning = require('./lib/quizIsMorning')
const quizIsAfternoon = require('./lib/quizIsAfternoon')

const web = new WebClient(process.env.SLACK_TOKEN)

const quizBlock =  require('./blocks/quiz')

const maxScore = 15

exports.handler = async (event, context, callback) => {
    try {
        const url = await getQuizUrl()
        const timeString = new Date().toLocaleString({timeZone: "Pacific/Auckland"})

        console.log('Current Hour:', currentHour)

        /** Afternoon Quiz */
        if(currentHour === 2) {
            console.log('Afternoon Quiz')
        }

        if(currentHour === 20) {
            console.log('Morning Quiz')
        }

        return web.chat.postMessage({
            channel: '#quiz-test',
            text: url,
            blocks: quizBlock(url, maxScore)
        });
    } catch (e) {
        throw e
    }
}