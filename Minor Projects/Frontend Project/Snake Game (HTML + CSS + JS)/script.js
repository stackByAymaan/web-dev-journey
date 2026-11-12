const blockHeight = 35;
const blockWidth = 35;

const board = document.querySelector('.board');
const startButton = document.querySelector('#btn-start');
const modal = document.querySelector('.modal');
const startGameModal = document.querySelector('.start-game');
const gameOverModal = document.querySelector('.game-over');
const restartButton = document.querySelector('#btn-restart');

const highScoreElement = document.querySelector('#high-score');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');

let highScore = localStorage.getItem('highScore') || 0;
let score = 0;
let time = '00:00';

highScoreElement.innerText = highScore;
highScoreElement.innerText = highScore;

// Read actual board dimensions
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;

let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };

const blocks = [];

let snake = [
    {
        x: 1, y: 3
    }
];

let direction = 'down';

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div');
        block.classList.add("block");

        blocks[`${row}-${col}`] = block;

        board.appendChild(block);
    }
}

function render() {
    
    let head = null;
    blocks[`${food.x}-${food.y}`].classList.add("food");

    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };

    } else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };

    } else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };

    } else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        clearInterval(intervalId);
        modal.style.display = 'flex';
        startGameModal.style.display = 'none';
        gameOverModal.style.display = 'flex';
        return;
    }


    // Food consuming logic
    if (head.x === food.x && head.y === food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove("food");

        food = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };

        blocks[`${food.x}-${food.y}`].classList.add("food");
        snake.unshift(head);

        score +=10;
        scoreElement.innerText = score;

        if (score > highScore) {
            highScore = score;
            highScoreElement.innerText = highScore;
            localStorage.setItem('highScore', highScore);
        };
    };

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });

}

startButton.addEventListener('click', () => {
    modal.style.display = 'none';

    intervalId = setInterval(() => {
        render();
    }, 300);

    timeIntervalId = setInterval(() => {
        let [min, sec] = time.split(":").map(Number);

        sec++;

        if (sec === 60) {
            min++;
            sec = 0;
        }

        time = `${String(min).padStart(2, '0')}
        :${String(sec).padStart(2, '0')}`;

        timeElement.innerText = time;

    }, 1000);
});


function restartGame() {

    blocks[`${food.x}-${food.y}`].classList.remove("food");

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });

    score = 0;
    time = '00:00';

    scoreElement.innerText = score;
    timeElement.innerText = time;
    highScoreElement.innerText = highScore;

    modal.style.display = 'none';

    snake = [{ x: 1, y: 3 }];
    direction = 'down';

    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    };

    intervalId = setInterval(() => {
        render();
    }, 300);
}   

addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        direction = "up";
    } else if (event.key === "ArrowDown") {
        direction = "down";
    } else if (event.key === "ArrowLeft") {
        direction = "left";
    } else if (event.key === "ArrowRight") {
        direction = "right";
    } else if (event.key === " ") {
        direction = null;
    }
});