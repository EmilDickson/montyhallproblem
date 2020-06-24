const doors = require('./doors');

test('Returns 3 doors', () => {
    expect(doors().length).toBe(3)
});

test('Exactly one door has the car', () => {
    const testDoors = doors();
    let numberOfCars = 0;
    for (let i = 0; i < testDoors.length; i++) {
        if (testDoors[i].car) {
            numberOfCars += 1;
        }
    };
    expect(numberOfCars).toBe(1);
});

test('All doors are initially closed', () => {
    const testDoors = doors();
    let openDoors = 0;
    for (let i = 0; i < testDoors.length; i++) {
        if (testDoors[i].open) {
            openDoors += 1;
        }
    };
    expect(openDoors).toBe(0);
});