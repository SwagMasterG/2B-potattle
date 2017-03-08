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
	save_cookies();
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
	if( potato > 0 ){
		document.getElementById("resetButton").disabled = false;
	}
	else {
		document.getElementById("resetButton").disabled = true;
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
	save_cookies();
}
// cookies
function save_cookies() {
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();

	// key=value
	document.cookie = "potato=" + potato + ";" + expires;
	document.cookie = "farmer=" + farmer + ";" + expires;
	document.cookie = "farm=" + farm + ";" + expires;
	document.cookie = "factory=" + factory + ";" + expires;
	document.cookie = "McDonalds=" + McDonalds + ";" + expires;
	document.cookie = "spaceship=" + spaceship + ";" + expires;



}



window.onload = load_cookies;

function load_cookies() {
	var str = document.cookie;
	// -> "name=Joe; score=102;"
	// split() it into an array:
	var cookieArray = str.split("; ")
	// -> ["name=Joe", "score=102"]
	// Loop through each item in the array:
	for( var i = 0; cookieArray.length; i++ ) {
		// split each item into a temporary array:
		var pairArray = cookieArray[i].split("=");
		// -> ["potato", "8"]
		
		// Extract the key-value pair
		var key = pairArray[0];
		// -> "name"
		var value = pairArray[1];
		// -> "Joe"
		
		// Check which key you have using an if or switch
		switch(key) {
			case "potato":
				potato = Number(value);
				break;
			case "farmer":
				farmer = Number(value);
				break;
			case "farm":
				farmer = Number(value);
				break;
			case "factory":
				factory = Number(value);
				break;
			case "McDonalds":
				McDonalds = Number(value);
				break;
			case "spaceship":
				spaceship = Number(value);
				break;

		}
		
	}	
}

function resetGame() {
	var c = confirm("Are you sure you want to restart? Doing so will lose all your progress.");
	if(c) {
		potato=0;
		farmer=0;
		farm=0;
		factory=0;
		McDonalds=0;
		spaceship=0;
		update_display();
		save_cookies();
	}
}