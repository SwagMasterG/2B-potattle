// JavaScript Document
var cookie=0;
var farmers = 0;

function cookie_clicker(){
	cookie++;
	document.getElementById("output").innerHTML=cookie;
}


function shop(sel) {
	switch(sel) {
		case "farmer":
			if(cookie >= 50 ) {
				cookie-=50;
				farmers++;
			}
		case "farm":
		case "factory":
	}
}

// setInterval