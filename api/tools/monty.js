const game = require('./game');

function monty(simulations, switchDoor) {
    let results = {
        'simulations': 0,
        'games': [],
        'timesWonCar': 0,
        'timesWonGoat': 0,
        'switchDoor': switchDoor
    };
    for (let i = 0; i < simulations; i++) {
        const currentGame = game(switchDoor);
        results.simulations += 1;
        if (currentGame.win) {
            results.timesWonCar += 1;
        } else {
            results.timesWonGoat += 1;
        }
        results.games.push(currentGame);
    }
    return results;
}

module.exports = monty;