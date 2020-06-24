const game = require("./game");

// The test games below are meant to cover all possible outcomes
// They are based on the assumption that door number 1 is chosen each time
// This was inspired by vos Savant's solution:
// https://en.wikipedia.org/wiki/Monty_Hall_problem#Simple_solutions

const game1 = game(true, [
    { 'number': 1, 'open': false, 'car': false},
    { 'number': 2, 'open': false, 'car': false},
    { 'number': 3, 'open': false, 'car': true},
], 1);

const game2 = game(true, [
    { 'number': 1, 'open': false, 'car': false},
    { 'number': 2, 'open': false, 'car': true},
    { 'number': 3, 'open': false, 'car': false},
], 1);

const game3 = game(true, [
    { 'number': 1, 'open': false, 'car': true},
    { 'number': 2, 'open': false, 'car': false},
    { 'number': 3, 'open': false, 'car': false},
], 1);

const game4 = game(false, [
    { 'number': 1, 'open': false, 'car': false},
    { 'number': 2, 'open': false, 'car': false},
    { 'number': 3, 'open': false, 'car': true},
], 1);

const game5 = game(false, [
    { 'number': 1, 'open': false, 'car': false},
    { 'number': 2, 'open': false, 'car': true},
    { 'number': 3, 'open': false, 'car': false},
], 1);

const game6 = game(false, [
    { 'number': 1, 'open': false, 'car': true},
    { 'number': 2, 'open': false, 'car': false},
    { 'number': 3, 'open': false, 'car': false},
], 1);

const allGames = [game1, game2, game3, game4, game5, game6];

test("One of the two non-selected doors are opened", () => {
    for (let i = 0; i < allGames.length; i++) {
        expect(allGames[i].doors[0].open).toBeFalsy();
        const nonSelectedOpenStatus = [allGames[i].doors[1], allGames[i].doors[2]].map(door => door.open);
        expect(nonSelectedOpenStatus).toEqual(expect.arrayContaining([true]));
    }
});

test("The opened door does not contain a car", () => {
    for (let i = 0; i < allGames.length; i++) {
        const currentGame = allGames[i];
        for (let j = 0; j < 3; j++) {
            if (currentGame.doors[j].open) {
                expect(currentGame.doors[j].car).toBeFalsy();
            }
        }
    }
});

test("Test games 1, 2 and 6 should result in wins", () => {
    expect(game1.win).toBeTruthy();
    expect(game2.win).toBeTruthy();
    expect(game6.win).toBeTruthy();
});

test("Test games 3, 4 and 5 should result in losses", () => {
    expect(game3.win).toBeFalsy();
    expect(game4.win).toBeFalsy();
    expect(game5.win).toBeFalsy();
});