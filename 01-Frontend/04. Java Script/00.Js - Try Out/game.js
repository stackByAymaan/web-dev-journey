const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
const coinsElement = document.getElementById("coins");
const worldElement = document.getElementById("world");

const startScreen = document.getElementById("startScreen");
const winScreen = document.getElementById("winScreen");
const deathScreen = document.getElementById("deathScreen");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const retryButton = document.getElementById("retryButton");

const finalScoreElement = document.getElementById("finalScore");
const finalCoinsElement = document.getElementById("finalCoins");

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const jumpButton = document.getElementById("jumpButton");


/* =========================================================
   CANVAS
========================================================= */

let W = window.innerWidth;
let H = window.innerHeight;

function resizeCanvas() {
    W = window.innerWidth;
    H = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = W * dpr;
    canvas.height = H * dpr;

    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();


/* =========================================================
   INPUT
========================================================= */

const keys = {
    left: false,
    right: false,
    jump: false
};

let jumpPressed = false;

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (key === "a" || key === "arrowleft") {
        keys.left = true;
    }

    if (key === "d" || key === "arrowright") {
        keys.right = true;
    }

    if (
        key === "w" ||
        key === "arrowup" ||
        e.code === "Space"
    ) {
        if (!keys.jump) {
            jumpPressed = true;
        }

        keys.jump = true;
        e.preventDefault();
    }

    if (key === "r" && gameStarted) {
        restartLevel();
    }
});

document.addEventListener("keyup", (e) => {
    const key = e.key.toLowerCase();

    if (key === "a" || key === "arrowleft") {
        keys.left = false;
    }

    if (key === "d" || key === "arrowright") {
        keys.right = false;
    }

    if (
        key === "w" ||
        key === "arrowup" ||
        e.code === "Space"
    ) {
        keys.jump = false;
    }
});


/* =========================================================
   MOBILE
========================================================= */

function setupHoldButton(element, action) {
    if (!element) return;

    const press = (e) => {
        e.preventDefault();

        if (action === "jump" && !keys.jump) {
            jumpPressed = true;
        }

        keys[action] = true;
    };

    const release = (e) => {
        e.preventDefault();
        keys[action] = false;
    };

    element.addEventListener("mousedown", press);
    element.addEventListener("mouseup", release);
    element.addEventListener("mouseleave", release);

    element.addEventListener("touchstart", press, {
        passive: false
    });

    element.addEventListener("touchend", release, {
        passive: false
    });

    element.addEventListener("touchcancel", release, {
        passive: false
    });
}

setupHoldButton(leftButton, "left");
setupHoldButton(rightButton, "right");
setupHoldButton(jumpButton, "jump");


/* =========================================================
   AUDIO
========================================================= */

let audioContext = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (
            window.AudioContext ||
            window.webkitAudioContext
        )();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}

function sound(
    frequency,
    duration = 0.08,
    type = "square"
) {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(
        0.03,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + duration
    );
}


/* =========================================================
   GAME
========================================================= */

const WORLD_WIDTH = 6600;
const GRAVITY = 0.62;
const GROUND_HEIGHT = 92;

function getGroundY() {
    return H - GROUND_HEIGHT;
}

let gameStarted = false;
let gameWon = false;
let gameDead = false;

let score = 0;
let coinCount = 0;

let cameraX = 0;

let worldTime = 0;


/* =========================================================
   PLAYER
========================================================= */

const player = {
    x: 160,
    y: 200,

    width: 34,
    height: 46,

    vx: 0,
    vy: 0,

    acceleration: 0.65,
    maxSpeed: 6.0,

    jumpPower: 13.0,

    grounded: false,
    coyoteTimer: 0,

    jumpsUsed: 0,
    maxJumps: 2,

    invincible: 0,

    facing: 1,

    supportPlatform: null
};


/* =========================================================
   WORLD OBJECTS
========================================================= */

let platforms = [];
let coins = [];
let enemies = [];
let checkpoints = [];
let particles = [];
let clouds = [];

let checkpoint = {
    x: 160,
    y: 200
};


/* =========================================================
   LEVEL
========================================================= */

function createLevel() {
    platforms = [];
    coins = [];
    enemies = [];
    checkpoints = [];
    particles = [];
    clouds = [];

    const ground = getGroundY();


    /* Ground */

    addPlatform(0, ground, 950, GROUND_HEIGHT);
    addPlatform(1110, ground, 720, GROUND_HEIGHT);
    addPlatform(1980, ground, 650, GROUND_HEIGHT);
    addPlatform(2790, ground, 1000, GROUND_HEIGHT);
    addPlatform(3970, ground, 860, GROUND_HEIGHT);
    addPlatform(5000, ground, 1600, GROUND_HEIGHT);


    /* Floating */

    addPlatform(480, ground - 125, 160, 22);
    addPlatform(1220, ground - 120, 160, 22);
    addPlatform(1510, ground - 185, 150, 22);
    addPlatform(2110, ground - 120, 170, 22);
    addPlatform(2450, ground - 185, 150, 22);
    addPlatform(3000, ground - 135, 160, 22);
    addPlatform(3280, ground - 215, 145, 22);
    addPlatform(3490, ground - 130, 150, 22);
    addPlatform(4220, ground - 140, 160, 22);
    addPlatform(4500, ground - 215, 150, 22);
    addPlatform(5310, ground - 140, 170, 22);
    addPlatform(5680, ground - 215, 160, 22);


    /* Coins */

    const coinList = [
        [350, ground - 65],

        [520, ground - 175],
        [575, ground - 175],

        [780, ground - 65],

        [1170, ground - 65],

        [1260, ground - 170],
        [1320, ground - 170],

        [1580, ground - 235],

        [1880, ground - 65],

        [2080, ground - 65],

        [2160, ground - 170],

        [2480, ground - 240],

        [2640, ground - 65],

        [2950, ground - 65],

        [3050, ground - 190],

        [3330, ground - 270],

        [3570, ground - 185],

        [3720, ground - 65],

        [4070, ground - 65],

        [4280, ground - 195],

        [4550, ground - 270],

        [4810, ground - 65],

        [5200, ground - 65],

        [5370, ground - 195],

        [5750, ground - 270],

        [6060, ground - 65]
    ];

    for (const [x, y] of coinList) {
        coins.push({
            x,
            y,
            radius: 11,
            collected: false,
            phase: Math.random() * Math.PI * 2
        });
    }


    /* Enemies */

    addEnemy(700, ground - 34, 620, 850, 0.7);
    addEnemy(1430, ground - 34, 1320, 1740, -0.65);
    addEnemy(2260, ground - 34, 2100, 2500, 0.75);
    addEnemy(3090, ground - 34, 2860, 3600, -0.7);
    addEnemy(4210, ground - 34, 4050, 4750, 0.75);
    addEnemy(5510, ground - 34, 5200, 5920, -0.7);


    /* Checkpoints */

    checkpoints.push(
        {
            x: 1650,
            reached: false
        },
        {
            x: 3400,
            reached: false
        },
        {
            x: 5050,
            reached: false
        }
    );


    /* Clouds */

    for (let i = 0; i < 45; i++) {
        clouds.push({
            x: Math.random() * WORLD_WIDTH,
            y: 50 + Math.random() * 170,
            scale: 0.6 + Math.random() * 1.1,
            speed: 0.12 + Math.random() * 0.15
        });
    }
}

function addPlatform(
    x,
    y,
    width,
    height
) {
    platforms.push({
        x,
        y,
        width,
        height
    });
}

function addEnemy(
    x,
    y,
    minX,
    maxX,
    vx
) {
    enemies.push({
        x,
        y,

        width: 34,
        height: 34,

        minX,
        maxX,

        vx,

        alive: true,

        phase:
            Math.random() *
            Math.PI *
            2
    });
}


/* =========================================================
   RESET
========================================================= */

function resetGame() {
    score = 0;
    coinCount = 0;

    cameraX = 0;
    worldTime = 0;

    gameWon = false;
    gameDead = false;

    checkpoint = {
        x: 160,
        y: 200
    };

    player.x = 160;
    player.y = 200;

    player.vx = 0;
    player.vy = 0;

    player.grounded = false;
    player.coyoteTimer = 0;

    player.jumpsUsed = 0;
    player.invincible = 0;

    player.supportPlatform = null;

    createLevel();

    updateHUD();
}


/* =========================================================
   START
========================================================= */

function startGame() {
    initAudio();

    resetGame();

    gameStarted = true;

    startScreen.classList.add("hidden");
    winScreen.classList.add("hidden");
    deathScreen.classList.add("hidden");

    sound(520, 0.1, "triangle");
}


/* =========================================================
   RESTART
========================================================= */

function restartLevel() {
    initAudio();

    resetGame();

    gameStarted = true;

    startScreen.classList.add("hidden");
    winScreen.classList.add("hidden");
    deathScreen.classList.add("hidden");
}


/* =========================================================
   PLAYER MOVEMENT
========================================================= */

function updatePlayer(delta) {

    let direction = 0;

    if (keys.left) {
        direction -= 1;
        player.facing = -1;
    }

    if (keys.right) {
        direction += 1;
        player.facing = 1;
    }


    /* Horizontal movement */

    if (direction !== 0) {
        player.vx +=
            direction *
            player.acceleration *
            delta;
    } else {
        player.vx *=
            Math.pow(
                0.80,
                delta
            );
    }

    player.vx = clamp(
        player.vx,
        -player.maxSpeed,
        player.maxSpeed
    );


    /* Jump */

    if (jumpPressed) {

        jumpPressed = false;

        if (
            player.grounded ||
            player.coyoteTimer > 0
        ) {

            player.vy =
                -player.jumpPower;

            player.grounded = false;
            player.coyoteTimer = 0;
            player.jumpsUsed = 1;

            createJumpEffect();

            sound(360, 0.08);
        }

        else if (
            player.jumpsUsed < player.maxJumps
        ) {

            player.vy =
                -player.jumpPower * 0.92;

            player.jumpsUsed = 2;

            createDoubleJumpEffect();

            sound(540, 0.09, "triangle");
        }
    }


    /* Gravity */

    player.vy +=
        GRAVITY * delta;

    player.vy =
        clamp(
            player.vy,
            -20,
            15
        );


    const oldX = player.x;
    const oldY = player.y;

    const oldBottom =
        oldY +
        player.height;


    player.x +=
        player.vx *
        delta;

    player.y +=
        player.vy *
        delta;


    /* World left boundary */

    if (player.x < 0) {
        player.x = 0;
        player.vx = 0;
    }


    /* =====================================================
       PLATFORM COLLISION
    ===================================================== */

    player.grounded = false;
    player.supportPlatform = null;

    let bestPlatform = null;
    let bestY = Infinity;


    for (const platform of platforms) {

        const playerLeft =
            player.x + 3;

        const playerRight =
            player.x +
            player.width - 3;

        const platformLeft =
            platform.x;

        const platformRight =
            platform.x +
            platform.width;


        const horizontalOverlap =
            playerRight >
                platformLeft &&
            playerLeft <
                platformRight;


        if (!horizontalOverlap) {
            continue;
        }


        const newBottom =
            player.y +
            player.height;


        const crossingTop =
            oldBottom <=
                platform.y + 4 &&
            newBottom >=
                platform.y;


        const falling =
            player.vy >= 0;


        if (
            falling &&
            crossingTop &&
            platform.y < bestY
        ) {

            bestPlatform = platform;
            bestY = platform.y;
        }
    }


    if (bestPlatform) {

        player.y =
            bestPlatform.y -
            player.height;

        player.vy = 0;

        player.grounded = true;

        player.jumpsUsed = 0;

        player.coyoteTimer = 8;

        player.supportPlatform =
            bestPlatform;
    }


    /* Coyote time */

    if (!player.grounded) {
        player.coyoteTimer -= delta;
    }


    /* Falling into gap */

    if (
        player.y >
        H + 160
    ) {

        showDeath();

        return;
    }


    /* Invincibility */

    if (
        player.invincible > 0
    ) {

        player.invincible -= delta;
    }
}


/* =========================================================
   ENEMY PHYSICS + COLLISION
========================================================= */

function updateEnemies(delta) {

    for (const enemy of enemies) {

        if (!enemy.alive) {
            continue;
        }


        enemy.x +=
            enemy.vx *
            delta;


        if (
            enemy.x <= enemy.minX
        ) {

            enemy.x =
                enemy.minX;

            enemy.vx =
                Math.abs(enemy.vx);
        }


        if (
            enemy.x >= enemy.maxX
        ) {

            enemy.x =
                enemy.maxX;

            enemy.vx =
                -Math.abs(enemy.vx);
        }


        enemy.phase +=
            0.08 * delta;


        /* Enemy rectangle */

        const enemyLeft =
            enemy.x;

        const enemyRight =
            enemy.x +
            enemy.width;

        const enemyTop =
            enemy.y;

        const enemyBottom =
            enemy.y +
            enemy.height;


        /* Player rectangle */

        const playerLeft =
            player.x;

        const playerRight =
            player.x +
            player.width;

        const playerTop =
            player.y;

        const playerBottom =
            player.y +
            player.height;


        const overlap =
            playerRight >
                enemyLeft &&
            playerLeft <
                enemyRight &&
            playerBottom >
                enemyTop &&
            playerTop <
                enemyBottom;


        if (
            !overlap ||
            player.invincible > 0
        ) {
            continue;
        }


        /* =================================================
           STOMP
        ================================================= */

        const previousPlayerBottom =
            player.previousBottom ??
            playerBottom;


        const falling =
            player.vy > 0;


        const cameFromAbove =
            previousPlayerBottom <=
                enemyTop + 8;


        if (
            falling &&
            cameFromAbove
        ) {

            enemy.alive = false;

            player.y =
                enemy.y -
                player.height;

            player.vy =
                -9.5;

            player.jumpsUsed = 1;

            score += 200;

            createEnemyExplosion(
                enemy.x +
                    enemy.width / 2,
                enemy.y +
                    enemy.height / 2
            );

            sound(
                180,
                0.1
            );

            continue;
        }


        /* =================================================
           SIDE COLLISION
        ================================================= */

        const playerCenter =
            player.x +
            player.width / 2;

        const enemyCenter =
            enemy.x +
            enemy.width / 2;


        if (
            playerCenter < enemyCenter
        ) {

            player.x =
                enemy.x -
                player.width -
                1;

            player.vx =
                -4.2;

        } else {

            player.x =
                enemy.x +
                enemy.width +
                1;

            player.vx =
                4.2;
        }


        player.vy =
            -5.5;

        player.invincible =
            1200;

        createHitEffect(
            player.x +
                player.width / 2,
            player.y +
                player.height / 2
        );

        sound(
            110,
            0.14,
            "sawtooth"
        );
    }
}


/* =========================================================
   SAVE PREVIOUS PLAYER POSITION
========================================================= */

function savePlayerPosition() {

    player.previousBottom =
        player.y +
        player.height;
}


/* =========================================================
   COINS
========================================================= */

function updateCoins() {

    for (const coin of coins) {

        if (
            coin.collected
        ) {
            continue;
        }


        coin.phase += 0.08;


        const bob =
            Math.sin(
                coin.phase
            ) * 4;


        const left =
            player.x;

        const right =
            player.x +
            player.width;

        const top =
            player.y;

        const bottom =
            player.y +
            player.height;


        const coinLeft =
            coin.x -
            coin.radius;

        const coinRight =
            coin.x +
            coin.radius;

        const coinTop =
            coin.y +
            bob -
            coin.radius;

        const coinBottom =
            coin.y +
            bob +
            coin.radius;


        if (
            right > coinLeft &&
            left < coinRight &&
            bottom > coinTop &&
            top < coinBottom
        ) {

            coin.collected = true;

            coinCount++;

            score += 100;

            createCoinEffect(
                coin.x,
                coin.y +
                    bob
            );

            sound(
                760,
                0.06,
                "triangle"
            );
        }
    }
}


/* =========================================================
   CHECKPOINT
========================================================= */

function updateCheckpoints() {

    for (
        const cp of checkpoints
    ) {

        if (
            cp.reached
        ) {
            continue;
        }


        if (
            player.x >
            cp.x
        ) {

            cp.reached = true;

            checkpoint = {
                x: cp.x,
                y: getGroundY()
            };

            score += 300;

            createCheckpointEffect(
                cp.x,
                getGroundY() - 100
            );

            sound(
                620,
                0.08,
                "triangle"
            );
        }
    }
}


/* =========================================================
   FINISH
========================================================= */

function checkFinish() {

    if (
        player.x >
        6240
    ) {

        completeLevel();
    }
}

function completeLevel() {

    if (gameWon) {
        return;
    }

    gameWon = true;
    gameStarted = false;

    score += 2000;

    finalScoreElement.textContent =
        String(
            Math.floor(score)
        ).padStart(
            6,
            "0"
        );

    finalCoinsElement.textContent =
        String(
            coinCount
        ).padStart(
            2,
            "0"
        );

    winScreen.classList.remove(
        "hidden"
    );

    sound(
        660,
        0.12,
        "triangle"
    );

    setTimeout(
        () => sound(
            880,
            0.12,
            "triangle"
        ),
        120
    );

    setTimeout(
        () => sound(
            1100,
            0.16,
            "triangle"
        ),
        260
    );
}


/* =========================================================
   DEATH SCREEN
========================================================= */

function showDeath() {

    if (
        gameDead ||
        gameWon
    ) {
        return;
    }

    gameDead = true;
    gameStarted = false;

    deathScreen.classList.remove(
        "hidden"
    );

    sound(
        100,
        0.3,
        "sawtooth"
    );
}


/* =========================================================
   RESPAWN FROM CHECKPOINT
========================================================= */

function respawnFromCheckpoint() {

    gameDead = false;
    gameStarted = true;

    deathScreen.classList.add(
        "hidden"
    );

    player.x =
        checkpoint.x;

    player.y =
        checkpoint.y -
        player.height -
        20;

    player.vx = 0;
    player.vy = 0;

    player.grounded = false;

    player.jumpsUsed = 0;

    player.invincible =
        1700;

    cameraX =
        Math.max(
            0,
            player.x -
                W * 0.32
        );
}


/* =========================================================
   CAMERA
========================================================= */

function updateCamera(delta) {

    const target =
        player.x -
        W * 0.32;

    const maxCamera =
        Math.max(
            0,
            WORLD_WIDTH -
            W
        );

    const desired =
        clamp(
            target,
            0,
            maxCamera
        );

    cameraX +=
        (
            desired -
            cameraX
        ) *
        0.1 *
        delta;
}


/* =========================================================
   PARTICLES
========================================================= */

function createParticle(
    x,
    y,
    vx,
    vy,
    size,
    life,
    color
) {

    particles.push({
        x,
        y,
        vx,
        vy,
        size,
        life,
        maxLife: life,
        color
    });
}

function createJumpEffect() {

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        createParticle(
            player.x +
                player.width / 2,
            player.y +
                player.height,
            random(
                -2,
                2
            ),
            random(
                -1,
                -4
            ),
            random(
                2,
                4
            ),
            350,
            "#c89558"
        );
    }
}

function createDoubleJumpEffect() {

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        createParticle(
            player.x +
                player.width / 2,
            player.y +
                player.height / 2,
            random(
                -3,
                3
            ),
            random(
                -3,
                3
            ),
            random(
                2,
                4
            ),
            450,
            "#66d9ff"
        );
    }
}

function createEnemyExplosion(
    x,
    y
) {

    for (
        let i = 0;
        i < 14;
        i++
    ) {

        const angle =
            Math.random() *
            Math.PI *
            2;

        const force =
            random(
                2,
                5
            );

        createParticle(
            x,
            y,
            Math.cos(angle) *
                force,
            Math.sin(angle) *
                force,
            random(
                2,
                5
            ),
            600,
            "#f2ae48"
        );
    }
}

function createHitEffect(
    x,
    y
) {

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        createParticle(
            x,
            y,
            random(
                -3,
                3
            ),
            random(
                -4,
                1
            ),
            random(
                2,
                4
            ),
            350,
            "#ff8057"
        );
    }
}

function createCoinEffect(
    x,
    y
) {

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        createParticle(
            x,
            y,
            random(
                -2,
                2
            ),
            random(
                -4,
                -1
            ),
            random(
                2,
                4
            ),
            400,
            "#ffe16a"
        );
    }
}

function createCheckpointEffect(
    x,
    y
) {

    for (
        let i = 0;
        i < 16;
        i++
    ) {

        createParticle(
            x,
            y,
            random(
                -3,
                3
            ),
            random(
                -4,
                0
            ),
            random(
                2,
                5
            ),
            600,
            "#70d36b"
        );
    }
}

function updateParticles(delta) {

    for (
        let i =
            particles.length - 1;
        i >= 0;
        i--
    ) {

        const p =
            particles[i];

        p.x +=
            p.vx *
            delta;

        p.y +=
            p.vy *
            delta;

        p.vy +=
            0.12 *
            delta;

        p.life -=
            delta;

        if (
            p.life <= 0
        ) {

            particles.splice(
                i,
                1
            );
        }
    }
}


/* =========================================================
   BACKGROUND
========================================================= */

function drawBackground() {

    const sky =
        ctx.createLinearGradient(
            0,
            0,
            0,
            H
        );

    sky.addColorStop(
        0,
        "#72d4f8"
    );

    sky.addColorStop(
        0.58,
        "#c6efff"
    );

    sky.addColorStop(
        1,
        "#ffe0a0"
    );

    ctx.fillStyle =
        sky;

    ctx.fillRect(
        0,
        0,
        W,
        H
    );


    /* Sun */

    ctx.fillStyle =
        "#fff0a6";

    ctx.beginPath();

    ctx.arc(
        W * 0.82,
        H * 0.16,
        42,
        0,
        Math.PI * 2
    );

    ctx.fill();


    /* Clouds */

    for (
        const cloud of clouds
    ) {

        const x =
            cloud.x -
            cameraX *
                cloud.speed;

        if (
            x <
                -200 ||
            x >
                W + 200
        ) {
            continue;
        }

        drawCloud(
            x,
            cloud.y,
            cloud.scale
        );
    }


    drawMountain(
        "#91d080",
        0.44,
        0.18,
        0.14
    );

    drawMountain(
        "#69b568",
        0.57,
        0.24,
        0.22
    );

    drawMountain(
        "#4f9858",
        0.70,
        0.28,
        0.32
    );
}

function drawCloud(
    x,
    y,
    scale
) {

    ctx.fillStyle =
        "rgba(255,255,255,.87)";

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        23 * scale,
        0,
        Math.PI * 2
    );

    ctx.arc(
        x +
            27 * scale,
        y -
            8 * scale,
        30 * scale,
        0,
        Math.PI * 2
    );

    ctx.arc(
        x +
            61 * scale,
        y,
        22 * scale,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.fillRect(
        x -
            5 * scale,
        y,
        68 * scale,
        20 * scale
    );
}

function drawMountain(
    color,
    baseRatio,
    height,
    parallax
) {

    ctx.fillStyle =
        color;

    ctx.beginPath();

    ctx.moveTo(
        0,
        H * baseRatio
    );

    for (
        let x = -100;
        x <= W + 100;
        x += 70
    ) {

        const worldX =
            x +
            cameraX *
                parallax;

        const peak =
            H *
                baseRatio -
            (
                45 +
                Math.sin(
                    worldX *
                        0.01
                ) *
                25
            ) *
            height /
            0.28;

        ctx.lineTo(
            x,
            peak
        );
    }

    ctx.lineTo(
        W,
        H
    );

    ctx.lineTo(
        0,
        H
    );

    ctx.closePath();

    ctx.fill();
}


/* =========================================================
   WORLD DRAW
========================================================= */

function drawWorld() {

    ctx.save();

    ctx.translate(
        -cameraX,
        0
    );


    for (
        const platform of platforms
    ) {

        drawPlatform(
            platform
        );
    }


    for (
        const coin of coins
    ) {

        if (
            !coin.collected
        ) {

            drawCoin(
                coin
            );
        }
    }


    for (
        const enemy of enemies
    ) {

        if (
            enemy.alive
        ) {

            drawEnemy(
                enemy
            );
        }
    }


    for (
        const cp of checkpoints
    ) {

        drawCheckpoint(
            cp
        );
    }


    drawFinishFlag(
        6250,
        getGroundY()
    );


    ctx.restore();
}


/* =========================================================
   PLATFORM DRAW
========================================================= */

function drawPlatform(
    platform
) {

    const isGround =
        platform.height > 50;


    ctx.fillStyle =
        isGround
            ? "#aa6033"
            : "#bc6b38";

    ctx.fillRect(
        platform.x,
        platform.y,
        platform.width,
        platform.height
    );


    ctx.fillStyle =
        "#70bb4d";

    ctx.fillRect(
        platform.x,
        platform.y,
        platform.width,
        isGround
            ? 14
            : 8
    );


    ctx.fillStyle =
        "#91d763";

    ctx.fillRect(
        platform.x,
        platform.y,
        platform.width,
        4
    );


    if (isGround) {

        ctx.fillStyle =
            "rgba(70,50,32,.35)";

        for (
            let x =
                platform.x + 15;
            x <
                platform.x +
                platform.width;
            x += 48
        ) {

            ctx.fillRect(
                x,
                platform.y + 28,
                5,
                4
            );

            ctx.fillRect(
                x + 20,
                platform.y + 52,
                4,
                4
            );
        }
    }
}


/* =========================================================
   COIN DRAW
========================================================= */

function drawCoin(
    coin
) {

    const bob =
        Math.sin(
            coin.phase
        ) * 4;

    ctx.save();

    ctx.translate(
        coin.x,
        coin.y +
            bob
    );

    ctx.fillStyle =
        "#ffd447";

    ctx.strokeStyle =
        "#da9c20";

    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.ellipse(
        0,
        0,
        coin.radius,
        coin.radius * 1.18,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();
    ctx.stroke();


    ctx.fillStyle =
        "#fff3a8";

    ctx.beginPath();

    ctx.ellipse(
        -3,
        -4,
        3,
        5,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.restore();
}


/* =========================================================
   ENEMY DRAW
========================================================= */

function drawEnemy(
    enemy
) {

    const bounce =
        Math.sin(
            enemy.phase
        ) * 2;

    ctx.save();

    ctx.translate(
        enemy.x,
        enemy.y +
            bounce
    );


    ctx.fillStyle =
        "#995a3f";

    ctx.beginPath();

    ctx.roundRect(
        0,
        0,
        enemy.width,
        enemy.height,
        9
    );

    ctx.fill();


    ctx.fillStyle =
        "#6d382a";

    ctx.beginPath();

    ctx.arc(
        10,
        11,
        4,
        0,
        Math.PI * 2
    );

    ctx.arc(
        24,
        11,
        4,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.fillStyle =
        "#fff";

    ctx.fillRect(
        8,
        9,
        5,
        5
    );

    ctx.fillRect(
        22,
        9,
        5,
        5
    );


    ctx.fillStyle =
        "#60362d";

    ctx.fillRect(
        2,
        28,
        12,
        6
    );

    ctx.fillRect(
        20,
        28,
        12,
        6
    );


    ctx.restore();
}


/* =========================================================
   CHECKPOINT DRAW
========================================================= */

function drawCheckpoint(
    cp
) {

    const y =
        getGroundY();

    ctx.strokeStyle =
        "#72787d";

    ctx.lineWidth = 5;

    ctx.beginPath();

    ctx.moveTo(
        cp.x,
        y
    );

    ctx.lineTo(
        cp.x,
        y - 140
    );

    ctx.stroke();


    ctx.fillStyle =
        cp.reached
            ? "#69c868"
            : "#ffd04d";

    ctx.beginPath();

    ctx.moveTo(
        cp.x,
        y - 135
    );

    ctx.lineTo(
        cp.x + 45,
        y - 116
    );

    ctx.lineTo(
        cp.x,
        y - 97
    );

    ctx.closePath();

    ctx.fill();
}


/* =========================================================
   FLAG
========================================================= */

function drawFinishFlag(
    x,
    y
) {

    ctx.strokeStyle =
        "#70757a";

    ctx.lineWidth = 6;

    ctx.beginPath();

    ctx.moveTo(
        x,
        y
    );

    ctx.lineTo(
        x,
        y - 185
    );

    ctx.stroke();


    ctx.fillStyle =
        "#ef5545";

    ctx.beginPath();

    ctx.moveTo(
        x,
        y - 180
    );

    ctx.lineTo(
        x + 92,
        y - 153
    );

    ctx.lineTo(
        x,
        y - 110
    );

    ctx.closePath();

    ctx.fill();


    ctx.fillStyle =
        "#fff2d0";

    ctx.beginPath();

    ctx.arc(
        x + 20,
        y - 153,
        7,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


/* =========================================================
   PLAYER DRAW
========================================================= */

function drawPlayer() {

    ctx.save();

    ctx.translate(
        player.x +
            player.width / 2,
        player.y +
            player.height / 2
    );


    if (
        player.invincible > 0 &&
        Math.floor(
            player.invincible /
                80
        ) % 2 === 0
    ) {

        ctx.globalAlpha =
            0.45;
    }


    ctx.scale(
        player.facing,
        1
    );


    /* Body */

    ctx.fillStyle =
        "#2c67b5";

    ctx.beginPath();

    ctx.roundRect(
        -15,
        2,
        30,
        25,
        8
    );

    ctx.fill();


    /* Face */

    ctx.fillStyle =
        "#f0bf8c";

    ctx.beginPath();

    ctx.arc(
        0,
        -10,
        12,
        0,
        Math.PI * 2
    );

    ctx.fill();


    /* Hair */

    ctx.fillStyle =
        "#6e4031";

    ctx.fillRect(
        -10,
        -18,
        20,
        7
    );


    /* Hat */

    ctx.fillStyle =
        "#e44d39";

    ctx.beginPath();

    ctx.roundRect(
        -13,
        -21,
        26,
        8,
        5
    );

    ctx.fill();


    ctx.fillStyle =
        "#ff6752";

    ctx.fillRect(
        -7,
        -19,
        10,
        4
    );


    /* Eye */

    ctx.fillStyle =
        "#382c2a";

    ctx.fillRect(
        3,
        -12,
        3,
        4
    );


    /* Nose */

    ctx.fillStyle =
        "#dda272";

    ctx.beginPath();

    ctx.arc(
        9,
        -7,
        3,
        0,
        Math.PI * 2
    );

    ctx.fill();


    /* Arms */

    ctx.fillStyle =
        "#f0bf8c";

    ctx.fillRect(
        -22,
        5,
        8,
        15
    );

    ctx.fillRect(
        14,
        5,
        8,
        15
    );


    /* Legs */

    ctx.fillStyle =
        "#4a3c36";

    ctx.fillRect(
        -12,
        25,
        9,
        12
    );

    ctx.fillRect(
        3,
        25,
        9,
        12
    );


    /* Shoes */

    ctx.fillStyle =
        "#68462f";

    ctx.fillRect(
        -14,
        35,
        12,
        6
    );

    ctx.fillRect(
        4,
        35,
        12,
        6
    );


    /* Double-jump indicator */

    if (
        player.jumpsUsed === 1 &&
        !player.grounded
    ) {

        ctx.strokeStyle =
            "rgba(95,215,255,.7)";

        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.arc(
            0,
            0,
            24,
            0,
            Math.PI * 2
        );

        ctx.stroke();
    }


    ctx.restore();
}


/* =========================================================
   PARTICLES DRAW
========================================================= */

function drawParticles() {

    for (
        const particle
        of particles
    ) {

        ctx.globalAlpha =
            clamp(
                particle.life /
                    particle.maxLife,
                0,
                1
            );

        ctx.fillStyle =
            particle.color;

        ctx.beginPath();

        ctx.arc(
            particle.x -
                cameraX,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }

    ctx.globalAlpha = 1;
}


/* =========================================================
   HUD
========================================================= */

function updateHUD() {

    scoreElement.textContent =
        String(
            Math.floor(score)
        ).padStart(
            6,
            "0"
        );

    coinsElement.textContent =
        String(
            coinCount
        ).padStart(
            2,
            "0"
        );

    worldElement.textContent =
        "1-1";
}


/* =========================================================
   BUTTONS
========================================================= */

startButton.addEventListener(
    "click",
    startGame
);

restartButton.addEventListener(
    "click",
    restartLevel
);

retryButton.addEventListener(
    "click",
    () => {
        initAudio();
        respawnFromCheckpoint();
    }
);


/* =========================================================
   UTILITY
========================================================= */

function clamp(
    value,
    min,
    max
) {
    return Math.max(
        min,
        Math.min(
            max,
            value
        )
    );
}

function random(
    min,
    max
) {
    return (
        Math.random() *
        (max - min)
    ) + min;
}


/* =========================================================
   MAIN LOOP
========================================================= */

let previousTime =
    performance.now();

function gameLoop(now) {

    const delta =
        Math.min(
            1.5,
            (
                now -
                previousTime
            ) / 16.6667
        );

    previousTime = now;

    gameTime += delta;


    /* Save position before physics */

    player.previousBottom =
        player.y +
        player.height;


    if (
        gameStarted &&
        !gameWon &&
        !gameDead
    ) {

        updatePlayer(delta);

        updateEnemies(delta);

        updateCoins();

        updateCheckpoints();

        checkFinish();

        updateCamera(delta);

        updateParticles(delta);

        updateHUD();
    }


    /* Render */

    ctx.clearRect(
        0,
        0,
        W,
        H
    );

    drawBackground();

    drawWorld();

    drawPlayer();

    drawParticles();


    requestAnimationFrame(
        gameLoop
    );
}


/* =========================================================
   INITIALIZE
========================================================= */

resetGame();

gameStarted = false;

updateHUD();

requestAnimationFrame(
    gameLoop
);