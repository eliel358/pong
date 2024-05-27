const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let canvas_width = canvas.width = 700;
let canvas_height = canvas.height = 700;
let p1_x = 0;
let p1_y = 0;

let p2_x = 670;
let p2_y = 500;

let ball_x = 350;
let ball_y = 350;
const radius = 20;
let vx = -2.5;
let vy = 1;

const player_height = 200;
const player_width = 30;
let velocidade = 50;

let p1Score = 0;
let p2Score = 0;

let pause = false

const animar = () => {
    if (pause == true) {
        return;
    }

    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.fillStyle = "black"
    ctx.fillRect(p1_x, p1_y, player_width, player_height);
    ctx.fillStyle = "cornflowerblue"
    ctx.fillRect(p2_x, p2_y, player_width, player_height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white"
    ctx.arc(ball_x, ball_y, radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

    if (ball_y + radius > canvas_height || ball_y - radius < 0) {
        vy = -vy;
    }

    if (ball_x + radius > canvas_width) {
        p1Score++
        resetBall();
    } else if (ball_x - radius < 0) {
        p2Score++
        resetBall();
    }

    checkCollision();

    ball_x += vx;
    ball_y += vy;

    requestAnimationFrame(animar);
};

const checkCollision = () => {
    if (ball_x - radius < p1_x + player_width) {
        if (ball_y > p1_y && ball_y < p1_y + player_height) {
            ball_x = p1_x + player_width + radius;
            vx = -vx + 0.5;
            vy += 0.5;
        }
    }
    if (ball_x + radius > p2_x) {
        if (ball_y > p2_y && ball_y < p2_y + player_height) {
            ball_x = p2_x - radius;
            vx = -vx - 0.5;
            vy += 0.5;
        }
    }
};

const resetBall = () => {
    vx = -2.5;
    vy = 1;
    ball_x = canvas_width / 2;
    ball_y = canvas_height / 2;
    vx = -vx;
    document.getElementById("conteiner_placar").textContent = `${p1Score}x${p2Score}`
};

animar();

document.addEventListener("keydown", (e) => {
    if (pause == true) {
        return;
    }

    console.log(` ${e.code}`);
    if (e.code == "KeyW") {
        p1_y = Math.max(0, p1_y - velocidade);
    }
    if (e.code == "KeyS") {
        p1_y = Math.min(canvas_height - player_height, p1_y + velocidade);
    }
    if (e.code == "ArrowUp") {
        p2_y = Math.max(0, p2_y - velocidade);
    }
    if (e.code == "ArrowDown") {
        p2_y = Math.min(canvas_height - player_height, p2_y + velocidade);
    }
});

function mobileEvents(event) {
    arrow = event.target.id

    if (pause == true) {
        return;
    }
    switch (arrow) {
        case "p1UP":
            p1_y = Math.max(0, p1_y - velocidade)
            break;
        case "p1DW":
            p1_y = Math.min(canvas_height - player_height, p1_y + velocidade);
            break;
        case "p2UP":
            p2_y = Math.max(0, p2_y - velocidade);
            break;
        case "p2DW":
            p2_y = Math.min(canvas_height - player_height, p2_y + velocidade);
            break;

    }
}

function optionsFunctions(event) {
    option = event.target.textContent
    switch (option) {
        case "Reiniciar":
            location.reload()
            break;
        case "Mobile":
            document.getElementById("buttonsMobile").classList.toggle("hidden")
            break;
        case "X":
            showOP()
            break
    }

}

function showOP() {
    document.getElementById("options").classList.toggle("hidden")
    document.getElementById("canvas1").classList.toggle("pauseON")

    if (pause === false) {
        pause = true
    } else {
        pause = false
    }
    animar()
}