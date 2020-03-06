const { WebClient } = require('@slack/web-api')

require('dotenv').config()

const getQuizUrl = require('./lib/getQuizUrl')
const quizIsMorning = require('./lib/quizIsMorning')
const quizIsAfternoon = require('./lib/quizIsAfternoon')
const quizBlock =  require('./blocks/quiz')
const {
    getTime,
    isAfternoon,
    isMorning
} = require('./lib/time')

const web = new WebClient(process.env.SLACK_TOKEN)


const maxScore = 15

exports.handler = async (event, context, callback) => {
    try {
        const url = await getQuizUrl()
        const timeString = new Date().toLocaleString({timeZone: "Pacific/Auckland"})

        /** Afternoon Quiz */
        if(isMorning(getTime())) {
            console.log('Morning Quiz')
        }

        if(isAfternoon(getTime())) {
            console.log('Afternoon Quiz')
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