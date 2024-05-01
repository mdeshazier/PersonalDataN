
let squareNums = [25, 36, 49, 64, 81, 100]
let furby

function preload (){

	furby = loadImage("furby.png")
}


function setup(){

createCanvas (windowWidth, windowHeight)

stroke(255);
strokeWeight(2);
noFill();
setLineDash([5, 5]); 
line(20, 800, 250, 20);

function setLineDash (list){
	drawingContext.setLineDash(list);
}

print(squareNums.length)

for(let i = 0; i < squareNums.length; i++){
	let xPos = random(100, windowWidth-100)
	let yPos = random(100, windowHeight-100)
	fill (255, 60, 100)
	image(furby, xPos, yPos, squareNums[i], squareNums[i])
	text(squareNums[i], xPos, yPos+5)
}

}





