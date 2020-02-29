var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	var buttons = document.querySelectorAll("button");
	buttons[0].innerHTML = '<img src="images/playbutton.png" alt="">Play Video';
	buttons[1].innerHTML = '<img src="images/pausebutton.png" alt="">Pause Video';
	//image designed by Runa Morioka 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume * 100 +"%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate * 0.8;
  	console.log("Speed is "+ video.playbackRate );
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if (video.ended){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	var mute_video = document.querySelector("#mute");
  	if (video.muted){
		mute_video.innerHTML="Mute";
		video.muted = false;
  		console.log("Changing to Unmuted");
  	}
  	else{
		mute_video.innerHTML="Unmute";
		video.muted = true;
    	console.log("Changing to Muted");
  	}
}

function changeVolume() {
	var volume = document.querySelector('#volumeSlider').value; 
	video.volume = volume/100; 
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"; 
	console.log("Volume is " + volume);
}
       
function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
