// JavaScript Document
// Score
var potato=0;
// Purchases
var chip=0;
var farmer=0;
var farm=0;
var factory=0;
var McDonalds=0;
var spaceship=0;
var generator=0;
var achieveArray=[];


function potato_clicker(){
	potato++;
	update_display();
	disable_buttons();
	save_cookies();
	achievements();
}

function update_display() {
	document.getElementById("output").innerHTML=potato;
	document.getElementById("chip").innerHTML=chip;
	document.getElementById("farmer").innerHTML = farmer;
	document.getElementById("farm").innerHTML =farm;
	document.getElementById("factory").innerHTML = factory;
	document.getElementById("McDonalds").innerHTML = McDonalds;
	document.getElementById("spaceship").innerHTML = spaceship;
	document.getElementById("generator").innerHTML=generator;
}

// Shop
function shop(sel) {
	switch(sel) {
		case "chip":
			if(potato >= 50) {
				potato-=50;
				chip++;
				
			}
			break;
		case "farmer":
			if(potato >= 200 ) {
				potato-=200;
				farmer++;
				
			}
			break;			
		case "farm":
			if(potato >= 500 ) {
				potato-=500;
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
				case "generator":
				if (potato >= 100000 ) {
					potato-=100000;
					generator++;
					
				}
				break;
								
	}
	update_display();
	disable_buttons();
}
// Achievements
function achievements(){
	// achievement #1
	if(potato >= 1000000 && searchAchievements(1) == false) {
		achieveArray.push(1);
		alert("Congrats! You are a Potato Master.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}
	if(chip >= 10 && searchAchievements(2) == false) {
		achieveArray.push(2);
		alert("Congrats! You are addicted to chips.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}
	if(farmer >= 10 && searchAchievements(3) == false) {
		achieveArray.push(3);
		alert("Congrats! Your workers love you.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}
	if(McDonalds >= 1 && searchAchievements(4) == false) {
		achieveArray.push(4);
		alert("Congrats! You joined the McDonalds fastfood chain.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}
	if(spaceship >= 1 && searchAchievements(5) == false) {
		achieveArray.push(5);
		alert("Congrats! You are space born.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}
	if(generator >= 1 && searchAchievements(6) == false) {
		achieveArray.push(6);
		alert("Congrats! You are addicted to potatoes.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}
	if(potato >= 1 && searchAchievements(7) == false) {
		achieveArray.push(7);
		alert("Congrats! You started the game.");
		//document.getElementById("image").innerHTML="<img src=images/bronze.png>";
	}





}

function searchAchievements(number) {
	for(var i = 0; i<achieveArray.length; i++ ) {
		if(achieveArray[i] == number) {
			return true;
		}
	}
	return false;
}


// check whether user can afford buttons and disable/enable accordingly
function disable_buttons() {
	if( potato >= 50) {
		document.getElementById("chipButton").disabled = false;
	}
	else {
		document.getElementById("chipButton").disabled = true;
	}
	if( potato >= 200 ) {
		document.getElementById("farmerButton").disabled = false;
	}
	else {
		document.getElementById("farmerButton").disabled=true;
	}
	if(potato >= 500 ) {
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
	if( potato >= 15000 ){
		document.getElementById("increaseButton").disabled = false;
	}
	else {
		document.getElementById("increaseButton").disabled = true;
	}
	if( potato >= 100000 ){
		document.getElementById("generatorButton").disabled = false;
	}
	else {
		document.getElementById("generatorButton").disabled = true;
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
	bonus += chip * 1;
	bonus += farmer * 2;
	bonus += farm * 3;
	bonus += factory * 5;
	bonus += McDonalds * 7;
	bonus += spaceship * 10;
	bonus += generator * 13;

	potato += bonus;
	update_display();
	disable_buttons();
	save_cookies();
	achievements();
}
// cookies
function save_cookies() {
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	var achieveStr = "";

	// key=value
	document.cookie = "chip=" + chip + ";" + expires;
	document.cookie = "potato=" + potato + ";" + expires;
	document.cookie = "farmer=" + farmer + ";" + expires;
	document.cookie = "farm=" + farm + ";" + expires;
	document.cookie = "factory=" + factory + ";" + expires;
	document.cookie = "McDonalds=" + McDonalds + ";" + expires;
	document.cookie = "spaceship=" + spaceship + ";" + expires;
	document.cookie = "generator=" + generator + ";" + expires;
	for(var i = 0; i<achieveArray.length; i ++) {
		if( i == (achieveArray.length-1)) {
			achieveStr += String(achieveArray[i]);
		}
		else {
			achieveStr += String(achieveArray[i]) + ":";
		}
	}
	
	document.cookie = "achievements=" + achieveStr + ";" + expires;


}



window.onload = load_cookies;

function load_cookies() {
	var str = document.cookie;
	// -> "name=Joe; score=102; achievements=1,2,3,4,5"
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
				potato = Number(value); // "5"
				break;
			case "chip":
				chip = Number(value);
				break;
			case "farmer":
				farmer = Number(value);
				break;
			case "farm":
				farm = Number(value);
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
			case "generator":
				generator = Number(value);
				break;
			case "achievements":
				// "2:5:1"
				var tempArray = value.split(":").map(Number);
				achieveArray = tempArray;
				break;

		}
		
	}	
}
// Restart Game
function resetGame() {
	var c = confirm("Are you sure you want to restart? Doing so will lose all your progress.");
	if(c) {
		potato=0;
		chip=0;
		farmer=0;
		farm=0;
		factory=0;
		McDonalds=0;
		spaceship=0;
		generator=0;
		update_display();
		save_cookies();
	}
}
