const {
    isAfternoon,
    isMorning,
    getAmOrPm
} = require('../lib/time')

test('getTime is a string', () => {
    const timeString = getAmOrPm()
    expect(timeString).toStrictEqual(expect.anything())
})

test('isAfternoon returns true when passed 3:00pm', () => {
    const timeString = "2020-3-5 15:00:00"
    const time = getAmOrPm(timeString)
    console.log(time)
    expect(isAfternoon(time)).toBe(true)
})

test('isAfternoon returns false when given 8:00am', () => {
    const timeString = "2020-3-5 08:00:00"
    const time = getAmOrPm(timeString)
    expect(isAfternoon(time)).toBe(false)
})

test('isMorning returns true when given 9:00am', () => {
    const timeString = "2020-3-5 09:00:00"
    const time = getAmOrPm(timeString)
    expect(isMorning(time)).toBe(true)
})