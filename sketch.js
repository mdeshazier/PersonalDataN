
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER)
}

function draw() {
 if (mouseIsPressed == true){
   background (4, 51, 112);
} else {
  background (124, 231, 252)
 } 
  
  strokeWeight(3)
//top rectangle
  fill (120)
  rect (296, 165, 300, 125)
//window 
  fill (255, 249, 179)
  stroke (0, 1, 3)
  rect (210, 165, 90)
//bottom rectangle 
  fill (245, 71, 71)
  rect (300, 300, 400, 150)
//left "wheel"
  fill (10, 10, 10)
  ellipse (175, 375, 125, 125)
  fill (2, 102, 17)
  ellipse (175, 375, 80, 80)
//right "wheel"
  fill (10, 10, 10)
  ellipse (425, 375, 125, 125 )
  fill (2, 102, 17)
  ellipse (425, 375, 80, 80)
//light
  if (keyIsPressed == true){
    fill (242, 31, 19); 
  } else {
    fill (252, 227, 3)
  }
  arc (300, 102, 150, 150, PI, TWO_PI)
}