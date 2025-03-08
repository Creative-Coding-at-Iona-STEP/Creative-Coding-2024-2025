let xLocation = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  fill("orange");

  for (let i = 1; (i*75) <= height; i++) {
    circle(xLocation, (i*75), 20);
  }

  if (xLocation < width) xLocation++;
  else xLocation = 0;
}
