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
const moment = require('moment-timezone')


const web = new WebClient(process.env.SLACK_TOKEN)


const maxScore = 15

/** Quiz Scrape Times **/
const afternoonTime = '14' // e.g. 14 for 2:00pm
const morningTime = '08' // e.g 08 for 8:00am

exports.handler = async (event, context, callback) => {
    try {
        console.log('Event', event)
        console.log('Time:', event.time);
        console.log('Current NZ Hour:', moment(event.time).tz('Pacific/Auckland').format('HH'))
        const currentHour = moment(event.time).tz('Pacific/Auckland').format('HH')
        
        let type
        type = currentHour === afternoonTime ? 'afternoon' : null
        if(!type) {
            console.log('Current Hour', currentHour)
            console.log('Eval: ', currentHour === morningTime ? 'morning' : null)
            console.log('Morning Time:', morningTime)
            type = currentHour === morningTime ? 'morning' : null
        }
        if (!type) {
            console.log("Not the hour to scrape :(")
            return web.chat.postMessage({
                channel: `#${process.env.SLACK_CHANNEL}`,
                text: 'I didnt go look for it'
            });
            return
        }
        
        const url = await getQuizUrl()
        const isCorrectQuiz = (quizIsMorning(url) && currentHour === morningTime || quizIsAfternoon(url) && currentHour === afternoonTime)
        if(!isCorrectQuiz) {
            throw new Error({
                message: 'Incorrect quiz',
                isAfternoon: currentHour === afternoonTime,
                isMorning: currentHour === morningTime
            })
        }
        return web.chat.postMessage({
            channel: `#${process.env.SLACK_CHANNEL}`,
            blocks: quizBlock(url, maxScore, isCorrectQuiz, type)
        });
    } catch (e) {
        throw e
    }
}