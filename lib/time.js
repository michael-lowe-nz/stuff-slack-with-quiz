const moment = require('moment-timezone')

const getAmOrPm = (time = null) => {
    console.log(time || new Date())
    return moment(new Date(time)).tz('Pacific/Auckland').format('A')
}

const isAfternoon  = time => time === 'PM'

const isMorning = time => time === 'AM'

module.exports = {
    isAfternoon,
    isMorning,
    getAmOrPm
}