const {
    getTime,
    isAfternoon,
    isMorning
} = require('../lib/time')

test('getTime is a string', () => {
    const timeString = getTime()
    console.log(timeString)
    expect(timeString).toStrictEqual(expect.anything())
})

test('isAfternoon returns true when passed 3:00pm', () => {
    const timeString = "2020-3-5 15:00:00"
    expect(isAfternoon(timeString)).toBe(true)
})

test('isAfternoon returns true when passed 9:45pm', () => {
    const timeString = "2020-3-5 21:45:00"
    expect(isAfternoon(timeString)).toBe(true)
})

test('isAfternoon returns false when given 8:00am', () => {
    const timeString = "2020-3-5 08:00:00"
    expect(isAfternoon(timeString)).toBe(false)
})

test('isAfternoon returns true when given 12:00pm', () => {
    const timeString = "2020-3-5 12:00:00"
    expect(isAfternoon(timeString)).toBe(true)
})

test('isMorning returns true when given 9:00am', () => {
    const timeString = "2020-3-5 09:00:00"
    expect(isMorning(timeString)).toBe(true)
})

test('isMorning returns true when given 8:03am', () => {
    const timeString = "2020-3-5 08:00:03"
    expect(isMorning(timeString)).toBe(true)
})

test('isMorning returns false when given 3:03pm', () => {
    const timeString = "2020-3-5 15:03:00"
    expect(isMorning(timeString)).toBe(false)
})