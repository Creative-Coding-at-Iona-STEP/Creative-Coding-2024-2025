let circleX = [0, 50, 100, 150, 200,250];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  fill("orange");

  for (let i = 0; i < circleX.length; i++) {
    circle(circleX[i], (i*75), 20);
    
    if (circleX[i] < height) circleX[i]++;
    else
      circleX[i] = 0;
  }

}
