var notes = ["c","c2","d","d2","e","f","f2","g","g2","a","a2","b"]


$(".key").on("click", function(){
	var index = $(".key").index(this);
	var sound = new Audio("/static/notes/"+notes[index]+".mp3");
	sound.play();
	
});

