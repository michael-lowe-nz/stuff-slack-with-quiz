const getQuizUrl = require('./getQuizUrl')

const main = async () => {
    const url = await getQuizUrl({
        time: new Date.now()
    })
    console.log(url)
}

main()