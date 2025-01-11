function setup() {
    createCanvas(400, 400);
    frameRate(1)
}

function draw() {
    background(220);
    /**
      * Add code below to make a snowman, create 3-5.
      * Make a call to drawSnowman()
      **/    


}

// draw the snowman
function drawSnowman(snowmanX, snowmanY, snowmanHeight, snowmanWidth) {
    fill('white');
    stroke('white');
    circle(snowmanX, snowmanY, snowmanHeight * 0.7); circle(snowmanX, snowmanY - snowmanHeight * 0.4, snowmanHeight * 0.5);

    fill('black');
    stroke('black');
    circle(snowmanX - snowmanWidth * 0.1, snowmanY - snowmanHeight * 0.45, snowmanHeight * 0.05);
    circle(snowmanX + snowmanWidth * 0.1, snowmanY - snowmanHeight * 0.45, snowmanHeight * 0.05);

    fill('orange');
    stroke('orange');
    triangle(snowmanX, snowmanY - snowmanHeight * 0.4, snowmanX, snowmanY - snowmanHeight * 0.35, snowmanX + snowmanWidth * 0.1, snowmanY - snowmanHeight * 0.375);
}

