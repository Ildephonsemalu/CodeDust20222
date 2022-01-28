let circleX = 100;

function setup() {
  createCanvas(700, 600);
}
function mousePressed() {
  circleX = 0;
}

function draw() {
  background('#0f0');
  noStroke();
  fill(254);
  circle(circleX,150,44);
  circleX += 4;
  rect(200,200,150,100)
  circle(270,150,100)
  rect(230,299,35,150)
  rect(290,299,35,150)
} 