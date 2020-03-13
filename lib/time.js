const moment = require('moment-timezone')

const getAmOrPm = (time = null) => {
    if (time) {
        return moment(new Date(time)).tz('Pacific/Auckland').format('A')
    } else {
        return moment(new Date()).tz('Pacific/Auckland').format('A')
    }
}

const isAfternoon  = time => time === 'PM'

const isMorning = time => time === 'AM'

module.exports = {
    isAfternoon,
    isMorning,
    getAmOrPm
}