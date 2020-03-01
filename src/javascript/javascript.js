let SCREEN_WIDTH = document.documentElement.clientWidth - 50;
let SCREEN_HEIGHT = document.documentElement.clientHeight - 50;

window.onload = function()
{
    drawCircles();
}

window.addEventListener("resize", function() {
    SCREEN_WIDTH = document.documentElement.clientWidth - 50;
    SCREEN_HEIGHT = document.documentElement.clientHeight - 50;
});

function drawCircles(numberCircles = 50)
{
    const header = document.querySelector("header");  

    for (let index = 0; index < numberCircles; index++)
    {
        let circle = document.createElement("div");

        circle.classList.add('circle');

        const width = Math.floor(Math.random() * SCREEN_WIDTH);
        const height = Math.floor(Math.random() * SCREEN_HEIGHT);

        circle.style.left = width + 'px';
        circle.style.top = height + 'px';
        circle.style.backgroundColor = getRandomColor();

        header.appendChild(circle);

        moveElement(circle);
    }
}

function moveElement(circle)
{
    let plusOrMinusHorizontal = Math.random() < 0.5 ? -1 : 1;
    let plusOrMinusVertical = Math.random() < 0.5 ? -1 : 1;

    let horizontalDirection = (Math.random() * 3 + 1) * plusOrMinusHorizontal;
    let verticalDirection = (Math.random() * 3 + 1) * plusOrMinusVertical;

    setInterval(() => {

        let positionLeft = circle.offsetLeft + horizontalDirection;
        let positionTop = circle.offsetTop + verticalDirection;

        if(verticalDirection > 0)
        {
            if(positionTop >= SCREEN_HEIGHT - 10)
            {
                verticalDirection *= -1;
            }
        }
        else
        {
            if(positionTop <= 10)
            {
                verticalDirection *= -1;
            }
        }

        if(horizontalDirection > 0)
        {
            if(positionLeft >= SCREEN_WIDTH - 10)
            {
                horizontalDirection *= -1;
            }
        }
        else
        {
            if(positionLeft <= 10)
            {
                horizontalDirection *= -1;
            }
        }

        circle.style.top = positionTop + 'px';
        circle.style.left = positionLeft + 'px';

    }, 50);
}

function getRandomColor()
{
    const letters = '0123456789ABCDEF';

    let color = '#';
    
    for (let i = 0; i < 8; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}