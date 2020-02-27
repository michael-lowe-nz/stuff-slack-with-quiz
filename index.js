const cheerio = require('cheerio')
const request = require('axios')

const baseUrl = 'https://stuff.co.nz'
const hookUrl = process.env.SLACK_HOOK_URL

exports.handler = async (event, context, callback) => {
    try {
        const page = await request.get('https://stuff.co.nz/national/quizzes')
        const $ = cheerio.load(page.data)
        const quizzes = $('.display-asset h3 a')
        const currentQuizUrl = quizzes.first().attr('href')
        const fullUrl = `${baseUrl}${currentQuizUrl}`
        return await request.post(hookUrl, {text: fullUrl})
        
    } catch(e) {
        throw e
    }
}