const quizIsMorning = require('../lib/quizIsMorning');

test('when a morning quiz is passed it returns true', () => {
    const url ='https://stuff.co.nz/national/quizzes/119992456/quiz-morning-trivia-challenge-march-5-2020'
    expect(quizIsMorning(url)).toBe(true);
});

test('when an afternoon quiz is passed it returns false', () => {
    const url ='https://stuff.co.nz/national/quizzes/119992456/quiz-afternoon-trivia-challenge-march-5-2020'
    expect(quizIsMorning(url)).toBe(false);
});