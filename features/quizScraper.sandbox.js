const scrape = require('./quizScraper')

const main = async () => {
    await scrape.handler()
}

main()