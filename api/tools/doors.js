const getRandomInt = require('./getRandomInt');

function doors() {
    let allDoors = [];
    const randomDoor = getRandomInt(1,3);
    for (let i = 0; i < 3; i++) {
        const doorNumber = i + 1;
        allDoors.push({
            'number': doorNumber,
            'open': false,
            'car': randomDoor === doorNumber ? true : false
        })
    }
    return allDoors;
}

module.exports = doors;