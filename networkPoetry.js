
var canvas;

function setup(){
	// canvas = 
	createCanvas(windowWidth, windowHeight);
	//canvas.style('z-index', '-1');
//	canvas.position(0,0);
	background(255);
}

function draw(){

}

function mouseMoved(){
		background(255);
		 	
		 	// let r = map(mouseX, 0, width, 0, 255);
		 	// let g = map(mouseY, 0, height, 0, 255);
		 	// let b = random(0, 255);
			fill(255);

	var ex = random(windowWidth);
	var why = random(windowHeight);
	var ex2 = random(windowWidth);
	var why2 = random(windowHeight);
	var ex3 = random(windowWidth);
	var why3 = random(windowHeight);
	var ex4 = random(windowWidth);
	var why4 = random(windowHeight);
	var ex5 = random(windowWidth);
	var why5 = random(windowHeight);
	var ex6 = random(windowWidth);
	var why6 = random(windowHeight);
	var ex7 = random(windowWidth);
	var why7 = random(windowHeight);
	var ex8 = random(windowWidth);
	var why8 = random(windowHeight);

	line(mouseX, mouseY, ex, why);
	line(mouseX, mouseY, ex2, why2);
	line(mouseX, mouseY, ex3, why3);
	line(mouseX, mouseY, ex4, why4);
	line(mouseX, mouseY, ex5, why5);
	line(mouseX, mouseY, ex6, why6);
	line(mouseX, mouseY, ex7, why7);
	line(mouseX, mouseY, ex8, why8);
	line(ex, why, ex2, why2);
	line(ex, why, ex3, why3);
	line(ex, why, ex4, why4);
	line(ex, why, ex5, why5);
	line(ex, why, ex6, why6);
	line(ex, why, ex7, why7);
	line(ex, why, ex8, why8);
	line(ex2, why2, ex3, why3);
	line(ex4, why4, ex3, why3);
	line(ex5, why5, ex3, why3);
	line(ex6, why6, ex3, why3);
	line(ex7, why7, ex3, why3);
	line(ex8, why8, ex3, why3);
	line(ex2, why2, ex4, why4);
	line(ex5, why5, ex4, why4);
	line(ex6, why6, ex4, why4);
	line(ex7, why7, ex4, why4);
	//open
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));

	line(random(0, windowWidth), random(0, windowHeight), ex4, why4);
	line(ex, why, random(0, windowWidth), random(0, windowHeight));
	line(ex2, why2, random(0, windowWidth), random(0, windowHeight));
	line(random(0, windowWidth), random(0, windowHeight), ex3, why3);
	line(ex8, why8, random(0, windowWidth), random(0, windowHeight));
	line(ex5, why5, random(0, windowWidth), random(0, windowHeight));
	line(ex6, why6, random(0, windowWidth), random(0, windowHeight));
	line(ex7, why7, random(0, windowWidth), random(0, windowHeight));
	ellipse(ex, why, 60, 60);
	ellipse(ex2, why2, 60, 60);
	ellipse(ex3, why3, 60, 60);
	ellipse(ex4, why4, 60, 60);
	ellipse(ex5, why5, 60, 60);
	ellipse(ex6, why6, 60, 60);
	ellipse(ex7, why7, 60, 60);
	ellipse(ex8, why8, 60, 60);
	ellipse(mouseX, mouseY, 60, 60);

	var x1 =[10, 100, 200, 300, 400, 500, 600, 700, 800, 900, 600, 1100, 800, 80, 190, 1250];
	var x2 =[110, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 700, 1200, 900, 180, 290, 1350];
	var y1 =[400, 110, 300, 540, 130, 450, 320, 500, 690, 300, 400, 500, 100, 470, 690, 150];
	var y2 =[500, 210, 400, 640, 230, 550, 420, 600, 790, 400, 500, 600, 200, 570, 790, 250];


	//triggers based on LOCATION

	if(x1[0] < mouseX && mouseX < x2[0] && y1[0] < mouseY && mouseY < y2[0]){
		// background(0);	
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);
		// text('something',random(0, windowWidth), random(0, windowHeight), 500, 500);

	}
	if(x1[1] < mouseX && mouseX < x2[1] && y1[1] < mouseY && mouseY < y2[1]){
		// background(0);	
		// text('something', 200, 200);
	}
		if(x1[2] < mouseX && mouseX < x2[2] && y1[2] < mouseY && mouseY < y2[2]){
// 	push();
// 	fill(0);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// 		text('anything',random(0, windowWidth), random(0, windowHeight), 500, 500);
// pull();
	}
	if(x1[3] < mouseX && mouseX < x2[3] && y1[3] < mouseY && mouseY < y2[3]){
		/*push();
		background(0);	
		fill(0);
		stroke(255);
	line(mouseX, mouseY, ex, why);
	line(mouseX, mouseY, ex2, why2);
	line(mouseX, mouseY, ex3, why3);
	line(mouseX, mouseY, ex4, why4);
	line(mouseX, mouseY, ex5, why5);
	line(mouseX, mouseY, ex6, why6);
	line(mouseX, mouseY, ex7, why7);
	line(mouseX, mouseY, ex8, why8);
	line(ex, why, ex2, why2);
	line(ex, why, ex3, why3);
	line(ex, why, ex4, why4);
	line(ex, why, ex5, why5);
	line(ex, why, ex6, why6);
	line(ex, why, ex7, why7);
	line(ex, why, ex8, why8);
	line(ex2, why2, ex3, why3);
	line(ex4, why4, ex3, why3);
	line(ex5, why5, ex3, why3);
	line(ex6, why6, ex3, why3);
	line(ex7, why7, ex3, why3);
	line(ex8, why8, ex3, why3);
	line(ex2, why2, ex4, why4);
	line(ex5, why5, ex4, why4);
	line(ex6, why6, ex4, why4);
	line(ex7, why7, ex4, why4);
	//open lines
		line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
	line(random(0, windowWidth), random(0, windowHeight), ex2, why2);
	line(ex, why, random(0, windowWidth), random(0, windowHeight));
	line(random(0, windowWidth), random(0, windowHeight), ex4, why4);
	line(ex, why, random(0, windowWidth), random(0, windowHeight));
	line(random(0, windowWidth), random(0, windowHeight), ex6, why6);
	line(random(0, windowWidth), random(0, windowHeight), ex7, why7);
	line(random(0, windowWidth), random(0, windowHeight), ex8, why8);
	line(ex2, why2, random(0, windowWidth), random(0, windowHeight));
	line(random(0, windowWidth), random(0, windowHeight), ex3, why3);
	line(ex5, why5, random(0, windowWidth), random(0, windowHeight));
	line(ex6, why6, random(0, windowWidth), random(0, windowHeight));
	line(ex7, why7, random(0, windowWidth), random(0, windowHeight));
	line(ex8, why8, random(0, windowWidth), random(0, windowHeight));
	line(ex2, why2, random(0, windowWidth), random(0, windowHeight));
	line(ex5, why5, random(0, windowWidth), random(0, windowHeight));
	line(ex6, why6, random(0, windowWidth), random(0, windowHeight));
	line(ex7, why7, random(0, windowWidth), random(0, windowHeight));
	ellipse(ex, why, 60, 60);
	ellipse(ex2, why2, 60, 60);
	ellipse(ex3, why3, 60, 60);
	ellipse(ex4, why4, 60, 60);
	ellipse(ex5, why5, 60, 60);
	ellipse(ex6, why6, 60, 60);
	ellipse(ex7, why7, 60, 60);
	ellipse(ex8, why8, 60, 60);
	ellipse(mouseX, mouseY, 60, 60);
	pull();*/

	}


	}
	if(x1[8] < mouseX && mouseX < x2[8] && y1[8] < mouseY && mouseY < y2[8]){
		background(0);	
		text('create', ex, why, 100, 100);
		text('create', ex2, why2, 100, 100);
		text('destroy', ex3, why3, 100, 100);
		text('destroy', ex4, why4, 100, 100);
		push();
		fill(30);
		text('ceaselessly', ex5, why5, 100, 100);
		pull();
	}
	if(x1[9] < mouseX && mouseX < x2[9] && y1[9] < mouseY && mouseY < y2[9]){
		push();
		fill(0);
		text('Do I need this to be well?"', ex, why, 200, 200);
		pull();
	}
	if(x1[10] < mouseX && mouseX < x2[10] && y1[10] < mouseY && mouseY < y2[10]){
		background(0);	
		text('Trying to keep me logged in with these games.', 200, 200);
	}
		if(x1[11] < mouseX && mouseX < x2[11] && y1[11] < mouseY && mouseY < y2[11]){
		background(0);	
		text('Maybe I do need to travel here...', 200, 200);
}
		if(x1[12] < mouseX && mouseX < x2[12] && y1[12] < mouseY && mouseY < y2[12]){
		background(0);	
		text('I need this food now.', 200, 200);
	}
		if(x1[13] < mouseX && mouseX < x2[13] && y1[13] < mouseY && mouseY < y2[13]){
		background(0);	
		text('Imagine if adulting was made this easy.', 200, 200);
	}
		if(x1[14] < mouseX && mouseX < x2[19] && y1[19] < mouseY && mouseY < y2[19]){
		//background(0);	
		//text('something', 200, 200);
	}
	
	/* rect(x1[0], y1[0], 30, 30);

	rect(x1[1], y1[1], 30, 30);
	rect(x1[2], y1[2], 30, 30);
	rect(x1[3], y1[3], 30, 30);
	rect(x1[4], y1[4], 30, 30);
	rect(x1[5], y1[5], 30, 30);
	rect(x1[6], y1[6], 30, 30);
	rect(x1[7], y1[7], 30, 30);
	rect(x1[8], y1[8], 30, 30);
	rect(x1[9], y1[9], 30, 30);
	rect(x1[10], y1[10], 30, 30);
	rect(x1[11], y1[11], 30, 30);
	rect(x1[12], y1[12], 30, 30);
	rect(x1[13], y1[13], 30, 30);
	rect(x1[14], y1[14], 30, 30);
	rect(x1[15], y1[15], 30, 30);
	rect(x1[16], y1[16], 30, 30);
	rect(x1[17], y1[17], 30, 30);
	rect(x1[18], y1[18], 30, 30); */






function mouseDragged(){
		/* 	
			let r = map(mouseX, 0, width, 0, 255);
		 	let g = map(mouseY, 0, height, 0, 255);
		 	let b = random(0, 255);
			fill(r, g, 0);
			*/
		 

	var ex = random(windowWidth);
	var why = random(windowHeight);
	var ex2 = random(windowWidth);
	var why2 = random(windowHeight);
	var ex3 = random(windowWidth);
	var why3 = random(windowHeight);
	var ex4 = random(windowWidth);
	var why4 = random(windowHeight);
	var ex5 = random(windowWidth);
	var why5 = random(windowHeight);
	var ex6 = random(windowWidth);
	var why6 = random(windowHeight);
	var ex7 = random(windowWidth);
	var why7 = random(windowHeight);
	var ex8 = random(windowWidth);
	var why8 = random(windowHeight);



	line(mouseX, mouseY, ex, why);
	line(mouseX, mouseY, ex2, why2);
	line(mouseX, mouseY, ex3, why3);
	line(mouseX, mouseY, ex4, why4);
	line(mouseX, mouseY, ex5, why5);
	line(mouseX, mouseY, ex6, why6);
	line(mouseX, mouseY, ex7, why7);
	line(mouseX, mouseY, ex8, why8);
	line(ex, why, ex2, why2);
	line(ex, why, ex3, why3);
	line(ex, why, ex4, why4);
	line(ex, why, ex5, why5);
	line(ex, why, ex6, why6);
	line(ex, why, ex7, why7);
	line(ex, why, ex8, why8);
	line(ex2, why2, ex3, why3);
	line(ex4, why4, ex3, why3);
	line(ex5, why5, ex3, why3);
	line(ex6, why6, ex3, why3);
	line(ex7, why7, ex3, why3);
	line(ex8, why8, ex3, why3);
	line(ex2, why2, ex4, why4);
	line(ex5, why5, ex4, why4);
	line(ex6, why6, ex4, why4);
	line(ex7, why7, ex4, why4);
	ellipse(ex, why, 60, 60);
	ellipse(ex2, why2, 60, 60);
	ellipse(ex3, why3, 60, 60);
	ellipse(ex4, why4, 60, 60);
	ellipse(ex5, why5, 60, 60);
	ellipse(ex6, why6, 60, 60);
	ellipse(ex7, why7, 60, 60);
	ellipse(ex8, why8, 60, 60);
	ellipse(mouseX, mouseY, 60, 60);

	push();
	fill(255);
	text('the universe, appearing like a microatom, is covered by layers of each element, each layer ten times the thickness of the previous layer. and multitudes of such layers are clustered together.', 400, 400, 200, 400);
	pull();
	

	

	/*<-----!!!!!!!! MOUSE ON NODES ?????!!!!!!!!----->



if(dist(mouseX, mouseY, ex, why) <= 30 ){
		nextScreen();


	}
		if(dist(mouseX, mouseY, ex2, why2) <= 30 ){
		nextScreen();

	}	if(dist(mouseX, mouseY, ex3, why3) <= 30 ){
		nextScreen();
	}	if(dist(mouseX, mouseY, ex4, why4) <= 30 ){
		nextScreen();
	}	if(dist(mouseX, mouseY, ex5, why5) <= 30){

		nextScreen();
	}	if(dist(mouseX, mouseY, ex6, why6) <= 30){

		nextScreen();
	}	if(dist(mouseX, mouseY, ex7, why7) <= 30 ){

		nextScreen();
	}	if(dist(mouseX, mouseY, ex8, why8) <= 30 ){
		nextScreen();
		}
		*/


}


function keyPressed(){
	if(key === 's'){
		save('net.jpg');
	}
}


function windowResized(){
resizeCanvas(windowWidth, windowHeight);

}

// function nextScreen(){
//  background(0);
//  stroke(0);
//  //text("hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha");


// }
