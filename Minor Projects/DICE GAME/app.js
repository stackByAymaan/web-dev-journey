let score = 0;
let rollCount = 0;
let currentRoll = 0;

function rollDice() {
    let currentRoll = Math.floor(Math.random() * 6) + 1;
    return currentRoll;
}

let result = rollDice();
