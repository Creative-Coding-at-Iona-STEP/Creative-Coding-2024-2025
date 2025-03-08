let circleX = [];
let sizeX = [];
let randomColors = [];

let img, img2, img3;

// Load the image.
function preload() {
  img = loadImage('https://file.aiquickdraw.com/imgcompressed/img/compressed_1de5184a5bb0e727627676ac501d4dc4.webp');
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0 ; i < 100 ; i++) {
    circleX.push(random(width));
    sizeX.push(random(1,2));
    randomColors.push(
      [
        random(255), random(255), random(255)
      ]
    )
  }
  noStroke();
}

function draw() {

  
    background('blue');


  for (let i = 0; i < circleX.length; i++) {


    fill(randomColors[i][0], randomColors[i][1], randomColors[i][2]);

    let circleY = width * i / circleX.length;
    image(img,circleX[i] , circleY, 50, 50);
    
    if (circleX[i] < height+50) circleX[i]+=sizeX[i];
    else
      circleX[i] = -50;
  }

}
