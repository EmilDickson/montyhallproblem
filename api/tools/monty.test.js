const monty = require('./monty');

const resultsSwitch = monty(43, true);
const resultsNoSwitch = monty(43, false);

test('The simulation runs the correct amount of times', () => {
    expect(resultsSwitch.games.length).toBe(43);
    expect(resultsSwitch.simulations).toBe(43);
});

test('The number of times the car was won and a goat was won sum up to the total amount of simulations', () => {
    expect(resultsSwitch.timesWonCar + resultsSwitch.timesWonGoat).toBe(43);
});

test('All games are switched according to input', () => {
    for (let i = 0; i < 43; i++) {
        expect(resultsSwitch.games[i].switchDoor).toBeTruthy();
        expect(resultsNoSwitch.games[i].switchDoor).toBeFalsy();
    }
});