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
	disable_buttons();
}

function update_display() {
	document.getElementById("output").innerHTML=potato;
	document.getElementById("farmer").innerHTML = farmer;
	document.getElementById("farm").innerHTML =farm;
	document.getElementById("factory").innerHTML = factory;
	document.getElementById("McDonalds").innerHTML = McDonalds;
	document.getElementById("spaceship").innerHTML = spaceship;
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
				factory++;
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
	disable_buttons();
}

// check whether user can afford buttons and disable/enable accordingly
function disable_buttons() {
	if( potato >= 50 ) {
		document.getElementById("farmerButton").disabled = false;
	}
	else {
		document.getElementById("farmerButton").disabled=true;
	}
	if(potato >= 300 ) {
		document.getElementById("farmButton").disabled = false;
	}
	else {
		document.getElementById("farmButton").disabled = true;
	}
	if( potato >= 1500 ) {
		document.getElementById("factoryButton").disabled = false;
	}
	else {
		document.getElementById("factoryButton").disabled = true;
	}
	if( potato >= 5000 ){
		document.getElementById("mcdonaldsButton").disabled = false;
	}
	else {
		document.getElementById("mcdonaldsButton").disabled = true;
	}
	if( potato >= 10000 ){
		document.getElementById("spaceshipButton").disabled = false;
	}
	else {
		document.getElementById("spaceshipButton").disabled = true;
	}
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
	disable_buttons();
}