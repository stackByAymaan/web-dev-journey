const board = document.querySelector('.board');

const blockHeight = 35;
const blockWidth = 35;

// Read actual board dimensions
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
let intervalId = null;

const blocks = [];

const snake = [
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

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });

}


setInterval(() => {

    let head = null;

    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };

    } else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };

    } else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };

    } else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        alert("Game Over");
        snake.length = 0;
        snake.push({ x: 1, y: 3 });
        direction = "down";
    }


    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });


    snake.unshift(head);
    snake.pop();

    render();

}, 400);


addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        direction = "up";
    } else if (event.key === "ArrowDown") {
        direction = "down";
    } else if (event.key === "ArrowLeft") {
        direction = "left";
    }  else if (event.key === "ArrowRight") {
        direction = "right";
    }  else if (event.key === " ") {
        direction = null;
    }
});