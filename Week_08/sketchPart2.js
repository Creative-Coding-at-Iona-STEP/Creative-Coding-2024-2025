function setup() {
    createCanvas(200, 100);
    fill(0);
    textSize(18);
}
  

function draw() {
    let score = 85;
  
    if (score >= 90) {
      background(0, 255, 0);
      text('Excellent!', 30, 55);
    }
}
  