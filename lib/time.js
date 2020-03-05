const getTime = () => new Date().toLocaleString({timeZone: "Pacific/Auckland"})

const isAfternoon  = time => getHour(time) >= 12

const isMorning = time => getHour(time) < 12

const getHour = time => parseInt(time.split(' ')[1].substr(0,2))

module.exports = {
    getTime,
    isAfternoon,
    isMorning
}