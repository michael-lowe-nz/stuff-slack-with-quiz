const getQuizUrl = require('../features/quizScraper/lib/getQuizUrl')

test('when quiz page is scraped it returns a valid url', async () => {
    expect.assertions(1);
    const url = await getQuizUrl()
    expect(url).toStrictEqual(expect.stringContaining('https://'))
});