let hotSpot1X = 400
let hotSpot1Y = 200

let hotSpot2X = 900
let hotSpot2Y = 375

let hotSpot3X = 850
let hotSpot3Y = 200

let hotSpot4X = 600
let hotSpot4Y = 400

let adobeX
let adobeY
let adobe

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(121, 122, 122);
}

function draw(){
}

function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
  	background(121, 122, 122)
}

function preload (){
	adobe = loadImage('images/adobe.png')
	calcium = loadImage('images/calcium.png')
	candy = loadImage('images/candy.png')
	coxB = loadImage('images/coxB.png')
	disney = loadImage ('images/disney.png')
	dove = loadImage('images/dove.png')
	kateSpade = loadImage('images/kateSpade.png')
	nuevo = loadImage('images/nuevo.png')
	oofos = loadImage('images/oofos.png')
	papasF = loadImage ('images/papasF.png')
	ritz = loadImage('images/ritz.png')
	shoes = loadImage('images/shoes.png')
	regime = loadImage('images/regime.png')
	tmobile = loadImage('images/tmobile.png')
	usaa = loadImage('images/usaa.png')
	wix = loadImage('images/wix.png')
	barbie = loadImage('images/barbie.png')
	cider = loadImage('images/cider.png')
	nell = loadImage ('images/nell.png')
	pattern = loadImage ('images/pattern.png')
	rings = loadImage('images/rings.png')
	room = loadImage ('images/room.png')
	skims = loadImage ('images/skims.png')
	wander = loadImage ('images/wander.png')
	zendaya = loadImage ('images/zendaya.png')
}

function mouseMoved(){
	fill(57, 126, 237, 120);

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

	fill(57, 126, 237);
	ellipse(mouseX, mouseY, 60, 60);

	if(dist(mouseX, mouseY, hotSpot1X, hotSpot1Y)< 75){
		background(252, 210, 234)
		fill(0)
		textSize(30)
		text("Sometimes the internet does convince me that I need everything.", 200, 150)
		textSize(17) 
		text("Does it know perfume and hair products are the first things I buy?", 880, 350)
		textSize(15)
		text ("I have the Curl Elongator from Pattern...", 900, 380)
		text ("From that one time I looked on Aldo for platforms.", 100, 315)
		text ("Do I have a $200 cart at Cider? Yes.", 150, 425)
		text ("No, I don't want to talk about it right now.", 150, 440)
		image (kateSpade, 550, 200, 300, 600)
		image (cider, 150, 450, 400, 300)
		image (pattern, 950, 400, 300, 100)
		image (shoes, 100, 200, 400, 100)
		image (rings, 900, 500, 400, 300 )
		image (skims, 900, 200, 200, 100)
	}
	if(dist(mouseX, mouseY, hotSpot2X, hotSpot2Y)< 75){
		background (80, 212, 111)
		fill (0)
		textSize(25)
		text("I feel like Google sees my gaming and creative habits as its personal streaming channel.", 40, 100)
		text ("...but then it suggests my WiFi, as if to say 'You should have this instead.'", 40, 140)
		textSize (13)
		text ("I played Papa's Freezeria so much that I downloaded Mocharia on my iPad.",999, 235)
		text ("What does 5G internet have to do with golf...?", 65, 575)
		text ("The way I have not played Candy Crush in years.", 680, 240)
		text ("I did like using Wix over the summer with my camp kids.", 550, 590)
		text ("I almost invested in a Premium Plan.", 880, 590)
		image (adobe, 150, 200, 200, 50)
		image (papasF, 999, 270, 200, 285)
		image (wix, 550, 600, 500, 100)
		image (tmobile, 65, 350, 450, 200)
		image (candy, 700, 250, 250, 250)
	}
	if(dist(mouseX, mouseY, hotSpot3X, hotSpot3Y)<75){
		background (245, 226, 122)
		fill(0)
		textSize (32)
		text("Do you ever wonder what Google watches in its free time?", 250, 475)
		textSize (16)
		text ("I think all of the Internet is obsessed with Challengers.", 700, 90)
		text ("The same way Barbie swept the nation.", 200, 680)
		text ("I've never heard of Ms. Nell but how much do you want ", 50, 270)
		text ("to bet that Google knows my love for period pieces...?", 50, 285)
		text ("Disney is like Google.", 1000, 510)
		text ("They have their hands in everything.", 1000, 525)
		text("and we're not paying attention", 1000, 540)
		image (zendaya, 700, 100, 400, 300)
		image (regime, 300, 300, 300, 100)
		image (nell, 50, 50, 300, 200)
		image (disney, 900, 500, 100, 300)
		image (barbie, 200, 500, 500, 150)
	}
	if(dist(mouseX, mouseY, hotSpot4X, hotSpot4Y)<75){
		background (145, 85, 32)
		fill (0)
		textSize(25)
		text("As I age, this is what I'll need... Supplements and vacations.", 100, 160)
		text ("I thought calcium after a certain age made your bones brittle...or is that from milk.", 100, 20)
		text ("Google feeds my vacation delusions.", 820, 280)
		text("Like pushing this pretty house on my feed yelling",830, 305) 
		text("'Stay Here!'", 840, 330)
		image (wander, 860, 350, 500, 400)
		image (room, 200, 400, 350, 350)
		image (nuevo, 300, 200, 500, 250)
		image (calcium, 150, 25, 400, 100) 

	}
}











