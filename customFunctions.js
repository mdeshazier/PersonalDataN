
let spqureBrushBool = false
let ellipseBrushtool = false


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
	squareBrush()

}


function squareBrush(){
	if (mouseIsPressed){
	fill (100, 250, 80)
	rect(mouseX, mouseY, 60, 60)
	}
}

function ellipseBrush(){
	if(mouseIsPressed){
	fill(80, 100, 200)
	ellipse (mouseX, mouseY, 50, 50)
	}
}

function keyPressed (){
	if(key == 'q') {
		squareBrushBool = true
		ellipseBrushBool = false
	}

	if(key == 'w'){
		squareBrushBool = false
		ellipseBrushBool = true
	}
}



