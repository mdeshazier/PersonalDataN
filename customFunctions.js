
let squareBrushBool = false
let ellipseBrushBool = false
let basicSceneBool = false

function setup(){

	createCanvas (windowWidth, windowHeight)
	background (200, 50, 100)
	rectMode(CENTER)
}

function draw(){
	if (squareBrushBool == true){
		squareBrush()
	}
	if (ellipseBrushBool == true){
		ellipseBrush()
	}
	if (basicSceneBool == true){
		basicScene()
	}
}

function basicScene(){
	background (150, 62, 255)
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

function squareBrush(){
	background (200, 50, 100)
	if (mouseIsPressed){
	fill (100, 250, 80)
	rect(mouseX, mouseY, 60, 60)
	}
}

function ellipseBrush(){
	background (200, 50, 100)
	if(mouseIsPressed){
	fill(80, 100, 200)
	ellipse (mouseX, mouseY, 50, 50)
	}
}

function keyPressed (){
	if(key == 'q') {
		squareBrushBool = true
		ellipseBrushBool = false
		basicSceneBool = false

	}

	if(key == 'w'){
		squareBrushBool = false
		ellipseBrushBool = true
		basicSceneBool = false

	}
	if(key == 'e'){
		basicSceneBool = true
		squareBrushBool = false
		ellipseBrushBool = false
	}
}	



