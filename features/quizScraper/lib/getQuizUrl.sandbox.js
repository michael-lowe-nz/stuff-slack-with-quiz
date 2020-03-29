const getQuizUrl = require('./getQuizUrl')

const main = async () => {
    const url = await getQuizUrl()
    console.log(url)
}

main()