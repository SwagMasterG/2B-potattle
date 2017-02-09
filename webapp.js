// JavaScript Document
// Score
var potato=0;
// Purchases
var farmer=0;
var farm=0;
var factory=0;
var McDonalds=0;
var Spaceship=0;

function potato_clicker(){
	potato++;
	update_display();
}

function update_display() {
	document.getElementById("output").innerHTML=potato;
	// change how many farmers there are
	// change how many 
}


function shop(sel) {
	switch(sel) {
		case "farmer":
			if(potato >= 50 ) {
				potato-=50;
				farmer++;
				update_display();
			}
			break;
		case "farm":
			if(potato >= 300 ) {
				potato-=300;
				farm++;
				update_display();
			}
			break;
		case "factory":
			if(potato >= 1500 ) {
				potato-=1500;
				farmer++;
				update_display();
			}
			break;
			case "McDonalds":
				if(potato >= 5000 ) {
					potato-=5000;
					McDonalds++;
					update_display();
				}
				break;
			case "Spaceship":
				if(potato >= 10000 ) {
					potato-=10000;
					Spaceship++;
					update_display();
				}
			break;
						
	}
}

// setInterval
var farmer= setInterval(Function() potato++ 1000)