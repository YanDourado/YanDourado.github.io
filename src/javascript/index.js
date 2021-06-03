let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;

let canvas, context;
let circles = [];

window.onload = function () {
    init();
}

window.addEventListener('resize', function () {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
});

function resetCanvas() {
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    context.globalAlpha = 1;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function createCircles(numbersCircle = 30) {
    for (let i = 0; i < numbersCircle; i++) {
        circle = {
            radius: 40,
            color: getRandomColor(),
            borderColor: getRandomColor(),
            x: Math.floor(Math.random() * SCREEN_WIDTH),
            y: Math.floor(Math.random() * SCREEN_HEIGHT),
            velX: (Math.random() * 1) * (Math.floor(Math.random() * 1) || -1),
            velY: (Math.random() * 1) * (Math.floor(Math.random() * 1) || -1)
        }
        circles.push(circle);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    createCircles();
    window.requestAnimationFrame(update);
}

function update() {
    circles.forEach(circle => {
        circle.x += circle.velX
        circle.y += circle.velY
    });
    draw();
    window.requestAnimationFrame(update);
}

function draw() {

    resetCanvas();

    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];

        if (circle.y + circle.radius >= canvas.height) {
            circle.velY = -circle.velY
            circle.y = canvas.height - circle.radius
        } else if (circle.y - circle.radius <= 0) {
            circle.velY = -circle.velY
            circle.y = circle.radius
        } else if (circle.x - circle.radius <= 0) {
            circle.velX = -circle.velX
            circle.x = circle.radius
        } else if (circle.x + circle.radius >= canvas.width) {
            circle.velX = -circle.velX
            circle.x = canvas.width - circle.radius
        }
        context.beginPath();
        context.fillStyle = circle.color;
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context.strokeStyle = circle.borderColor;
        context.stroke();
        context.move
        context.fill();
    }
}