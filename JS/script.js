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

var mouseoversound1=createsoundbite("./piano/a3.mp3", "")
var mouseoversound2=createsoundbite("./piano/b3.mp3", "")
var mouseoversound3=createsoundbite("./piano/c3.mp3", "")
var mouseoversound4=createsoundbite("./piano/d3.mp3", "")
var mouseoversound5=createsoundbite("./piano/e3.mp3", "")
var mouseoversound6=createsoundbite("./piano/f3.mp3", "")
var mouseoversound7=createsoundbite("./piano/g3.mp3", "")
var mouseoversound8=createsoundbite("./piano/a4.mp3", "")
var mouseoversound9=createsoundbite("./piano/b4.mp3", "")
var mouseoversound10=createsoundbite("./piano/c4-middle-c.mp3", "")
var mouseoversound11=createsoundbite("./piano/d4.mp3", "")
var mouseoversound12=createsoundbite("./piano/e4.mp3", "")
var mouseoversound13=createsoundbite("./piano/f-4.mp3", "")
var mouseoversound14=createsoundbite("./piano/g4.mp3", "")
var mouseoversound15=createsoundbite("./piano/a5.mp3", "")
var mouseoversound16=createsoundbite("./piano/b5.mp3", "")
var mouseoversound17=createsoundbite("./piano/c5.mp3", "")
var mouseoversound18=createsoundbite("./piano/d5.mp3", "")

function onmouseover () {
    mouseoversound1.playclip();
}
document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(keyCode == 65) {
        onmouseover();
    }
};
