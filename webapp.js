// JavaScript Document
var potato=0;
var farmer=0;

function potato_clicker(){
	potato++;
	document.getElementById("output").innerHTML=potato;
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
			break;
		case "factory":
			break;
	}
}

// setInterval