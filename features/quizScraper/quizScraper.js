const { WebClient } = require('@slack/web-api')

require('dotenv').config()

const getQuizUrl = require('./lib/getQuizUrl')
const quizIsMorning = require('./lib/quizIsMorning')
const quizIsAfternoon = require('./lib/quizIsAfternoon')
const quizBlock =  require('./blocks/quiz')
const {
    getAmOrPm,
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
        const time = getAmOrPm()
        
        console.log('Time: ', time)
        console.log('Is morning?: ', isMorning(time))
        console.log('Is afternoon?: ', isAfternoon(time))

        if(isMorning(time) && quizIsMorning(url)) {
            isCorrectQuiz = true
            type = 'Morning'
        }

        if(isAfternoon(time) && quizIsAfternoon(url)) {
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