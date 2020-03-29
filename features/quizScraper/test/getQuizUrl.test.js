const getQuizUrl = require('../lib/getQuizUrl')

/**
 * This is an ingegration test,
 * that actually hits stuff to see if the page structure has changed at all.
 * Therefore we must increase the timeout to longer thant the deault 5s.
 */
test('when quiz page is scraped it returns a valid url', async () => {
    jest.setTimeout(10000)
    expect.assertions(1);
    const url = await getQuizUrl()
    expect(url).toStrictEqual(expect.stringContaining('https://'))
});