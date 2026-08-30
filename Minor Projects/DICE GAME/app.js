let score = 0;
let rollCount = 0;
let currentRoll = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

currentRoll = rollDice();

console.log(currentRoll);

while (rollCount < 5) {