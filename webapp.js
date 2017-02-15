// JavaScript Document
// Score
var potato=0;
// Purchases
var farmer=0;
var farm=0;
var factory=0;
var McDonalds=0;
var spaceship=0;

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
			}
			break;
		case "farm":
			if(potato >= 300 ) {
				potato-=300;
				farm++;
			}
			break;
		case "factory":
			if(potato >= 1500 ) {
				potato-=1500;
				farmer++;
			}
			break;
			case "McDonalds":
				if(potato >= 5000 ) {
					potato-=5000;
					McDonalds++;
				}
				break;
				case "spaceship":
				if(potato >= 10000 ) {
					potato-=10000;
					spaceship++;
				}
				break;
				
	}
	update_display();
}

// setInterval
setInterval(function() {
	bonusCalc();
},1000);

function bonusCalc() {
	// calculate bonus
	var bonus = 0;
	bonus += farmer * 1;
	bonus += farm * 3;
	bonus += factory * 5;
	bonus += McDonalds * 8;
	bonus += spaceship * 15;

	potato += bonus;
	update_display();

}