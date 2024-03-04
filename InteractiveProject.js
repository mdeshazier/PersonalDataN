let car
let kangaroo

let bibbleY
let bibbleX
//x and y position arrays 

let x = []
let y = []

let timer = 0
let timePassed = 2000

let scoreTimer = 0
let scoreTimerPassed = 3000 

let carSpeed = []

let carControllerX

let startBool = true
let winBool = false


let score = 0

function preload (){
	car = loadImage ("car.png")
	kangaroo = loadImage ("kangaroo.png")
}




function setup (){
	createCanvas (windowWidth, windowHeight)
	imageMode(CENTER)
	carControllerX = windowWidth/2
	// for(let i=0; i<; i++)


}


function draw() { 

	if(startBool == true){
		startGame()
	}
}

function startGame (){
background(120, 199, 91);

stroke(255);
fill (1,0,0)
	strokeWeight(6);
	setLineDash([15, 15]); 
	line(windowWidth/2, 0, windowWidth/2, windowHeight)


strokeWeight(250);
  line(windowWidth/2, 0, windowWidth/2, windowHeight);


setLineDash([0, 0]);	
strokeWeight (3)
fill (122, 94, 17)
textSize (40)
text('Oh no! Kangaroos! Avoid them and collect 10! Your score is ' + score + ' points!!', 10, 100)


 
	

	
  image(car, carControllerX, windowHeight/2, 200, 200)

  
  
	if (keyIsDown(LEFT_ARROW)) {
    carControllerX = carControllerX - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    carControllerX = carControllerX + 5;
  }

	//cycle through the arrays with a for loop,
	//if there's an x,y position, place a furby there.
	//also, if the mouse is close to the furby, delete it 
	//from the array using splice()

	if(millis() >= timer + timePassed){
		x.push(random(windowWidth/2-300, windowWidth/2+300))
		y.push(-60)
		carSpeed.push(random(1, 4))
		timer = millis()
	}

	if(millis() >= scoreTimer + scoreTimerPassed){
		score = score + 1
		scoreTimer = millis()

		x.push(random(windowWidth/2-300, windowWidth/2+300))
		y.push(-60)
		carSpeed.push(5)
	}

	for(let i= 0; i < x.length; i++){
		image(kangaroo, x[i], y[i], 60, 60)
		y[i] = y[i] + carSpeed[i]

		// if(){
		// 	x.splice(i, 1)
		// 	y.splice(i, 1)
		// }

		if(dist(carControllerX, windowHeight/2, x[i], y[i]) < 60 || dist(carControllerX, windowHeight/2 + 70, x[i], y[i]) <40 || dist(carControllerX, windowHeight/2 - 70, x[i], y[i]) <40){
			x.splice(i, 1)
			y.splice(i, 1)

			score = score - 1

		}

		if(y[i] > windowHeight){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}

}

function winGame(){
background (0)
fill (255)
textSize (40)
text('You Win!!!', windowWidth/2, 50)
image (bibble, windowWidth/2, windowHeight/2, 100, 100)
}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}