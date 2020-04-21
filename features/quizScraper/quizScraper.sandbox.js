const scrape = require('./quizScraper')

const main = async () => {
    await scrape.handler({
        time: new Date()
    })
}

main()