function setup() { // setup sketch
  createCanvas(400, 400); // draws canvas that 400 x 400 pixels
}

function draw() { // draws the sketch
  background(220); // gray background 

  // Your code here!

  // Step 1: Draw a circle
  circle(200, 200, 300); // we drew a circle x (left and right) of 200, y (up and down) of 200 amd a diameter of 300.

  // Step 2: Again go over how x and y is on canvas. i.e. the corridante system

  // Step 3: Another circle
  circle(150, 150, 20); // addtional circle 

  // Step 4: Another 
  circle(250, 150, 20); // addtional circle
  
  // Step 5: How do we draw the simply face?
  // Arc? We need to check the refernce 
  arc(200, 300, 100, 30, 0, PI); // just copy this line

  // Your turn?
  // - try to change the color?
  // - add more to the face 
  // Make something else?
  // - flower? rainbow? pet? house? 

 
}