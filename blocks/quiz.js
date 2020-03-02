const emojiMap = {
    '0': ':face_with_symbols_on_mouth:',
    '15': ':raised_hands:'
}

module.exports = (url, maxScore) => {
    const buttons = Array.from(Array(maxScore + 1)).map((item, index) => ({
        type: "button",
        text: {
            type: "plain_text",
            text: `${maxScore - index} ${emojiMap[maxScore - index] ? emojiMap[maxScore - index] : ''}`,
            emoji: true
        },
        value: `${index}`
    }))
    return [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `*Kia Ora!*\n${url}\n*Please record your score below!*`
            },
        },
        {
            type: "divider"
        },
        {
            type: "actions",
            elements: buttons
        },

    ]
}