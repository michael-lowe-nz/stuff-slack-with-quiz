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

        let isCorrectQuiz = false
        let type

        if(isMorning(getTime()) && quizIsMorning(url)) {
            isCorrectQuiz = true
            type = 'Morning'
        }

        if(isAfternoon(getTime()) && quizIsAfternoon(url)) {
            isCorrectQuiz = true
            type = 'Afternoon'
        }

        return web.chat.postMessage({
            channel: `#${process.env.SLACK_CHANNEL}`,
            blocks: quizBlock(url, maxScore, isCorrectQuiz, type)
        });
    } catch (e) {
        throw e
    }
}