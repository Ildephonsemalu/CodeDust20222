// random()
// Code! programming with p5.js
let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth,windowHeight );
  background(0);
  
}
function draw() {
     r = random(0, 255);
     g = 0;
     b = random( 255);
     x = random( width);
     y = random (height);
     noStroke();
  fill(r, g, b, 100);
  square(x, y, 24);

}