const getRandomInt = require('./getRandomInt');

test('Can return random integer in range 1-3', () => {
    const random = getRandomInt(1,3);
    expect(Number.isInteger(random)).toBeTruthy();
    expect(random).toBeGreaterThan(0);
    expect(random).toBeLessThan(4);
})