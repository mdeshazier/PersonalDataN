

let furby

let furbyX
let furbyY

let xSpeed = 3
let ySpeed = 3

let score = 0 

let mouseDist


let startBool = true
let winBool = false

function preload (){
	furby = loadImage('furby.png')
}

function setup(){
createCanvas(windowWidth, windowHeight)
imageMode (CENTER)

furbyX = windowWidth/2
furbyY = windowHeight/2



}


function draw(){
background (0)
fill (255)
textSize (40)
text('tag the furby! your score is ' + score + ' points!!', 10, 100)
image (furby, furbyX, furbyY, 30, 30)



mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

if(mouseDist < 15){
	score ++
	furbyX = random(16, windowWidth-16)
	furbyY = random(16, windowWidth-16)

	xSpeed = xSpeed * 1.5
	ySpeed = ySpeed * 1.5
}

//moving furby
furbyX = furbyX + xSpeed
furbyY = furbyY + ySpeed

//change direction of furby
if (furbyX >= windowWidth ||furbyX <= 0){
	xSpeed = xSpeed * -1
}

if (furbyY >= windowHeight ||furbyY <= 0){
	ySpeed = ySpeed * -1
}
if (score == 5){
	winBool == true
	startBool == false
}




}


function startGame (){
background (0)
fill (255)
textSize (40)
text('tag the furby! your score is ' + score + ' points!!', 10, 100)
image (furby, furbyX, furbyY, 30, 30)


}

function winGame(){
background (0)
fill (255)
textSize (40)
text('You Win!!!', windowWidth/2, 50)
image (furby, windowWidth/2, windowHeight/2, 100, 100)
}


























