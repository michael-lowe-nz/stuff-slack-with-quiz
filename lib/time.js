const moment = require('moment-timezone')

const getAmOrPm = (time = null) => {
    console.log('New date:', new Date())
    console.log('Moment:', moment(new Date(time)).tz('Pacific/Auckland').toLocaleString())
    return moment(new Date(time)).tz('Pacific/Auckland').format('A')
}

const isAfternoon  = time => time === 'PM'

const isMorning = time => time === 'AM'

module.exports = {
    isAfternoon,
    isMorning,
    getAmOrPm
}