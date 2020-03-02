const cheerio = require('cheerio')
const request = require('axios')

const baseUrl = 'https://stuff.co.nz'

module.exports = async () => {
    const page = await request.get(`${baseUrl}/national/quizzes`)
    const $ = cheerio.load(page.data)
    const quizzes = $('.display-asset h3 a')
    const mostRecentQuiz = quizzes.first().attr('href')
    return `${baseUrl}${mostRecentQuiz}`
}