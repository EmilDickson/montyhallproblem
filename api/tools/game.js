const getRandomInt = require('./getRandomInt');
const doors = require('./doors');

function game(switchedGame, allDoors = doors(), randomDoor = getRandomInt(1,3)) {
    const selectedIndex = randomDoor - 1;
    let nonSelectedIndexes = [0, 1, 2];
    nonSelectedIndexes.splice(selectedIndex, 1)
    let newGame = {
        'selectedDoor': randomDoor,
        'doors': allDoors,
        'switchDoor': switchedGame,
        'win': false,
    }
    if (!allDoors[nonSelectedIndexes[0]].car && !allDoors[nonSelectedIndexes[1]].car) {
        allDoors[nonSelectedIndexes[getRandomInt(0,1)]].open = true;
    } else if (allDoors[nonSelectedIndexes[0]].car) {
        allDoors[nonSelectedIndexes[1]].open = true;
        nonSelectedIndexes.splice(1, 1);
    } else if (allDoors[nonSelectedIndexes[1]].car) {
        allDoors[nonSelectedIndexes[0]].open = true;
        nonSelectedIndexes.splice(0, 1);
    }
    if (switchedGame) {
        if (allDoors[nonSelectedIndexes[0]].car) {
            newGame.win = true;
        }
    } else {
        if (allDoors[selectedIndex].car) {
            newGame.win = true;
        }
    }
    return newGame;
}

module.exports = game;