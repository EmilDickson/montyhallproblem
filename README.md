# Monty Hall Simulator
Simulator for the [Monty Hall problem](https://en.wikipedia.org/wiki/Monty_Hall_problem) in the form of a React web app! This brain teaser is a probability puzzle based on the TV game show *Let's Make a Deal*. You get to choose between three doors: one of them has a car behind it, the other two have a goat each. You get to pick one of the doors and then the host will open one of the other doors (but never the one with the car). Finally, you get the option to switch doors. The question behind this problem is then whether the probability of winning the car increases if you choose to switch doors?

The simulation presented in this web app is based on the [vos Savant](https://en.wikipedia.org/wiki/Monty_Hall_problem#Simple_solutions) solution to the problem, which shows that the probability when *switching* doors is roughly 2/3. The web app will allow you to specify whether to switch doors and the number of simulations to run. You will then receive the results (i.e. number of times the car was won vs. number of times a goat was won) and can also see all of the games in a table. One difference from the vos Savant solution is that the initially chosen door for each simulated game is randomly selected each time, instead of always remaining at door number 1. Furthermore, the door hiding the car is also randomly chosen for each simulated game.

## Frontend
The frontend was built using React, and was generated using create-react-app. It also uses MaterialUI.

## Backend
The backend was written in node, and handles all of the application logic. Tests were written using Jest.

## How do I try it out?
First of all, clone the repository. Then:
```
cd api
npm install
cd ..
cd client
npm install
```
After that, you can start both the frontend and backend:
```
cd api
npm start
```
and
```
cd client
npm start
```
### For testing:
Tests are available for the backend, while in the api root folder, simply run:
```
npm run test
```
