let xLocation = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}


function draw() {
  background(220);
  fill('orange')
  circle(xLocation, height/2, 20 )
  xLocation++;
}