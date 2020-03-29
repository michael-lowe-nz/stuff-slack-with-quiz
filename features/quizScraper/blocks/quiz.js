const emojiMap = {
    '0': ':face_with_symbols_on_mouth:',
    '15': ':raised_hands:'
}

const disappointmentEmoji = [
    ':face_with_symbols_on_mouth:',
    ':thumbsdown:',
    ':poop:',
    ':expressionless:',
    ':disappointed:',
    ':flushed:',
    ':dizzy_face:',
    ':rage:',
    ':unamused:',
]

const disappointmentText = [
    'Hmmmmm, seems like the next quiz isn\'t out yet...',
    'No luck, check back soon!',
    'Well that was embarassing, seems like the newest quiz isn\'t out yet...',
    'Dang it! The next quiz isn\'t quite ready yet...'
]

const actionText = [
    'Take me there!',
    'Let\'s Go!!!!!',
    'Let\'s Get Quizzzinnn!',
    'Let me at em!',
]

module.exports = (url, maxScore, isCorrectQuiz, type) => {
    const buttons = Array.from(Array(maxScore + 1)).map((item, index) => ({
        type: "button",
        text: {
            type: "plain_text",
            text: `${maxScore - index} ${emojiMap[maxScore - index] ? emojiMap[maxScore - index] : ''}`,
            emoji: true
        },
        value: `${index}`
    }))
    if (isCorrectQuiz) {
        return [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*${type} Trivia Challenge*\n<${url}|${actionText[Math.floor(Math.random() * actionText.length)]}>`
                },
            },
            {
                type: "divider"
            },
            // {
            //     type: "actions",
            //     elements: buttons
            // },
    
        ]
    }
    /**
     * If the quiz is not the correct one for the time of day
     */
    return [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `${disappointmentEmoji[Math.floor(Math.random() * disappointmentEmoji.length)]} ${disappointmentText[Math.floor(Math.random() * disappointmentText.length)]}`
            },
        }
    ]
}