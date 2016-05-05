//create an 18 button grid to create sounds
//assign a sound to each button
//make each button light up when selected
//make it so that each can use a key to create the sounds

var html5_audiotypes={
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
}

//soundclip stuff!

var mouseoversound1=createsoundbite("./piano/c3.mp3", "")
var mouseoversound2=createsoundbite("./piano/d3.mp3", "")
var mouseoversound3=createsoundbite("./piano/e3.mp3", "")
var mouseoversound4=createsoundbite("./piano/f3.mp3", "")
var mouseoversound5=createsoundbite("./piano/g3.mp3", "")
var mouseoversound6=createsoundbite("./piano/a3.mp3", "")
var mouseoversound7=createsoundbite("./piano/b3.mp3", "")
var mouseoversound8=createsoundbite("./piano/c4-middle-c.mp3", "")
var mouseoversound9=createsoundbite("./piano/d4.mp3", "")
var mouseoversound10=createsoundbite("./piano/e4.mp3", "")
var mouseoversound11=createsoundbite("./piano/f-4.mp3", "")
var mouseoversound12=createsoundbite("./piano/g4.mp3", "")
var mouseoversound13=createsoundbite("./piano/c5.mp3", "")
var mouseoversound14=createsoundbite("./piano/d5.mp3", "")
var mouseoversound15=createsoundbite("./piano/e5.mp3", "")
var mouseoversound16=createsoundbite("./piano/f5.mp3", "")
var mouseoversound17=createsoundbite("./piano/a5.mp3", "")
var mouseoversound18=createsoundbite("./piano/b5.mp3", "")

//BUTTONS!!!!!!!!!!!
function onmouseover1 () {
    mouseoversound1.playclip();
	}
function onmouseover2 () {
	  mouseoversound2.playclip();
	}
function onmouseover3 () {
    mouseoversound3.playclip();
	}
function onmouseover4 () {
    mouseoversound4.playclip();
	}
function onmouseover5 () {
    mouseoversound5.playclip();
	}
function onmouseover6 () {
    mouseoversound6.playclip();
	}
function onmouseover7 () {
    mouseoversound7.playclip();
	}
function onmouseover8 () {
    mouseoversound8.playclip();
				}
function onmouseover9 () {
		mouseoversound9.playclip();
}
function onmouseover10 () {
		mouseoversound10.playclip();
}
function onmouseover11 () {
		mouseoversound11.playclip();
}
function onmouseover12 () {
		mouseoversound12.playclip();
}
function onmouseover13 () {
		mouseoversound13.playclip();
}
function onmouseover14 () {
		mouseoversound14.playclip();
}
function onmouseover15 () {
		mouseoversound15.playclip();
}
function onmouseover16 () {
		mouseoversound16.playclip();
}
function onmouseover17 () {
		mouseoversound17.playclip();
}
function onmouseover18 () {
		mouseoversound18.playclip();
}
document.onkeydown = function (e)  {
    var keyCode = e.keyCode;
    if(keyCode == 65) {
        onmouseover1();
    }
		if(keyCode == 83){
			onmouseover2()
		}
		if(keyCode == 68){
			onmouseover3()
		}
		if(keyCode == 70){
			onmouseover4()
		}
		if(keyCode == 71){
			onmouseover5()
		}
		if(keyCode == 72){
			onmouseover6()
		}
		if(keyCode == 74){
			onmouseover7()
		}
		if(keyCode == 75){
			onmouseover8()
		}
		if(keyCode == 76){
			onmouseover9()
		}
		if(keyCode == 90){
			onmouseover10()
		}
		if(keyCode == 88){
			onmouseover11()
		}
		if(keyCode == 67){
			onmouseover12()
		}
		if(keyCode == 86){
			onmouseover13()
		}
		if(keyCode == 66){
			onmouseover14()
		}
		if(keyCode == 78){
			onmouseover15()
		}
		if(keyCode == 77){
			onmouseover16()
		}
		if(keyCode == 188){
			onmouseover17()
		}
		if(keyCode == 190){
			onmouseover18()
		}
};
