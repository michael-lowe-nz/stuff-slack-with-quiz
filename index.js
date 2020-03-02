const cheerio = require('cheerio')
const request = require('axios')

require('dotenv').config()
const baseUrl = 'https://stuff.co.nz'

const { WebClient } = require('@slack/web-api')
const web = new WebClient(process.env.TOKEN)

exports.handler = async (event, context, callback) => {
    try {
        const page = await request.get('https://stuff.co.nz/national/quizzes')
        const $ = cheerio.load(page.data)
        const quizzes = $('.display-asset h3 a')
        const currentQuizUrl = quizzes.first().attr('href')
        const fullUrl = `${baseUrl}${currentQuizUrl}`
        return await web.chat.postMessage({
            channel: '#quiz-test',
            text: fullUrl,
        });
    } catch (e) {
        throw e
    }
}